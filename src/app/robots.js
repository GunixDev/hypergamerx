export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/terminos-servicios/",
    },
    sitemap: "https://www.hypergamerx.com/sitemap.xml",
  };
}
