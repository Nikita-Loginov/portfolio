"use client";

import { useState } from "react";
import classNames from "classnames";

import { AboutItem } from "@/shared/config/about";

import { useTouchDevice } from "@/shared/hooks";

import { Icons } from "@/shared/icons";

import scss from "./CardAbout.module.scss";

type CardAboutProps = {} & AboutItem;

export const CardAbout = ({ title, desc }: CardAboutProps) => {
  const { isTouchDevice } = useTouchDevice();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cardClasses = classNames(scss["card-about"], {
    [scss["card-about--touch"]]: isTouchDevice,
    [scss["card-about--open"]]: isOpen && isTouchDevice,
  });

  const handleClick = () => {
    if (isTouchDevice) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className={scss["card-about__head"]}>
        {title && <p className="h4">{title}</p>}
      </div>

      <div className={scss["card-about__footer"]}>
        <div className={scss["card-about__dots"]}>
          <p className="p1">...</p>
        </div>

        <div className={scss["card-about__question"]}>
          {desc && <p className="p2">{desc}</p>}
        </div>

        <div className={scss["card-about__arrow"]}>
          <Icons.ChevronDownIcon />
        </div>
      </div>
    </div>
  );
};
