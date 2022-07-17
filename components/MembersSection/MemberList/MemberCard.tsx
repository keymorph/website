import Card from "../../SharedComponents/Card";
import Image from "next/image";
import Website from "../../Icons/Website";
import Linkedin from "../../Icons/Linkedin";
import Github from "../../Icons/Github";
import { motion } from "framer-motion";
import { dragSpring, spring } from "../../../styles/transitions";
import { useState } from "react";

interface Props {
  index?: number;
  name: string;
  imageURL: string;
  websiteURL: string;
  githubURL: string;
  linkedinURL: string;
  alreadyDragging: boolean;
  setAlreadyDragging: (value: boolean) => void;
}

export default function MemberCard({
  index = 0,
  name,
  imageURL,
  websiteURL,
  githubURL,
  linkedinURL,
  alreadyDragging,
  setAlreadyDragging,
}: Props) {
  const [draggingCard, setDraggingCard] = useState(false);

  const clickableLinks = [websiteURL, githubURL, linkedinURL];
  const clickableLinkClassName =
    "fill-text-secondary hover:fill-text-primary transition-fill duration-200 ease-in-out";

  return (
    <motion.div
      drag={!alreadyDragging || draggingCard}
      dragSnapToOrigin
      dragTransition={dragSpring}
      layout={!draggingCard} // Only do layout animations when not dragging
      transition={spring}
      whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 1 }}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        zIndex: draggingCard ? 1 : 0,
        y: 0,
        transition: { ...spring, delay: 0.4 + index * 0.05 }, // Added 0.4 offset to wait for the previous page sections to transition
      }}
      onDragStart={() => {
        setAlreadyDragging(true);
        setDraggingCard(true);
      }}
      onDragEnd={() => {
        setDraggingCard(false);
      }}
      onDragTransitionEnd={() => {
        setAlreadyDragging(false);
      }}
    >
      <Card
        className={
          "w-80 bg-background-dark-transparent overflow-hidden shadow-strong select-none"
        }
      >
        <div
          className={
            "flex flex-row px-4 py-2 bg-background-darkish-transparent"
          }
        >
          <p className="font-bold text-lg">{name}</p>
        </div>
        <div className={"flex flex-row gap-4 px-4 py-4"}>
          <Image
            src={imageURL}
            width={"400"}
            height={"100%"}
            className={"rounded-2xl object-cover"}
            alt={"Linkedin image of Raciel Antela Pardo"}
            draggable={false}
          />
          <div className={"flex flex-col gap-4 justify-center"}>
            {clickableLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={spring}
                href={link}
                target={"_blank"}
                rel="noreferrer"
              >
                {link === websiteURL && (
                  <Website className={clickableLinkClassName} />
                )}
                {link === githubURL && (
                  <Github className={clickableLinkClassName} />
                )}
                {link === linkedinURL && (
                  <Linkedin className={clickableLinkClassName} />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
