import { getEntry } from 'astro:content';
import type {
  TagReference,
  TagsJsonArray,
  GameReference,
  GameJsonArray,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

interface Game {
  slug: string;
  collection: 'game';
  data: {
    Name: string;
    Stars: number;
    DateLaunch: string;
    LastdatedDateVersion: string;
    Developer: string;
    Multijugador: boolean;
    LastUpdatedDate?: string | undefined;
    TrailerVideo?: string | undefined;
    CoverImage?: string | undefined;
  };
}

interface Author {
  slug: string;
  collection: 'author';
  data: {
    Name: string;
  };
}

interface Tag {
  slug: string;
  collection: 'tag';
  data: {
    Name: string;
    NameEnglish: string;
    Spanish: string;
    English: string;
  };
}

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(async (game: { slug: string }) => {
      const gameEntry = (await getEntry('game', game.slug)) as Game | undefined;
      if (gameEntry) {
        return {
          Name: gameEntry.data.Name,
          slug: gameEntry.slug,
          Stars: gameEntry.data.Stars,
          DateLaunch: new Date(gameEntry.data.DateLaunch),
          Multijugador: gameEntry.data.Multijugador,
          TrailerVideo: gameEntry.data.TrailerVideo,
          CoverImage: gameEntry.data.CoverImage,
        };
      }
      return null;
    }),
  ) as unknown as GameJsonArray;
}

export async function GetTags(tags: TagReference): Promise<TagsJsonArray> {
  return Promise.all(
    (tags ?? []).map(async (tag: { slug: string }) => {
      const tagEntry = (await getEntry('tag', tag.slug)) as Tag | undefined;
      if (tagEntry) {
        return {
          slug: tagEntry.slug,
          Name: tagEntry.data.Name,
          NameEnglish: tagEntry.data.NameEnglish,
          English: tagEntry.data.English,
          Spanish: tagEntry.data.Spanish,
        };
      }
      return null;
    }),
  ) as unknown as TagsJsonArray;
}

export async function GetAuthor(authors: AuthorReference): Promise<AuthorsJsonArray> {
  return Promise.all(
    (authors ?? []).map(async (author: { slug: string }) => {
      const authorEntry = (await getEntry('author', author.slug)) as Author | undefined;
      if (authorEntry) {
        return {
          Name: authorEntry.data.Name,
          slug: authorEntry.slug,
        };
      }
      return null;
    }),
  ) as Promise<AuthorsJsonArray>;
}
