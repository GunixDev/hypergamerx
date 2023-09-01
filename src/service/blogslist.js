import { STRAPI_URL } from "../utils/config";

export async function getListAnucios() {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&sort[0]=updatedAt:desc`,
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

export async function getListAnucios2(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&filters[url][$ne]=${params}`,
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
    `${STRAPI_URL}/api/blog-guias?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&sort[0]=updatedAt:desc`,
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

export async function getListGuia2(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-guias?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&filters[url][$ne]=${params}`,
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
    `${STRAPI_URL}/api/blog-resenas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&sort[0]=updatedAt:desc`,
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

export async function getListResena2(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-resenas?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&filters[url][$ne]=${params}`,
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
    `${STRAPI_URL}/api/blog-curiosidades?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&sort[0]=updatedAt:desc`,
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

export async function getListCuriosidades2(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-curiosidades?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&filters[url][$ne]=${params}`,
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
    `${STRAPI_URL}/api/blog-noticias?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&[fields][3]=updatedAt&sort[0]=updatedAt:desc`,
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

export async function getListNoticia2(params) {
  const res = await fetch(
    `${STRAPI_URL}/api/blog-noticias?populate[ImagenPrincipal][fields][0}=url&[fields][0]=Titulo&[fields][1]=Resumen&[fields][2]=url&filters[url][$ne]=${params}`,
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
