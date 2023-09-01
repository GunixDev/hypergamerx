import { getListCuriosidades, getListGuia, getListNoticia, getListResena, getListAnucios } from "@/service/blogslist";

export default async function sitemap() {
  const curiosidades = await getListCuriosidades();
  const guias = await getListGuia();
  const noticias = await getListNoticia();
  const resenas = await getListResena();
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
    ...curiosidades.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/curiosidades/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),

    ...guias.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/guia/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),

    ...noticias.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/noticia/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),

    ...resenas.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/resena/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),

    ...administracion.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/anuncios/${articulo.url}`,
      lastModified: articulo.updatedAt,
    })),
  ];
  return sitemapEntries;
}
