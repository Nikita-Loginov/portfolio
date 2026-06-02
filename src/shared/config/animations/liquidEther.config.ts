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
    colors: ["#d4bc0d"],
    autoSpeed: 1.0,
    isViscous: true,
  },
  {
    path: '/skills',
    colors: ["#0cc288"],
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
  },
  {
    path: '/skills',
    src: Images.BackgroundSkills,
    alt: 'Фотография фона для страницы "Мои навыки"',
  },
  {
    path: '/contacts',
    src: Images.BackgroundContacts,
    alt: 'Фотография фона для страницы "Мои контакты"',
  },
  {
    path: '/experience',
    src: Images.BackgroundExperience,
    alt: 'Фотография фона для страницы "Мой опыт"',
  },
  {
    path: '/projects',
    src: Images.BackgroundProjects,
    alt: 'Фотография фона для страницы "Мои проекты"',
  }
]
