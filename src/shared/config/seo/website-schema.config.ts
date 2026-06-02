import { ProjectItem } from "@/shared/types/project/project.types";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Портфолио Никиты Логинова",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  inLanguage: "ru-RU",

  potentialAction: {
    "@type": "SearchAction",
    target: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },

  hasPart: [
    {
      "@type": "WebPage",
      name: "Главная",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    },
    {
      "@type": "WebPage",
      name: "Обо мне",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    },
    {
      "@type": "WebPage",
      name: "Навыки",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/skills`,
    },
    {
      "@type": "WebPage",
      name: "Опыт",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/experience`,
    },
    {
      "@type": "WebPage",
      name: "Услуги",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
    },
    {
      "@type": "WebPage",
      name: "Портфолио",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
    },
    {
      "@type": "WebPage",
      name: "Контакты",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contacts`,
    },
  ],
};

export const createProjectSchema = (project: ProjectItem) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",

  name: project.nameFull,

  headline: project.seo.title,

  description: project.seo.description,

  image: `${process.env.NEXT_PUBLIC_SITE_URL}/${project.seo.image}`,

  author: {
    "@type": "Person",
    name: "Никита Логинов",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },

  creator: {
    "@type": "Person",
    name: "Никита Логинов",
  },

  url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.slug}`,

  // dateModified: project.updatedAt,
});
