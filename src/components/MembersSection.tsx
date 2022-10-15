import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import MemberList from "./MembersSection/MemberList";
import { slideDirectionalVariants } from "../styles/variants";
import { Member } from "../data";
import Groups from "./Icons/Groups";

interface Props {
  sortedMembers: Member[];
}

export default function MembersSection({ sortedMembers }: Props) {
  return (
    <motion.section
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenLeft"}
      animate={"visible"}
      custom={0.3}
      className="p-4 md:p-8"
    >
      <h6 className="flex flex-row text-lg sm:text-2xl gap-2 mb-4 items-center">
        <Groups className={"w-8 md:w-12 fill-text-primary"} />
        Who are we?
      </h6>
      <MemberList sortedMembers={sortedMembers} />
    </motion.section>
  );
}
