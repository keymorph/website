import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import { useEffect, useState } from "react";
import { slideDirectionalVariants } from "../styles/variants";

export default function MainHeader() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: document.documentElement.scrollHeight,
    });
  }, []);

  return (
    <section className="p-8">
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          top: 0,
          right: windowDimensions.width - 500,
          bottom: windowDimensions.height - 300,
        }}
        transition={spring}
        variants={slideDirectionalVariants}
        initial={"hiddenLeft"}
        animate={"visible"}
        custom={0.1}
      >
        <h1 className="text-8xl font-bold text-primary">Keymorph</h1>
      </motion.div>
      <motion.div
        transition={spring}
        variants={slideDirectionalVariants}
        initial={"hiddenLeft"}
        animate={"visible"}
        custom={0.2}
        className={"mt-10 text-4xl"}
      >
        <h5>
          A micro development collective, <br />
          focused on creating apps that are&nbsp;
          <u>
            <b>useful</b>
          </u>
          .
        </h5>
      </motion.div>
    </section>
  );
}
