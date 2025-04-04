"use client";
import Or from "@/components/global/Or";
import GoogleIcon from "@/components/icons/GoogleIcon";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Button } from "salesforce-lib";
import FormField from "@/components/global/FormField";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import SunIcon from "@/components/icons/SunIcon";
import { useTheme } from "@/store/ThemeStore";
import MoonIcon from "@/components/icons/MoonIcon";
import { loginControls } from "@/consts/controls";
import EyeOpen from "@/components/icons/EyeOpen";
import EyeClosed from "@/components/icons/EyeClosed";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import { fetchApi } from "@/utils/api/fetch";
import LoaderIcon from "@/components/icons/LoaderIcon";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Toast from "@/components/global/Toast";
import { useAuthStore } from "@/store/AuthStore";
import { signInWithGoogle } from "@/utils/supabase/signWithOAuth";
import { createClient } from "@/utils/supabase/client";

const sizeImage = 800;

type LoginErrors = "invalid_credentials" | "server_error";

const serverErrors: Record<LoginErrors, string> = {
  invalid_credentials: "login.errors.invalid_credentials",
  server_error: "login.errors.server_error",
};

const supabase = createClient();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthStore();
  const router = useRouter();
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  const { theme, setTheme } = useTheme();

  const loginUser = async (credentials: LoginSchemaType) => {
    try {
      setLoading(true);
      const { message, data } = await fetchApi("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });

      if (!data) {
        toast.custom(
          () => (
            <Toast
              text={t(serverErrors[message as LoginErrors])}
              type="error"
            />
          ),
          {
            position: "bottom-center",
            duration: 3000,
          },
        );
        return;
      }
      const { refreshToken, accessToken, user } = data;
      setUser({
        id: user.id,
        email: user.email,
        lastName: user.lastName,
        firstName: user.firstName,
        imageUrl: user.imageUrl,
      });
      await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
      router.push("/dashboard");
    } catch (err) {
      console.error("here", { err });
      toast.custom(
        () => <Toast text={t(serverErrors.server_error)} type="error" />,
        {
          position: "bottom-center",
          duration: 3000,
        },
      );
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <>
      <div className="bg-bg-1 lg:bg-bg-2 text- h-screen grid place-items-center text-sm overflow-y-auto">
        <div className="w-11/12 max-w-md lg:flex lg:flex-row-reverse lg:max-w-5xl xl:max-w-[1218px] rounded-xl overflow-hidden lg:bg-bg-1 lg:h-[600px] 2xl:h-[710px]">
          <div className="hidden lg:flex w-full relative overflow-hidden rounded-l-6xl">
            <Image
              src="/images/login.webp"
              alt="Login image"
              width={sizeImage}
              priority
              height={sizeImage}
              className="h-full w-full block object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex bg-black/50  flex-col place-content-end p-10 xl:p-14 space-y-[18px]">
              <div className="flex items-center">
                <Button
                  className="text-white cursor-pointer p-4 hover:bg-black/50"
                  variant="icon"
                  onClick={() =>
                    changeLanguage(language === "en" ? "es" : "en")
                  }
                >
                  {language === "en" ? "es" : "en"}
                </Button>
                <Button
                  className="p-0 cursor-pointer hover:bg-black/50"
                  variant="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <SunIcon className="stroke-current w-5 h-5 text-white cursor-pointer" />
                  ) : (
                    <MoonIcon className="stroke-current w-5 h-5 text-white cursor-pointer" />
                  )}
                </Button>
              </div>
              <h2 className="text-white text-4xl font-semibold">
                {t("login.sideImage.title.greeting")}{" "}
                <span className="text-primary-900">
                  {t("login.sideImage.title.link")}
                </span>
              </h2>
              <p className="text-white text-sm">
                {t("login.sideImage.description")}
              </p>
            </div>
          </div>
          <div className="lg:grid py-16 px-8 lg:place-items-center w-full bg-bg-1 lg:py-0">
            <form
              className="flex flex-col gap-4 w-full rounded-md max-w-[400px]"
              onSubmit={handleSubmit(loginUser)}
            >
              <h1 className="text-text-1 text-3xl font-bold">
                {t("login.title")}
              </h1>
              <Button
                variant="filled"
                type="button"
                className="border-[1px] border-solid flex gap-4 w-full border-stroke-2 bg-transparent justify-center items-center h-input hover:bg-bg-2"
                onClick={googleLogin}
              >
                <GoogleIcon />
                <span className="text-text-2">{t("login.buttons.google")}</span>
              </Button>
              <Or text={t("login.or")} />
              {loginControls.map(({ Icon, name, ...control }) => {
                const error = errors[name]?.message
                  ? t(`login.fields.${name}.errors.${errors[name]?.type}`)
                  : "";
                return (
                  <FormField
                    key={name}
                    placeholder={t(control.placeholder)}
                    label={t(control.label)}
                    name={name}
                    id={name}
                    Icon={
                      name === "password" ? (
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
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
                      ) : (
                        Icon && (
                          <Icon
                            className={cn(
                              "stroke-current text-text-2",
                              error && "text-alert",
                            )}
                          />
                        )
                      )
                    }
                    register={register}
                    type={
                      name === "password"
                        ? showPass
                          ? "text"
                          : "password"
                        : control.type
                    }
                    error={error}
                  />
                );
              })}
              <Link
                href="forgotPassword"
                className="text-text-1 font-medium w-fit"
              >
                {t("login.links.forgotPassword")}
              </Link>
              <Button
                type="submit"
                variant="filled"
                disabled={loading}
                className="w-full flex justify-center items-center bg-primary-900 h-input hover:bg-primary-700 gap-4"
              >
                {loading && (
                  <LoaderIcon className="h-6 w-6 text-text-3 stroke-current animate-spin" />
                )}
                {t("login.buttons.login")}
              </Button>
              <p className="text-text-1">
                {t("login.links.createAccount.text")}{" "}
                <Link
                  href="/register/step1"
                  className="font-bold ml-1 text-primary-900 hover:text-primary-700"
                >
                  {t("login.links.createAccount.link")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
