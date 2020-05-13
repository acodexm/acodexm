import i18n, { TOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { default as en } from './en.json';
import { default as pl } from './pl.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { en, pl },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
const MessageFactory = (prefix?: string) => (key: string, options?: TOptions) =>
  i18n.t(`${prefix && prefix !== '' ? prefix + '.' : ''}${key}`, options);
const getMessage = MessageFactory();
export { getMessage, MessageFactory };
export default i18n;
