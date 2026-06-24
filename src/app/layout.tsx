import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

import {
  seoConfig,
  PreloaderProvider,
  personSchema,
  websiteSchema,
} from "@/shared";

import { QueryProvider } from "@/shared/providers/QueryProvider/QueryProvider";
import { ModalProvider } from "@/shared/providers/ModalProvider/ModalProvider";
// import { ScrollTop } from "@/shared";

import "./styles/global.scss";
import { ScrollTop } from "@/shared/ui/scrollTop/ScrollTop";

export const metadata: Metadata = seoConfig;

const combinedSchema = [personSchema, websiteSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-RU">
      <head>
        <meta name="theme-color" content="#28212f" />
        <meta name="google-site-verification" content="ht_6l17oLgFr6PE0EX6qDpQe_6M5cyTvQvEiPiBx9fw" />
        <link
          rel="preload"
          href="/fonts/digital_dreams_kew_narrow.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/pt_sans_regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* <style>
          {`
    body:hover {
      border-image: url("https://nikita-frontend.goatcounter.com/count?p=/");
    }
  `}
        </style> */}
      </head>
      <body id="body">
        <QueryProvider>
          <PreloaderProvider>
            <ModalProvider>{children}</ModalProvider>

            <Toaster position="top-right" />

            <ScrollTop />

            <div id="modal-root"></div>
          </PreloaderProvider>
        </QueryProvider>

        <Script
          id="schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(combinedSchema),
          }}
        />

        <Script
          id="goatcounter"
          data-goatcounter="https://nikita-frontend.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></Script>
      </body>
    </html>
  );
}
