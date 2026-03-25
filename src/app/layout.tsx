import type { Metadata } from "next";

import {
  seoConfig,
} from "@/shared";

import "./styles/global.scss";

export const metadata: Metadata = seoConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body id="body">{children}</body>
    </html>
  );
}
