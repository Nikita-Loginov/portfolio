'use client'

import classNames from "classnames";
import { motion } from "framer-motion";

import {
  heroContainerVariants,
  heroTitleVariants,
  heroGradientVariants,
  heroTextVariants
} from "@/shared/config/motion/variants";

import { Container } from "@/shared";

import scss from "./MainSectionHome.module.scss";

export const MainSectionHome = () => {
  return (
    <section className={scss["main-section"]}>
      <Container className={scss["main-section__container"]}>
        <div className={scss["main-section__inner"]}>
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className={scss["main-section__content"]}
          >
            <motion.h1
              className={classNames(scss["main-section__title"], "h1")}
              variants={heroTitleVariants}
            >
              Привет! Я Никита, <br />{" "}
              
              <motion.span
                className="gradient-text"
                variants={heroGradientVariants}
              >
                fronted-developer 3+ года
              </motion.span>{" "}
              опыта
            </motion.h1>

            <motion.div
              className={classNames("textbox", scss["main-section__textbox"])}
              variants={heroTextVariants}
            >
              <p className="p1">
                Создаю креативные и современные интерфейсы, которые решают
                задачи пользователей и бизнеса
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
