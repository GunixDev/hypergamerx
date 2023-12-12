import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  image: {
    domains: ['astro.build'],
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
  },
  site: 'https://hypergamerx.com',
  integrations: [
    preact(),
    sitemap({
      serialize(item) {
        item.changefreq = 'monthly';
        item.priority = 1;
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
    tailwind(),
    mdx(),
  ],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
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
    '/blog/guia/las-7-mejores-semillas-para-minecraft-1-20': '/blog/las-7-mejores-semillas-para-minecraft-1-20',
    '/blog/guia/como-activar-las-funciones-experimentales-en-minecraft':
      '/blog/como-activar-las-funciones-experimentales-en-minecraft',
    '/blog/guia/7-consejos-esenciales-para-sobrevivir-la-primera-noche-en-minecraft':
      '/blog/7-consejos-esenciales-para-sobrevivir-la-primera-noche-en-minecraft',
    '/blog/curiosidades/descubre-por-que-mario-bros-es-uno-de-los-juegos-mas-iconicos':
      '/blog/descubre-por-que-mario-bros-es-uno-de-los-juegos-mas-iconicos',
    '/blog/curiosidades/los-7-videojuegos-mas-influyentes-de-todos-los-tiempos':
      '/blog/las-7-mejores-semillas-para-minecraft-1-20',
    '/blog/noticia/xbox-gana-la-demanda-contra-play-station-por-la-compra-de-activision-blizzard':
      '/blog/xbox-gana-la-demanda-contra-play-station-por-la-compra-de-activision-blizzard',
    '/blog/resena/minecraft-java': '/blog/minecraft',
    '/blog/anuncios/etiquetas-para-los-articulos-y-nuevo-canal-de-youtube': '/',
    '/blog/anuncios/bienvenidos-a-hyper-gamer-x-1': '/',
    '/blog/anuncios': '/',
  },
});
