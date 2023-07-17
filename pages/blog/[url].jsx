import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";
import React from "react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const STRAPI_URL = process.env.STRAPI_URL;

export const EntradaBlog = ({ entrada, locale }) => {
  if (!entrada || !entrada.data || !entrada.data[0]) {
    return <ErrorPage statusCode={404} />;
  }
  const { attributes } = entrada.data[0];
  const { titulo, Resumen, imagenprincipal, keywords } = attributes;
  return (
    <Layout titulo={titulo} descripcion={Resumen} imagen={imagenprincipal.data.attributes.url} keywords={keywords}>
      <div className='sm:w-5/6 md:w-10/12 lg:w-2/3 ls:w-11/12 m-auto my-10'>
        <div>
          <h1 className='text-5xl text-slate-400 font-bold work ls:max-sm:text-xl'>{titulo}</h1>
          <p className='text-slate-500 my-4 text-sm ls:max-sm:text-xs' suppressHydrationWarning>
            {FormatearFecha(attributes.publishedAt)}
          </p>
          <h2 className='text-xl text-slate-500 ls:max-sm:text-sm'>{Resumen}</h2>
        </div>
        <Image
          width={1000}
          height={800}
          src={imagenprincipal.data.attributes.url}
          alt={`imagen blog ${titulo}`}
          className='my-8 w-11/12 h-auto mx-auto'
          loading='lazy'
        />
        <div>
          {[...Array(10).keys()].map((index) => {
            const subTituloKey = `ContenidoSubTitulo${index + 1}`;
            const descripcionKey = `ContenidoDescripcion${index + 1}`;
            const imagenKey = `ContenidoImagen${index + 1}`;
            const subTitulo = attributes[subTituloKey];
            const descripcion = attributes[descripcionKey];
            const imagenes = attributes[imagenKey]?.data || [];
            return (
              <React.Fragment key={index}>
                {subTitulo && <h2 className='text-2xl mt-8 mb-2 ls:max-sm:text-base'>{subTitulo}</h2>}
                {descripcion && <p className='my-6 text-slate-500 ls:max-sm:text-xs'>{descripcion}</p>}
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
};
export async function getStaticPaths({ locales }) {
  const locale = locales[0];
  const url = `${STRAPI_URL}/api/blogs?locale=${locale}`;
  const respuesta = await axios.get(url);
  const entradas = respuesta.data;
  const paths = entradas.data.map((entrada) => ({
    params: { url: entrada.attributes.url },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { url }, locale }) {
  const urlBlog = `${STRAPI_URL}/api/blogs?populate=imagenprincipal&populate=ContenidoImagen1&populate=ContenidoImagen2&populate=ContenidoImagen3&populate=ContenidoImagen4&populate=ContenidoImagen5&populate=ContenidoImagen6&populate=ContenidoImagen7&populate=ContenidoImagen8&populate=ContenidoImagen9&populate=ContenidoImagen10&locale=${locale}&filters[url][$eq]=${url}`;
  const respuesta = await axios.get(urlBlog);
  const entrada = respuesta.data;
  return {
    props: {
      entrada: entrada,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default EntradaBlog;
