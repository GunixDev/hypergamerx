import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  return [{ params: { locale: 'en' } }, { params: { locale: 'es' } }];
}

async function getPosts({ params, request }: { params: any; request: any }) {
  const locale = params.locale;
  const posts = (await getCollection('blog'))
    .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
    .filter((post) => post.slug.startsWith(locale))
    .filter((post) => post.data.isDraft !== true);
  return posts.map((post) => ({
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
  }));
}

export async function GET({ params, request }: { params: any; request: any }) {
  return new Response(JSON.stringify(await getPosts({ params, request })), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
