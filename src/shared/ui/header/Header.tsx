import { Container } from "../container/Container";
import { Button } from "../buttons/Button/Button";

import { SOCIALS_CONFIG } from "@/shared/config/socials";

import { Icons } from "@/shared/icons";

import scss from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={scss.header}>
      <Container>
        <div className={scss["header__inner"]}>
          <div className={scss["header__logo"]}>
            <h1 className="h1">
              nIKITA <br />
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
