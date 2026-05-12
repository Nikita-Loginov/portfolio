import { Container, ListSimple } from "@/shared";

import { SOCIALS_CONFIG } from "@/shared/config/socials";

import { Icons } from "@/shared/icons";

import scss from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  const items = [
    {
      to: SOCIALS_CONFIG.telegram,
      label: "@frontend_developer_fsd",
      ariaLabel: "Открыть Telegram профиль frontend_developer_fsd",
      icon: <Icons.TelegramIcon />
    },
    {
      to: `mailto:${SOCIALS_CONFIG.mail}`,
      label: "nikitaloginov264@gmail.com",
      ariaLabel: "Написать письмо на nikitaloginov264@gmail.com",
      icon: <Icons.MailIcon />
    },
  ];

  return (
    <section className={scss["contacts"]}>
      <Container>
        <div className={scss["contacts__inner"]}>
          <div className={scss["contacts__content"]}>
            <ListSimple items={items}/>
          </div>
        </div>
      </Container>
    </section>
  );
};
