import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import { slideDirectionalVariants } from "../styles/variants";

export default function Footer() {
  return (
    <motion.section
      layout
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenDown"}
      animate={"visible"}
      custom={0.1}
      className="absolute bottom-0 flex justify-between px-2 md:px-4 py-2 w-screen bg-background-dark-transparent backdrop-blur-sm"
    >
      <p className="text-sm md:text-lg">© 2021-2022 Keymorph</p>
      <p className="text-sm md:text-lg">Made with 💜 in Florida, USA</p>
    </motion.section>
  );
}
