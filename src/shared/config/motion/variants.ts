import { easeOut } from "framer-motion";

export const defaultVisible = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easeOut,
  },
};

export const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: defaultVisible,
};

export const footerBlockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: defaultVisible,
};

export const menuVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: defaultVisible,
};

export const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

export const textBlockVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: defaultVisible,
};

export const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const textItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const heroTitleVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

export const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easeOut,
      delay: 0.15,
    },
  },
};

export const heroGradientVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
      delay: 0.35,
    },
  },
};
