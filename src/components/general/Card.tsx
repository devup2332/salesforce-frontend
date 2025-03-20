import { SvgProps } from "@/types/components/SvgProps";
import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import { Button } from "salesforce-lib";

interface Props extends ComponentProps<"div"> {
  Icon: React.FC<SvgProps>;
  textButton: string;
  title: string;
  textDescription: string;
  amount: number;
}

const Card: React.FC<Props> = ({
  className,
  textButton,
  Icon,
  textDescription,
  amount,
  title,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "rounded-md bg-bg-1 py-3 px-4 grid gap-3 group transition-all cursor-pointer",
        className,
      )}
      {...rest}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-text-1 text-lg font-medium group-hover:text-white">
          {title}
        </h1>

        <Button
          variant="icon"
          className="bg-bg-2 rounded-full w-10 h-10 group-hover:bg-white"
        >
          <Icon className="w-4 h-4 group-hover:text-primary-900" />
        </Button>
      </div>
      <span className="text-[40px] text-text-1 font-extrabold group-hover:text-white">
        {amount}
      </span>
      <p className="group-hover:text-white text-xs">{textDescription}</p>
      <Button
        variant="filled"
        className="w-full text-sm h-input bg-bg-2 text-text-1 group-hover:text-primary-900 group-hover:bg-white"
      >
        {textButton}
      </Button>
    </div>
  );
};

export default Card;
