"use client";
import CardInvoices from "@/components/Dashboard/CardInvoices";
import CardLastUsers from "@/components/Dashboard/CardLastUsers";
import CardTopProducts from "@/components/Dashboard/CardTopProducts";
import ChartDashboard from "@/components/Dashboard/ChartDashboard";
import Card from "@/components/global/Card";
import SalesIcon from "@/components/icons/SalesIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();
  const stadistics = {
    orders: 34,
    users: 12,
    reports: 102,
    items: 504,
  };
  return (
    <div className="max-w-8xl m-auto flex-1 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <Card
          title={t("home.dashboard.cards.orders.title")}
          description={t("home.dashboard.cards.orders.description")}
          bottomDescription
          Icon={<SalesIcon className="w-5 h-5 text-text-1" />}
        >
          <p className="text-[2.5rem] font-extrabold">{stadistics.orders}</p>
        </Card>
        <Card
          title={t("home.dashboard.cards.users.title")}
          description={t("home.dashboard.cards.users.description")}
          bottomDescription
          Icon={<SalesIcon className="w-5 h-5 text-text-1" />}
        >
          <p className="text-[2.5rem] font-extrabold">{stadistics.users}</p>
        </Card>
        <Card
          description={t("home.dashboard.cards.reports.description")}
          title={t("home.dashboard.cards.reports.title")}
          bottomDescription
          Icon={<SalesIcon className="w-5 h-5 text-text-1" />}
        >
          <p className="text-[2.5rem] font-extrabold">{stadistics.reports}</p>
        </Card>
        <Card
          title={t("home.dashboard.cards.items.title")}
          description={t("home.dashboard.cards.items.description")}
          bottomDescription
          Icon={<SalesIcon className="w-5 h-5 text-text-1" />}
        >
          <p className="text-[2.5rem] font-extrabold">{stadistics.items}</p>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardTopProducts />
        <CardLastUsers />
        <CardInvoices />
      </div>
      <div className="grid">
        <ChartDashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
