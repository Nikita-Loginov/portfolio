"use client";
import { useEffect, useState, useRef } from "react";

import FallingText from "@/shared/ui/animations/FallingText/FallingText";

import { Container } from "@/shared";

import { SKILLS_INFO } from "@/shared/config/about";

import scss from "./SkillsPage.module.scss";

export const SkillsPage = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [fallingKey, setFallingKey] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new ResizeObserver(() => {
      setFallingKey((prev) => prev + 1);
    });

    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className={scss["skills"]}>
      <Container className={scss["skills__container"]}>
        <div className={scss["skills__inner"]}>
          <div className={scss["skills__top"]}>
            <p className="p2">
              {SKILLS_INFO.desc.map((line, index) => (
                <span key={index}>
                  {line}
                  {index !== SKILLS_INFO.desc.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className={scss["skills__content"]} ref={contentRef}>
            <FallingText
              key={fallingKey}
              text={`React TypeScript Next.js JavaScript HTML CSS SCSS React-Query Redux Zustand API Performance UI UX Animations Responsive Architecture Components`}
              trigger="auto"
              highlightWords={[
                "React",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "API",
                "Performance",
                "UI",
                "UX",
                "Animations",
                "Components",
              ]}
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.41}
              mouseConstraintStiffness={1}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
