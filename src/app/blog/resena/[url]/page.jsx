import { STRAPI_URL } from "@/utils/config";
import Link from "next/link";
import Image from "next/image";
import { FormatearFecha } from "@/components/Formatear_Fecha";
import { getArticuloReseña } from "@/service/blogs";
import Estrellas from "@/components/Estrellas";
import { PlataformasUI } from "@/components/comp_resenas/PlataformasUI";
import dynamic from "next/dynamic";
import ErrorPage from "@/components/Error.page";
import { ContenidoArticulo, Indice2 } from "@/components/ContenidoArticulo";
import { Suspense } from "react";
import { getListResena2 } from "@/service/blogslist";

export async function generateStaticParams() {
  const url = await fetch(`${STRAPI_URL}/api/blog-resenas?[fields][0]=url`);
  const obtenerurl = await url.json();
  return obtenerurl.data.map((articulo) => ({
    url: articulo.url,
  }));
}

const Articulos_version1 = dynamic(() => import("../../../../components/ArticulosView"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

export async function generateMetadata({ params }) {
  const url = params.url;
  const articulometadata = await fetch(
    `${STRAPI_URL}/api/blog-resenas?populate[ImagenPrincipal][fields][0]=url&filters[url][$eq]=${url}`,
  ).then((res) => res.json());

  if (articulometadata.data.length < 1) {
    return;
  }

  const meta = articulometadata.data[0];

  const image = meta.ImagenPrincipal ? meta.ImagenPrincipal.url : "/logo4.png";

  return {
    title: meta.Titulo,
    description: meta.Resumen,
    keywords: [
      `${meta.Keywords}`,
      "HyperGamerX",
      "videojuegos que son",
      "videojuegos de decisiones pc",
      " clases de videojuegos",
      "videojuegos mas famosos",
      "generos de videojuegos",
      "cual es el juego mas famoso del mundo",
      "videojuegos populares",
      "Noticias de videojuegos",
      "Curiosidades de videojuegos",
      "Últimas novedades en videojuegos",
    ],
    alternates: {
      canonical: `https://www.hypergamerx.com/blog/resena/${meta.url}`,
    },
    openGraph: {
      title: meta.Titulo,
      description: meta.Resumen,
      url: `https://www.hypergamerx.com/blog/resena/${meta.url}`,
      type: "article",
      publishedTime: meta.updatedAt,
      authors: ["Sunrize Studios"],
      images: [image],
    },
    twitter: {
      title: meta.Titulo,
      description: meta.Resumen,
      creator: "Sunrize Studios",
      images: [image],
    },
  };
}

const Articulos_Random = dynamic(() => import("@/components/ArticulosView2"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

export default async function Blog({ params }) {
  const articulo = await getArticuloReseña(params);
  if (articulo === undefined) {
    return <ErrorPage />;
  }
  const RamdonArticulos = await getListResena2(params.url);
  const { Titulo, updatedAt, Resumen, videojuegos, Contenidos } = articulo;
  return (
    <div className='md:w-11/12 ls:max-md:w-11/12 md:m-auto my-10'>
      <Suspense fallback={<div>Cargando...</div>}>
        <div className='grid grid-cols-7 gap-4'>
          <div className='sm:col-span-5 ls:max-sm:col-span-7 relative mx-4'>
            <h1 className='md:text-5xl md:mt-10 text-slate-400 font-bold work ls:max-sm:text-lg sm:max-md:text-xl'>
              {Titulo}
            </h1>
            <div className='md:my-2 ls:max-md:my-0 text-slate-700'>
              <span className='text-slate-600 md:ext-sm ls:max-md:text-xs'>
                Creado por
                <strong> {articulo.updatedBy.firstname} </strong>
                el dia
                <strong suppressHydrationWarning> {FormatearFecha(updatedAt)}</strong>
              </span>
            </div>
            <p className='md:text-sm ls:max-md:text-xs md:my-2 ls:max-md:my-1 text-slate-400'>Reseña de videojuego</p>
            <p className='md:text-xl text-slate-500 ls:max-md:text-xs'>{Resumen}</p>
            <iframe
              width='853'
              height='480'
              src={videojuegos[0].TrailerVideo}
              className='w-full my-4 ls:max-md:h-auto'
              allowFullScreen></iframe>

            <div className='bg-slate-950 md:p-6 ls:max-md:p-4 rounded-2xl w-fit mt-4 ls:max-sm:hidden'>
              <Indice2 apiResponse={Contenidos} />
            </div>
            <ContenidoArticulo apiResponse={Contenidos} />
          </div>
          <div className='h-full relative sm:col-span-2'>
            <div className='bg-slate-950 p-4 rounded-2xl w-full h-fit ls:max-md:hidden'>
              <h1 className='text-2xl text-slate-400 text-center font-bold work ls:max-sm:text-xl'>{Titulo}</h1>
              <Image
                width={600}
                height={400}
                src={videojuegos[0].Caratula.url}
                alt={`image`}
                className='my-4 w-80 h-80 mx-auto object-cover '
                loading='lazy'
              />
              <Estrellas cantidad={videojuegos[0].Calificacion} />
              <p className='ml-3 text-slate-300'>
                Lanzamiento:{" "}
                <span className='text-slate-400' suppressHydrationWarning>
                  {FormatearFecha(videojuegos[0].FechaLanzamiento)}
                </span>
              </p>
              <p className='ml-3 text-slate-300'>
                Multijugador:
                <span className='text-slate-400'>{videojuegos[0].Multijugador ? " Si" : " No"}</span>
              </p>
              <div>{PlataformasUI(videojuegos[0].Plataformas)}</div>
              <Link href={`../${params.url}`} className='hidden'>
                Ver articulos
              </Link>
            </div>

            {/*<div className=' bg-slate-950 md:p-5 ls:max-md:p-3 rounded-2xl mt-10 ls:max-sm:hidden'>
              <h1 className='md:text-lg font-bold ls:max-md:text-base text-white'>Articulos aleatorios</h1>
              {RamdonArticulos.map((articulos) => {
                return <Articulos_Random key={articulos.id} entrada={articulos} />;
              })}
            </div>*/}
          </div>
        </div>
      </Suspense>
      <div className='mx-2 mt-6 sm:hidden'>
        {/*<h1 className='font-bold text-base my-2'>Arituclos aleatorios</h1>*/}
        <div className='grid grid-cols-3 gap-1 relative'>
          {RamdonArticulos.map((articulos) => {
            return <Articulos_version1 key={articulos.id} entrada={articulos} />;
          })}
        </div>
      </div>
    </div>
  );
}
