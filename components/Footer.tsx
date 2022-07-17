import { motion } from "framer-motion";
import { spring } from "../styles/transitions";

export default function Footer() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100 }}
      transition={spring}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ...spring, delay: 0.1 },
      }}
      className="flex justify-between px-8 py-4 bg-background-dark-transparent w-screen"
    >
      <p className="">© 2021-2022 Keymorph. All rights reserved.</p>
      <p className="">Made with 💜 in Florida, USA</p>
    </motion.div>
  );
}
