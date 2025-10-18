import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register translation files
register('en', () => import('./locales/en.json'));
register('sv', () => import('./locales/sv.json'));

// Initialize with default locale
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});
