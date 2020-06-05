import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en/main.json'
import es from './es/main.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: ['en', 'es'],
    lng: 'en',
    debug: true,
    resources: { en, es },
    joinArrays: '\n',
    react: {
      wait: true,
    },
  })

export default i18n
