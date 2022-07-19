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
      className="absolute bottom-0 flex justify-between px-8 py-4 w-screen bg-background-dark-transparent backdrop-blur-sm"
    >
      <p className="">© 2021-2022 Keymorph. All rights reserved.</p>
      <p className="">Made with 💜 in Florida, USA</p>
    </motion.section>
  );
}
