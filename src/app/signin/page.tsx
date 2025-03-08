"use client";
import Or from "@/components/general/Or";
import GoogleIcon from "@/components/icons/GoogleIcon";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Button } from "salesforce-lib";
import FormField from "@/components/general/FormField";
import EmailIcon from "@/components/icons/EmailIcon";
import EyeOpen from "@/components/icons/EyeOpen";
import { SvgProps } from "@/types/components/SvgProps";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	SignInSchema,
	SignInSchemaFields,
	SignInSchemaType,
} from "@/schemas/SignInSchema";
import { cn } from "@/utils/cn";
import EyeClosed from "@/components/icons/EyeClosed";
import Link from "next/link";

type SignInControl = {
	label: string;
	type: string;
	placeholder: string;
	name: SignInSchemaFields;
	Icon: React.FC<SvgProps>;
};

const SignInPage = () => {
	const {
		register,

		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>({
		resolver: zodResolver(SignInSchema),
	});
	const [showPass, setShowPass] = useState(false);
	const signInControls: SignInControl[] = [
		{
			label: "signin.fields.email.label",
			type: "text",
			placeholder: "signin.fields.email.placeholder",
			name: "email",
			Icon: EmailIcon,
		},
		{
			label: "signin.fields.password.label",
			type: "password",
			placeholder: "signin.fields.password.placeholder",
			name: "password",
			Icon: showPass ? EyeOpen : EyeClosed,
		},
	];
	const { t } = useTranslation();

	const signIn = (credentials: SignInSchemaType) => {
		console.log(credentials);
	};
	return (
		<div className="bg-bg-2 text- h-screen grid place-items-center text-sm">
			<form
				className="w-11/12 bg-bg-1 flex flex-col gap-4 px-8 py-6 rounded-md max-w-sm"
				onSubmit={handleSubmit(signIn)}
			>
				<h1 className="text-text-1 text-3xl font-bold">{t("signin.title")}</h1>
				<Button
					variant="outlined"
					type="button"
					className="flex gap-4 w-full justify-center items-center h-input"
				>
					<GoogleIcon />
					<span className="text-text-2">{t("signin.buttons.google")}</span>
				</Button>
				<Or text={t("signin.or")} />
				{signInControls.map(({ Icon, ...control }) => {
					const error = errors[control.name]?.message
						? t(
								`signin.fields.${control.name}.errors.${errors[control.name]?.type}`,
							)
						: "";
					return (
						<FormField
							key={control.name}
							placeholder={t(control.placeholder)}
							label={t(control.label)}
							name={control.name}
							id={control.name}
							Icon={
								<Icon
									onClick={() =>
										control.name === "password" && setShowPass(!showPass)
									}
									className={cn(
										"stroke-current text-text-2 cursor-pointer",
										error && "text-alert",
									)}
								/>
							}
							register={register}
							type={
								control.name === "password"
									? showPass
										? "text"
										: "password"
									: control.type
							}
							error={error}
						/>
					);
				})}
				<p className="text-text-1 font-medium">
					{t("signin.links.forgotPassword")}
				</p>
				<Button
					type="submit"
					variant="filled"
					className="w-full font-medium h-input"
				>
					{t("signin.buttons.signIn")}
				</Button>
				<p>
					{t("signin.links.createAccount.text")}{" "}
					<Link href="/signup" className="font-bold text-primary-900">
						{t("signin.links.createAccount.link")}
					</Link>
				</p>
			</form>
		</div>
	);
};

export default SignInPage;
