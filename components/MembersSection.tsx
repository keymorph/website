import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import Groups from "./Icons/Groups";
import MemberList from "./MembersSection/MemberList";

export default function MembersSection() {
  return (
    <motion.section
      className="p-8"
      initial={{ opacity: 0, x: -100 }}
      transition={spring}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ...spring, delay: 0.3 },
      }}
    >
      <h6 className="flex flex-row text-2xl gap-2 mb-4 items-center">
        <Groups className={"fill-text-primary"} />
        Who are we?
      </h6>
      <MemberList />
    </motion.section>
  );
}
