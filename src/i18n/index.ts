import i18next from "i18next";
import en from "./en.json";
import pt from "./pt.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
    },
  });
