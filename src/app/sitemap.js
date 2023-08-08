import { getListArticulos, getListAdministracion } from "@/service/blogs";

export default async function sitemap() {
  const articulos = await getListArticulos();
  const administracion = await getListAdministracion();
  const sitemapEntries = [
    {
      url: "https://www.hypergamerx.com",
      lastModified: new Date(),
    },
    ...articulos.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/articulos/${articulo.attributes.url}`,
      lastModified: articulo.attributes.updatedAt,
    })),

    ...administracion.map((articulo) => ({
      url: `https://www.hypergamerx.com/blog/anuncios/${articulo.attributes.url}`,
      lastModified: articulo.attributes.updatedAt,
    })),
  ];
  return sitemapEntries;
}
