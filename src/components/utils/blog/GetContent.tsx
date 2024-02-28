import { getEntry } from 'astro:content';
import type {
  TagReference,
  Tag,
  TagsJsonArray,
  GameReference,
  Game,
  GameJsonArray,
  Author,
  AuthorJson,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(async (game: any) => {
      const gameEntry: Game | undefined = await getEntry('Game', game.slug);
      if (gameEntry) {
        return {
          Name: gameEntry.data.Name,
          slug: gameEntry.slug,
          Stars: gameEntry.data.Stars,
          DateLaunch: gameEntry.data.DateLaunch,
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
      const tagEntry: Tag | undefined = await getEntry('Tag', tag.slug);
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
    (authors ?? []).map(async (author: any) => {
      const authorEntry: Author | undefined = await getEntry('Author', author.slug);
      if (authorEntry) {
        return {
          Name: authorEntry.data.Name,
          slug: authorEntry.slug,
        };
      }
      return null;
    }),
  ) as unknown as AuthorsJsonArray;
}
