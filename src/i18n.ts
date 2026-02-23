import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";
import ptBR from "./locales/pt-BR.json";

const STORAGE_KEY = "renace-lang";

export const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt-BR", label: "Português (BR)" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

function getStoredLanguage(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["es", "en", "pt-BR"].includes(stored)) return stored;
  } catch (_) {}
  return "es";
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    "pt-BR": { translation: ptBR },
  },
  lng: getStoredLanguage(),
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch (_) {}
});

export default i18n;
