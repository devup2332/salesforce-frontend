import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { useSidebarStore } from "@/store/SidebarStore";
import LogoIcon from "../icons/LogoIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { sidebarOptions } from "@/consts/sidebar";

const Sidebar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { isOpen, setSidebarOpen } = useSidebarStore();
  const isPhone = useMediaQuery("(max-width: 640px)");

  return (
    <div
      className={cn(
        "bg-bg-1 h-screen fixed top-0 left-0 z-20 overflow-x-hidden transition-[background-color] customScroll border-r-[1px] border-r-border-1",
        isOpen ? "w-[288px]" : isPhone ? "w-0" : "w-[68px]",
      )}
      onMouseEnter={() => !isPhone && setSidebarOpen(true)}
      onMouseLeave={() => !isPhone && setSidebarOpen(false)}
      style={{
        transition: "width ease 0.15s",
      }}
    >
      <div className="px-4 py-4">
        <div className="flex items-center justify-between pl-2 mb-6 w-[256px]">
          <div className="flex gap-6 items-center">
            <LogoIcon className="text-primary-900 stroke-current w-6 h-6" />
            <div>
              <p className="text-xl text-text-1 font-bold">
                {t("home.sidebar.logo.title")}
              </p>
              <p className="text-[10px] text-text-2">
                {t("home.sidebar.logo.subtitle")}
              </p>
            </div>
          </div>
        </div>
        {sidebarOptions.map((section, i) => {
          return (
            <div key={i} className="mb-4 w-[256px]">
              <h1
                className={cn(
                  "mb-4 text-text-2 text-xs",
                  !isOpen && "opacity-0",
                )}
              >
                {t(section.title)}
              </h1>

              <ul className="flex flex-col">
                {section.options.map((opt, index) => {
                  const Icon = opt.icon;
                  return (
                    <li key={index}>
                      <Link
                        className={cn(
                          "text-text-1 text-sm rounded-md flex items-center transition-[color] gap-6 py-[10px] px-2 justify-start hover:text-text-1",
                          pathname === opt.href
                            ? "bg-primary-900 text-white"
                            : "text-text-2",
                        )}
                        href={opt.href}
                      >
                        <Icon className="stroke-current h-5 w-5" />
                        {t(opt.title)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
