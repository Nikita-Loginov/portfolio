import { ProjectItem } from "@/shared/types/project/project.types";

import { Icons } from "@/shared/icons";
import { Images } from "@/shared/images";

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: "karmans",
    slug: "hotel-karmanns",
    name: "Сайт бутик-отеля Karmann’s",
    development: false,

    nameFull: "Karmann’s Yantar Hall",

    description: [
      "Karmann’s Yantar Hall — премиальный бутик-отель в Светлогорске, входящий в число лучших гостиничных проектов Калининградской области. Основной задачей проекта было создание современного цифрового опыта, который передаёт атмосферу отеля и упрощает процесс онлайн-бронирования.",
      "Сайт объединяет презентацию номеров, систему бронирования, адаптивный пользовательский интерфейс и административную панель для управления контентом и размещением гостей. Особое внимание уделялось скорости взаимодействия, визуальной подаче и удобству сценариев бронирования.",
    ],

    link: "https://karmanns.com/",

    tasks: [
      "разработать современный сайт премиального бутик-отеля с акцентом на UX и визуальную презентацию",
      "реализовать систему онлайн-бронирования номеров",
      "создать административную панель для управления контентом и бронированиями",
      "адаптировать интерфейс под мобильные устройства и планшеты",
    ],

    industry: ["гостиничный сервис"],

    myTasks: [
      "разработал frontend многостраничного сайта на React/Next.js в рамках Bitrix-интеграции",
      "участвовал в редизайне интерфейса с полной переработкой структуры страниц и UX-сценариев",
      "реализовал клиентскую часть кастомного модуля онлайн-бронирования (виджет и пользовательские сценарии выбора номера)",
      "оптимизировал пользовательский флоу бронирования, сократив количество шагов до оформления",
      "интегрировал frontend с системой бронирования (TravelLine → uhotels) и PMS Logus через API-слой",
      "реализовал детальные страницы номеров с динамическим отображением условий, оснащения и тарифов",
      "разработал UI для календаря доступности и сценариев выбора дат проживания",
      "создал интерфейсы для дополнительных услуг (spa, трансфер и др.) в процессе бронирования",
      "реализовал адаптивную верстку и сложные интерактивные компоненты под high-load контент",
      "подключил и адаптировал сторонние JS-библиотеки для галерей, слайдеров и анимаций",
      "оптимизировал производительность интерфейса (lazy-load, оптимизация медиа, снижение ререндеров)",
    ],

    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: "3 месяца",
      },
      {
        icon: <Icons.CodeIcon />,
        text: "React, Next.js, TypeScript",
      },
      {
        icon: <Icons.PaletteIcon />,
        text: "SCSS, BEM, Material UI, адаптивная верстка",
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: "Разработка с нуля, поддержка и развитие проекта",
      },
    ],

    seo: {
      title:
        "Karmann’s Yantar Hall — разработка сайта бутик-отеля и системы бронирования",

      description:
        "Frontend-разработка сайта бутик-отеля Karmann’s Yantar Hall. Реализация адаптивного интерфейса, системы бронирования и административной панели на React и Next.js.",

      keywords: [
        "разработка сайта отеля",
        "frontend разработка",
        "react developer",
        "next js",
        "typescript",
        "система бронирования",
        "гостиничный сервис",
        "karmanns",
        "hotel booking",
        "adaptive website",
      ],

      image: "/images/projects/karmanns/cover.webp",
      ogImage: "/images/projects/karmanns/og.webp",
    },

    category: ["site"],

    imgs: [
      Images.KarmansOne,
      Images.KarmansTwo,
      Images.KarmansThree,
      Images.KarmansTenFive,
      Images.KarmansFour,
      Images.KarmansFive,
      Images.KarmansSix,
      Images.KarmansSeven,
      Images.KarmansEight,
      Images.KarmansNine,
      Images.KarmansTenOne,
      Images.KarmansTenTwo,
      Images.KarmansTenThree,
      Images.KarmansTenFour,
    ],

    developerTools: ["React", "Next.js", "TypeScript", "SCSS"],
  },

  {
    id: "konakovo",
    slug: "konakovo-river-club",
    name: "Сайт курортного комплекса Konakovo River Club",
    development: false,

    nameFull: "Konakovo River Club",

    description: [
      "Konakovo River Club — крупный загородный курортный комплекс на берегу Волги, включающий отель, глэмпинг, коттеджный посёлок, ретрит-центр и развитую инфраструктуру для отдыха, спорта и мероприятий. Проект представляет собой сложную цифровую экосистему с несколькими сценариями пользовательского поведения.",

      "Задача frontend-части заключалась в создании адаптивного, конверсионного интерфейса для большого количества разделов и типов контента: проживание, бронирование, мероприятия и инфраструктура. Важно было сохранить баланс между визуальной подачей и производительностью при работе с тяжёлым контентом и CMS Bitrix.",
    ],

    link: "https://konakovo.com/",

    tasks: [
      "разработать frontend-часть сайта крупного курортного комплекса с множеством продуктовых направлений",
      "реализовать адаптивную верстку и интерактивные UI-компоненты",
      "интегрировать frontend с CMS Bitrix",
      "настроить сборку проекта на Gulp",
      "реализовать анимации, слайдеры и сложные пользовательские сценарии",
      "обеспечить корректную работу интерфейса при большом объёме контента",
    ],

    industry: ["гостиничный сервис", "туризм", "недвижимость"],

    myTasks: [
      "разработал frontend сайта на HTML, SCSS и JavaScript с использованием Gulp-сборки",
      "интегрировал верстку с CMS Bitrix и адаптировал шаблонную систему под дизайн-макеты",
      "реализовал адаптивный интерфейс для всех типов устройств",
      "подключил и настроил сторонние JavaScript-библиотеки для слайдеров, анимаций и UI-компонентов",
      "реализовал интерактивные элементы интерфейса: каталоги, карточки, формы и сценарии взаимодействия",
      "оптимизировал структуру стилей и скриптов для поддержки и масштабирования проекта",
      "участвовал в доработке пользовательских сценариев взаимодействия с бронированием и заявками",
    ],

    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: "4 месяца",
      },
      {
        icon: <Icons.CodeIcon />,
        text: "HTML, JavaScript, Bitrix",
      },
      {
        icon: <Icons.PaletteIcon />,
        text: "SCSS, БЭМ, адаптивная верстка, Gulp",
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: "Frontend-разработка для крупного курортного комплекса",
      },
    ],

    seo: {
      title:
        "Konakovo River Club — frontend-разработка сайта курортного комплекса",

      description:
        "Frontend-разработка сайта Konakovo River Club: Bitrix-интеграция, адаптивная верстка, интерактивные интерфейсы и работа с крупной контентной системой курорта.",

      keywords: [
        "frontend разработка",
        "битрикс верстка",
        "html css javascript",
        "gulp сборка",
        "адаптивный сайт",
        "курортный комплекс",
        "konakovo river club",
        "frontend разработчик",
        "интерактивный сайт",
        "портфолио разработчика",
      ],

      image: "/images/projects/konakovo/cover.webp",
      ogImage: "/images/projects/konakovo/og.webp",
    },

    category: ["site"],

    developerTools: ["HTML", "SCSS", "JavaScript", "Gulp", "Bitrix"],

    imgs: [
      Images.KonakovoOne,
      Images.KonakovoTwo,
      Images.KonakovoThree,
      Images.KonakovoFour,
      Images.KonakovoFive,
      Images.KonakovoSix,
      Images.KonakovoSeven,
      Images.KonakovoEight,
      Images.KonakovoNine,
      Images.KonakovoTenOne,
      Images.KonakovoTenTwo,
      Images.KonakovoTenThree,
      Images.KonakovoTenFour,
      Images.KonakovoTenFive,
    ],
  },

  {
    id: "konakovo-cottage",
    slug: "konakovo-cottage",
    name: "Лендинг коттеджного посёлка Konakovo River Club",
    development: false,

    nameFull: "Konakovo River Club — Cottage Landing",

    description: [
      "Konakovo Cottage — промо-лендинг коттеджного посёлка Konakovo River Club, объединяющего частную загородную недвижимость и инфраструктуру премиального курортного комплекса на берегу Волги.",

      "Проект представляет собой продающий лендинг, задача которого — презентовать концепцию жизни в коттеджном посёлке: дома, участки и доступ ко всей инфраструктуре курорта (яхт-клуб, SPA, рестораны, спорт и event-зоны). Основной фокус был направлен на визуальную подачу, UX-структуру и конверсию в заявку.",
    ],

    link: "https://konakovo-river.ru/",

    tasks: [
      "разработать продающий лендинг коттеджного посёлка с высокой визуальной нагрузкой",
      "реализовать адаптивную верстку и интерактивные UI-блоки",
      "обеспечить плавную подачу контента и сценариев просмотра",
      "реализовать секции с презентацией домов, участков и инфраструктуры",
      "подключить интерактивные элементы (слайдеры, анимации, карты)",
      "оптимизировать загрузку медиа-контента для повышения производительности",
    ],

    industry: ["недвижимость", "туризм", "гостиничный сервис"],

    myTasks: [
      "разработал frontend лендинга на HTML, SCSS и JavaScript с использованием Gulp-сборки",
      "реализовал адаптивную верстку для всех типов устройств",
      "собрал интерактивные секции с презентацией коттеджей, участков и инфраструктуры",
      "подключил и адаптировал сторонние JavaScript-библиотеки (слайдеры, анимации, lightbox)",
      "реализовал плавные пользовательские сценарии скролла и переходов между секциями",
      "оптимизировал работу с большим количеством изображений и медиаконтента",
      "обеспечил корректную работу лендинга как продающей страницы с фокусом на конверсию",
    ],

    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: "1 месяц",
      },
      {
        icon: <Icons.CodeIcon />,
        text: "HTML, JavaScript, Gulp",
      },
      {
        icon: <Icons.PaletteIcon />,
        text: "SCSS, адаптивная верстка, BEM",
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: "Разработка продающего лендинга коттеджного посёлка",
      },
    ],

    seo: {
      title: "Konakovo Cottage — разработка лендинга коттеджного посёлка",

      description:
        "Frontend-разработка лендинга Konakovo River Club Cottage: адаптивная верстка, интерактивные секции, презентация недвижимости и инфраструктуры загородного комплекса.",

      keywords: [
        "лендинг коттеджного поселка",
        "frontend разработка лендинга",
        "html css javascript",
        "gulp верстка",
        "продающий лендинг",
        "недвижимость сайт",
        "konakovo river club",
        "загородная недвижимость",
        "адаптивный лендинг",
        "frontend portfolio",
      ],

      image: "/images/projects/konakovo-cottage/cover.webp",
      ogImage: "/images/projects/konakovo-cottage/og.webp",
    },

    category: ["landing"],

    developerTools: ["HTML", "SCSS", "JavaScript", "Gulp"],

    imgs: [
      Images.KonakovoCottageOne,
      Images.KonakovoCottageTwo,
      Images.KonakovoCottageThree,
      Images.KonakovoCottageFour,
      Images.KonakovoCottageFive,
      Images.KonakovoCottageSix,
      Images.KonakovoCottageSeven,
      Images.KonakovoCottageEight,
      Images.KonakovoCottageNine,
    ],
  },

  {
    id: "vikrf-bot",
    slug: "vikrf-telegram-app",
    name: "Telegram-экосистема VIKRF",
    development: false,

    nameFull: "VIKRF Telegram Platform",

    description: [
      "VIKRF — Telegram-экосистема, включающая пользовательское мини-приложение и административную панель управления. Система объединяет клиентскую часть для пользователей и внутреннюю CRM для администрирования данных и бизнес-логики.",

      "Платформа включает управление пользователями, объектами системы, банками, квизами, рассылками и сценариями рефинансирования. Архитектура построена вокруг взаимодействия пользовательского интерфейса и административного слоя внутри Telegram-экосистемы.",
    ],

    link: "https://t.me/vikrf_bot",

    tasks: [
      "разработать Telegram мини-приложение для пользователей системы",
      "реализовать административную панель для управления продуктом",
      "обеспечить управление пользователями и их данными",
      "реализовать управление объектами системы и бизнес-сущностями",
      "разработать модуль создания и управления квизами",
      "реализовать систему рассылок пользователям",
      "создать интерфейсы управления банками и финансовыми сценариями",
      "реализовать управление процессами рефинансирования",
    ],

    industry: ["telegram", "fintech", "crm systems", "digital platform"],

    myTasks: [
      "разработал frontend Telegram мини-приложения для пользовательского взаимодействия с системой",
      "реализовал административную панель управления Telegram-экосистемой",
      "создал интерфейсы управления пользователями и их данными",
      "разработал UI для управления объектами системы и бизнес-сущностями",
      "реализовал систему создания и редактирования квизов",
      "разработал модуль рассылок и сегментированного взаимодействия с пользователями",
      "реализовал интерфейсы управления банковскими данными и финансовыми сценариями",
      "создал UI для управления процессами рефинансирования",
      "оптимизировал структуру приложения для работы с большим количеством сущностей и ролей",
    ],

    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: "—",
      },
      {
        icon: <Icons.CodeIcon />,
        text: "JavaScript, Telegram API",
      },
      {
        icon: <Icons.PaletteIcon />,
        text: "Mini-app + Admin SPA архитектура",
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: "Разработка Telegram-экосистемы (client + admin)",
      },
    ],

    seo: {
      title: "VIKRF Telegram Platform — мини-приложение и CRM админ-панель",

      description:
        "Разработка Telegram-экосистемы VIKRF: пользовательское мини-приложение и административная панель управления пользователями, квизами, рассылками и финансовыми сценариями.",

      keywords: [
        "telegram mini app",
        "telegram admin panel",
        "crm система",
        "frontend developer",
        "telegram platform",
        "quiz system",
        "broadcast system",
        "fintech dashboard",
        "javascript app",
        "vikrf",
      ],

      image: "/images/projects/vikrf/cover.webp",
      ogImage: "/images/projects/vikrf/og.webp",
    },

    category: ["tg-app"],

    developerTools: [
      "React",
      "TypeScript",
      "Telegram API",
      "SPA",
    ],

    imgs: [
      Images.VikrfOne,
      Images.VikrfTwo,
      Images.VikrfThree,
      Images.VikrfFour,
      Images.VikrfFive,
      Images.VikrfSix,
      Images.VikrfSeven,
      Images.VikrfEight,
      Images.VikrfNine,
      Images.VikrfTenOne,
    ],
  },
];
