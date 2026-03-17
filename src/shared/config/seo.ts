import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Логинов Никита",
  title: "Frontend Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nikita-loginov.ru",
  locale: "ru_RU",
} as const;

const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true";

export const HOME_DESCRIPTION =
  "Frontend-разработчик Никита Логинов. Создаю современные сайты и веб-приложения на React, Next.js и TypeScript. Разработка портфолио, лендингов и интерфейсов. Опыт 3+ года. Обращайтесь для воплощения ваших идей!";

export const KEYWORDS = [
  "frontend разработчик",
  "react разработчик",
  "next.js разработка",
  "создание сайтов",
  "веб разработчик",
  "typescript разработка",
  "портфолио разработчика",
  "разработка сайтов",
  "frontend developer",
  "Никита Логинов",
  "javascript разработчик",
  "redux разработка",
  "фриланс разработчик",
  "удаленная работа разработчик",
  "верстка сайтов",
  "создание веб приложений",
  "найти разработчика",
  "заказать сайт",
  "разработчик портфолио",
  "логинов frontend",
  "react разработчик москва",
  "next js специалист",
];

export const seoConfig: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: HOME_DESCRIPTION,

  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    description: HOME_DESCRIPTION,
    url: SITE_CONFIG.url,
    siteName: `Портфолио ${SITE_CONFIG.name}`,
    locale: SITE_CONFIG.locale,
    type: "website",
    // images: [],
  },

  keywords: KEYWORDS,

  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
};

export function createPageMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title,
    description: description || HOME_DESCRIPTION,
  };
}
