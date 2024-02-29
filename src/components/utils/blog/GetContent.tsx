import { getEntry } from 'astro:content';
import type {
  TagReference,
  tag,
  TagsJsonArray,
  GameReference,
  Game,
  GameJsonArray,
  author,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(async (game: any) => {
      const gameEntry: Game | undefined = await getEntry('game', game.id);
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
    (tags ?? []).map(async (tag: any) => {
      const tagEntry: tag | undefined = await getEntry('tag', tag.id);
      if (tagEntry !== undefined || tagEntry !== null) {
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
    (authors ?? []).map(async (author: any) => {
      const authorEntry: author | undefined = await getEntry('author', author.id);
      if (authorEntry !== undefined || authorEntry !== null) {
        return {
          Name: authorEntry?.data?.Name,
          id: authorEntry?.id,
        };
      }
      return null;
    }),
  ) as unknown as AuthorsJsonArray;
}
