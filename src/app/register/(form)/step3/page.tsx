"use client";
import FormField from "@/components/global/FormField";
import Toast from "@/components/global/Toast";
import ArrowLeft from "@/components/icons/ArrowLeft";
import EyeClosed from "@/components/icons/EyeClosed";
import EyeOpen from "@/components/icons/EyeOpen";
import LoaderIcon from "@/components/icons/LoaderIcon";
import { step3Controls } from "@/consts/controls";
import {
  Step3RegisterSchema,
  Step3RegisterSchemaType,
} from "@/schemas/RegisterSchema";
import { useAuthStore } from "@/store/AuthStore";
import { useRegisterStore } from "@/store/RegisterStore";
import { fetchApi } from "@/utils/api/fetch";
import { cn } from "@/utils/cn";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "salesforce-lib";
import { toast } from "sonner";

type RegisterErrors = "invalid_credentials" | "server_error";

const supabase = createClient();
const serverErrors: Record<RegisterErrors, string> = {
  invalid_credentials: "login.errors.invalid_credentials",
  server_error: "login.errors.server_error",
};
const Step3 = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthStore();
  const { data } = useRegisterStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(Step3RegisterSchema),
  });

  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const registerUser = async (info: Step3RegisterSchemaType) => {
    try {
      setLoading(true);
      const body = {
        ...data,
        password: info.password,
      };
      const { data: response } = await fetchApi(
        "/api/auth/registerUserWithCompany",
        {
          method: "POST",
          body: JSON.stringify(body),
        },
      );
      const { accessToken, refreshToken, profile } = response;
      const {
        data: { user },
      } = await supabase.auth.setSession({
        access_token: accessToken as string,
        refresh_token: refreshToken as string,
      });
      if (!user) {
        throw new Error("User not found");
      }
      setUser({
        id: profile.id,
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
      });
      setLoading(false);
      router.push("/dashboard");
    } catch (err) {
      console.error({ err });
      toast.custom(
        () => <Toast type="error" text={t(serverErrors.server_error)} />,
        {
          position: "bottom-center",
        },
      );
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(registerUser)}
      className="grid gap-6 px-6 w-full lg:px-16 lg:gap-4 xl:px-24"
    >
      <Button
        className="cursor-pointer h-fit w-fit hover:bg-bg-2"
        type="button"
        variant="icon"
        onClick={() => router.back()}
      >
        <ArrowLeft className="w-4 h-4 text-text-1 stroke-current" />
      </Button>
      <h1 className="text-text-1 text-3xl font-bold w-7/12">
        {t("register.steps.3.title")}
      </h1>

      {step3Controls.map((control) => {
        const { placeholder, name, label } = control;

        const errorType = errors[name] ? errors[name].message : null;

        const error = errorType
          ? `register.steps.3.fields.${name}.errors.${errorType}`
          : undefined;

        return (
          <FormField
            key={name}
            placeholder={t(placeholder)}
            name={name}
            type={showPass ? "text" : "password"}
            label={t(label)}
            Icon={
              name === "password" ? (
                <button
                  onClick={() => setShowPass(!showPass)}
                  type="button"
                  className="cursor-pointer"
                >
                  {showPass ? (
                    <EyeOpen
                      className={cn(
                        "stroke-current text-text-2",
                        error && "text-alert",
                      )}
                    />
                  ) : (
                    <EyeClosed
                      onClick={() =>
                        name === "password" && setShowPass(!showPass)
                      }
                      className={cn(
                        "stroke-current text-text-2",
                        error && "text-alert",
                      )}
                    />
                  )}
                </button>
              ) : undefined
            }
            error={error && t(error)}
            register={register}
          />
        );
      })}
      <p className="text-sm text-text-1">
        {t("register.steps.3.too_short_message")}
      </p>

      <Button
        type="submit"
        variant="filled"
        className="w-full flex gap-4 justify-center bg-primary-900 text-text-3 font-medium h-input hover:bg-primary-700"
      >
        {loading && (
          <LoaderIcon className="h-6 w-6 text-text-3 stroke-current animate-spin" />
        )}
        {t("register.steps.3.textButton")}
      </Button>
    </form>
  );
};

export default Step3;
