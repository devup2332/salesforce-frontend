import React from "react";
import { useTranslation } from "react-i18next";
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import Card from "@/components/global/Card";

const data = [
  {
    name: "Ivoice #001",
    date: "Due in 3 days",
    amount: "1000",
    currency: "USD",
  },
  {
    name: "Ivoice #001",
    date: "Due in 3 days",
    amount: "1000",
    currency: "USD",
  },
  {
    name: "Ivoice #001",
    date: "Due in 3 days",
    amount: "1000",
    currency: "USD",
  },
  {
    name: "Ivoice #001",
    date: "Due in 3 days",
    amount: "1000",
    currency: "USD",
  },
];

const CardInvoices = () => {
  const { t } = useTranslation();
  return (
    <Card
      title={t("home.dashboard.cards.invoices.title")}
      description={t("home.dashboard.cards.invoices.description")}
      Icon={
        <ArrowTopRightIcon className="h-5 w-5 text-text-1 stroke-current" />
      }
    >
      <div className="mt-4">
        {data.map((invoice, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center rounded-md py-3 cursor-pointer"
            >
              <div>
                <h2 className="font-medium text-sm">{invoice.name}</h2>
                <p className="text-xs text-text-2">{invoice.date}</p>
              </div>
              <span className="font-medium text-sm">
                {invoice.currency} {invoice.amount}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CardInvoices;
