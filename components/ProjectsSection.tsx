import ProjectCard from "./ProjectsSection/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <motion.section className="p-8 self-center">
      <ProjectCard
        actionText={"Visit"}
        projectName={"Notes"}
        projectURL={"https://jotfoxdev.vercel.app/"}
        imageURL={"/images/project-jotfox.png"}
        technologies={["NextJS", "CosmosDB", "Vercel", "Material Design"]}
      />
    </motion.section>
  );
}
