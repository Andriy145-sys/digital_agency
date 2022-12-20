import store from '../store'
import en from '@/locales/en.json'
import ua from '@/locales/ua.json'

const locales = {
    'en': en,
    'ua': ua
}

export default function localizeFilter(key) {
    let locale = "ua"
    locale = store.getters.user.locale || "ua"
    return locales[locale][key]
}