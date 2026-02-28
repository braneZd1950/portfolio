import { createContext, useContext, useState, useEffect } from 'react'
import hr from '../translations/hr'
import en from '../translations/en'

const translations = { hr, en }
const STORAGE_KEY = 'banlogic-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'hr'
    } catch {
      return 'hr'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
    document.documentElement.lang = lang === 'hr' ? 'hr' : 'en'
  }, [lang])

  const setLang = (newLang) => {
    if (translations[newLang]) setLangState(newLang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
