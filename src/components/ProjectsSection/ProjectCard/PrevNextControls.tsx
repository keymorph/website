import { motion } from "framer-motion";
import { spring } from "../../../styles/transitions";
import Arrow from "../../Icons/Arrow";

interface Props {
  current: number;
  setCurrent: (value: [number, number]) => void;
}

export default function PrevNextControls({ current, setCurrent }: Props) {
  const paginate = (newDirection: number) => {
    setCurrent([current + newDirection, newDirection]);
  };

  const arrowStyles =
    "w-8 md:w-10 fill-text-secondary group-hover:fill-text-primary transition-colors duration-200 ease-in-out";

  return (
    <div className="flex flex-row gap-2 md:gap-4 items-center justify-center">
      <motion.button
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className={"group"}
      >
        <Arrow className={arrowStyles + " rotate-0 xl:rotate-90"} />
      </motion.button>
      <motion.button
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className={"group"}
      >
        <Arrow className={arrowStyles + " rotate-180 xl:-rotate-90"} />
      </motion.button>
    </div>
  );
}
