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

    developerTools: ["React", "TypeScript", "Telegram API", "SPA"],

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

  {
    id: "anstmirr",
    slug: "anstmirr",
    name: "Digital-проект Anstmirr",
    development: false,

    nameFull: "Anstmirr",

    description: [
      "Anstmirr — самостоятельный digital-проект в рамках коммерческой веб-разработки, представляющий собой визуально насыщенный многостраничный сайт с акцентом на контентную подачу и интерактивный пользовательский опыт.",

      "Проект ориентирован на презентацию бренда и контента через современный интерфейс с анимациями, медиа-элементами и структурированной навигацией. Основной фокус — визуальная динамика, работа с большим количеством контента и плавные пользовательские сценарии.",
    ],

    link: "https://frog-studios.com/portfolio/anstmirr",

    tasks: [
      "разработать интернет-магазин на 1С-Битрикс с полной e-commerce функциональностью",
      "реализовать каталог товаров с фильтрацией по размеру, цвету и коллекции",
      "разработать раздел коллекций с имиджевой презентацией товаров",
      "создать личный кабинет пользователя (история заказов, избранное, профиль)",
      "реализовать страницы бренда, доставки и оплаты",
      "внедрить функционал избранного",
      "обеспечить соответствие интерфейса фирменному стилю бренда",
    ],

    industry: ["digital products", "web experience", "frontend development"],

    myTasks: [
      "разработал frontend интернет-магазина на HTML, SCSS и JavaScript в связке с 1С-Битрикс",
      "реализовал адаптивную верстку каталога товаров с поддержкой фильтрации и сортировки",
      "разработал UI для карточек товаров, коллекций и списков товаров",
      "реализовал интерактивные фильтры (размер, цвет, коллекция)",
      "создал интерфейс личного кабинета пользователя (заказы, избранное, профиль)",
      "реализовал функционал избранного на клиентской стороне",
      "интегрировал frontend с шаблонной системой Bitrix",
      "настроил структуру страниц магазина (каталог, карточка товара, бренд, доставка, оплата)",
      "подключил и адаптировал JavaScript-библиотеки для UI-компонентов и интерактивности",
      "оптимизировал работу каталога и производительность при большом количестве товаров",
    ],

    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: "3 месяца",
      },
      {
        icon: <Icons.CodeIcon />,
        text: "HTML, JavaScript, Gulp",
      },
      {
        icon: <Icons.PaletteIcon />,
        text: "SCSS, адаптивная верстка, анимации",
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: "Разработка интерактивного digital-сайта",
      },
    ],

    seo: {
      title: "Anstmirr — разработка интерактивного digital-сайта",

      description:
        "Frontend-разработка проекта Anstmirr: адаптивная верстка, интерактивные элементы, анимации и работа с мультимедийным контентом.",

      keywords: [
        "frontend разработка",
        "html css javascript",
        "gulp сборка",
        "интерактивный сайт",
        "digital проект",
        "анимации на сайте",
        "frontend портфолио",
        "многостраничный сайт",
      ],

      image: "/images/projects/anstmirr/cover.webp",
      ogImage: "/images/projects/anstmirr/og.webp",
    },

    category: ["site"],

    developerTools: ["HTML", "SCSS", "JavaScript", "Gulp", "Bitrix"],

    imgs: [
      Images.AnstmirrOne,
      Images.AnstmirrTwo,
      Images.AnstmirrThree,
      Images.AnstmirrFour,
      Images.AnstmirrFive,
      Images.AnstmirrSix,
      Images.AnstmirrSeven,
      Images.AnstmirrEight,
      Images.AnstmirrNine,
    ],
  },

  {
    id: "drevoplace",
    slug: "drevoplace",
    name: "Интернет-магазин DrevoPlace",
    development: false,

    nameFull: "DrevoPlace — eCommerce проект",

    description: [
      "DrevoPlace — интернет-магазин с гибридной frontend-архитектурой на Vue.js и JavaScript внутри CMS 1С-Битрикс. Проект включает пользовательскую часть магазина, интерактивный каталог, корзину и административные сценарии работы с данными.",

      "Frontend-разработка была сфокусирована на создании интерактивного интерфейса, логики корзины и динамических компонентов поверх готовой серверной CMS-структуры.",
    ],

    link: "https://drevoplace.ru/",

    tasks: [
      "разработать frontend-часть интернет-магазина с использованием Vue.js и JavaScript",
      "реализовать кастомную корзину с полной клиентской логикой",
      "создать интерактивный каталог товаров с динамическими UI-обновлениями",
      "разработать пользовательские сценарии добавления и управления товарами в корзине",
      "обеспечить адаптивную верстку ключевых страниц интернет-магазина",
      "реализовать взаимодействие frontend-логики с API и данными CMS",
    ],

    industry: ["e-commerce", "retail"],

    myTasks: [
      "разработал frontend интернет-магазина на HTML, SCSS, JavaScript и Vue.js",
      "реализовал модуль расчёта доставки в корзине с интерактивной картой",
      "реализовал пересчёт стоимости доставки в зависимости от выбранной точки на карте",
      "связывал данные геолокации с логикой корзины и итоговой стоимостью заказа",
      "реализовал адаптивную верстку ключевых страниц интернет-магазина",
      "реализовал кастомную корзину полностью на клиентской стороне (добавление, удаление, изменение количества товаров)",
      "разработал интерактивный каталог товаров с динамическими обновлениями интерфейса",
      "реализовал Vue-компоненты для отдельных частей интерфейса (каталог, корзина, UI-блоки)",
      "написал клиентскую логику управления состоянием корзины без перезагрузки страницы",
      "оптимизировал работу интерфейса при большом количестве пользовательских действий и данных",
    ],

    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: "4 месяца",
      },
      {
        icon: <Icons.CodeIcon />,
        text: "Vue.js, JavaScript, HTML, SCSS",
      },
      {
        icon: <Icons.PaletteIcon />,
        text: "Frontend поверх CMS (без ответственности за Bitrix-натяжку)",
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: "Интерактивный eCommerce frontend",
      },
    ],

    seo: {
      title: "DrevoPlace — frontend разработка интернет-магазина",

      description:
        "Frontend-разработка интернет-магазина DrevoPlace: Vue.js, JavaScript, кастомная корзина, каталог товаров и интерактивный eCommerce интерфейс.",

      keywords: [
        "vue js ecommerce",
        "frontend разработка магазина",
        "javascript корзина",
        "custom cart",
        "frontend developer",
        "интернет магазин frontend",
        "vue components",
        "каталог товаров",
        "ecommerce frontend",
      ],

      image: "/images/projects/drevoplace/cover.webp",
      ogImage: "/images/projects/drevoplace/og.webp",
    },

    category: ["site"],

    developerTools: ["Vue.js", "JavaScript", "HTML", "SCSS", "Bitrix"],

    imgs: [
      Images.DrevoplaceOne,
      Images.DrevoplaceTwo,
      // Images.DrevoplaceThree,
      Images.DrevoplaceFour,
      Images.DrevoplaceFive,
      Images.DrevoplaceSix,
      Images.DrevoplaceSeven,
      Images.DrevoplaceEight,
      Images.DrevoplaceNine,
      Images.DrevoplaceTenOne,
      Images.DrevoplaceTenTwo,
      Images.DrevoplaceTenThree,
      Images.DrevoplaceTenFour,
      Images.DrevoplaceTenFive,
      Images.DrevoplaceTenSix,
      Images.DrevoplaceTenSeven,
    ],
  },
];
