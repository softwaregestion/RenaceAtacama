import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";
import nosotrosPeopleEs from "./locales/partials/nosotros-people.es.json";
import nosotrosPeopleEn from "./locales/partials/nosotros-people.en.json";
import ptBR from "./locales/pt-BR.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import zh from "./locales/zh.json";
import zhTW from "./locales/zh-TW.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";
import sl from "./locales/sl.json";

const STORAGE_KEY = "renace-lang";

export const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt-BR", label: "Português (BR)" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
  { code: "zh-TW", label: "Mandarin" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "sl", label: "Slovenščina" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

const esWithPeople = {
  ...es,
  nosotros: { ...es.nosotros, ...nosotrosPeopleEs },
} as typeof es;

const enWithPeople = {
  ...en,
  nosotros: { ...en.nosotros, ...nosotrosPeopleEn },
} as typeof en;

function getStoredLanguage(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGUAGES.some((l) => l.code === stored)) return stored;
  } catch (_) {
    return "es";
  }
  return "es";
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: esWithPeople },
    en: { translation: enWithPeople },
    "pt-BR": { translation: ptBR },
    fr: { translation: fr },
    de: { translation: de },
    zh: { translation: zh },
    "zh-TW": { translation: zhTW },
    ko: { translation: ko },
    ja: { translation: ja },
    sl: { translation: sl },
  },
  lng: getStoredLanguage(),
  /** Missing keys try English, then Spanish (e.g. new team bios added only in es/en). */
  fallbackLng: ["en", "es"],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch (_) {
    return;
  }
});

export default i18n;
