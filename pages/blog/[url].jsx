import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";
import React from "react";

export const EntradaBlog = ({ entrada, locale }) => {
  if (typeof entrada === "undefined") {
    return (
      <Layout>
        <div className='flex items-center justify-center h-96 my-20'>
          <p className='text-center text-4xl'>Cargando...</p>
        </div>
      </Layout>
    );
  }

  if (entrada && entrada.data[0]) {
    return (
      <Layout
        titulo={entrada.data[0].attributes.titulo}
        descripcion={entrada.data[0].attributes.Resumen}
        imagen={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
        keywords={entrada.data[0].attributes.keywords}>
        <div className='sm:w-5/6 md:w-10/12 lg:w-2/3 m-auto my-10'>
          <div>
            <p className='text-5xl text-slate-400 font-bold work'>{entrada.data[0].attributes.titulo}</p>
            <h3 className='text-slate-500 my-4 text-sm' suppressHydrationWarning>
              {FormatearFecha(entrada.data[0].attributes.publishedAt)}
            </h3>
            <p className='text-xl text-slate-500'>{entrada.data[0].attributes.Resumen}</p>
          </div>
          <Image
            width={1000}
            height={800}
            src={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
            alt={`imagen blog ${entrada.data[0].attributes.titulo}`}
            className='my-8 w-11/12 h-auto mx-auto'
            loading='lazy'
          />
          <div>
            {[...Array(10).keys()].map((index) => {
              const subTituloKey = `ContenidoSubTitulo${index + 1}`;
              const descripcionKey = `ContenidoDescripcion${index + 1}`;
              const imagenKey = `ContenidoImagen${index + 1}`;

              const subTitulo = entrada.data[0].attributes[subTituloKey];
              const descripcion = entrada.data[0].attributes[descripcionKey];
              const imagenes = entrada.data[0].attributes[imagenKey]?.data || [];

              if (!subTitulo) return null;

              return (
                <React.Fragment key={index}>
                  <p className='text-2xl mt-8 mb-2'>{subTitulo}</p>
                  {descripcion && <p className='my-2 text-slate-500'>{descripcion}</p>}
                  {imagenes.length > 0 &&
                    imagenes.map((imagen) => (
                      <Image
                        key={imagen.id}
                        width={1000}
                        height={800}
                        src={imagen.attributes.url}
                        alt={`imagen blog ${imagen.attributes.titulo}`}
                        className='my-8 w-11/12 h-auto mx-auto'
                        loading='lazy'
                      />
                    ))}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  } else {
    return <ErrorPage statusCode={404} />;
  }
};

export async function getStaticPaths({ locales }) {
  const locale = locales[0];
  const url = `${process.env.STRAPI_URL}/api/blogs?locale=${locale}`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.data.map((entrada) => ({
    params: { url: entrada.attributes.url },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { url }, locale }) {
  const urlBlog = `${process.env.STRAPI_URL}/api/blogs?populate=imagenprincipal&populate=ContenidoImagen1&populate=ContenidoImagen2&populate=ContenidoImagen3&populate=ContenidoImagen4&populate=ContenidoImagen5&populate=ContenidoImagen6&populate=ContenidoImagen7&populate=ContenidoImagen8&populate=ContenidoImagen9&populate=ContenidoImagen10&locale=${locale}&filters[url][$eq]=${url}`;

  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada,
      locale,
    },
  };
}

export default EntradaBlog;
