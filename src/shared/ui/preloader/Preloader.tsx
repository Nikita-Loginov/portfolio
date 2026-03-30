import Image from "next/image";

import { Container } from "../container/Container";
import { Progress } from "../progress/Progress";

import { Images } from "@/shared/images";

import scss from "./Preloader.module.scss";

interface PreloaderProps {
  progress: number;
}

export const Preloader = ({ progress }: PreloaderProps) => {
  return (
    <section className={scss["preloader"]}>
      <Container>
        <div className={scss["preloader__inner"]}>
          <div className={scss["preloader__content"]}>
            <h1 className="h1">fronted developer</h1>
          </div>

          <Progress progress={progress} />
        </div>
      </Container>

      <div className={scss["preloader__img"]}>
        <Image
          src={Images.BackgroundHome}
          alt="Фотография заглушка на preloader"
          priority
          fill
        />
      </div>
    </section>
  );
};
