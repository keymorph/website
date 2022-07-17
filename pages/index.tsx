import Groups from "../components/Icons/Groups";
import MemberList from "../components/MemberList";
import { spring } from "../styles/transitions";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [renderMemberList, setRenderMemberList] = useState(false);

  return (
    <div className="flex flex-col justify-between text-text-primary h-screen w-screen overflow-hidden">
      <div className="p-8">
        <h1 className="text-8xl font-bold">Keymorph</h1>
        <h5 className="mt-10 text-4xl">
          A micro development collective, <br />
          focused on creating apps that are&nbsp;
          <u>
            <b>useful</b>
          </u>
          .
        </h5>
      </div>
      <motion.div
        className="p-8"
        layout
        whileDrag={{ scale: 1.1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={spring}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...spring, delay: 0.5 },
        }}
        onAnimationComplete={() => setRenderMemberList(true)}
      >
        <h6 className="flex flex-row text-2xl gap-2 mb-4 items-center">
          <Groups className={"fill-text-primary"} />
          Who are we?
        </h6>
        {renderMemberList && <MemberList />}
      </motion.div>
      <div className="flex justify-between px-8 py-4 bg-background-dark-transparent">
        <p className="">© 2021-2022 Keymorph. All rights reserved.</p>
        <p className="">Made with 💜 in Florida, USA</p>
      </div>
    </div>
  );
}
