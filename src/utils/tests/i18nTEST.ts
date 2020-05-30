import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const i18nTEST = i18n.use(initReactI18next).init({
  resources: {},
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false
  }
});
export default i18nTEST;
