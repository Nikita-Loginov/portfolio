"use client";

import { usePathname } from "next/navigation";

import { Header, Footer, ImgsBg, LiquidConfigs } from "@/shared";
import { PageBackground } from "@/widgets/page-background";

export default function WithBackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const liquidConfig = LiquidConfigs.find((liquidConfig) => liquidConfig.path === pathname) || LiquidConfigs[0];
  const imageConfig =
    ImgsBg.find((imgBgConfig) => imgBgConfig.path === pathname) || ImgsBg[0];

  return (
    <div className="wrapper">
      <Header />

      <PageBackground config={liquidConfig} imageConfig={imageConfig} />

      <main className="main">{children}</main>

      <Footer />
    </div>
  );
}
