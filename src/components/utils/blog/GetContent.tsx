import { getEntry } from 'astro:content';
import type {
  TagReference,
  TagsJsonArray,
  GameReference,
  GameJsonArray,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

type Game = {
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
};

type author = {
  slug: string;
  collection: 'author';
  data: {
    Name: string;
  };
};

type tag = {
  slug: string;
  collection: 'tag';
  data: {
    Name: string;
    NameEnglish: string;
    Spanish: string;
    English: string;
  };
};

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(async (game: { slug: string }) => {
      const gameEntry: Game | undefined = await getEntry('game', game.slug);
      if (gameEntry !== undefined) {
        return {
          Name: gameEntry?.data?.Name,
          slug: gameEntry?.slug,
          Stars: gameEntry?.data?.Stars,
          DateLaunch: gameEntry?.data?.DateLaunch ? new Date(gameEntry?.data?.DateLaunch) : null,
          Multijugador: gameEntry?.data?.Multijugador,
          TrailerVideo: gameEntry?.data?.TrailerVideo,
          CoverImage: gameEntry?.data?.CoverImage,
        };
      }
      return null;
    }),
  ) as unknown as GameJsonArray;
}

export async function GetTags(tags: TagReference): Promise<TagsJsonArray> {
  return Promise.all(
    (tags ?? []).map(async (tag: { slug: string }) => {
      const tagEntry: tag | undefined = await getEntry('tag', tag.slug);
      if (tagEntry !== undefined) {
        return {
          slug: tagEntry?.slug,
          Name: tagEntry?.data?.Name,
          NameEnglish: tagEntry?.data?.NameEnglish,
          English: tagEntry?.data?.English,
          Spanish: tagEntry?.data?.Spanish,
        };
      }
      return null;
    }),
  ) as unknown as TagsJsonArray;
}

export async function GetAuthor(authors: AuthorReference): Promise<AuthorsJsonArray> {
  return Promise.all(
    (authors ?? []).map(async (author: { slug: string }) => {
      const authorEntry: author | undefined = await getEntry('author', author.slug);
      if (authorEntry !== undefined) {
        return {
          Name: authorEntry.data.Name,
          slug: authorEntry.slug,
        };
      }
      return null;
    }),
  ) as Promise<AuthorsJsonArray>;
}
