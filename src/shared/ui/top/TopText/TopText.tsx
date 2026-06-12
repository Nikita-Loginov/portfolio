import classNames from "classnames";
import { motion } from "framer-motion";
import { textContainer, textItem } from "@/shared/config/motion/variants";
import scss from "./TopText.module.scss";

interface TopTextProps {
  animation?: boolean;
  text: string[];
  className?: string;
  firstAsTitle?: boolean;
}

export const TopText = ({
  animation = true,
  text,
  className,
  firstAsTitle = false,
}: TopTextProps) => {
  const content = text.map((item, index) => {
    const isFirst = index === 0;

    if (isFirst && firstAsTitle) {
      return (
        <motion.h1 key={index} className="p2" variants={textItem}>
          {item}
        </motion.h1>
      );
    }

    return (
      <motion.p key={index} className="p2" variants={textItem}>
        {item}
      </motion.p>
    );
  });

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
      {text.map((item, index) => {
        const isFirst = index === 0;

        if (isFirst && firstAsTitle) {
          return (
            <h1 key={index} className="p2">
              {item}
            </h1>
          );
        }

        return (
          <p key={index} className="p2">
            {item}
          </p>
        );
      })}
    </div>
  );
};
