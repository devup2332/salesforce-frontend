"use client";
import CardDashboard from "@/components/Dashboard/CardDashboard";
import CardTopProducts from "@/components/Dashboard/CardTopProducts";
import SalesIcon from "@/components/icons/SalesIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-8xl m-auto flex-1 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <CardDashboard
          className="hover:bg-primary-900"
          amount={34}
          textButton={t("home.dashboard.cards.orders.button")}
          textDescription={t("home.dashboard.cards.orders.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.orders.title")}
        />
        <CardDashboard
          className="hover:bg-primary-900"
          amount={12}
          textButton={t("home.dashboard.cards.users.button")}
          textDescription={t("home.dashboard.cards.users.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.users.title")}
        />
        <CardDashboard
          className="hover:bg-primary-900"
          amount={90}
          textButton={t("home.dashboard.cards.reports.button")}
          textDescription={t("home.dashboard.cards.reports.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.reports.title")}
        />
        <CardDashboard
          className="hover:bg-primary-900"
          amount={320}
          textButton={t("home.dashboard.cards.items.button")}
          textDescription={t("home.dashboard.cards.items.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.items.title")}
        />
      </div>

      <div className="grid md:grid-cols-2">
        <CardTopProducts />
      </div>
    </div>
  );
};

export default DashboardPage;
