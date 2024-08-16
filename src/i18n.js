import { createI18n } from 'vue-i18n';
import fin from './lang/fin.json';
import en from './lang/en.json';

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'fin',
    fallbackLocale: 'fin',
    messages: {
        en,
        fin,
    },
});

export default i18n;