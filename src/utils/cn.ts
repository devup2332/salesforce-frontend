import { ClassNameValue, twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cn = (...classes: ClassNameValue[]) => clsx(twMerge(classes));
