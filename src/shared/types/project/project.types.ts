import { StaticImageData } from "next/image";

export type ProjectItem = {
  id: string;
  slug: string;
  name: string;
  nameFull: string;
  description: string[];
  link: string;
  tasks: string[];
  industry: string[];
  myTasks: string[];
  development: boolean;
  category: ProjectCategory[];
  advantages: AdvantageItem[];
  seo: ProjectSeo;
  imgs: (string | StaticImageData)[];
  developerTools: string[];
};

export type ProjectCategory = "site" | "landing" | "admin" | "tg-app" | 'tool';

export type AdvantageItem = {
  icon: React.ReactNode;
  text: string
}

export interface ProjectSeo {
  title: string;
  description: string;
  keywords?: string[];
  image: string;
  ogImage: string;
  twitterImage?: string;
}
