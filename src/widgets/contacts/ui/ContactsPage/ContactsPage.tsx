"use client";

import { motion } from "framer-motion";

import {
  cardsContainerVariants,
  cardVariants,
  textBlockVariants,
} from "@/shared/config/motion/variants";

import { Container, ListSimple } from "@/shared";

import { ContactForm } from "@/features/contact-message/ui";
import { ContactInfo } from "../ContactInfo/ContactInfo";

import { SOCIALS_CONFIG } from "@/shared/config/socials";

import { Icons } from "@/shared/icons";

import scss from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  const items = [
    {
      to: SOCIALS_CONFIG.telegram,
      label: "@frontend_developer_fsd",
      ariaLabel: "Открыть Telegram профиль frontend_developer_fsd",
      icon: <Icons.TelegramIcon />,
    },
    {
      to: `mailto:${SOCIALS_CONFIG.mail}`,
      label: "nikitaloginov264@gmail.com",
      ariaLabel: "Написать письмо на nikitaloginov264@gmail.com",
      icon: <Icons.MailIcon />,
    },
  ];

  return (
    <section className={scss["contacts"]}>
      <Container className={scss["contacts__container"]}>
        <motion.div
          className={scss["contacts__inner"]}
          initial="hidden"
          animate="visible"
          variants={cardsContainerVariants}
        >
          <motion.div variants={cardVariants} className={scss["contacts__content"]}>
            <ListSimple items={items} firstAsTitle/>

            <div className={scss["contacts__info"]}>
              <div className={scss["contacts__text"]}>
                <p className="p2">Нужна моя помощь?</p>

                <p className="p2">Есть ко мне предложение?</p>

                <p className="p2">Свяжитесь со мной или заполните форму:</p>
              </div>

              <ContactForm />
            </div>
          </motion.div>

          <ContactInfo />
        </motion.div>
      </Container>
    </section>
  );
};
