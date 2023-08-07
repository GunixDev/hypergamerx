import { STRAPI_URL } from "../app/config";

export async function getListArtiGeneral() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt`,
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
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&filters[url][$ne]=${url}`,
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
    `${STRAPI_URL}/api/blog-admins?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen2&[fields][2]=url&[fields][3]=updatedAt`,
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
