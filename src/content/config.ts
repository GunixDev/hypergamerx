import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
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
    author: z.array(reference('author')),
    tag: z.array(reference('tag')),
    videojuego: z.array(reference('game')).optional(),
    Keywords: z.string(),
  }),
});

const author = defineCollection({
  type: 'data',
  schema: z.object({
    Name: z.string(),
  }),
});

const tag = defineCollection({
  schema: z.object({
    Name: z.string(),
    NameEnglish: z.string(),
    Spanish: z.string(),
    English: z.string(),
  }),
});

const game = defineCollection({
  type: 'data',
  schema: z.object({
    Name: z.string(),
    Stars: z.number(),
    DateLaunch: z.string(),
    LastUpdatedDate: z.string().optional(),
    LastdatedDateVersion: z.string(),
    Developer: z.string(),
    Multijugador: z.boolean(),
    TrailerVideo: z.string().optional(),
    CoverImage: z.string().optional(),
  }),
});

export const collections = {
  blog,
  game,
  author,
  tag,
};
