import { LiquidEtherConfig, ImgBgConfig } from "./types";
import { Images } from "@/shared/images";


export const homePageLiquidConfig: LiquidEtherConfig = {
  colors: ["#6366f1"],
  autoSpeed: 1.0,
  isViscous: true,
};

export const homeImgBg : ImgBgConfig = {
  src: Images.BackgroundHome,
  alt: 'Фотография фона для главной страницы'
}
