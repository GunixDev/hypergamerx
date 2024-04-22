import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import metaTags from 'astro-meta-tags';
import cloudflare from '@astrojs/cloudflare';
import playformCompress from '@playform/compress';

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
    playformCompress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
    metaTags(),
  ],
  output: 'server',
  adapter: cloudflare(),
});
