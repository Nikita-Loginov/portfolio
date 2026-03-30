import { Container, Hint } from "@/shared";

import { ABOUT_INFO, ABOUT_ITEMS } from "@/shared/config/about";
import { CardAbout } from "./cards/card-about/CardAbout";

import { CardBorder } from "@/shared";

import { Icons } from "@/shared/icons";

import scss from "./AboutPage.module.scss";

export const AboutPage = () => {
  return (
    <section className={scss["about"]}>
      <Container>
        <div className={scss["about__inner"]}>
          <div className={scss["about__content"]}>
            <div className="textbox">
              <p className="p2">{ABOUT_INFO.desc}</p>
            </div>

            <Hint
              icon={<Icons.CursorArrowFilledIcon />}
              text={[
                <>
                  наведи на карточку,
                  <br />
                  чтобы узнать подробнее
                </>,
              ]}
            />
          </div>

          <div className={scss["about__items-box"]}>
            {ABOUT_ITEMS.map((item) => {
              return (
                <CardBorder key={item.title}>
                  <CardAbout {...item}/>
                </CardBorder>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
