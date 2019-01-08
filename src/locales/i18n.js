import ReactNative from 'react-native';
import I18n from 'i18n-js';

// Import all locales
import en from './en.json';
import fa from './fa.json';

I18n.locale = 'fa';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
I18n.translations = { en, fa };

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(true);
ReactNative.I18nManager.forceRTL(true);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
