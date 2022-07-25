import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={"flex flex-col backdrop-blur-sm rounded-2xl " + className}>
      {children}
    </div>
  );
}
