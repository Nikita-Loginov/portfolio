import { Container } from "@/shared";
import { MainCardHome } from "../main-card-home/MainCardHome";

import scss from "./MainSectionHome.module.scss";

export const MainSectionHome = () => {
  return (
    <section className={scss["main-section"]}>
      <Container>
        <div className={scss["main-section__inner"]}>
          <MainCardHome />
        </div>
      </Container>
    </section>
  );
};
