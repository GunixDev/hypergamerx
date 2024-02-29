import { languages } from './i18n/data_essential';
import type { CollectionEntry } from 'astro:content';

export type Locale = keyof typeof languages;
export type Blog = CollectionEntry<'Blog'>;
export type Tag = CollectionEntry<'Tag'>;
export type TagReference = Blog['data']['Tag'];
export type Game = CollectionEntry<'Game'>;
export type GameReference = Blog['data']['Videojuego'];
export type Author = CollectionEntry<'Author'>;
export type AuthorReference = Blog['data']['Author'];

export type GameJson = {
  Name: string;
  id: string;
  Stars: number;
  DateLaunch: Date;
  Multijugador: boolean;
  TrailerVideo: string;
  CoverImage: string;
};
export type GameJsonArray = GameJson[];
export type TagJson = {
  id: string;
  Name: string;
  NameEnglish: string;
  English: string;
  Spanish: string;
};

export type TagsJsonArray = TagJson[];
export type AuthorJson = {
  Name: string;
  id: string;
};
export type AuthorsJsonArray = AuthorJson[];
