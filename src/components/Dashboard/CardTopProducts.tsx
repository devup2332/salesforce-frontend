import React from "react";
import { useTranslation } from "react-i18next";
import ArrowTopRightIcon from "../icons/ArrowTopRightIcon";
import Image from "next/image";
import Card from "@/components/global/Card";

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
    <Card
      title={t("home.dashboard.cards.topProducts.title")}
      description={t("home.dashboard.cards.topProducts.description")}
      Icon={<ArrowTopRightIcon className="w-5 h-5 text-text-1" />}
    >
      <div className="mt-4">
        {data.map(({ name, price, category, imageUrl, currency }) => {
          return (
            <div
              key={name}
              className="flex py-2 cursor-pointer rounded-md items-center justify-between"
            >
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
                  <p className="text-xs text-text-2">{category}</p>
                </div>
              </div>
              <div className="flex gap-1 font-medium transition-none text-sm">
                <span className="transition-none"> {currency}</span>
                <span className="transition-none"> {price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CardTopProducts;
