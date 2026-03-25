import { LiquidEtherConfig, ImgBgConfig } from "./types";
import { Images } from "@/shared/images";

export const LiquidConfigs = [
  {
    path: '/',
    colors: ["#6366f1"],
    autoSpeed: 1.0,
    isViscous: true,
  },
  {
    path: '/about',
    colors: ["#8f0ee6"],
    autoSpeed: 1.0,
    isViscous: true,
  }
]

export const ImgsBg: ImgBgConfig[] = [
  {
    path: '/',
    src: Images.BackgroundHome,
    alt: "Фотография фона для главной страницы",
  },
  {
    path: '/about',
    src: Images.BackgroundAbout,
    alt: 'Фотография фона для страницы "О нас"',
  }
]
