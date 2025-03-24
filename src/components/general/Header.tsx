import React from "react";
import { Button } from "salesforce-lib";
import CloseSidebarIcon from "../icons/CloseSidebarIcon";
import { useSidebarStore } from "@/store/SidebarStore";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/store/ThemeStore";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import OpenSidebarIcon from "../icons/OpenSidebarIcon";
import BellIcon from "../icons/BellIcon";
import { useAuthStore } from "@/store/AuthStore";
import Image from "next/image";

export const userUrl =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Header = () => {
  const { toggleSidebar, isOpen: isOpenSidebar } = useSidebarStore();
  const hasNotifications = true;
  const { theme, setTheme } = useTheme();
  const { user } = useAuthStore();
  const { t } = useTranslation();
  return (
    <div className="h-14 sm:h-18 lg:h-24 shrink-0 flex w-full items-center px-8 bg-bg-1">
      <div className="max-w-8xl w-full m-auto text-text-1 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button
            variant="icon"
            className="hover:bg-bg-2"
            onClick={() => toggleSidebar()}
          >
            {isOpenSidebar ? (
              <OpenSidebarIcon className="h-5 w-5 text-text-1 stroke-current" />
            ) : (
              <CloseSidebarIcon className="h-5 w-5 text-text-1 stroke-current" />
            )}
          </Button>
          <div className="flex-col gap-2 hidden lg:flex">
            <h2 className="text-text-1 text-xl">
              {t("home.header.welcomeMessage")}{" "}
              <span className="font-bold">{user?.full_name}</span>
            </h2>
            <p className="text-text-2 text-sm">Monday, October 23,2024</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="icon"
            className="hover:bg-bg-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <MoonIcon className="h-5 w-5 text-text-1 stroke-current" />
            ) : (
              <SunIcon className="h-5 w-5 text-text-1 stroke-current" />
            )}
          </Button>
          <Button variant="icon" className="hover:bg-bg-2 relative">
            <div className="relative">
              <BellIcon className="h-5 w-5 text-text-1 stroke-current" />
              {hasNotifications && (
                <div className="bg-alert rounded-full h-2 w-2 absolute bottom-0 right-0" />
              )}
            </div>
          </Button>
          <Image
            src={userUrl}
            alt="User Image"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
