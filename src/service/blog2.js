import { STRAPI_URL } from "../utils/config";

export async function getListArticulos() {
  const res = await fetch(`${STRAPI_URL}/api/blog-datas?[fields][0]=url&[fields][1]=updatedAt&[fields][2]=Genero`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListAdministracion() {
  const res = await fetch(`${STRAPI_URL}/api/blog-admins?[fields][0]=url&[fields][1]=updatedAt`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListArtiGeneral() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListArtiRamdom(url) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[url][$ne]=${url}`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListArticulo(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[0]=videojuegos&populate[videojuegos][populate][Caratula][fields][0]=url&populate[videojuegos][populate][Plataformas]=deep&populate[ImagenPrincipal][fields][0]=url&populate[0]=Contenidos&populate[Contenidos][populate][Textos][populate]&populate[Contenidos][populate][ContenidoImagen][fields][0]=url&populate[Contenidos][populate][Subbtitulos][populate]&populate[Contenidos][populate][Textos2][populate]&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getListArtiAdmin() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero`,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListArticuloAdmin(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[0]=videojuegos&populate[videojuegos][populate][Caratula][fields][0]=url&populate[videojuegos][populate][Plataformas]=deep&populate[ImagenPrincipal][fields][0]=url&populate[0]=Contenidos&populate[Contenidos][populate][Textos][populate]&populate[Contenidos][populate][ContenidoImagen][fields][0]=url&populate[Contenidos][populate][Subbtitulos][populate]&populate[Contenidos][populate][Textos2][populate]&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloAdmin(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloCuriosidades(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[Genero][$eq]=Curiosidades&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloNoticia(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[Genero][$eq]=Noticia&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloReseña(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[0]=videojuegos&populate[videojuegos][populate][Caratula][fields][0]=url&populate[videojuegos][populate][Plataformas]=deep&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[Genero][$eq]=Rese%C3%B1a%20de%20Videojuego&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}

export async function getArticuloGuia(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[videojuegos][fields][0]=Nombre&populate[ImagenPrincipal][fields][0]=url&populate[createdBy][populate]&populate[updatedBy][populate]&filters[Genero][$eq]=Guia&filters[url][$eq]=${params.url}`,
    { cache: "no-store" },
  );
  const articulos = await res.json();
  return articulos.data[0];
}
