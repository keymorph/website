import { useState } from "react";
import MemberCard from "./MemberList/MemberCard";
import { Member } from "../../models";

interface Props {
  sortedMembers: Member[];
}

export default function MemberList({ sortedMembers }: Props) {
  const [dragging, setDragging] = useState(false);

  return (
    <div className="flex flex-wrap flex-row gap-10 justify-center">
      {sortedMembers.map((member, index) => (
        <MemberCard
          key={index}
          index={index}
          name={member.name}
          imageURL={member.imageURL}
          websiteURL={member.websiteURL}
          githubURL={member.githubURL}
          linkedinURL={member.linkedinURL}
          alreadyDragging={dragging}
          setAlreadyDragging={setDragging}
        />
      ))}
    </div>
  );
}
