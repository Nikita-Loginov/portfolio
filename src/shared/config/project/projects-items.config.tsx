import { ProjectItem } from "@/shared/types/project/project.types";

import { Images } from "@/shared/images";
import { Icons } from "@/shared/icons";

export const PROJECTS_ITEMS: ProjectItem[] = [
  {
    id: "karmans",
    slug: "hotel-karmanns",
    name: "Сайт бутик-отеля «Karmann’s»",
    development: false,
    nameFull: "Karmann's Yantar Hall",
    description: [
      "Отель «Karmann’s hotel - Yantar Hall» — дизайнерский отель, самый большой и современный в Светлогорске, уютно обосновался посреди соснового леса. Панорамные окна позволяют ощущать свою причастность к целительной приморской природе. Отель удобно расположен на центральной улице Светлогорска, рядом со знаменитым театром Янтарь-Холл и Органным залом, в двух минутах ходьбы от светлогорского променада, приводящего к пляжу.",
    ],
    link: "https://karmanns.com/",
    tasks: [
      "разработать новый сайт и административную панель для управления номерами и бронированиями для отеля в Светлогорске",
    ],
    industry: ["гостиничный сервис"],
    myTasks: [
      "переработала структуру сайта, сократив количество шагов до бронирования на 30%, что повысило конверсию.",
      "реализовала флоу с  гибкими вариантами заселения",
    ],
    advantages: [
      {
        icon: <Icons.ClockIcon />,
        text: '3 месяца',
      },
      {
        icon: <Icons.CodeIcon />,
        text: 'TypeScript, React, HTML',
      },
      {
        icon: <Icons.PaletteIcon />,
        text: 'Sass, BEM, Material UI, адаптивный интерфейс',
      },
      {
        icon: <Icons.CheckCircleIcon />,
        text: 'Разработка с нуля, развитие, поддержка проекта',
      }
    ],
    seo: {
      title:
        "Karmann's Yantar Hall — разработка сайта отеля и системы бронирования",
      description:
        "Разработка сайта бутик-отеля Karmann's Yantar Hall. Создание системы бронирования, административной панели и адаптивного интерфейса для гостиничного бизнеса.",
      keywords: [
        "разработка сайта отеля",
        "сайт гостиницы",
        "система бронирования",
        "next js",
        "react",
        "frontend разработка",
        "гостиничный бизнес",
        "karmanns",
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
    developerTools: ["React", "Next.js", "TypeScript", "SCSS"]
  },
];
