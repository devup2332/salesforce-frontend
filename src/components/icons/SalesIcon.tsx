import { SvgProps } from "@/types/components/SvgProps";
import React from "react";

const SalesIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    </svg>
  );
};

export default SalesIcon;
