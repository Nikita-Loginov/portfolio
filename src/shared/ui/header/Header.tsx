"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { Container } from "../container/Container";
import { Button } from "../buttons/Button/Button";

import { SOCIALS_CONFIG } from "@/shared/config/socials";

import { Icons } from "@/shared/icons";

import { useElementSize } from "@/shared/hooks";

import scss from "./Header.module.scss";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useElementSize({ ref: headerRef, varName: "header-height" });

  return (
    <header className={scss.header} ref={headerRef}>
      <Container>
        <div className={scss["header__inner"]}>
          <div className={scss["header__logo"]}>
            <h1 className={classNames(isHome ? "h1" : "p1")}>
              nIKITA {isHome && <br />}
              LOGINOv
            </h1>
          </div>

          <div className={scss["header__content"]}>
            <div className={scss["header__btns"]}>
              <Button
                as="link"
                to={SOCIALS_CONFIG.github}
                variant="icon"
                target="_blank"
                iconLeft={<Icons.GuthubIcon />}
                theme="secondary"
                tooltip="GitHub — проекты и код"
              />

              <Button
                as="link"
                to={SOCIALS_CONFIG.resume}
                variant="text"
                target="_parent"
                theme="secondary"
                iconLeft={<Icons.DocumentCodeIcon />}
                tooltip="Открыть резюме (PDF)"
              >
                <p className="p2">Резюме</p>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
