import classNames from "classnames";

import { motion } from "framer-motion";

import { textContainer, textItem } from "@/shared/config/motion/variants";

import scss from "./TopText.module.scss";

interface TopTextProps {
  animation?: boolean;
  text: string[];
  className?: string;
}

export const TopText = ({ animation = true, text, className }: TopTextProps) => {
  const content = text.map((item, index) => (
    <motion.p key={index} className="p2" variants={textItem}>
      {item}
    </motion.p>
  ));

  if (animation) {
    return (
      <motion.div
        className={classNames(scss["top-text"], className)}
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={classNames(scss["top-text"], className)}>
      {text.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
