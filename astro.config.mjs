import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://hypergamerx.com',
  integrations: [mdx(), sitemap(), tailwind(), preact()],
  output: 'hybrid',
  adapter: vercel(),
  redirects: {
    '/blog/noticia': '/',
    '/blog/resena': '/',
    '/blog/noticia/nuevos-tradeos-y-cartografos-en-minecraft-1-20-2-pre-release-2-1':
      '/blog/nuevos-tradeos-y-cartografos-en-minecraft-1-20-2-pre-release-2-1',
    '/blog/noticia/los-aldeanos-cambiaran-en-la-1-20-2-snapshot-23w31a':
      '/blog/los-aldeanos-cambiaran-en-la-1-20-2-snapshot-23w31a',
    '/blog/noticia/el-trailer-de-la-minecraft-live-2023': '/blog/el-trailer-de-la-minecraft-live-2023',
    '/blog/guia': '/',
    '/blog/resena/valorant': '/blog/valorant',
    '/blog/curiosidades': '/',
    '/blog/noticia/la-hitbox-cambiaran-en-minecraft-1-20-2-snapshot-23w32a':
      '/blog/la-hitbox-cambiaran-en-minecraft-1-20-2-snapshot-23w32a',
  },
});
