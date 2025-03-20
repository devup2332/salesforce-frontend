import { SvgProps } from "@/types/components/SvgProps";
import React from "react";

const LogoIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3_4)">
        <path
          d="M8.33333 11.6667C8.33333 12.1087 8.50893 12.5326 8.82149 12.8452C9.13405 13.1577 9.55797 13.3333 10 13.3333C10.442 13.3333 10.8659 13.1577 11.1785 12.8452C11.4911 12.5326 11.6667 12.1087 11.6667 11.6667C11.6667 11.2246 11.4911 10.8007 11.1785 10.4882C10.8659 10.1756 10.442 10 10 10C9.55797 10 9.13405 10.1756 8.82149 10.4882C8.50893 10.8007 8.33333 11.2246 8.33333 11.6667Z"
          stroke="#235EF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.1675 6.66669H15.8333C16.0736 6.66666 16.3111 6.7186 16.5295 6.81894C16.7478 6.91928 16.9419 7.06565 17.0984 7.24802C17.2549 7.43039 17.3701 7.64445 17.4361 7.87551C17.5021 8.10657 17.5174 8.34917 17.4808 8.58669L16.435 14.5467C16.3442 15.1371 16.045 15.6754 15.5917 16.0643C15.1383 16.4532 14.5606 16.6669 13.9633 16.6667H6.03667C5.4395 16.6667 4.86207 16.4529 4.40886 16.064C3.95565 15.6752 3.6566 15.1369 3.56583 14.5467L2.52 8.58669C2.48347 8.34917 2.49874 8.10657 2.56475 7.87551C2.63077 7.64445 2.74597 7.43039 2.90245 7.24802C3.05894 7.06565 3.25301 6.91928 3.47137 6.81894C3.68972 6.7186 3.92719 6.66666 4.1675 6.66669Z"
          stroke="#235EF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 8.33331L12.5 3.33331"
          stroke="#235EF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 8.33331L7.5 3.33331"
          stroke="#235EF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_4">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoIcon;
