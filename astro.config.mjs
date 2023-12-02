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
  },
});
