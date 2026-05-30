import Link from "next/link";

import { ProjectItem } from "@/shared/types/project/project.types";

import { CardTilted } from "../CardTilted/CardTilted";

import scss from "./CardProject.module.scss";

interface CardProjectProps {
  item: ProjectItem;
}

export const CardProject = ({ item: { name } }: CardProjectProps) => {
  return (
    <CardTilted rotateAmplitude={8} scaleOnHover={1.03}>
      <div className={scss["card-project"]}>
        <div className={scss["card-project__img"]}></div>
        
        <div className={scss["card-project__content"]}>
          <p className="p2">{name}</p>
        </div>
      </div>
    </CardTilted>
  );
};
