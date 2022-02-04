// Nav Section

export const ContainerNav = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 3.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const titleAnimNav = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Intro Section

export const titleAnim = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const titleAnim2 = {
  hidden: { x: 20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay: 2 },
  },
};

export const Container = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.75,
    },
  },
};

export const socialContainer = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      delay: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 1 } },
};

export const photoAnim = {
  hidden: { scale: 1.75, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,

    transition: { ease: "easeOut", duration: 2, delay: 3 },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 0.8, transition: { duration: 1 } },
  show: { opacity: 1, scale: 1, transition: { duration: 1 } },
};
