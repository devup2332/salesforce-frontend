"use client";
import React from "react";
import { Button } from "salesforce-lib";

type Props = {
  title: string;
  description?: string;
  Icon: React.ReactNode;
  bottomDescription?: boolean;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({
  title,
  description,
  Icon,
  children,
  bottomDescription = false,
}) => {
  return (
    <div className="rounded-xl border-border-1 border-[1px] overflow-x-auto shadow-sm px-4 py-3 bg-bg-1">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-medium">{title}</h1>
          {description && !bottomDescription && (
            <p className="text-sm text-text-2 mt-1">{description}</p>
          )}
        </div>
        <Button variant="icon" className="p-2 rounded-full hover:bg-bg-2">
          {Icon}
        </Button>
      </div>
      {children && (
        <div className="overflow-x-auto customScroll">{children}</div>
      )}
      {description && bottomDescription && (
        <p className="text-sm text-text-2 mt-1">{description}</p>
      )}
    </div>
  );
};

export default Card;
