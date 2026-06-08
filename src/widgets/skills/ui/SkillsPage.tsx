"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import FallingText from "@/shared/ui/animations/FallingText/FallingText";

import { Container, TopText } from "@/shared";

import { SKILLS_INFO } from "@/shared/config/about";

import {
  textBlockVariants,
  pageVariants,
} from "@/shared/config/motion/variants";

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
    <motion.section
      className={scss["skills"]}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Container className={scss["skills__container"]}>
        <div className={scss["skills__inner"]}>
          <TopText text={SKILLS_INFO.desc} className={scss['skills__text']}/>

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
    </motion.section>
  );
};
