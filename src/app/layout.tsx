import type { Metadata } from "next";

import { seoConfig, PreloaderProvider } from "@/shared";

import "./styles/global.scss";

export const metadata: Metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
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
      </head>
      <body id="body">
        <PreloaderProvider>{children}</PreloaderProvider>
      </body>
    </html>
  );
}
