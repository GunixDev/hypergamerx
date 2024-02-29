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
  id: string;
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
  id: string;
  collection: 'author';
  data: {
    Name: string;
  };
};

type tag = {
  id:
    | 'Curiosidades'
    | 'E-sports'
    | 'Evento'
    | 'Guia'
    | 'Influencer'
    | 'Mod'
    | 'Noticia'
    | 'Objeto'
    | 'Reseña'
    | 'Tecnologia'
    | 'Top';
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
    (games ?? []).map(async (game) => {
      const gameEntry: Game = await getEntry('game', game.id);
      if (gameEntry !== undefined || gameEntry !== null) {
        return {
          Name: gameEntry?.data?.Name,
          id: gameEntry?.id,
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
    (tags ?? []).map(async (tag) => {
      const tagEntry: tag = await getEntry('tag', tag.id);
      if (tagEntry) {
        return {
          id: tagEntry?.id,
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
    (authors ?? []).map(async (author) => {
      const authorEntry: author = await getEntry('author', author.id);
      if (authorEntry) {
        return {
          Name: authorEntry.data.Name,
          id: authorEntry.id,
        };
      }
      return null;
    }),
  ) as Promise<AuthorsJsonArray>;
}
