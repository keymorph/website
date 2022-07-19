import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import Groups from "./Icons/Groups";
import MemberList from "./MembersSection/MemberList";
import { slideDirectionalVariants } from "../styles/variants";

export default function MembersSection() {
  return (
    <motion.section
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenLeft"}
      animate={"visible"}
      custom={0.3}
      className="p-8"
    >
      <h6 className="flex flex-row text-2xl gap-2 mb-4 items-center">
        <Groups className={"fill-text-primary"} />
        Who are we?
      </h6>
      <MemberList />
    </motion.section>
  );
}
