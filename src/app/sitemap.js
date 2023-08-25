import { getListTodo, getListAnucios } from "@/service/blogslist";

export default async function sitemap() {
  const articulos = await getListTodo();

  const administracion = await getListAnucios();
  const sitemapEntries = [
    {
      url: "https://www.hypergamerx.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.hypergamerx.com/noticia",
      lastModified: new Date(),
    },
    {
      url: "https://www.hypergamerx.com/resena",
      lastModified: new Date(),
    },
    {
      url: "https://www.hypergamerx.com/guia",
      lastModified: new Date(),
    },
    {
      url: "https://www.hypergamerx.com/curiosidades",
      lastModified: new Date(),
    },
    {
      url: "https://www.hypergamerx.com/anuncios",
      lastModified: new Date(),
    },
    ...articulos.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/${
        articulo.Genero === "Curiosidades"
          ? "curiosidades"
          : articulo.Genero === "Reseña de Videojuego"
          ? "resena"
          : articulo.Genero === "Noticia"
          ? "noticia"
          : articulo.Genero === "Guia"
          ? "guia"
          : null
      }/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),

    ...administracion.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/anuncios/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),
  ];
  return sitemapEntries;
}
