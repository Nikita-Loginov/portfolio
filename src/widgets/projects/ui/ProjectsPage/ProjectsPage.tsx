"use client";

import { useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { Container, Button, CardProject, CardBorder } from "@/shared";

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
  // {
  //   label: "Админ-панели",
  //   value: "admin",
  // },
  {
    label: "Telegram Apps",
    value: "tg-app",
  },
  // {
  //   label: "Инструменты",
  //   value: "tool",
  // },
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                className={scss["projects__items"]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardProject item={project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </Container>
    </section>
  );
};
