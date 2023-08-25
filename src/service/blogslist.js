import { STRAPI_URL } from "../utils/config";

export async function getListTodo() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero`,
    {
      next: { revalidate: 18000 },
    },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListAnucios() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero`,
    {
      next: { revalidate: 28800 },
    },
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
    {
      next: { revalidate: 28800 },
    },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListResena() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[Genero][$eq]=Reseña de Videojuego`,
    {
      next: { revalidate: 28800 },
    },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export async function getListCuriosidades() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-datas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&[fields][4]=Genero&filters[Genero][$eq]=Curiosidades`,
    {
      next: { revalidate: 28800 },
    },
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
    {
      next: { revalidate: 28800 },
    },
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}
