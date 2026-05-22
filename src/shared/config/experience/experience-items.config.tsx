import { ExperienceItem } from "@/shared/types/experience/experience.types";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 1,
    period: {
      start: "2025-10",
      end: null,
    },
    position: "Frontend Developer",
    company: "Emirates Estate",
    description: (
      <p className="p2">
        Разработка ключевого продукта компании на Next.js и TypeScript.
        Переписывание legacy-системы с нуля, проектирование архитектуры,
        разработка клиентской части и административной панели. Оптимизация Core
        Web Vitals, SEO и производительности приложения.
      </p>
    ),
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "React" },
      { label: "SSR" },
      { label: "SEO" },
      { label: "CWV" },
      { label: "REST API" },
    ],
    links: {
      company: "https://emirates.estate",
      resume: true,
    },
  },
  {
    id: 2,
    period: {
      start: "2024-06",
      end: "2025-10",
    },
    position: "Frontend Developer / Team Lead",
    company: "Frog Studio",
    description: (
      <p className="p2">
        Разработка веб-приложений и систем бронирования для отелей на React,
        Next.js и TypeScript. Создание административных панелей, Telegram Mini
        Apps и интеграция frontend с backend. Временно исполнял обязанности Team
        Lead: занимался декомпозицией задач, рефакторингом и коммуникацией с
        заказчиками.
      </p>
    ),
    tags: [
      { label: "React" },
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Zustand" },
      { label: "RTK Query" },
      { label: "NestJS" },
      { label: "Telegram Mini App" },
    ],
    links: {
      company: "https://frog-studios.com",
      resume: true,
    },
  },
  {
    id: 3,
    period: {
      start: "2023-07",
      end: "2024-06",
    },
    position: "Frontend Developer",
    company: "Ruso Studio",
    description: (
      <p className="p2">
        Разработка и поддержка интернет-магазинов на React и TypeScript.
        Участвовал в миграции legacy-проектов на современный стек, интеграции
        платежных систем и backend API. Работал над улучшением
        производительности, UX/UI и кроссбраузерности интерфейсов.
      </p>
    ),
    tags: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Next.js" },
      { label: "REST API" },
      { label: "ЮKassa" },
      { label: "SCSS" },
      { label: "Cross-browser" },
    ],
    links: {
      company: "https://ruso.ru",
      resume: true,
    },
  },

  {
    id: 4,
    period: {
      start: "2023-04",
      end: "2023-07",
    },
    position: "Web Developer",
    company: "Widmonde Studio",
    description: (
      <p className="p2">
        Разработка адаптивных лендингов и интернет-магазинов с pixel-perfect
        версткой. Реализация UI-интерфейсов, анимаций и интерактивных элементов
        с использованием JavaScript и GSAP.
      </p>
    ),
    tags: [
      { label: "HTML" },
      { label: "SCSS" },
      { label: "JavaScript" },
      { label: "GSAP" },
      { label: "Gulp" },
      { label: "Adaptive" },
    ],
    links: {
      resume: true,
    },
  },
];
