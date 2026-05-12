"use client";

import { Header, Footer } from "@/shared";

export default function ErrorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className={`wrapper`}>
      <Header />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}
