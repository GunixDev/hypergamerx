import { STRAPI_URL } from "@/app/config";
import Link from "next/link";
import Image from "next/image";
import { FormatearFecha } from "@/components/Formatear_Fecha";
import { getListArtiRamdom } from "@/service/blogs";
import { getListArticulo } from "@/service/blogs";
import Estrellas from "@/components/Estrellas";
import { PlataformasUI } from "@/components/comp_resenas/PlataformasUI";
import dynamic from "next/dynamic";
import ErrorPage from "@/components/Error.page";

export async function generateStaticParams() {
  const url = await fetch(`${STRAPI_URL}/api/blog-admins?[fields][0]=url`);
  const obtenerurl = await url.json();
  return obtenerurl.data.map((articulo) => ({
    url: articulo.attributes.url,
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

  const meta = articulometadata.data[0].attributes;

  const image = meta.ImagenPrincipal.data ? meta.ImagenPrincipal.data.attributes.url : "/logo4.png";

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
    openGraph: {
      title: meta.Titulo,
      description: meta.Resumen,
      url: `https://www.hypergamerx.com/blog/${meta.url}`,
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

export default async function BlogAdmin({ params }) {
  const articulo = await getListArticulo(params);
  if (articulo === undefined) {
    return <ErrorPage />;
  }
  const RamdonArticulos = await getListArtiRamdom(params.url);
  const attributes = articulo.attributes;
  const { Titulo, updatedAt, Resumen, videojuegos, Contenidos, ImagenPrincipal, Genero, Keywords } = attributes;

  return (
    <div className='sm:w-5/6 md:w-11/12 ls:w-11/12 m-auto my-10'>
      <div className='grid grid-cols-7 gap-4'>
        <div className=' col-span-5 relative mx-4'>
          <h1 className='text-5xl text-slate-400 font-bold work ls:max-sm:text-xl'>{Titulo}</h1>
          <div className='my-2 text-slate-700'>
            <span className='text-slate-600 text-sm ls:max-sm:text-xs'>
              Creado por
              <strong> {attributes.updatedBy.data.attributes.firstname} </strong>
              el dia
              <strong suppressHydrationWarning> {FormatearFecha(updatedAt)}</strong>
            </span>
          </div>
          <p className='text-sm my-2 text-slate-400'>{Genero}</p>
          <p className='text-xl text-slate-500 ls:max-sm:text-sm'>{Resumen}</p>
          {Genero === "Reseña de Videojuego" ? (
            <iframe
              width='853'
              height='480'
              src={videojuegos.data[0].attributes.TrailerVideo}
              className='w-full my-4'
              allowFullScreen></iframe>
          ) : null}

          {ImagenPrincipal.data !== null ? (
            <Image
              width={1000}
              height={800}
              src={ImagenPrincipal.data.attributes.url}
              alt={`image`}
              className='my-8 w-11/12 h-auto mx-auto'
              loading='lazy'
            />
          ) : null}

          <div className='bg-slate-950 p-6 rounded-2xl w-fit mt-4'>
            <span className='text-xl text-center mb-2'>Indice</span>
            {Contenidos.map((arti) => {
              return (
                <div key={arti.id}>
                  <Link href={`#subtitulo${arti.TituloContenido}`} className='text-base ls:max-sm:text-xs'>
                    <li className='text-slate-400 mt-3 hover:text-slate-50 duration-300'>{arti.TituloContenido}</li>
                  </Link>
                  {arti.Subbtitulos.map((subtitulo) => {
                    return (
                      <Link
                        key={subtitulo.id}
                        href={`#subtitulo${arti.TituloContenido}Sub${subtitulo.SubSubTitulo}`}
                        className='text-base ls:max-sm:text-xs'>
                        <li className='ml-4 text-slate-500 text-sm ls:max-sm:text-xs hover:text-slate-300 duration-300'>
                          {subtitulo.SubSubTitulo}
                        </li>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div>
            {Contenidos.map((arti) => {
              return (
                <div key={arti.id} className='my-4'>
                  <h2 id={`subtitulo${arti.TituloContenido}`} className='text-2xl mt-8 mb-2 ls:max-sm:text-base'>
                    {arti.TituloContenido}
                  </h2>
                  {arti.Textos.map((texto) => {
                    return (
                      <p key={texto.id} className='my-6 text-slate-500 ls:max-sm:text-xs'>
                        {texto.Texto}
                      </p>
                    );
                  })}
                  {arti.ContenidoImagen.data !== null ? (
                    <Image
                      width={1000}
                      height={800}
                      src={arti.ContenidoImagen.data?.attributes.url}
                      alt={`image`}
                      className='my-8 w-11/12 h-auto mx-auto'
                      loading='lazy'
                    />
                  ) : null}
                  {arti.Subbtitulos.map((subtitulo) => {
                    return (
                      <div key={subtitulo.id} className='my-6 text-slate-500 ls:max-sm:text-xs'>
                        <h3
                          id={`subtitulo${arti.TituloContenido}Sub${subtitulo.SubSubTitulo}`}
                          className='text-xl ml-4 mt-4 mb-2 ls:max-sm:text-sm text-slate-400'>
                          {subtitulo.SubSubTitulo}
                        </h3>
                        <div className='ml-4'>
                          <p className='text-sm ml-4 mb-4 ls:max-sm:text-xs text-slate-500 break-words'>
                            {subtitulo.Texto1}
                          </p>
                          <p className='text-sm ml-4 mb-4 ls:max-sm:text-xs text-slate-500 break-words'>
                            {subtitulo.Texto2}
                          </p>
                          <p className='text-sm ml-4 mb-4 ls:max-sm:text-xs text-slate-500 break-words'>
                            {subtitulo.Texto3}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {arti.Textos2.map((texto2) => {
                    return (
                      <p key={texto2.id} className='my-6 text-slate-500 ls:max-sm:text-xs'>
                        {texto2.Texto}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className='h-full relative col-span-2'>
          {Genero === "Reseña de Videojuego" ? (
            <div className='bg-slate-950 p-4 rounded-2xl w-full h-fit'>
              <h1 className='text-2xl text-slate-400 text-center font-bold work ls:max-sm:text-xl'>{Titulo}</h1>
              <Image
                width={600}
                height={400}
                src={videojuegos.data[0].attributes.Caratula.data.attributes.url}
                alt={`image`}
                className='my-4 w-80 h-80 mx-auto object-cover '
                loading='lazy'
              />
              <Estrellas cantidad={videojuegos.data[0].attributes.Calificacion} />
              <p className='ml-3 text-slate-300'>
                Lanzamiento:{" "}
                <span className='text-slate-400' suppressHydrationWarning>
                  {FormatearFecha(videojuegos.data[0].attributes.FechaLanzamiento)}
                </span>
              </p>
              <p className='ml-3 text-slate-300'>
                Multijugador:
                <span className='text-slate-400'>{videojuegos.data[0].attributes.Multijugador ? " Si" : " No"}</span>
              </p>
              <div>{PlataformasUI(videojuegos.data[0].attributes.Plataformas)}</div>
              <Link href={`../${params.url}`} className='hidden'>
                Ver articulos
              </Link>
            </div>
          ) : null}

          <div className=' bg-slate-950 p-5 rounded-2xl mt-10'>
            <h1 className='text-lg font-bold'>Arituclos aleatorios</h1>
            {RamdonArticulos.map((articulos) => {
              return <Articulos_Random key={articulos.id} entrada={articulos} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
