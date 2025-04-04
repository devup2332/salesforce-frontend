"use client";
import React, { ComponentProps } from "react";
import LoaderIcon from "../icons/LoaderIcon";
import { cn } from "@/utils/cn";

type Props = ComponentProps<"div">;

const Loader: React.FC<Props> = ({ className, ...other }) => {
  return (
    <div
      className={cn(
        "grid fixed top-0 left-0 z-10 h-screen w-screen bg-bg-2 place-items-center",
        className,
      )}
      {...other}
    >
      <LoaderIcon className="w-5 h-5 lg:w-8 lg:h-8 text-primary-900 fill-current animate-spin" />
    </div>
  );
};

export default Loader;
