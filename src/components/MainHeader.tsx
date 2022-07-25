import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import { useEffect, useState } from "react";
import { slideDirectionalVariants } from "../styles/variants";

export default function MainHeader() {
  //#region Hooks
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
  //#endregion
  return (
    <section className="p-4 md:p-8">
      <motion.h1
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
        className="text-5xl md:text-6xl lg:text-8xl font-bold text-primary"
      >
        Keymorph
      </motion.h1>
      <motion.h5
        transition={spring}
        variants={slideDirectionalVariants}
        initial={"hiddenLeft"}
        animate={"visible"}
        custom={0.2}
        className={"mt-4 md:mt-6 lg:mt-10 sm:text-xl md:text-2xl lg:text-4xl"}
      >
        A micro development collective, <br />
        focused on creating apps that are&nbsp;
        <u>
          <b>useful</b>
        </u>
        .
      </motion.h5>
    </section>
  );
}
