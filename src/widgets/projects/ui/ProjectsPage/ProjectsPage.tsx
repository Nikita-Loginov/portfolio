"use client";

import { useState } from "react";
import classNames from "classnames";

import { Container, Button, CardProject } from "@/shared";

import { PROJECTS_ITEMS } from "@/shared/config/project/projects-items.config";

import { ProjectCategory } from "@/shared/types/project/project.types";

import scss from "./ProjectsPage.module.scss";

const CATEGORIIES: {
  label: string;
  value: ProjectCategory | "all";
}[] = [
  {
    label: "Все",
    value: "all",
  },
  {
    label: "Сайты",
    value: "site",
  },
  {
    label: "Лендинги",
    value: "landing",
  },
  {
    label: "Админ-панели",
    value: "admin",
  },
  {
    label: "Telegram Apps",
    value: "tg-app",
  },
  {
    label: "Инструменты",
    value: "tool",
  },
];

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_ITEMS
      : PROJECTS_ITEMS.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section className={scss["projects"]}>
      <Container>
        <div className={scss["projects__inner"]}>
          <div className={scss["projects__btns"]}>
            {CATEGORIIES.map((category) => {
              return (
                <Button
                  className={classNames(
                    category.value === activeFilter ? scss["active"] : null,
                    scss["projects__btn"]
                  )}
                  key={category.value}
                  theme="tab"
                  size="small"
                  onClick={() => {
                    setActiveFilter(category.value);
                  }}
                >
                  <p className="p3">{category.label}</p>
                </Button>
              );
            })}
          </div>

          {filteredProjects.length > 0 ? (
            <div className={scss["projects__items"]}>
              {filteredProjects.map((project) => {
                return <CardProject key={project.id} item={project}/>
              })}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
};
