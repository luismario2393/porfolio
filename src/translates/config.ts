import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEs from "./es/translation.json";
import translationEn from "./en/translation.json";

export const resources = {
  es: {
    translation: translationEs,
  },
  en: {
    translation: translationEn,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "es",
});

export default i18n;
