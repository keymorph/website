import { motion } from "framer-motion";
import { spring } from "../styles/transitions";

export default function MainHeader() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={spring}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...spring, delay: 0.1 },
        }}
      >
        <h1 className="text-8xl font-bold">Keymorph</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={spring}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...spring, delay: 0.2 },
        }}
      >
        <h5 className="mt-10 text-4xl">
          A micro development collective, <br />
          focused on creating apps that are&nbsp;
          <u>
            <b>useful</b>
          </u>
          .
        </h5>
      </motion.div>
    </div>
  );
}
