"use client";

import { Container, Hint } from "@/shared";
import { motion } from "framer-motion";

import { ABOUT_INFO, ABOUT_ITEMS } from "@/shared/config/about";
import { CardAbout } from "./cards/card-about/CardAbout";

import {
  pageVariants,
  textBlockVariants,
} from "@/shared/config/motion/variants";

import { CardBorder, TopText } from "@/shared";

import { Icons } from "@/shared/icons";

import scss from "./AboutPage.module.scss";

export const AboutPage = () => {
  return (
    <motion.section
      className={scss.about}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <div className={scss["about__inner"]}>
          <motion.div
            className={scss["about__content"]}
            variants={textBlockVariants}
          >
            <TopText text={[ABOUT_INFO.desc]} />

            <Hint
              icon={<Icons.CursorArrowFilledIcon />}
              text={[
                <>
                  наведи на карточку,
                  <br />
                  чтобы узнать подробнее
                </>,
              ]}
              className={scss['about__hint']}
            />
          </motion.div>

          <div className={scss["about__items-box"]}>
            {ABOUT_ITEMS.map((item) => {
              return (
                <CardBorder key={item.title}>
                  <CardAbout {...item} />
                </CardBorder>
              );
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};
