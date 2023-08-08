export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/terminos-servicios/",
    },
    sitemap: "https://strapi-api-app-cqot.onrender.com/api/sitemap/index.xml",
  };
}
