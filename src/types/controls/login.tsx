import { LoginSchemaFields } from "@/schemas/LoginSchema";
import { SvgProps } from "../components/SvgProps";

export type LoginControl = {
  label: string;
  type: string;
  placeholder: string;
  name: LoginSchemaFields;
  Icon?: React.FC<SvgProps>;
};
