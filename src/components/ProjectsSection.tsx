import { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import ProjectCard from "./ProjectsSection/ProjectCard";
import { spring } from "../styles/transitions";
import { slideDirectionalVariants } from "../styles/variants";
import { projects } from "../models";
import Carousel from "./Icons/Carousel";

export default function ProjectsSection() {
  const [[current, direction], setCurrent] = useState([0, 1]);

  const projectIndex = wrap(0, projects.length, current);

  return (
    <motion.section
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenLeft"}
      animate={"visible"}
      custom={0.3}
      className="p-8 flex flex-col"
    >
      <h6 className="flex flex-row text-lg sm:text-2xl gap-2 mb-4 items-center">
        <Carousel className={"w-8 md:w-12 fill-text-primary"} />
        Our projects
      </h6>
      <motion.div
        transition={spring}
        variants={slideDirectionalVariants}
        initial={"hiddenLeft"}
        animate={"visible"}
        custom={0.4}
        className={"self-center xl:self-start"}
      >
        <ProjectCard
          actionText={projects[projectIndex].actionText}
          projectName={projects[projectIndex].projectName}
          projectURL={projects[projectIndex].projectURL}
          imageURL={projects[projectIndex].imageURL}
          description={projects[projectIndex].description}
          technologies={projects[projectIndex].technologies}
          direction={direction}
          current={current}
          setCurrent={setCurrent}
        />
      </motion.div>
    </motion.section>
  );
}
