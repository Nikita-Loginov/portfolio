"use client";

import { useEffect, useState } from "react";

// import LiquidEther from "@/shared/ui/animations/LiquidEther/LiquidEther";
import SplashCursor from "@/shared/ui/animations/SplashCursor/SplashCursor";
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
  const [isMobile, setIsMobile] = useState(false);

  const gradientStyle = {
    "--gradient-first": `
      radial-gradient(
        circle at ${config.gradient.first.position},
        ${config.gradient.first.color} 0%,
        ${config.gradient.first.secondColor} 20%,
        transparent 45%
      )
    `,
  
    "--gradient-second": `
      radial-gradient(
        circle at ${config.gradient.second.position},
        ${config.gradient.second.color} 0%,
        ${config.gradient.second.secondColor} 22%,
        transparent 46%
      )
    `,
  } as React.CSSProperties;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 479px)");

    const update = () => {
      setIsMobile(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  const imageSrc =
    isMobile && imageConfig.mediaSrc
      ? imageConfig.mediaSrc
      : imageConfig.src;

  return (
    <div className={scss["page-background"]} style={gradientStyle}>
      <div className={scss["page-background__box"]}>
        <SplashCursor />
        {/* <LiquidEther {...config} /> */}
      </div>

      {/* <div
        className={scss["page-background__img"]}
        key={imageSrc.src}
      >
        <Image
          src={imageSrc}
          alt={imageConfig.alt}
        />
      </div> */}

      <div className={scss["page-background__inner"]}>
        {children}
      </div>
    </div>
  );
};
