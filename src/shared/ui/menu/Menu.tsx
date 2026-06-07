"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Tooltip } from "../toltips/Tooltip";

import { MENU_ITEMS } from "./config/menu-items.config";

import { menuVariants } from "@/shared/config/motion/variants";
import { SOCIALS_CONFIG } from "@/shared/config/socials";

import { Icons } from "@/shared/icons";

import { Button } from "../buttons/Button/Button";

import scss from "./Menu.module.scss";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);

      document.body.classList.remove("open-modal");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("open-modal");
    } else {
      document.body.classList.remove("open-modal");
    }

    return () => {
      document.body.classList.remove("open-modal");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.div
      className={classNames(scss.menu, className, isOpen ? scss["active"] : "")}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      ref={menuRef}
    >
      <div className={scss["menu__box"]}>
        <nav className={scss["menu__nav"]}>
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
                      onClick={closeMenu}
                    >
                      <p className="p2">{item.title}</p>
                    </Link>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={scss["menu__info"]}>
          <div className={scss["menu__btns"]}>
            <Button
              as="link"
              to={SOCIALS_CONFIG.github}
              variant="text"
              target="_blank"
              iconLeft={<Icons.GuthubIcon />}
              tooltip="GitHub — проекты и код"
            >
              <p className="p2">Гитхаб</p>
            </Button>

            <Button
              as="link"
              to={SOCIALS_CONFIG.resume}
              variant="text"
              target="_blank"
              iconLeft={<Icons.DocumentCodeIcon />}
              tooltip="Открыть резюме (PDF)"
            >
              <p className="p2">Резюме</p>
            </Button>
          </div>
        </div>
      </div>

      <Button
        typeBtn="button"
        className={scss["menu__burger"]}
        theme={isOpen ? "secondary-two" : "primary"}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p className="p2">{isOpen ? "Закрыть" : "Меню"}</p>
      </Button>
    </motion.div>
  );
};
