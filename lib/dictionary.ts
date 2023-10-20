import type { Locale } from '@/i18n.config';
import 'server-only';

const dictionaries = {
  en: () => import('@/helpers/dictionaries/en.json').then(module => module.default),
  es: () => import('@/helpers/dictionaries/es.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  const dictionaryFn = dictionaries[locale];
  if (dictionaryFn) {
    const dictionary = await dictionaryFn();
    return dictionary;
  }else{
    const dictionaryFn = dictionaries['es'];
    const dictionary = await dictionaryFn();
    return dictionary;
  }

}