import { writable } from 'svelte/store';
import { locale } from 'svelte-i18n';
import { browser } from '$app/environment';

const STORAGE_KEY = 'communize_language';

// Get initial language from localStorage or default to 'en'
function getInitialLanguage(): string {
  if (browser) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'sv') {
      return stored;
    }
  }
  return 'en';
}

function createLanguageStore() {
  const { subscribe, set } = writable<string>(getInitialLanguage());

  return {
    subscribe,
    language: {
      subscribe
    },
    setLanguage: (lang: 'en' | 'sv') => {
      set(lang);
      locale.set(lang);
      if (browser) {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    },
    toggleLanguage: () => {
      const current = getInitialLanguage();
      const newLang = current === 'en' ? 'sv' : 'en';
      set(newLang);
      locale.set(newLang);
      if (browser) {
        localStorage.setItem(STORAGE_KEY, newLang);
      }
    }
  };
}

const languageStore = createLanguageStore();

// Sync with svelte-i18n locale
if (browser) {
  const initialLang = getInitialLanguage();
  locale.set(initialLang);
}

export default languageStore;
