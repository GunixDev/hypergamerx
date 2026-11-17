import { defineConfig, envField, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import emdash from "emdash/astro";
import { d1, r2, kvCache } from "@emdash-cms/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";

export default defineConfig({
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      TURNSTILE_SECRET_KEY: envField.string({ context: "server", access: "secret" }),
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: "client", access: "public" }),
    },
  },

  site: "https://hypergamerx.com",
  trailingSlash: "never",

  integrations: [
    mdx(),
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto", coalesce: true }),
      storage: r2({
        binding: "MEDIA",
        publicUrl: import.meta.env.PROD ? "https://media.hypergamerx.com" : undefined,
      }),
      objectCache: kvCache({ binding: "CACHE" }),
    }),
  ],

  output: "server",
  adapter: cloudflare(),

  cache: {
    provider: cacheCloudflare(),
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "space-grotesk",
      cssVariable: "--font-space-grotesk",
    },
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "cyrillic"],
      formats: ["woff2", "woff"],
    },
  ],

  routeRules: {
    "/": { maxAge: 604800, swr: 2592000 },
    "/blog": { maxAge: 604800, swr: 2592000 },
    "/blog/pagina/[page]": { maxAge: 604800, swr: 2592000 },
    "/blog/[...slug]": { maxAge: 604800, swr: 2592000 },

    "/juegos": { maxAge: 604800, swr: 2592000 },
    "/juegos/[game]": { maxAge: 604800, swr: 2592000 },
    "/juegos/[game]/[tag]/[...page]": { maxAge: 604800, swr: 2592000 },

    "/[tag]/[...page]": { maxAge: 604800, swr: 2592000 },
    "/buscar": { maxAge: 3600, swr: 86400 },
    "/404": { maxAge: 3600, swr: 86400 },
    "/avisos-y-politicas/*": { maxAge: 604800, swr: 2592000 },
    "/conocenos/*": { maxAge: 604800, swr: 2592000 },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    checkOrigin: false,
  },
});
