"use client";
import Card from "@/components/general/Card";
import SalesIcon from "@/components/icons/SalesIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-8xl m-auto">
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
        <Card
          className="hover:bg-primary-900"
          amount={34}
          textButton={t("home.dashboard.cards.orders.button")}
          textDescription={t("home.dashboard.cards.orders.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.orders.title")}
        />
        <Card
          className="hover:bg-primary-900"
          amount={12}
          textButton={t("home.dashboard.cards.users.button")}
          textDescription={t("home.dashboard.cards.users.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.users.title")}
        />
        <Card
          className="hover:bg-primary-900"
          amount={90}
          textButton={t("home.dashboard.cards.reports.button")}
          textDescription={t("home.dashboard.cards.reports.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.reports.title")}
        />
        <Card
          className="hover:bg-primary-900"
          amount={320}
          textButton={t("home.dashboard.cards.items.button")}
          textDescription={t("home.dashboard.cards.items.description")}
          Icon={SalesIcon}
          title={t("home.dashboard.cards.items.title")}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
