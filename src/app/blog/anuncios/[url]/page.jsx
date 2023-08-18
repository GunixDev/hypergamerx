import { STRAPI_URL } from "@/app/config";
import Link from "next/link";
import Image from "next/image";
import { FormatearFecha } from "@/components/Formatear_Fecha";
import { getListArticuloAdmin, getListArtiRamdom } from "@/service/blogs";
import dynamic from "next/dynamic";
import ErrorPage from "@/components/Error.page";
import Indice2 from "@/components/Indice2";

const Articulos_version1 = dynamic(() => import("../../../../components/ArticulosView"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

export async function generateStaticParams() {
  const url = await fetch(`${STRAPI_URL}/api/blog-admins?[fields][0]=url`);
  const obtenerurl = await url.json();
  return obtenerurl.data.map((articulo) => ({
    url: articulo.url,
  }));
}

export async function generateMetadata({ params }) {
  const url = params.url;
  const articulometadata = await fetch(
    `${STRAPI_URL}/api/blog-admins?populate[ImagenPrincipal][fields][0]=url&filters[url][$eq]=${url}`,
  ).then((res) => res.json());

  if (articulometadata.data.length < 1) {
    return;
  }

  const meta = articulometadata.data[0];

  const image = meta.ImagenPrincipal ? meta.ImagenPrincipal.url : "/logo4.png";

  return {
    title: meta.Titulo,
    description: meta.Resumen2,
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
      canonical: `https://www.hypergamerx.com/blog/anuncios/${meta.url}`,
    },
    openGraph: {
      title: meta.Titulo,
      description: meta.Resumen2,
      url: `https://www.hypergamerx.com/blog/anuncios/${meta.url}`,
      type: "article",
      publishedTime: meta.updatedAt,
      authors: ["Sunrize Studios"],
      images: [image],
    },
    twitter: {
      title: meta.Titulo,
      description: meta.Resumen2,
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

export default async function AdminBlog({ params }) {
  const articulo = await getListArticuloAdmin(params);
  if (articulo === undefined) {
    return <ErrorPage />;
  }
  const RamdonArticulos = await getListArtiRamdom(params.url);
  const { Titulo, updatedAt, Resumen, videojuegos, Contenidos, ImagenPrincipal, Genero, Keywords } = articulo;

  return (
    <div className='md:w-11/12 ls:max-md:w-full m-auto my-10'>
      <div className='grid grid-cols-7 gap-4'>
        <div className='sm:col-span-5 ls:max-sm:col-span-7 relative mx-4'>
          <h1 className='md:text-5xl text-slate-400 font-bold work ls:max-sm:text-lg sm:max-md:text-xl'>{Titulo}</h1>
          <div className='md:my-2 ls:max-md:my-0 text-slate-700'>
            <span className='text-slate-600 md:ext-sm ls:max-md:text-xs'>
              Creado por
              <strong> {articulo.updatedBy.firstname} </strong>
              el dia
              <strong suppressHydrationWarning> {FormatearFecha(updatedAt)}</strong>
            </span>
          </div>
          <p className='md:text-sm ls:max-md:text-xs md:my-2 ls:max-md:my-1 text-slate-400'>{Genero}</p>
          <p className='md:text-xl text-slate-500 ls:max-md:text-xs'>{Resumen}</p>
          {Genero === "Reseña de Videojuego" ? (
            <iframe
              width='853'
              height='480'
              src={videojuegos.TrailerVideo}
              className='w-full my-4'
              allowFullScreen></iframe>
          ) : null}

          {ImagenPrincipal !== null ? (
            <Image
              width={1000}
              height={800}
              src={ImagenPrincipal.url}
              alt={`image`}
              className='my-8 md:w-11/12 ls:max-md:w-full h-auto mx-auto'
              priority={true}
            />
          ) : null}

          <div className='bg-slate-950 md:p-6 ls:max-md:p-4 rounded-2xl w-fit mt-4 ls:max-sm:hidden'>
            <span className='md:text-xl ls:max-md:text-base text-center mb-2 text-white font-bold'>Indice</span>
            <Indice2 apiResponse={Contenidos} />
          </div>
          <div className='contenido' dangerouslySetInnerHTML={{ __html: Contenidos }} />
        </div>
        <div className='h-full relative sm:col-span-2'>
          <div className=' bg-slate-950 md:p-5 ls:max-md:p-3 rounded-2xl mt-10 ls:max-sm:hidden'>
            <h1 className='md:text-lg font-bold ls:max-md:text-base text-white'>Articulos aleatorios</h1>
            {RamdonArticulos.map((articulos) => {
              return <Articulos_Random key={articulos.id} entrada={articulos} />;
            })}
          </div>
        </div>
      </div>
      <div className='mx-2 mt-6 sm:hidden'>
        <h1 className='font-bold text-base my-2'>Arituclos aleatorios</h1>
        <div className='grid grid-cols-3 gap-1 relative'>
          {RamdonArticulos.map((articulos) => {
            return <Articulos_version1 key={articulos.id} entrada={articulos} />;
          })}
        </div>
      </div>
    </div>
  );
}
