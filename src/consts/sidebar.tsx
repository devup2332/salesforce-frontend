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
import InventoryIcon from "@/components/icons/InventoryIcon";
import { SvgProps } from "@/types/components/SvgProps";

type SidebarItem = {
  title: string;
  icon: React.FC<SvgProps>;
  href: string;
};
type Section = {
  title: string;
  options: SidebarItem[];
};

export const sidebarOptions: Section[] = [
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
