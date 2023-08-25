export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/terminos-servicios/", "/blog/preview/"],
    },
    sitemap: "https://www.hypergamerx.com/sitemap.xml",
  };
}
