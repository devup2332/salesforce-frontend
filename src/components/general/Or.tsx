import React from "react";

type OrProps = {
  text: string;
};

const Or: React.FC<OrProps> = ({ text }) => {
  return (
    <div className="relative grid place-items-center">
      <span className="px-4 bg-bg-1 z-10 text-text-2">{text}</span>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stroke-2" />
    </div>
  );
};

export default Or;
