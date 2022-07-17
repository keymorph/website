import { motion } from "framer-motion";
import { spring } from "../../../styles/transitions";
import ArrowLeft from "../../Icons/ArrowLeft";
import ArrowRight from "../../Icons/ArrowRight";

interface Props {
  current: number;
  setCurrent: (value: [number, number]) => void;
}

export default function PrevNextControls({ current, setCurrent }: Props) {
  const paginate = (newDirection: number) => {
    setCurrent([current + newDirection, newDirection]);
  };

  const arrowStyles =
    "fill-text-secondary group-hover:fill-text-primary transition-colors duration-200 ease-in-out rotate-90";

  return (
    <div className="flex flex-row gap-1 items-center justify-center">
      <motion.button
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className={"group"}
      >
        <ArrowLeft className={arrowStyles} />
      </motion.button>
      <motion.button
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className={"group"}
      >
        <ArrowRight className={arrowStyles} />
      </motion.button>
    </div>
  );
}
