import { spring } from "./transitions";

export const projectCardPrevNextVariants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? -200 : 200,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? -200 : 200,
      opacity: 0,
    };
  },
};

export const slideDirectionalVariants = {
  hiddenDown: {
    opacity: 0,
    y: 100,
  },
  hiddenUp: {
    opacity: 0,
    y: -100,
  },
  hiddenLeft: {
    opacity: 0,
    x: -100,
  },
  hiddenRight: {
    opacity: 0,
    x: 100,
  },
  visible: (offset: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ...spring,
      delay: offset,
    },
  }),
};
