"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Container } from "../container/Container";
import { Menu } from "../menu/Menu";

import { footerBlockVariants } from "@/shared/config/motion/variants";

import scss from "./Footer.module.scss";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={classNames(
        scss.footer,
        pathname === "/" ? scss["footer--single"] : null
      )}
    >
      <Container>
        <div className={scss["footer__inner"]}>
          {pathname === "/" && (
            <motion.div
              className={scss["footer__block"]}
              variants={footerBlockVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="p2">fronted developer</p>

              <p className="p2">3+ лет опыта</p>
            </motion.div>
          )}

          <Menu className={scss["footer__menu"]} />
        </div>
      </Container>
    </footer>
  );
};
