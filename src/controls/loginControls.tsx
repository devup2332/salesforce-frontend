import EmailIcon from "@/components/icons/EmailIcon";
import { LoginControl } from "@/types/controls/login";

export const loginControls: LoginControl[] = [
  {
    label: "login.fields.email.label",
    type: "text",
    placeholder: "login.fields.email.placeholder",
    name: "email",
    Icon: EmailIcon,
  },
  {
    label: "login.fields.password.label",
    type: "password",
    placeholder: "login.fields.password.placeholder",
    name: "password",
  },
];
