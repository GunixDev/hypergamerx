import { STRAPI_URL } from "../utils/config";

export async function getArticuloAdmin(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    {
      next: { revalidate: 18000 },
    },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloAdminPreview(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?publicationState=preview&filters[publishedAt][$null]=true&populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloCuriosidades(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-curiosidades?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    {
      next: { revalidate: 18000 },
    },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloCuriosidadesPreview(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-curiosidades?publicationState=preview&filters[publishedAt][$null]=true&populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloNoticia(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-noticias?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    {
      next: { revalidate: 18000 },
    },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloReseña(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-resenas?populate[0]=videojuegos&populate[videojuegos][populate][Caratula][fields][0]=url&populate[videojuegos][populate][Plataformas]=deep&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    {
      next: { revalidate: 18000 },
    },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloReseñaPreview(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-resenas?publicationState=preview&filters[publishedAt][$null]=true&populate[0]=videojuegos&populate[videojuegos][populate][Caratula][fields][0]=url&populate[videojuegos][populate][Plataformas]=deep&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    {
      next: { revalidate: 18000 },
    },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloGuia(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-guias?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    {
      next: { revalidate: 18000 },
    },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloPreview(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?publicationState=preview&filters[publishedAt][$null]=true&populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}
