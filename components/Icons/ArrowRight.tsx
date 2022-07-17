import { SVGProps } from "react";

export default function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 0 20 20"
      width={48}
      {...props}
    >
      <path fill="none" d="M0 0h20v20H0z" />
      <path d="M5.29 17.29c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41L6.71 2.71a.996.996 0 0 0-1.41 0c-.4.39-.4 1.02-.01 1.41L11.17 10l-5.88 5.88a.996.996 0 0 0 0 1.41z" />
    </svg>
  );
}
