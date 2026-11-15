import type { AstroGlobal } from "astro";
import { getEmDashCollection, type PortableTextBlock, type WhereValue } from "emdash";

export interface TocItem {
  depth: number;
  slug: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function prepareArticleContent(content: PortableTextBlock[]) {
  const usedSlugs = new Map<string, number>();
  const toc: TocItem[] = [];

  const preparedContent = content.map((block) => {
    if (block._type !== "block") return block;

    const depth = typeof block.style === "string" ? Number(block.style.replace("h", "")) : NaN;

    if (![2, 3, 4].includes(depth)) return block;

    const text = (Array.isArray(block.children) ? block.children : [])
      .filter((child): child is { _type: "span"; text: string } => typeof child === "object" && child !== null && "_type" in child && child._type === "span" && "text" in child && typeof child.text === "string")
      .map((child) => child.text)
      .join("")
      .trim();

    if (!text) return block;

    const baseSlug = slugify(text);
    const count = usedSlugs.get(baseSlug) ?? 0;
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;

    usedSlugs.set(baseSlug, count + 1);
    toc.push({ depth, slug, text });

    return {
      ...block,
      _tocId: slug,
    };
  });

  return { content: preparedContent, toc };
}

export async function gestPosts(limit: number, cache?: { enabled: boolean; set: (v: any) => void }, where?: Record<string, WhereValue> | undefined) {
  const { entries, error, cacheHint } = await getEmDashCollection("posts", {
    status: "published",
    orderBy: { published_at: "desc" },
    limit: limit,
    where: where,
  });

  if (error) {
    console.error("Error al obtener artículos recientes:", error);
    throw new Error("No se pudieron cargar los artículos recientes.");
  }

  if (cache?.enabled && cacheHint) {
    cache.set(cacheHint);
  }

  return entries;
}

export async function getGames(limit: number, cache?: { enabled: boolean; set: (v: any) => void }, where?: Record<string, WhereValue> | undefined) {
  const { entries, error, cacheHint } = await getEmDashCollection("games", {
    status: "published",
    orderBy: { published_at: "asc" },
    limit: limit,
    where: where,
  });

  if (error) {
    console.error("Error al obtener los juegos:", error);
    return new Response("Unable to load games", { status: 500 });
  }

  if (cache?.enabled && cacheHint) {
    cache.set(cacheHint);
  }

  return entries;
}

export default { gestPosts, getGames };
