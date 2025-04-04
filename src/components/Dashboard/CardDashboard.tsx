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

const CardDashboard: React.FC<Props> = ({
  className,
  Icon,
  textDescription,
  amount,
  title,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "rounded-md bg-bg-1 py-3 px-4 grid  group cursor-pointer transition-[background-color] shadow-sm border-[#94a3b8]/40 border-[1px]",
        className,
      )}
      {...rest}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-text-1 text-lg font-medium">{title}</h1>

        <Button
          variant="icon"
          className="bg-bg-2 rounded-full w-10 h-10 transition-none"
        >
          <Icon className="w-4 h-4" />
        </Button>
      </div>
      <span className="text-[40px] text-text-1 font-extrabold">{amount}</span>
      <p className="text-xs transition-none">{textDescription}</p>
    </div>
  );
};

export default CardDashboard;
