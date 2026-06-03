"use client";

import { ProjectItem } from "@/shared/types/project/project.types";

import { Container, TopDetail, Button, CardBorder } from "@/shared";

import { ProjectGallery } from "../ProjectGallery/ProjectGallery";

import { Icons } from "@/shared/icons";

import scss from "./ProjectDetail.module.scss";

interface ProjectDetailProps {
  project: ProjectItem;
}

const TextBlockProject = (text: string[]) => {
  return (
    <div className="textbox">
      {text.map((text_p, index) => (
        <p className="p2" key={index}>
          {text_p}
        </p>
      ))}
    </div>
  );
};

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { description, tasks, industry, myTasks, advantages, imgs, nameFull } =
    project;

  return (
    <section className={scss["project"]}>
      <Container>
        <div className={scss["project__inner"]}>
          <TopDetail
            back
            fallbackPath="/projects"
            className={scss["project__top"]}
          >
            <div className={scss["project__top-box"]}>
              <h1 className="p1">{project.nameFull}</h1>

              <Button
                as="link"
                theme="secondary"
                iconLeft={<Icons.WebsiteIcon />}
                to={project.link}
                target="_blank"
                tooltip="Посмотреть готовый проект"
              >
                <p className="p2">Сайт</p>
              </Button>
            </div>
          </TopDetail>

          <div className={scss["project__content"]}>
            <div className={scss["project__items-box"]}>
              <div className={scss["project__items"]}>
                {description.length > 0 ? (
                  <div className={scss["project__item"]}>
                    <p className="h3">О проекте</p>

                    {TextBlockProject(description)}
                  </div>
                ) : null}

                {tasks.length > 0 ? (
                  <div className={scss["project__item"]}>
                    <p className="p2 gray-color-100">задача</p>

                    {TextBlockProject(tasks)}
                  </div>
                ) : null}

                {industry.length > 0 ? (
                  <div className={scss["project__item"]}>
                    <p className="p2 gray-color-100">отрасль</p>

                    {TextBlockProject(industry)}
                  </div>
                ) : null}

                {myTasks.length > 0 ? (
                  <div className={scss["project__item"]}>
                    <p className="p2 gray-color-100">мои задачи</p>

                    {TextBlockProject(myTasks)}
                  </div>
                ) : null}
              </div>

              {advantages.length > 0 ? (
                <div className={scss["project__advantages"]}>
                  {advantages.map((advantage) => (
                    <div className={scss["project__item"]} key={advantage.text}>
                      <div className="icon icon--big">{advantage.icon}</div>

                      <p className="p2">{advantage.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <CardBorder>
                <div className={scss["project__support"]}>
                  <p className="h4">Хотите заказать сайт?</p>

                  <div className={scss["project__support-btns"]}>
                    <Button theme="secondary">
                      <p className="p2">Оставить заявку</p>
                    </Button>
                  </div>
                </div>
              </CardBorder>
            </div>

            <ProjectGallery imgs={imgs} nameFull={nameFull} />
          </div>
        </div>
      </Container>
    </section>
  );
};
