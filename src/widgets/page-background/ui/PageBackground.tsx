"use client";

import LiquidEther from "@/shared/ui/animations/LiquidEther/LiquidEther";
import {
  LiquidEtherConfig,
  ImgBgConfig,
} from "@/shared/config/animations/types";

import Image from "next/image";

import scss from "./PageBackground.module.scss";

interface PageBackgroundProps {
  config: LiquidEtherConfig;
  imageConfig: ImgBgConfig;
  children?: React.ReactNode;
}

export const PageBackground = ({
  config,
  imageConfig,
  children,
}: PageBackgroundProps) => {
  return (
    <div className={scss["page-background"]}>
      <div className={scss["page-background__box"]}>
        {/* <LiquidEther {...config} /> */}
      </div>

      <div
        className={`${scss["page-background__img"]}`}
        key={imageConfig.src.src}
      >
        <Image
          src={imageConfig.src}
          alt={imageConfig.alt}
        />
      </div>

      <div className={scss["page-background__inner"]}>{children}</div>
    </div>
  );
};
