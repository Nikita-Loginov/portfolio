"use client";

import { useRouter } from "next/navigation";

import { Container } from "../../container/Container";
import { Button } from "../../buttons/Button/Button";

import scss from "./NotFound.module.scss";

export const NotFound = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const isDirectVisit = window.history.length <= 1;

  return (
    <section className={scss["not-found"]}>
      <Container className={scss['not-found__container']}>
        <div className={scss["not-found__inner"]}>
          <div className={scss["not-found__top"]}>
            <h1>404</h1>
          </div>

          <div className={scss["not-found__content"]}>
            <div className={scss["not-found__textbox"]}>
              <p className="p2">
                Ой! document.getElementById('page') вернул null. <br /> Видимо,
                эта страница ушла в 404-отпуск.
              </p>

              <p className="p2">
                Вернитесь назад , пока я починю маршрутизацию!
              </p>
            </div>

            <div className={scss["not-found__btns"]}>
              <Button onClick={handleBack}>
                <p className="p2">
                  {isDirectVisit ? "Перейти на главную" : "Назад"}
                </p>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
