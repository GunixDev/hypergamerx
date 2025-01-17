import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import pagefind from "astro-pagefind";
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://localhost:4321",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    }
  },

  integrations: [tailwind(), pagefind(), mdx(), preact({ devtools: true }), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        es: 'es',
      },
    },
    serialize(item) {
      if (item.url.includes('blog/preview/')) {
        return null;
      } else if(item.url.includes('blog/')) {
        item.changefreq = 'daily';
        item.priority = 1;
        return item;
      } else {
        item.changefreq = 'weekly';
        item.priority = 0.8;
        return item;
      }
    },
    filter: (page) =>
      page !== 'https://hypergamerx/blog/preview/'
  })],

  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});
