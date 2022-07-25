import { dragSpring, spring, springShort } from "../../styles/transitions";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../SharedComponents/Card";
import VisitButton from "./ProjectCard/VisitButton";
import Info from "../Icons/Info";
import Image from "next/image";
import PrevNextControls from "./ProjectCard/PrevNextControls";
import {
  projectCardPrevNextVariants,
  slideDirectionalVariants,
} from "../../styles/variants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface Props {
  actionText: string;
  projectName: string;
  projectURL: string;
  imageURL: string;
  description: string;
  technologies: string[];
  direction: number;
  current: number;
  setCurrent: (value: [number, number]) => void;
}

export default function ProjectCard({
  actionText,
  projectName,
  projectURL,
  imageURL,
  description,
  technologies,
  direction,
  current,
  setCurrent,
}: Props) {
  //#region Hooks
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  //#endregion

  let [initialDirection, exitDirection, initialContentDirection] = ["", "", ""];
  if (isDesktop) {
    initialDirection = "hiddenY";
    exitDirection = "exitY";
    initialContentDirection = direction > 0 ? "hiddenUp" : "hiddenDown";
  } else {
    initialDirection = "hiddenX";
    exitDirection = "exitX";
    initialContentDirection = direction > 0 ? "hiddenLeft" : "hiddenRight";
  }
  const technologiesChips = technologies.map((technology, index) => {
    // Calculates the offset for a normal or reversed stagger based on the direction
    const staggerOffset =
      (direction > 0 ? index : technologies.length - index) * 0.05;

    return (
      <motion.div
        key={index}
        drag
        dragSnapToOrigin
        dragTransition={dragSpring}
        whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 1 }}
        transition={spring}
        variants={slideDirectionalVariants}
        initial={initialContentDirection}
        animate={"visible"}
        custom={(direction > 0 ? 0.15 : 0) + staggerOffset}
        className={
          "w-max rounded-full text-sm md:text-lg text-text-primary bg-background-darkish-transparent p-2 text-center self-center"
        }
      >
        <h6>{technology}</h6>
      </motion.div>
    );
  });

  return (
    <AnimatePresence custom={direction} exitBeforeEnter>
      <motion.div
        // By passing an absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
        // detect it as an entirely new element.
        key={current}
        transition={springShort}
        variants={projectCardPrevNextVariants}
        custom={direction}
        initial={initialDirection}
        animate={"visible"}
        exit={exitDirection}
      >
        <Card
          className={
            "w-full max-w-[32rem] sm:min-w-[32rem] bg-background-dark-transparent overflow-hidden shadow-strong select-none"
          }
        >
          <motion.div
            initial={initialContentDirection}
            animate={"visible"}
            custom={direction > 0 ? 0 : 0.15}
            variants={slideDirectionalVariants}
            className={"relative flex flex-row justify-between p-4"}
          >
            <VisitButton
              actionText={actionText}
              projectName={projectName}
              projectURL={projectURL}
            />
            <PrevNextControls current={current} setCurrent={setCurrent} />
          </motion.div>
          <motion.div
            initial={initialContentDirection}
            animate={"visible"}
            custom={direction > 0 ? 0.05 : 0.1}
            variants={slideDirectionalVariants}
          >
            <Image
              src={imageURL}
              alt={"Note taking web application"}
              width="100%"
              height="70%"
              layout={"responsive"}
              objectFit={"contain"}
              priority
              className={"pointer-events-none"}
            />
          </motion.div>
          <motion.p
            initial={initialContentDirection}
            animate={"visible"}
            custom={direction > 0 ? 0.1 : 0.05}
            variants={slideDirectionalVariants}
            className={"p-4 text-md md:text-lg lg:text-xl text-center"}
          >
            <Info
              className={
                "w-5 md:w-6 mr-2 md:mr-4 fill-text-primary inline-block"
              }
            />
            {description}
          </motion.p>
          <div
            className={"flex flex-row gap-4 flex-wrap p-4 pt-2 justify-center"}
          >
            {technologiesChips}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
