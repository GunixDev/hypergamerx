import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  image: {
    domains: ['astro.build'],
    remotePatterns: [{
      protocol: 'https'
    }]
  },
  site: 'https://www.hypergamerx.com',
  integrations: [preact(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        es: 'es'
      }
    },
    serialize(item) {
      item.changefreq = 'monthly';
      item.priority = 1;
      return item;
    },
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        es: 'es'
      }
    }
  }), tailwind(), mdx(), partytown(), compress()],
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  redirects: {
    '/': '/en/',
    '/blog/noticia': '/es/',
    '/blog/resena': '/es/',
    '/blog/noticia/nuevos-tradeos-y-cartografos-en-minecraft-1-20-2-pre-release-2-1': '/es/blog/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1/',
    '/blog/noticia/los-aldeanos-cambiaran-en-la-1-20-2-snapshot-23w31a': '/es/blog/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a/',
    '/blog/noticia/el-trailer-de-la-minecraft-live-2023': '/es/blog/the-trailer-of-minecraft-live-2023/',
    '/blog/guia': '/es/',
    '/blog/resena/valorant': '/es/blog/valorant/',
    '/blog/curiosidades': '/es/',
    '/blog/noticia/la-hitbox-cambiaran-en-minecraft-1-20-2-snapshot-23w32a': '/es/blog/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a/',
    '/blog/guia/las-7-mejores-semillas-para-minecraft-1-20': '/es/blog/the-7-best-seeds-for-minecraft-1-20/',
    '/blog/guia/como-activar-las-funciones-experimentales-en-minecraft': '/es/blog/how-to-enable-experimental-features-in-minecraft/',
    '/blog/guia/7-consejos-esenciales-para-sobrevivir-la-primera-noche-en-minecraft': '/es/blog/7-essential-tips-to-survive-the-first-night-in-minecraft/',
    '/blog/curiosidades/descubre-por-que-mario-bros-es-uno-de-los-juegos-mas-iconicos': '/es/blog/discover-why-mario-bros-is-one-of-the-most-iconic-games/',
    '/blog/curiosidades/los-7-videojuegos-mas-influyentes-de-todos-los-tiempos': '/es/blog/the-7-most-influential-video-games-of-all-time/',
    '/blog/noticia/xbox-gana-la-demanda-contra-play-station-por-la-compra-de-activision-blizzard': '/es/blog/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard/',
    '/blog/resena/minecraft-java': 'es/blog/minecraft/',
    '/blog/anuncios/etiquetas-para-los-articulos-y-nuevo-canal-de-youtube': '/es/',
    '/blog/anuncios/bienvenidos-a-hyper-gamer-x-1': '/es/',
    '/blog/anuncios': '/es/',
    '/blog/nuevos-tradeos-y-cartografos-en-minecraft-1-20-2-pre-release-2-1/': '/es/blog/new-trades-and-cartographers-in-minecraft-1-20-2-pre-release-2-1/',
    '/blog/minecraft': '/es/blog/minecraft/',
    '/blog/los-aldeanos-cambiaran-en-la-1-20-2-snapshot-23w31a': '/es/blog/the-villagers-will-change-in-the-1-20-2-snapshot-23w31a/',
    '/blog/el-trailer-de-la-minecraft-live-2023': '/es/blog/the-trailer-of-minecraft-live-2023/',
    '/blog/como-activar-las-funciones-experimentales-en-minecraft': '/es/blog/how-to-enable-experimental-features-in-minecraft/',
    '/blog/las-7-mejores-semillas-para-minecraft-1-20': '/es/blog/the-7-best-seeds-for-minecraft-1-20/',
    '/blog/los-7-videojuegos-mas-influyentes-de-todos-los-tiempos': '/es/blog/the-7-most-influential-video-games-of-all-time/',
    '/blog/7-consejos-esenciales-para-sobrevivir-la-primera-noche-en-minecraft': '/es/blog/7-essential-tips-to-survive-the-first-night-in-minecraft/',
    '/blog/la-hitbox-cambiaran-en-minecraft-1-20-2-snapshot-23w32a': '/es/blog/the-hitbox-will-change-in-minecraft-1-20-2-snapshot-23w32a/',
    '/blog/descubre-por-que-mario-bros-es-uno-de-los-juegos-mas-iconicos': '/es/blog/discover-why-mario-bros-is-one-of-the-most-iconic-games/',
    '/blog/xbox-gana-la-demanda-contra-play-station-por-la-compra-de-activision-blizzard': '/es/blog/xbox-wins-the-lawsuit-against-play-station-for-the-purchase-of-activision-blizzard/',
    '/blog/geometry-dash-22-sneak-peek-3': '/es/blog/geometry-dash-22-sneak-peek-3/',
    '/blog/la-22-esta-demasiado-cerca-de-salir': '/es/blog/the-22-is-too-close-to-exit/',
    '/blog/geometrydash': '/es/blog/geometry-dash/',
    '/blog/que-son-las-lunas-de-geometry-dash-22': '/es/blog/what-are-the-moons-of-geometry-dash-22/',
    '/terminos-servicios/AvisoLegal': '/es/terminos-servicios/AvisoLegal/'
  }
});