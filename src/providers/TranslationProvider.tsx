"use client";
import { I18nextProvider } from "react-i18next";
import es from "../../public/translations/es/index.json";
import en from "../../public/translations/en/index.json";
import i18n from "i18next";

type TranslationProviderProps = {
  children: React.ReactNode;
};

i18n.init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
});

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
