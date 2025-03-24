import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "salesforce-lib";
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import Image from "next/image";

const imageUrl =
  "https://oechsle.vteximg.com.br/arquivos/ids/11301225-1000-1000/imageUrl_2.jpg?v=637986370050730000";

type Product = {
  name: string;
  price: number;
  currency: string;
  category: string;
  imageUrl: string;
};

const data: Product[] = [
  {
    name: "Tv 55' Samsung",
    price: 800,
    currency: "$",
    category: "Electronics",
    imageUrl,
  },
  {
    name: "Iphone 13",
    price: 1200,
    currency: "$",
    category: "Electronics",
    imageUrl,
  },
  {
    name: "Macbook Pro",
    price: 2000,
    currency: "$",
    category: "Electronics",
    imageUrl,
  },
  {
    name: "Ipad Pro",
    price: 1000,
    currency: "$",
    category: "Electronics",
    imageUrl,
  },
];

const CardTopProducts = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bg-1 py-3 px-4">
      <div className="flex justify-between items-center ">
        <h1>{t("home.dashboard.cards.topProducts.title")}</h1>
        <Button variant="icon" className="hover:bg-bg-2 rounded-full">
          <ArrowTopRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="grid gap-4 mt-4">
        {data.map(({ name, price, category, imageUrl, currency }) => {
          return (
            <div key={name} className="flex items-center justify-between">
              <div className="flex gap-4 items-start">
                <Image
                  src={imageUrl}
                  alt={name}
                  width={48}
                  height={48}
                  className="rounded-full bg-bg-1"
                />
                <div className="text-text-1">
                  <h2 className="text-sm font-medium">{name}</h2>
                  <p className="text-xs">{category}</p>
                </div>
              </div>
              <div className="flex gap-2 font-medium">
                <span> {currency}</span>
                <span> {price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardTopProducts;
