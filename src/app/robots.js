export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/terminos-servicios/",
        "/blog/anuncios/preview",
        "/blog/curiosidades/preview",
        "/blog/resena/preview",
      ],
    },
    sitemap: "https://www.hypergamerx.com/sitemap.xml",
  };
}
