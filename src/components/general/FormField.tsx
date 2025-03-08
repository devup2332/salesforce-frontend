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
}

const FormField: React.FC<FormFieldProps> = ({
	placeholder,
	name,
	type,
	Icon,
	label,
	register,
	error,
	id,
}) => {
	return (
		<div className="flex flex-col gap-2 w-full">
			<label className="font-medium" htmlFor={name}>
				{label}
			</label>
			<Input
				placeholder={placeholder}
				type={type}
				id={id}
				Icon={Icon}
				inputClassName={cn(error ? "placeholder:text-alert" : "")}
				className={cn(
					"w-full",
					error ? "border-alert placeholder:text-alert" : "",
				)}
				{...register(name)}
			/>
			{error && <p className="text-alert text-xs">{error}</p>}
		</div>
	);
};

export default FormField;
