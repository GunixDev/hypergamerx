import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { gestPosts } from "@/utils/article-toc";

export const GET: APIRoute = async (context) => {
  const posts = await gestPosts(50);

  return rss({
    title: "HyperGamerX",
    description: "Descubre las últimas noticias y curiosidades en el mundo de los videojuegos. Reseñas, avances, análisis y más, HyperGamerX tu fuente de información.",
    site: context.site!,
    customData: "<language>es</language>",
    items: posts
      .filter((post) => post.data.slug)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishedAt ?? post.data.createdAt,
        description: post.data.description,
        link: `/blog/${post.data.slug}/`,
      })),
  });
};
