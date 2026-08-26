import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Логинов Никита",
  title: "Frontend Developer",
  url: "https://frontent-nikita.vercel.app",
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

  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/images/favicon/apple-touch-icon.png",
      },
    ],

    other: [
      {
        rel: "manifest",
        url: "/images/favicon/site.webmanifest",
      },
    ],
  },

  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    description: HOME_DESCRIPTION,
    url: SITE_CONFIG.url,
    siteName: `Портфолио ${SITE_CONFIG.name}`,
    locale: SITE_CONFIG.locale,
    type: "website",
    images: [
      {
        url: "/images/og/cover.webp",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
    description: HOME_DESCRIPTION,
    creator: "@frontend_developer_fsd",
    images: ["/images/og/cover.webp"],
  },

  authors: [
    {
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  ],

  applicationName: SITE_CONFIG.name,

  keywords: KEYWORDS,

  category: "portfolio",

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

  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
