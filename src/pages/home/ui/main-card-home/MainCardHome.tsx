import Image from "next/image";

import { Images } from "@/shared/images";

import scss from "./MainCardHome.module.scss";

export const MainCardHome = () => {
  return (
    <div className={scss.card}>
      <p className="p2">Последний проект</p>

      <div className={scss["card__img"]}>
        <Image src={Images.KarmansImg} alt="Мокап проекта Карманс" />
      </div>

      <div className={scss["card__content"]}>
        <p className="p1">Платформа для учета заказов "OrderFlow"</p>
      </div>
    </div>
  );
};
