import React from "react";
import { Button } from "salesforce-lib";
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import EmailIcon from "../icons/EmailIcon";
import Card from "@/components/global/Card";

const imageUrl =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const data = [
  {
    name: "Romina Caceres",
    rol: "Admin",
    imageUrl,
  },

  {
    name: "Romina Caceres",
    rol: "Admin",
    imageUrl,
  },
  {
    name: "Romina Caceres",
    rol: "Admin",
    imageUrl,
  },
  {
    name: "Romina Caceres",
    rol: "Admin",
    imageUrl,
  },
];

const CardLastUsers = () => {
  const { t } = useTranslation();
  return (
    <Card
      title={t("home.dashboard.cards.lastUsers.title")}
      description={t("home.dashboard.cards.lastUsers.description")}
      Icon={<ArrowTopRightIcon className="w-5 h-5 text-text-1" />}
    >
      <div className="mt-4">
        {data.map((user, index) => {
          return (
            <div
              className="flex justify-between py-2 cursor-pointer transition-colors items-center rounded-md"
              key={index}
            >
              <div className="flex gap-4 items-start">
                <Image
                  src={user.imageUrl}
                  alt="Image url"
                  className="rounded-full w-12 h-12 object-cover"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-sm text-text-1">{user.name}</p>
                  <p className="text-xs text-text-2">{user.rol}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="icon" className="hover:bg-bg-1">
                  <WhatsAppIcon className="w-5 h-5 text-text-1 stroke-current" />
                </Button>
                <Button variant="icon" className="hover:bg-bg-1">
                  <EmailIcon className="w-5 h-5 text-text-1 stroke-current" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CardLastUsers;
