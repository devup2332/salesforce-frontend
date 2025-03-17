"use client";
import FormField from "@/components/general/FormField";
import Or from "@/components/general/Or";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { step1controls } from "@/controls/registerControls";
import {
  Step1RegisterSchema,
  Step1RegisterSchemaType,
} from "@/schemas/RegisterSchema";
import { useRegisterStore } from "@/store/RegisterStore";
import { cn } from "@/utils/cn";
import { signInWithGoogle } from "@/utils/supabase/signWithOAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "salesforce-lib";

const Step1 = () => {
  const { t } = useTranslation();
  const { data, setData } = useRegisterStore();
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(Step1RegisterSchema),
  });
  const router = useRouter();

  const nextStepHandler = (info: Step1RegisterSchemaType) => {
    setData({
      data: {
        ...data,
        ...info,
      },
    });
    router.push("/register/step2");
  };

  useEffect(() => {
    setValue("email", data.email || "");
    setValue("firstName", data.firstName || "");
    setValue("lastName", data.lastName || "");
  }, []);

  return (
    <form
      onSubmit={handleSubmit(nextStepHandler)}
      className="w-10/12 gap-4 flex flex-col xl:max-w-[400px]"
    >
      <h1 className="text-text-1 text-3xl font-bold">
        {t("register.steps.1.title")}
      </h1>
      <Button
        variant="outlined"
        type="button"
        className="border-1 flex gap-4 w-full border-stroke-1 justify-center items-center h-input hover:bg-bg-2"
        onClick={() => signInWithGoogle()}
      >
        <GoogleIcon />
        <span className="text-text-2">{t("register.buttons.google")}</span>
      </Button>
      <Or className="bg-bg-1" text={t("register.or")} />

      {step1controls.map((control) => {
        const { placeholder, type, name, label, Icon } = control;
        const errorType = errors[name] ? errors[name].message : null;

        const error = errorType
          ? `register.steps.1.fields.${name}.errors.${errorType}`
          : undefined;

        return (
          <FormField
            placeholder={t(placeholder)}
            key={name}
            name={name}
            type={type}
            label={t(label)}
            Icon={
              Icon && (
                <Icon
                  className={cn(
                    "h-6 w-6 text-text-2 stroke-current",
                    error && "text-alert",
                  )}
                />
              )
            }
            error={error && t(error)}
            register={register}
          />
        );
      })}

      <Button
        type="submit"
        variant="filled"
        className="w-full bg-primary-900 text-text-3 font-medium h-input hover:bg-primary-700"
      >
        {t("register.steps.1.textButton")}
      </Button>
      <p className="text-text-1 text-sm lg:text-center">
        {t("register.links.login.text")}{" "}
        <Link
          href="/login"
          className="font-bold text-primary-900 hover:text-primary-700"
        >
          {t("register.links.login.link")}
        </Link>
      </p>
    </form>
  );
};

export default Step1;
