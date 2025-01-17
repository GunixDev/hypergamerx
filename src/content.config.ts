import {defineCollection, reference, z} from "astro:content";
import {glob, file} from 'astro/loaders'

const author = defineCollection({
  loader: file("./src/data/authors.json"),
  schema: z.object({
    Name: z.string(),
    AuthorImage: z.string().optional(),
    AuthorSocial: z.string().optional(),
  })
})

const tag = defineCollection({
  loader: file("./src/data/tags.json"),
  schema: z.object({
    nameTag: z.string(),
    nameTagEnglish: z.string(),
    descES: z.string(),
    descEN: z.string(),
  })
})

const game = defineCollection({
  loader: file("./src/data/games.json"),
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
  })
})

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/blog" }),
  schema: z.object({
    IsType: z.enum(['Draft', 'Preview', 'Complete']).default('Draft'),
    Title: z.string(),
    Reference: z.string().optional(),
    Description: z.string(),
    PubDate: z.date(),
    UpdatedDate: z.date().optional(),
    SendDate: z.date().optional(),
    ImageCover: z.string().optional(),
    VideoCover: z.string().optional(),
    Authors: reference('author'),
    Tags: z.array(reference('tag')),
    Videojuego: z.array(reference('game')).optional(),
    Keywords: z.string(),
  })
})

export const collections = {author, tag, game, blog}
