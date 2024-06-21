import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Locales/en/global.json';
import geTranslation from './Locales/ge/global.json';

const resources = {
  en: { translation: enTranslation },
  ge: { translation: geTranslation }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'ge', // fallback language
  interpolation: {
    escapeValue: false
  }
});

export default i18n;