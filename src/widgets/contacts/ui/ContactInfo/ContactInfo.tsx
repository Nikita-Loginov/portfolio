import classNames from "classnames";
import { StaticImageData } from "next/image";
import Image from "next/image";

import { CardBorder } from "@/shared";

import { Images } from "@/shared/images";

import scss from "./ContactInfo.module.scss";

const ITEMS: {
  simple: boolean;
  img?: string | StaticImageData;
  title?: string;
  text?: string;
}[] = [
  {
    simple: false,
    title: "Время ответа",
    text: "Отвечаю за 1–6 часов в рабочие дни (ПН–ПТ)",
    img: Images.Lightning,
  },
  {
    simple: false,
    title: "Формат работы",
    text: "Открыт к фрилансу, разовым задачам и долгосрочным проектам",
    img: Images.Computer,
  },
  {
    simple: false,
    title: "Этапы работы",
    text: "Обсуждение задачи — Оценка — Разработка — Демо — Финализация",
    img: Images.Developer,
  },
  {
    simple: false,
    title: "Локация",
    text: "Удалённо, работаю в GMT +3 (Европа/СНГ)",
    img: Images.Geo,
  },
];

export const ContactInfo = () => {
  return (
    <div className={scss["contact-info"]}>
      <div className={scss["contact-info__items"]}>
        {ITEMS.map((item) => {
          const { simple, title, text, img } = item;

          if (simple)
            return (
              <CardBorder>
                <div className={scss["contact-info__card"]}>
                  <p>hfjsdfsd</p>
                </div>
              </CardBorder>
            );

          return (
            <CardBorder>
              <div
                className={classNames(
                  scss["contact-info__card"],
                  scss["contact-info__card--hover"]
                )}
              >
                {img && (
                  <div className={scss["contact-info__card-img"]}>
                    <Image src={img} alt=""/>
                  </div>
                )}

                <div className={scss["contact-info__card-info"]}>
                  {title && <p className="h3">{title}</p>}

                  {text && <p className="p2">{text}</p>}
                </div>
              </div>
            </CardBorder>
          );
        })}
      </div>
    </div>
  );
};
