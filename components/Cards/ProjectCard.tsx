import Card from "./Card";
import { spring } from "../../styles/transitions";
import { motion } from "framer-motion";

export default function ProjectCard() {
  return (
    <motion.div
      transition={spring}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <Card></Card>
    </motion.div>
  );
}
