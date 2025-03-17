import { cn } from "@/utils/cn";
import React, { ComponentProps, JSX } from "react";
import { UseFormRegister } from "react-hook-form";
import { Input } from "salesforce-lib";

interface FormFieldProps extends ComponentProps<typeof Input> {
  register: UseFormRegister<any>;
  name: string;
  Icon?: JSX.Element;
  label: string;
  error?: string;
  containerClassName?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  name,
  type,
  Icon,
  label,
  register,
  inputClassName,
  containerClassName,
  error,
  id,
}) => {
  return (
    <div className={cn("flex flex-col gap-2 w-full", containerClassName)}>
      <label
        className={cn(
          "font-medium text-text-1 text-sm",
          error ? "text-alert" : "",
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <Input
        placeholder={placeholder}
        type={type}
        id={id}
        Icon={Icon}
        inputClassName={cn(
          inputClassName,
          "placeholder:text-text-2",
          error ? "placeholder:text-alert" : "",
        )}
        className={cn(
          "w-full text-text-1 h-input border-stroke-1",
          error ? "border-alert placeholder:text-alert" : "",
        )}
        {...register(name, { required: true })}
      />
      {error && <p className="text-alert text-xs">{error}</p>}
    </div>
  );
};

export default FormField;
