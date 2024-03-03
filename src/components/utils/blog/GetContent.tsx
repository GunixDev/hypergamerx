import { getEntry } from 'astro:content';
import type {
  TagReference,
  TagsJsonArray,
  GameReference,
  Author,
  Game,
  Tag,
  GameJsonArray,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(async (game: { id: string }) => {
      const gameEntry = (await getEntry('game', game.id)) as Game | undefined;
      if (gameEntry) {
        return {
          Name: gameEntry.data.Name,
          id: gameEntry.id,
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
          id: tagEntry.id,
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
    (authors ?? []).map(async (author: { id: string }) => {
      const authorEntry = (await getEntry('author', author.id)) as Author | undefined;
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
