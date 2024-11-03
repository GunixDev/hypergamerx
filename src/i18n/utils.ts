import {ui} from './data';
import {defaultLang, ui_essential} from './dataTermsConditions.ts';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui_essential) return lang as keyof typeof ui_essential;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    if (key in ui[lang]) {
      return ui[lang][key];
    } else {
      return ui[defaultLang][key];
    }
  };
}

export function useTranslationsSpecial(lang: keyof typeof ui_essential) {
  return function te(key: keyof (typeof ui_essential)[typeof defaultLang]) {
    if (key in ui_essential[lang]) {
      return ui_essential[lang][key];
    } else {
      return ui_essential[defaultLang][key];
    }
  };
}
