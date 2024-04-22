import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import metaTags from 'astro-meta-tags';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hypergamerx.com',
  integrations: [
    tailwind(),
    mdx(),
    preact(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
      serialize(item) {
        item.changefreq = 'weekly';
        item.priority = 1;
        return item;
      },
    }),
    metaTags(),
  ],
  output: 'hybrid',
  adapter: cloudflare({ mode: 'directory' }),
});
