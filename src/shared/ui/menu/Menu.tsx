"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import { Tooltip } from "../toltips/Tooltip";

import { MENU_ITEMS } from "./config/menu-items.config";

import scss from "./Menu.module.scss";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const pathname = usePathname();

  return (
    <div className={classNames(scss.menu, className)}>
      <nav className={scss["menu__box"]}>
        <ul className={scss["menu__list"]}>
          {MENU_ITEMS.map((item) => {
            const isActive =
              item.to === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.to);

            return (
              <li className={scss["menu__link"]} key={item.to}>
                <Tooltip title={`Перейти на страницу "${item.title}"`}>
                  <Link
                    href={item.to}
                    className={classNames(scss["menu__item"], {
                      [scss.active]: isActive,
                    })}
                  >
                    <p className="p2">{item.title}</p>
                  </Link>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
