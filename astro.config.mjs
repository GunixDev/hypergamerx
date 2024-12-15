import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import playformCompress from '@playform/compress';
import vercel from '@astrojs/vercel/serverless';
import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['astro.build'],
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },
  site: 'https://www.hypergamerx.com',
  integrations: [tailwind(), mdx(), sitemap({
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
  }), playformCompress({
    CSS: true,
    HTML: true,
    Image: false,
    JavaScript: true,
    SVG: true,
  }), partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  }), metaTags(), react()],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
