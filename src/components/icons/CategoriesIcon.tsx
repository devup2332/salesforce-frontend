import { SvgProps } from "@/types/components/SvgProps";
import React from "react";

const CategoriesIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_30_107)">
        <path
          d="M12.5 15.8334C12.5 16.2754 12.6756 16.6993 12.9882 17.0119C13.3007 17.3244 13.7246 17.5 14.1667 17.5C14.6087 17.5 15.0326 17.3244 15.3452 17.0119C15.6577 16.6993 15.8333 16.2754 15.8333 15.8334C15.8333 15.3913 15.6577 14.9674 15.3452 14.6548C15.0326 14.3423 14.6087 14.1667 14.1667 14.1667C13.7246 14.1667 13.3007 14.3423 12.9882 14.6548C12.6756 14.9674 12.5 15.3913 12.5 15.8334Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16667 4.16667C4.16667 4.60869 4.34226 5.03262 4.65482 5.34518C4.96738 5.65774 5.39131 5.83333 5.83333 5.83333C6.27536 5.83333 6.69928 5.65774 7.01184 5.34518C7.3244 5.03262 7.5 4.60869 7.5 4.16667C7.5 3.72464 7.3244 3.30072 7.01184 2.98816C6.69928 2.67559 6.27536 2.5 5.83333 2.5C5.39131 2.5 4.96738 2.67559 4.65482 2.98816C4.34226 3.30072 4.16667 3.72464 4.16667 4.16667Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 11.6667C2.5 11.6667 3.00417 7.13332 4.40333 5.11499M7.2325 5.13666C9.01333 7.34666 11.0217 12.7308 12.7992 14.9025"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6233 15.0316C16.2083 14.2983 16.8333 12.065 17.5 8.33331"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_30_107">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CategoriesIcon;
