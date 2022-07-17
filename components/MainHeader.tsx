import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import { useEffect, useState } from "react";

export default function MainHeader() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
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
          bottom: windowDimensions.height - 200,
        }}
        initial={{ opacity: 0, x: -100 }}
        transition={spring}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...spring, delay: 0.1 },
        }}
      >
        <h1 className="text-8xl font-bold text-primary">Keymorph</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={spring}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...spring, delay: 0.2 },
        }}
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
