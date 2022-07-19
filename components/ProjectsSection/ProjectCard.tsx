import { dragSpring, spring, springShort } from "../../styles/transitions";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../SharedComponents/Card";
import InteractiveLink from "./ProjectCard/LinkButton";
import Info from "../Icons/Info";
import Image from "next/image";
import PrevNextControls from "./ProjectCard/PrevNextControls";
import {
  projectCardPrevNextVariants,
  slideDirectionalVariants,
} from "../../styles/variants";

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
  const initialDirection = direction > 0 ? "hiddenUp" : "hiddenDown";
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
        initial={initialDirection}
        animate={"visible"}
        custom={(direction > 0 ? 0.15 : 0) + staggerOffset}
        className={
          "w-max rounded-full text-lg text-text-primary bg-background-darkish-transparent p-2 text-center self-center"
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
        // detect it as an entirely new image.
        key={current}
        transition={springShort}
        variants={projectCardPrevNextVariants}
        custom={direction}
        initial={"enter"}
        animate={"center"}
        exit={"exit"}
      >
        <Card
          className={
            "w-[32rem] h-full bg-background-dark-transparent overflow-hidden shadow-strong select-none"
          }
        >
          <motion.div
            initial={initialDirection}
            animate={"visible"}
            custom={direction > 0 ? 0 : 0.15}
            variants={slideDirectionalVariants}
            className={"relative flex flex-row justify-between p-4"}
          >
            <InteractiveLink
              actionText={actionText}
              projectName={projectName}
              projectURL={projectURL}
            />
            <PrevNextControls current={current} setCurrent={setCurrent} />
          </motion.div>
          <motion.div
            initial={initialDirection}
            animate={"visible"}
            custom={direction > 0 ? 0.05 : 0.1}
            variants={slideDirectionalVariants}
            className={"relative w-full h-[23rem]"}
          >
            <Image
              src={imageURL}
              alt={"Note taking web application"}
              layout={"fill"}
              objectFit={"contain"}
              priority
              className={"pointer-events-none"}
            />
          </motion.div>
          <motion.div
            initial={initialDirection}
            animate={"visible"}
            custom={direction > 0 ? 0.1 : 0.05}
            variants={slideDirectionalVariants}
            className={"flex flex-row gap-4 p-4"}
          >
            <Info className={"fill-text-primary"} />
            <p className={"text-xl"}>{description}</p>
          </motion.div>
          <div
            className={
              "flex flex-row gap-4 flex-wrap px-8 pb-4 pt-2 justify-center"
            }
          >
            {technologiesChips}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
