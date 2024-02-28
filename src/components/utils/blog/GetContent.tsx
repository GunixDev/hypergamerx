import { getEntry } from 'astro:content';
import type {
  TagReference,
  Tag,
  TagsJsonArray,
  GameReference,
  Game,
  GameJsonArray,
  Author,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(async (game: any) => {
      const gameEntry: Game | undefined = await getEntry('Game', game.id);
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
    (tags ?? []).map(async (tag: any) => {
      const tagEntry: Tag | undefined = await getEntry('Tag', tag.id);
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
    (authors ?? []).map(async (author: any) => {
      const authorEntry: Author | undefined = await getEntry('Author', author.id);
      if (authorEntry) {
        return {
          Name: authorEntry.data.Name,
          id: authorEntry.id,
        };
      }
      return null;
    }),
  ) as unknown as AuthorsJsonArray;
}
