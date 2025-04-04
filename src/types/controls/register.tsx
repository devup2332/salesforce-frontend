import { ComponentProps } from "react";
import { SvgProps } from "../components/SvgProps";
import {
  Step1RegisterFields,
  Step2RegisterFields,
  Step3RegisterFields,
} from "@/schemas/RegisterSchema";
import FormField from "@/components/global/FormField";

export type Step1RegisterControl = {
  label: string;
  type: ComponentProps<typeof FormField>["type"];
  placeholder: string;
  name: Step1RegisterFields;
  Icon?: React.FC<SvgProps>;
};
export type Step2RegisterControl = {
  label: string;
  type: ComponentProps<typeof FormField>["type"];
  placeholder: string;
  name: Step2RegisterFields;
  Icon?: React.FC<SvgProps>;
};
export type Step3RegisterControl = {
  label: string;
  type: ComponentProps<typeof FormField>["type"];
  placeholder: string;
  name: Step3RegisterFields;
  Icon?: React.FC<SvgProps>;
};
