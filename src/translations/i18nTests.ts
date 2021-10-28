import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';

const resources = {
  en: translationEN,
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: resources.en,
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
