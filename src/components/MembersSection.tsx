import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import MemberList from "./MembersSection/MemberList";
import { slideDirectionalVariants } from "../styles/variants";
import { Member } from "../models";
import Carousel from "./Icons/Carousel";

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
      {/*"w-8 md:w-12 fill-text-primary"*/}
      <h6 className="flex flex-row sm:text-lg md:text-xl lg:text-2xl gap-2 mb-4 items-center">
        <Carousel className={"w-8 md:w-12 fill-text-primary"} />
        Who are we?
      </h6>
      <MemberList sortedMembers={sortedMembers} />
    </motion.section>
  );
}
