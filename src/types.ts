import type {languages} from "@i18n/ui.ts";

export type Locale = keyof  typeof languages
export type AmazonItem = {
  titulo: string;
  link: string;
  descripcion: string;
  image: string;
};

export type AmazonData = {
  [locale: string]: {
    [gameId: string]: AmazonItem[];
  };
};
