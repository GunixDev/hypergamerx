import type { GameJsonArray, Locale } from '@/types';
import { Texts } from './texts';

interface ReplaceTexts {
  data: string;
  type: boolean;
  locale?: Locale;
  slug: string;
  games: GameJsonArray;
}

export function ReplaceTexts({ data, type, locale = 'en', slug, games }: ReplaceTexts): string {
  Object.values(Texts.general[locale as keyof typeof Texts.general]).forEach((item) => {
    data = data.replace(
      new RegExp(item.name, 'gi'),
      type
        ? ` <Ref url="${item.url}" text="${item.name}"/> `
        : ` <a href="/${locale}/blog/${item.url}">${item.name}</a> `,
    );
  });

  return data;
}
