import { LiquidEtherConfig, ImgBgConfig } from "./types";
import { Images } from "@/shared/images";

export const LiquidConfigs = [
  {
    path: "/",
    gradient: {
      first: {
        color: "rgba(61, 76, 255, 0.9)",
        secondColor: "rgba(25, 35, 120, 0.5)",
        position: "20% 50%",
      },

      second: {
        color: "rgba(70, 90, 255, 0.95)",
        secondColor: "rgba(25, 35, 120, 0.5)",
        position: "75% 30%",
      },
    },
  },
  {
    path: "/about",
    gradient: {
      first: {
        color: "rgba(210, 130, 45, 0.9)",
        secondColor: "rgba(160, 90, 25, 0.45)",
        position: "15% 40%",
      },
  
      second: {
        color: "rgba(230, 150, 60, 0.85)",
        secondColor: "rgba(170, 100, 35, 0.4)",
        position: "80% 20%",
      },
    },
  },
  {
    path: "/skills",
    gradient: {
      first: {
        color: "rgba(45, 92, 57, 0.9)",
        secondColor: "rgba(42, 92, 57, 0.5)",
        position: "15% 40%",
      },

      second: {
        color: "rgba(42, 92, 57, 0.9)",
        secondColor: "rgba(42, 92, 57, 0.5)",
        position: "80% 20%",
      },
    },
  },
  {
    path: "/experience",
    gradient: {
      first: {
        color: "rgba(66, 13, 94, 0.9)",
        secondColor: "rgba(66, 13, 94, 0.5)",
        position: "15% 40%",
      },

      second: {
        color: "rgba(66, 13, 94, 0.9)",
        secondColor: "rgba(66, 13, 94, 0.5)",
        position: "80% 20%",
      },
    },
  },
  {
    path: "/projects",
    gradient: {
      first: {
        color: "rgba(31, 76, 84, 0.9)",
        secondColor: "rgba(31, 76, 84, 0.9)",
        position: "15% 40%",
      },

      second: {
        color: "rgba(31, 76, 84, 0.9)",
        secondColor: "rgba(31, 76, 84, 0.99)",
        position: "80% 20%",
      },
    },
  },
  {
    path: "/contacts",
    gradient: {
      first: {
        color: "rgba(49, 13, 94, 0.9)",
        secondColor: "rgba(49, 13, 94, 0.9)",
        position: "15% 40%",
      },

      second: {
        color: "rgba(49, 13, 94, 0.9)",
        secondColor: "rgba(49, 13, 94, 0.99)",
        position: "80% 20%",
      },
    },
  },
];

export const ImgsBg: ImgBgConfig[] = [
  {
    path: "/",
    src: Images.BackgroundHome,
    alt: "Фотография фона для главной страницы",
    mediaSrc: Images.BackgroundHomeMedia,
  },
  {
    path: "/about",
    src: Images.BackgroundAbout,
    alt: 'Фотография фона для страницы "О нас"',
  },
  {
    path: "/skills",
    src: Images.BackgroundSkills,
    alt: 'Фотография фона для страницы "Мои навыки"',
  },
  {
    path: "/contacts",
    src: Images.BackgroundContacts,
    alt: 'Фотография фона для страницы "Мои контакты"',
  },
  {
    path: "/experience",
    src: Images.BackgroundExperience,
    alt: 'Фотография фона для страницы "Мой опыт"',
  },
  {
    path: "/projects",
    src: Images.BackgroundProjects,
    alt: 'Фотография фона для страницы "Мои проекты"',
  },
];
