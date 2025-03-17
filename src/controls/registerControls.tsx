import EmailIcon from "@/components/icons/EmailIcon";
import {
  Step1RegisterControl,
  Step2RegisterControl,
  Step3RegisterControl,
} from "@/types/controls/register";

export const step1controls: Step1RegisterControl[] = [
  {
    name: "firstName",
    label: "register.steps.1.fields.firstName.label",
    type: "text",
    placeholder: "register.steps.1.fields.firstName.placeholder",
  },
  {
    name: "lastName",
    label: "register.steps.1.fields.lastName.label",
    type: "text",
    placeholder: "register.steps.1.fields.lastName.placeholder",
  },
  {
    name: "email",
    label: "register.steps.1.fields.email.label",
    type: "email",
    placeholder: "register.steps.1.fields.email.placeholder",
    Icon: EmailIcon,
  },
];

export const step2Controls: Step2RegisterControl[] = [
  {
    name: "businessName",
    label: "register.steps.2.fields.businessName.label",
    type: "text",
    placeholder: "register.steps.2.fields.businessName.placeholder",
  },
];
export const step3Controls: Step3RegisterControl[] = [
  {
    name: "password",
    label: "register.steps.3.fields.password.label",
    type: "password",
    placeholder: "register.steps.3.fields.password.placeholder",
  },
  {
    name: "confirmPassword",
    label: "register.steps.3.fields.confirmPassword.label",
    type: "password",
    placeholder: "register.steps.3.fields.confirmPassword.placeholder",
  },
];
