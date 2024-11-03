import {languages} from '@i18n/dataTermsConditions.ts';
import type {CollectionEntry} from 'astro:content';

export type Locale = keyof typeof languages;
export type Blog = CollectionEntry<'blog'>;
export type Tag = CollectionEntry<'tag'>;
export type TagReference = Blog['data']['Tags'];
export type Game = CollectionEntry<'game'>;
export type GameReference = Blog['data']['Videojuego'];
export type Author = CollectionEntry<'author'>;
export type AuthorReference = Blog['data']['Authors'];

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
  id: string;
  Name: string;
};
export type AuthorsJsonArray = AuthorJson[];
