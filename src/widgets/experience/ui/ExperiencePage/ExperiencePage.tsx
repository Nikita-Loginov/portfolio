"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

import {
  cardsContainerVariants,
  cardVariants,
} from "@/shared/config/motion/variants";

import { Container, TopText, Button, Tag } from "@/shared";

import { SOCIALS_CONFIG } from "@/shared/config/socials";
import { EXPERIENCE_ITEMS } from "@/shared/config/experience";

import { formatPeriod, getPeriodDuration } from "@/shared/utils";

import { Icons } from "@/shared/icons";

import { EXPERIENCE_INFO } from "@/shared/config/about";

import scss from "./ExperiencePage.module.scss";

export const ExperiencePage = () => {
  return (
    <section className={scss["experience"]}>
      <Container>
        <div className={scss["experience__inner"]}>
          <div className={scss["experience__content"]}>
            <TopText text={EXPERIENCE_INFO.desc} />
          </div>

          <motion.div
            className={scss["experience__items"]}
            variants={cardsContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {EXPERIENCE_ITEMS.map((item) => {
              return (
                <motion.div
                  className={scss["experience__item"]}
                  key={item.id}
                  variants={cardVariants}
                >
                  <div className={scss["experience__item-top"]}>
                    <div className={scss["experience__item-btns"]}>
                      {item.links?.resume && (
                        <Button
                          as="link"
                          to={SOCIALS_CONFIG.resume}
                          variant="text"
                          target="_blank"
                          theme="secondary"
                          iconRight={<Icons.DocumentCodeIcon />}
                          tooltip="Подробнее"
                        >
                          <p className="p2">Подробнее</p>
                        </Button>
                      )}

                      {item.links?.company && (
                        <Button
                          as="link"
                          to={item.links?.company}
                          variant="text"
                          target="_blank"
                          theme="secondary"
                          iconRight={<Icons.WebsiteIcon />}
                          tooltip="Сайт компании"
                        >
                          <p className="p2">Сайт компании</p>
                        </Button>
                      )}
                    </div>

                    <div className={scss["experience__item-date"]}>
                      <p className="p2">
                        <span className={scss["experience__item-date-period"]}>
                          {formatPeriod(item.period.start, item.period.end)}
                        </span>{" "}
                        ({getPeriodDuration(item.period.start, item.period.end)}
                        )
                      </p>
                    </div>
                  </div>

                  <div className={scss["experience__item-info"]}>
                    <div
                      className={classNames(
                        "p1",
                        scss["experience__item-title"]
                      )}
                    >
                      <p>{item.position}</p>

                      <p>{item.company}</p>
                    </div>

                    <div className="textbox">{item.description}</div>

                    {item.tags.length > 1 ? (
                      <div className={scss["experience__item-tags"]}>
                        {item.tags.map((tag) => (
                          <Tag theme="flat">
                            <p className="p3">{tag.label}</p>
                          </Tag>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className={scss["experience__item-info"]}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
