"use client";
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import { useTheme } from "@/store/ThemeStore";
import Image from "next/image";
import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type RegisterLayoutProps = {
  children: ReactNode;
};

const sizeImage = 600;

const RegisterLayout: React.FC<RegisterLayoutProps> = ({ children }) => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const { theme, setTheme } = useTheme();
  return (
    <div className="grid place-items-center h-screen lg:h-screen">
      <div className="w-full lg:bg-bg-1 flex justify-center max-w-md lg:w-11/12 lg:justify-normal lg:overflow-hidden lg:flex-row lg:max-w-5xl lg:h-[640px] 2xl:h-[710px] xl:max-w-[1218px] rounded-xl">
        <div className="hidden lg:block relative w-1/2 rounded-r-6xl overflow-hidden">
          <Image
            className="w-full h-full block object-cover"
            src="/images/login.webp"
            alt="Register image"
            width={sizeImage}
            height={sizeImage}
          />
          <div className="absolute top-0 left-0 w-full h-full flex bg-black/50  flex-col place-content-end p-10 xl:p-14 space-y-[18px]">
            <div className="flex items-center">
              <button
                className="text-white cursor-pointer p-4"
                onClick={() => changeLanguage(language === "en" ? "es" : "en")}
              >
                {language === "en" ? "es" : "en"}
              </button>
              <button
                className="p-4 cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <SunIcon className="stroke-current text-white cursor-pointer" />
                ) : (
                  <MoonIcon className="stroke-current text-white cursor-pointer" />
                )}
              </button>
            </div>
            <h2 className="text-white text-4xl font-semibold">
              {t("register.sideImage.title.greeting")}{" "}
              <span className="text-primary-900">
                {t("register.sideImage.title.link")}
              </span>
            </h2>
            <p className="text-white text-sm">
              {t("register.sideImage.description")}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RegisterLayout;
