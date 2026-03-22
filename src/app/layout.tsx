import type { Metadata } from "next";
import { seoConfig, Header } from "@/shared";

import "./styles/global.scss";

export const metadata: Metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body id="body">
        <div className="wrapper">
          <Header />

          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
