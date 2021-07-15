export const pageAnimationLogin = {
  hidden: {
    opacity: 0,
    y: 1000,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: 1000,
    transition: {
      duration: 1,
    },
  },
};
export const pageAnimationSign = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -1000,
    transition: {
      duration: 1,
    },
  },
};
export const pageAnimationPanel = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -1000,
    transition: {
      duration: 1,
    },
  },
};
