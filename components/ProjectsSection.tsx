import { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import ProjectCard from "./ProjectsSection/ProjectCard";
import { spring } from "../styles/transitions";
import { slideDirectionalVariants } from "../styles/variants";

const projects = [
  {
    actionText: "Visit",
    projectName: "Notes",
    projectURL: "https://jotfoxdev.vercel.app",
    imageURL: "/images/project-jotfox.png",
    description:
      "A simple web application for taking and organizing notes with customized categories.",
    technologies: [
      "NextJS",
      "CosmosDB",
      "Vercel",
      "Material Design",
      "Framer Motion",
    ],
  },
  {
    actionText: "Visit",
    projectName: "Homepage",
    projectURL: "https://example.com",
    imageURL: "/images/project-homepage.png",
    description: "Our homepage for showcasing members and projects.",
    technologies: ["NextJS", "Vercel", "TailwindCSS", "Framer Motion"],
  },
];

export default function ProjectsSection() {
  const [[current, direction], setCurrent] = useState([0, 1]);

  const projectIndex = wrap(0, projects.length, current);

  return (
    <motion.section
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenRight"}
      animate={"visible"}
      custom={0.3}
      className="p-8 self-center"
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
    </motion.section>
  );
}
