import { AboutItem } from "@/shared/config/about";

import scss from "./CardAbout.module.scss";

type CardAboutProps = {} & AboutItem;

export const CardAbout = ({ title, desc }: CardAboutProps) => {
  return (
    <div className={scss["card-about"]}>
      <div className={scss["card-about__head"]}>
        {title && <p className="h4">{title}</p>}
      </div>

      <div className={scss["card-about__footer"]}>
        <div className={scss["card-about__dots"]}>
          <p className="p1">...</p>
        </div>

        <div className={scss["card-about__question"]}>
          {desc && <p className="p2">{desc}</p>}
        </div>
      </div>
    </div>
  );
};
