import { defineCollection, reference, z } from 'astro:content';

const BlogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    IsDraft: z.boolean(),
    Title: z.string(),
    Reference: z.string().optional(),
    Description: z.string(),
    PubDate: z.date(),
    UpdatedDate: z.date().optional(),
    Image: z.string().optional(),
    Video: z.string().optional(),
    Author: z.array(reference('Author')),
    Tag: z.array(reference('Tag')).optional(),
    Videojuego: z.array(reference('Game')).optional(),
    Keywords: z.string(),
  }),
});

const AuthorCollection = defineCollection({
  type: 'data',
  schema: z.object({
    Name: z.string(),
  }),
});

const TagCollection = defineCollection({
  type: 'data',
  schema: z.object({
    Name: z.string(),
    NameEnglish: z.string(),
    Spanish: z.string(),
    English: z.string(),
  }),
});

const GameCollection = defineCollection({
  type: 'data',
  schema: z.object({
    Name: z.string(),
    Stars: z.number(),
    DateLaunch: z.date(),
    LastUpdatedDate: z.date().optional(),
    LastdatedDateVersion: z.string(),
    Developer: z.string(),
    Multijugador: z.boolean(),
    TrailerVideo: z.string().optional(),
    CoverImage: z.string().optional(),
  }),
});

export const collections = {
  Blog: BlogCollection,
  Game: GameCollection,
  Author: AuthorCollection,
  Tag: TagCollection,
};
