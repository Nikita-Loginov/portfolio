import { motion } from "framer-motion";
import classNames from "classnames";

import { cardVariants } from "@/shared/config/motion/variants";

import scss from "./CardBorder.module.scss";

interface CardBorderProps {
  children?: React.ReactNode;
  className?: string;
}

export const CardBorder = ({ children, className }: CardBorderProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className={classNames(scss["card-border"], className)}
    >
      <div className={scss["card-border__decors"]}>
        <span></span>

        <span></span>

        <span></span>

        <span></span>
      </div>

      <div className={scss["card-border__content"]}>{children}</div>
    </motion.div>
  );
};
