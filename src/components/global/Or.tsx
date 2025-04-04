import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

interface OrProps extends ComponentProps<"div"> {
  text: string;
  containerClassName?: string;
}

const Or: React.FC<OrProps> = ({
  text,
  className,
  containerClassName,
  ...other
}) => {
  return (
    <div
      className={cn("relative grid place-items-center", containerClassName)}
      {...other}
    >
      <span className={cn("px-4 bg-bg-1 z-10 text-text-2", className)}>
        {text}
      </span>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stroke-2" />
    </div>
  );
};

export default Or;
