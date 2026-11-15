import { defineConfig, envField, memoryCache, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import emdash, { local, memoryCache as emdashMemoryCache } from "emdash/astro";
import { sqlite } from "emdash/db";
import { d1, r2, kvCache } from "@emdash-cms/cloudflare";
import node from "@astrojs/node";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";

const isCloudflare = process.env.DEPLOY_TARGET === "cloudflare" || process.env.WORKERS_CI === "1";
const isLocal = !isCloudflare;

const database = isLocal ? sqlite({ url: "file:./data.db" }) : d1({ binding: "DB", session: "auto", coalesce: true });
const objectCache = isLocal ? emdashMemoryCache() : kvCache({ binding: "CACHE" });

const storage = isLocal
  ? local({
      directory: "./uploads",
      baseUrl: "/_emdash/api/media/file",
    })
  : r2({ binding: "MEDIA", publicUrl: "https://media.hypergamerx.com" });

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

  integrations: [mdx(), react(), emdash({ database, storage, objectCache })],

  output: "server",
  adapter: isLocal ? node({ mode: "standalone" }) : cloudflare(),

  cache: {
    provider: isLocal ? memoryCache() : cacheCloudflare(),
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
