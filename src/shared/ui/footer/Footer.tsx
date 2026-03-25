"use client";

import classNames from "classnames";
import { Container } from "../container/Container";
import { Menu } from "../menu/Menu";

import scss from "./Footer.module.scss";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={classNames(scss.footer, pathname === '/' ? scss['footer--single'] : null)}>
      <Container>
        <div className={scss["footer__inner"]}>
          {pathname === "/" && (
            <div className={scss["footer__block"]}>
              <p className="p2">fronted developer</p>

              <p className="p2">3+ лет опыта</p>
            </div>
          )}

          <Menu className={scss['footer__menu']}/>
        </div>
      </Container>
    </footer>
  );
};
