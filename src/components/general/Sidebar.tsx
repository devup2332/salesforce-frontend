import React, { useRef } from "react";
import DashboardIcon from "@/components/icons/DashboardIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import CategoriesIcon from "@/components/icons/CategoriesIcon";
import SalesIcon from "@/components/icons/SalesIcon";
import PersonsIcon from "@/components/icons/PersonsIcon";
import InvoiceIcon from "@/components/icons/InvoiceIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import ReportsIcon from "@/components/icons/ReportsIcon";
import AnalyticsIcon from "@/components/icons/AnalyticsIcon";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import InventoryIcon from "@/components/icons/InventoryIcon";
import { SvgProps } from "@/types/components/SvgProps";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { useSidebarStore } from "@/store/SidebarStore";
import LogoIcon from "../icons/LogoIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import CloseIcon from "../icons/CloseIcon";
import { Button } from "salesforce-lib";

type SidebarItem = {
  title: string;
  icon: React.FC<SvgProps>;
  href: string;
};
type Section = {
  title: string;
  options: SidebarItem[];
};

const sidebarItems: Section[] = [
  {
    title: "home.sidebar.sections.menu.title",
    options: [
      {
        title: "home.sidebar.sections.menu.options.dashboard.title",
        icon: DashboardIcon,
        href: "/dashboard",
      },
      {
        title: "home.sidebar.sections.menu.options.inventory.title",
        icon: InventoryIcon,
        href: "/inventory",
      },
      {
        title: "home.sidebar.sections.menu.options.categories.title",
        icon: CategoriesIcon,
        href: "/categories",
      },
      {
        title: "home.sidebar.sections.menu.options.sales.title",
        icon: SalesIcon,
        href: "/sales",
      },
      {
        title: "home.sidebar.sections.menu.options.customers.title",
        icon: PersonsIcon,
        href: "/customers",
      },
      {
        title: "home.sidebar.sections.menu.options.invoices.title",
        icon: InvoiceIcon,
        href: "/invoices",
      },
      {
        title: "home.sidebar.sections.menu.options.profile.title",
        icon: ProfileIcon,
        href: "/profile",
      },
    ],
  },
  {
    title: "home.sidebar.sections.admin.title",
    options: [
      {
        title: "home.sidebar.sections.admin.options.team.title",
        icon: TeamIcon,
        href: "/team",
      },

      {
        title: "home.sidebar.sections.admin.options.reports.title",
        icon: ReportsIcon,
        href: "/reports",
      },

      {
        title: "home.sidebar.sections.admin.options.analytics.title",
        icon: AnalyticsIcon,
        href: "/analitics",
      },
      {
        title: "home.sidebar.sections.admin.options.settings.title",
        icon: SettingsIcon,
        href: "/settings",
      },
    ],
  },
];

const Sidebar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebarStore();
  const divReef = useRef<HTMLDivElement | null>(null);
  const isPhone = useMediaQuery("(max-width: 640px)");

  return (
    <div>
      <div
        className={cn(
          "bg-bg-1 h-screen fixed top-0 left-0 z-20  overflow-x-hidden transition-[width] customScroll ",
          isOpen ? "w-[288px]" : isPhone ? "w-0" : "w-[68px]",
        )}
      >
        <div className="px-4 py-4">
          <div className="flex gap-2 items-center justify-between px-2 mb-6 w-[256px]">
            <div className="flex gap-6 items-center">
              <LogoIcon className="text-primary-900 stroke-current w-6 h-6" />
              <div>
                <p className="text-2xl text-primary-900 font-bold">
                  {t("home.sidebar.logo.title")}
                </p>
                <p className="text-[10px] text-text-2">
                  {t("home.sidebar.logo.subtitle")}
                </p>
              </div>
            </div>
            <Button
              variant="icon"
              onClick={toggleSidebar}
              className="hover:bg-bg-2"
            >
              <CloseIcon className="h-5 w-5 text-text-1 stroke-current" />
            </Button>
          </div>
          {sidebarItems.map((section, i) => {
            return (
              <div key={i} className="mb-4 w-[256px]">
                <h1 className={cn("mb-4 text-text-2", !isOpen && "opacity-0")}>
                  {t(section.title)}
                </h1>

                <ul className="flex flex-col gap-1">
                  {section.options.map((opt, index) => {
                    const Icon = opt.icon;
                    return (
                      <li key={index}>
                        <Link
                          className={cn(
                            "text-text-1 text-sm rounded-md flex items-center gap-6 py-[10px] font-medium px-2 justify-start hover:text-text-3",
                            pathname === opt.href
                              ? "bg-bg-2 text-primary-900"
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
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-screen bg-bg-3 opacity-0 transition-opacity -z-20",
          isOpen && "opacity-100 z-10",
        )}
        ref={divReef}
        onTransitionEnd={() =>
          !isOpen && divReef.current?.classList.add("-z-20")
        }
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default Sidebar;
