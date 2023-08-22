import { STRAPI_URL } from "../utils/config";

export async function getListCuriosidades() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[Genero][$eq]=Curiosidades`,
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListGuia() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[Genero][$eq]=Guia`,
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListNoticia() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[Genero][$eq]=Noticia`,
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListReseña() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[Genero][$eq]=Reseña de Videojuego`,
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}
