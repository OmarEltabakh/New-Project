import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Language toggle temporarily disabled - uncomment to re-enable
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  // .use(LanguageDetector) // Language toggle temporarily disabled
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Force Arabic as default
    fallbackLng: 'ar',
    debug: false,
    interpolation: {
      escapeValue: false
    }
    // detection temporarily disabled
    // detection: {
    //   order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
    //   caches: ['localStorage']
    // }
  });

export default i18n;
