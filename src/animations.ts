export const listAnim = {
  initial: { x: "-150%" },
  animate: { x: "0%", transition: { duration: 0.2, type: "tween" } },
  exit: {
    x: "1000%",
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

export const lineAnim = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: { duration: 0.4, type: "tween", ease: "easeIn" },
  },
  exit: {
    width: "0%",
    transition: { duration: 0.3, type: "tween", ease: "easeOut" },
  },
};

export const staggerAnim = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
