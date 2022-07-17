import { dragSpring, spring } from "../../styles/transitions";
import { motion } from "framer-motion";
import { useRef } from "react";
import Card from "../SharedComponents/Card";
import LinkButton from "./ProjectCard/LinkButton";
import Info from "../Icons/Info";
import Image from "next/image";

interface Props {
  actionText: string;
  projectName: string;
  projectURL: string;
  imageURL: string;
  technologies: string[];
}

export default function ProjectCard({
  actionText,
  projectName,
  projectURL,
  imageURL,
  technologies,
}: Props) {
  const chipsContainerRef = useRef<HTMLDivElement>(null);

  const technologiesChips = technologies.map((technology, index) => (
    <motion.div
      key={index}
      drag
      dragConstraints={chipsContainerRef}
      dragTransition={dragSpring}
      whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 1 }}
      transition={spring}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ...spring, delay: 0.6 + index * 0.05 },
      }}
      className={
        "w-max rounded-full text-lg text-text-primary bg-background-darkish-transparent p-2 text-center self-center"
      }
    >
      <h6>{technology}</h6>
    </motion.div>
  ));
  const slideDownVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: (offset: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...spring,
        delay: offset,
      },
    }),
  };

  return (
    <motion.div
      transition={spring}
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ...spring, delay: 0.3 },
      }}
    >
      <Card
        className={
          "w-[26rem] h-full bg-background-dark-transparent overflow-hidden shadow-strong select-none"
        }
      >
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          custom={0.3}
          variants={slideDownVariants}
          className={"relative flex flex-row justify-between p-4"}
        >
          <LinkButton
            actionText={actionText}
            projectName={projectName}
            projectURL={projectURL}
          />
        </motion.div>
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          custom={0.4}
          variants={slideDownVariants}
          className={"relative w-full h-72"}
        >
          <Image
            src={imageURL}
            alt={"Note taking web application"}
            layout={"fill"}
            objectFit={"contain"}
          />
        </motion.div>
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          custom={0.5}
          variants={slideDownVariants}
          className={"flex flex-row gap-4 p-4"}
        >
          <Info className={"fill-text-primary"} />
          <p className={"text-xl"}>
            A simple web application for taking and organizing notes with
            customized categories.
          </p>
        </motion.div>
        <div
          ref={chipsContainerRef}
          className={"flex flex-row gap-4 flex-wrap px-16 pb-4 justify-center"}
        >
          {technologiesChips}
        </div>
      </Card>
    </motion.div>
  );
}
