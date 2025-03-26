import React from "react";
import { Button } from "salesforce-lib";
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import EmailIcon from "../icons/EmailIcon";

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
    <div className="py-3 bg-bg-1 rounded-md h-fit">
      <div className="flex px-4 justify-between items-center ">
        <h1 className="text-lg font-medium text-text-1">
          {t("home.dashboard.cards.lastUsers.title")}
        </h1>
        <Button variant="icon" className="bg-bg-2 rounded-full">
          <ArrowTopRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="grid mt-4">
        {data.map((user, index) => {
          return (
            <div
              className="flex px-4 justify-between py-2 cursor-pointer transition-colors items-center hover:bg-bg-2 rounded-md"
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
                  <p className="font-medium text-xs text-text-2">{user.rol}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
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
    </div>
  );
};

export default CardLastUsers;
