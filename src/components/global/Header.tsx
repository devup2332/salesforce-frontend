import React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "salesforce-lib";
import { useSidebarStore } from "@/store/SidebarStore";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/store/ThemeStore";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import BellIcon from "../icons/BellIcon";
import { useAuthStore } from "@/store/AuthStore";
import Image from "next/image";
import MenuIcon from "../icons/MenuIcon";
import { fetchNextApi } from "@/utils/api/fetch";
import { useRouter } from "next/navigation";
import ProfileIcon from "../icons/ProfileIcon";
import SettingsIcon from "../icons/SettingsIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { useLoadingStore } from "@/store/LoadingStore";

const Header = () => {
  const { setSidebarOpen } = useSidebarStore();
  const hasNotifications = true;
  const { theme, setTheme } = useTheme();
  const { user } = useAuthStore();
  const { t } = useTranslation();
  const { setLoading } = useLoadingStore();
  const router = useRouter();

  const logout = async () => {
    try {
      setLoading(true);
      await fetchNextApi("/api/auth/logout", {
        method: "GET",
      });
      router.push("/login");
    } catch (err) {
      console.error({ err });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-14 sm:h-18 sticky top-0 lg:h-24 shrink-0 flex w-full items-center px-8 bg-bg-1 border-b-border-1 border-b-[1px]">
      <div className="max-w-8xl w-full m-auto text-text-1 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button
            variant="icon"
            className="p-2 flex sm:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="h-4 w-4 text-text-1 stroke-current" />
          </Button>
          <div className="flex-col gap-2 hidden lg:flex">
            <h2 className="text-text-1 text-xl">
              {t("home.header.welcomeMessage")}{" "}
              <span className="font-bold">{user?.firstName}</span>
            </h2>
            <p className="text-text-2 text-sm">Monday, October 23,2024</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button
            variant="icon"
            className="hover:bg-bg-2 p-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <MoonIcon className="h-5 w-5 text-text-1 stroke-current" />
            ) : (
              <SunIcon className="h-5 w-5 text-text-1 stroke-current" />
            )}
          </Button>
          <Button variant="icon" className="hover:bg-bg-2 relative p-2">
            <div className="relative">
              <BellIcon className="h-5 w-5 text-text-1 stroke-current" />
              {hasNotifications && (
                <div className="bg-alert rounded-full h-2 w-2 absolute bottom-0 right-0" />
              )}
            </div>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={user?.imageUrl || "/images/defaultPhotoUser.jpg"}
                alt="User Image"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 border-stroke-2 bg-bg-1 ">
              <DropdownMenuGroup>
                <DropdownMenuItem className="focus:bg-bg-2 cursor-pointer gap-4">
                  <ProfileIcon className="h-5 w-5 text-text-1 stroke-current" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-bg-2 cursor-pointer gap-4">
                  <SettingsIcon className="h-5 w-5 text-text-1 stroke-current" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="focus:bg-bg-2 py-3 justify-center cursor-pointer text-alert focus:text-alert"
                  onClick={() => logout()}
                >
                  <LogoutIcon className="h-5 w-5 text-alert stroke-current" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
