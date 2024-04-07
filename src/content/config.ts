import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    IsType: z.enum(['Draft', 'Preview', 'Complete']).default('Draft'),
    Title: z.string(),
    Reference: z.string().optional(),
    Description: z.string(),
    PubDate: z.date(),
    UpdatedDate: z.date().optional(),
    ImageCover: z.string().optional(),
    VideoCover: z.string().optional(),
    Authors: z.array(reference('author')),
    Tags: z.array(reference('tag')),
    Videojuego: z.array(reference('game')).optional(),
    Keywords: z.string(),
  }),
});

const author = defineCollection({
  type: 'data',
  schema: z.object({
    Name: z.string(),
    AuthorImage: z.string().optional(),
    AuthorSocial: z.string().optional(),
  }),
});

const tag = defineCollection({
  type: 'data',
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
    LastVersion: z.string(),
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
