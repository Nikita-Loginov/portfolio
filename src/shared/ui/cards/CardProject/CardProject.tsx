"use client";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { ProjectItem } from "@/shared/types/project/project.types";

import { Tag } from "../../tag/Tag";

import { CardTilted } from "../CardTilted/CardTilted";

import { useTouchDevice } from "@/shared/hooks";

import scss from "./CardProject.module.scss";

interface CardProjectProps {
  item: ProjectItem;
}

export const CardProject = ({
  item: { name, slug, nameFull, imgs, developerTools },
}: CardProjectProps) => {
  const { isTouchDevice } = useTouchDevice();

  const content = (
    <div
      className={classNames(
        scss["card-project"],
        isTouchDevice ? scss["card-project--touch"] : ""
      )}
    >
      <div className={scss["card-project__img"]}>
        <Image src={imgs[0]} alt={`${nameFull}`} />
      </div>

      <div className={scss["card-project__content"]}>
        {developerTools.length > 0 ? (
          <div className={scss["card-project__tags"]}>
            {developerTools.map((tag) => (
              <Tag key={tag} className={scss["card-project__tag"]}>
                <p className="p3">{tag}</p>
              </Tag>
            ))}
          </div>
        ) : null}

        <p className="p2">{name}</p>
      </div>
    </div>
  );

  if (!isTouchDevice) {
    return (
      <Link
        href={`projects/${slug}`}
        aria-label={`Перейти на проект ${nameFull}`}
      >
        <CardTilted rotateAmplitude={8} scaleOnHover={1.03}>
          {content}
        </CardTilted>
      </Link>
    );
  }

  return (
    <Link
      href={`projects/${slug}`}
      aria-label={`Перейти на проект ${nameFull}`}
    >
      {content}
    </Link>
  );
};
