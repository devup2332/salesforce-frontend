"use client";
import FormField from "@/components/global/FormField";
import ArrowLeft from "@/components/icons/ArrowLeft";
import { step2Controls } from "@/consts/controls";
import {
  Step2RegisterSchema,
  Step2RegisterSchemaType,
} from "@/schemas/RegisterSchema";
import { useRegisterStore } from "@/store/RegisterStore";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "salesforce-lib";

const Step2Page = () => {
  const { t } = useTranslation();
  const { data, setData } = useRegisterStore();
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(Step2RegisterSchema),
  });
  const router = useRouter();
  const nextStepHandler = (info: Step2RegisterSchemaType) => {
    setData({
      data: {
        ...data,
        ...info,
      },
    });
    router.push("/register/step3");
  };
  useEffect(() => {
    setValue("businessName", data.businessName || "");
  }, []);
  return (
    <form
      onSubmit={handleSubmit(nextStepHandler)}
      className="w-10/12 gap-4 flex flex-col xl:max-w-[400px] justify-start"
    >
      <Button
        className="cursor-pointer h-fit w-fit hover:bg-bg-2"
        type="button"
        variant="icon"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4 text-text-1 stroke-current" />
      </Button>
      <h1 className="text-text-1 text-3xl font-bold">
        {t("register.steps.2.title")}
      </h1>

      {step2Controls.map((control) => {
        const { placeholder, type, name, label, Icon } = control;

        const errorType = errors[name] ? errors[name].message : null;

        const error = errorType
          ? `register.steps.2.fields.${name}.errors.${errorType}`
          : undefined;

        return (
          <FormField
            key={name}
            placeholder={t(placeholder)}
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
        {t("register.steps.2.textButton")}
      </Button>
    </form>
  );
};

export default Step2Page;
