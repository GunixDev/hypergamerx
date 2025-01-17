import { getCollection } from "astro:content";
import type { Locale } from "@/types.ts";

// @ts-ignore
let cachedPosts: Record<Locale, any[]> = {}; // Cache para evitar llamadas repetidas

async function loadPosts(locale: Locale) {
  if (!cachedPosts[locale]) {
    const posts = await getCollection('blog', ({ data, id }) => {
      return data?.IsType === 'Complete' && id.startsWith(locale);
    });
    cachedPosts[locale] = posts.sort((a, b) => {
      return new Date(b.data?.PubDate).getTime() - new Date(a.data?.PubDate).getTime();
    });
  }
  return cachedPosts[locale];
}

export async function getPosts(locale: Locale) {
  return await loadPosts(locale);
}

export async function getLastPost(locale: Locale) {
  const posts = await loadPosts(locale);
  return posts[0] || null; // Manejar caso donde no haya posts
}

export async function getRecentPosts(locale: Locale, start: number, limit: number, excep?: string) {
  const posts = await loadPosts(locale);
  return posts
    .filter(post => !excep || post.id !== excep)
    .slice(start, start + limit);
}

export async function getPostsByTag(locale: Locale, tagId: string, limit: number, excep?: string) {
  const posts = await loadPosts(locale);
  return posts
    .filter(post => (!excep || post.id !== excep) && post.data?.Tags && post.data.Tags.some((tag: any) => tag.id === tagId))
    .slice(0, limit);
}

export async function getPostsByGame(locale: Locale, gameId: string, limit: number, excep?: string) {
  const posts = await loadPosts(locale);
  return posts
    .filter(post => (!excep || post.id !== excep) && post.data?.Videojuego && post.data.Videojuego.some((game: any) => game.id === gameId))
    .slice(0, limit);
}
