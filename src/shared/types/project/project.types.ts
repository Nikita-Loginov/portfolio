export type ProjectItem = {
  id: string;
  name: string;
  development: boolean;
  category: ProjectCategory[];
};

export type ProjectCategory = "site" | "landing" | "admin" | "tg-app" | 'tool';
