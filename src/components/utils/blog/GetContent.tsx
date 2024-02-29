import { getEntry, type CollectionEntry } from 'astro:content';
import type {
  TagReference,
  TagsJsonArray,
  GameReference,
  GameJsonArray,
  AuthorsJsonArray,
  AuthorReference,
} from '../../../types';

export type tag = CollectionEntry<'tag'>;
export type Game = CollectionEntry<'game'>;
export type author = CollectionEntry<'author'>;

export async function GetGames(games: GameReference): Promise<GameJsonArray> {
  return Promise.all(
    (games ?? []).map(
      async (value: { collection: 'game'; id: 'geometry-dash' | 'lego-fortnite' | 'minecraft' | 'valorant' }) => {
        const gameEntry: Game = await getEntry('game', value.id);
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
      },
    ),
  ) as unknown as GameJsonArray;
}

export async function GetTags(tags: TagReference): Promise<TagsJsonArray> {
  return Promise.all(
    (tags ?? []).map(
      async (tag: {
        collection: 'tag';
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
      }) => {
        const tagEntry: tag = await getEntry('tag', tag.id);
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
      },
    ),
  ) as unknown as TagsJsonArray;
}

export async function GetAuthor(authors: AuthorReference): Promise<AuthorsJsonArray> {
  return Promise.all(
    (authors ?? []).map(async (author) => {
      const authorEntry: author | null = await getEntry('author', author.id);
      if (authorEntry !== null && authorEntry !== undefined && authorEntry.data !== undefined) {
        return {
          Name: authorEntry.data.Name,
          id: authorEntry.id,
        };
      }
      return null;
    }),
  ) as unknown as AuthorsJsonArray;
}
