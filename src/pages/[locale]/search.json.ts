import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  return [{ params: { locale: 'en' } }, { params: { locale: 'es' } }];
}

async function getPosts({ params }: { params: any; request: any }) {
  const locale = params.locale;
  const posts = (await getCollection('blog'))
    .sort((a, b) => a.data?.PubDate.valueOf() - b.data?.PubDate.valueOf())
    .filter((post) => post.slug.startsWith(locale))
    .filter((post) => post.data?.IsType === 'Complete');
  return posts.map((post) => ({
    slug: post.slug,
    title: post.data?.Title,
    description: post.data?.Description,
    pubDate: post.data?.PubDate,
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
