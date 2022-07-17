import { useState } from "react";
import { motion } from "framer-motion";
import { spring } from "../styles/transitions";
import Groups from "./Icons/Groups";
import MemberList from "./MembersSection/MemberList";

export default function MembersSection() {
  const [renderMemberList, setRenderMemberList] = useState(false);

  return (
    <motion.div
      className="p-8"
      layout
      initial={{ opacity: 0, x: -100 }}
      transition={spring}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ...spring, delay: 0.3 },
      }}
      onAnimationComplete={() => setRenderMemberList(true)}
    >
      <h6 className="flex flex-row text-2xl gap-2 mb-4 items-center">
        <Groups className={"fill-text-primary"} />
        Who are we?
      </h6>
      {renderMemberList && <MemberList />}
    </motion.div>
  );
}
