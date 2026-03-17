import en from './en.json'
import pt from './pt.json'

type Language = 'en' | 'pt'

const translations: Record<Language, Record<string, unknown>> = { en, pt }

let currentLang: Language = (localStorage.getItem('lang') as Language) || 'en'
let currentTranslations: Record<string, unknown> = translations[currentLang]

export function t(key: string): string {
  const keys = key.split('.')
  let value: unknown = currentTranslations
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }
  return typeof value === 'string' ? value : key
}

export function setLanguage(lang: Language): Language {
  currentLang = lang
  currentTranslations = translations[lang]
  localStorage.setItem('lang', lang)
  return lang
}

export function getLanguage(): Language {
  return currentLang
}
