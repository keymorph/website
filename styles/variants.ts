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

export const slideDownVariants = {
  hidden: ({ direction }: { direction: number }) => ({
    opacity: 0,
    y: direction > 0 ? -100 : 100,
  }),
  visible: ({ offset }: { offset: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...spring,
      delay: offset,
    },
  }),
};
