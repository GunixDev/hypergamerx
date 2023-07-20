import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";
import React from "react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
const STRAPI_URL = process.env.STRAPI_URL;

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
  const urlBlog = `${STRAPI_URL}/api/blogs?populate=imagenprincipal&populate=ContenidoImagen1&populate=ContenidoImagen2&populate=ContenidoImagen3&populate=ContenidoImagen4&populate=ContenidoImagen5&populate=ContenidoImagen6&populate=ContenidoImagen7&populate=ContenidoImagen8&populate=ContenidoImagen9&populate=ContenidoImagen10&populate=createdBy&populate=updatedBy&locale=${locale}&filters[url][$eq]=${url}`;
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

export const EntradaBlog = ({ entrada, locale }) => {
  const { t } = useTranslation("common");
  if (!entrada || !entrada.data || !entrada.data[0]) {
    return <ErrorPage statusCode={404} />;
  }
  const { attributes } = entrada.data[0];
  const { titulo, Resumen, imagenprincipal, keywords } = attributes;
  return (
    <Layout titulo={titulo} descripcion={Resumen} imagen={imagenprincipal.data.attributes.url} keywords={keywords}>
      <div className='sm:w-5/6 md:w-10/12 lg:w-2/3 ls:w-11/12 m-auto my-10'>
        <h1 className='text-5xl text-slate-400 font-bold work ls:max-sm:text-xl'>{titulo}</h1>
        <div className='my-2'>
          <span className='text-slate-500 text-sm ls:max-sm:text-xs'>
            {t("blogs.Actualizado")} <strong>{attributes.updatedBy.data.attributes.firstname} </strong>
            {t("blogs.Fechaupdate")}
            <strong suppressHydrationWarning> {FormatearFecha(attributes.updatedAt)}</strong>
          </span>
        </div>
        <p className='text-xl text-slate-500 ls:max-sm:text-sm'>{Resumen}</p>
        <Image
          width={1000}
          height={800}
          src={imagenprincipal.data.attributes.url}
          alt={`imagen blog ${titulo}`}
          className='my-8 w-11/12 h-auto mx-auto'
          loading='lazy'
        />
        <div className='bg-slate-950 p-6 rounded-2xl w-fit'>
          <span className='text-xl text-center mb-2'>{t("blogs.indice")}</span>
          {[...Array(10).keys()].map((index) => {
            const subTituloKey = `ContenidoSubTitulo${index + 1}`;
            const subTitulo = attributes[subTituloKey];
            return (
              <React.Fragment key={index}>
                {subTitulo && (
                  <>
                    <Link href={`#subtitulo${index}`} className='text-base ls:max-sm:text-xs'>
                      <li className='text-slate-400 mt-3 hover:text-slate-50 duration-300'>{subTitulo}</li>
                    </Link>
                    {[...Array(3).keys()].map((indexsub) => {
                      const subTituloKeySub = `ContenidoSubtitulo${index + 1}Sub${indexsub + 1}`;
                      const subTituloSub = attributes[subTituloKeySub];
                      return (
                        <React.Fragment key={indexsub}>
                          {subTituloSub && (
                            <Link href={`#subtitulo${index}Sub${indexsub}`} className='text-base ls:max-sm:text-xs'>
                              <li className='ml-4 text-slate-500 text-sm ls:max-sm:text-xs hover:text-slate-300 duration-300'>
                                {subTituloSub}
                              </li>
                            </Link>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
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
                {subTitulo && (
                  <h2 id={`subtitulo${index}`} className='text-2xl mt-8 mb-2 ls:max-sm:text-base'>
                    {subTitulo}
                  </h2>
                )}
                {descripcion && <p className='my-6 text-slate-500 ls:max-sm:text-xs'>{descripcion}</p>}
                {[...Array(3).keys()].map((indexsub) => {
                  const subTituloKeySub = `ContenidoSubtitulo${index + 1}Sub${indexsub + 1}`;
                  const subTituloSub = attributes[subTituloKeySub];
                  const subTituloDescKeySub = `ContenidoSubtitulo${index + 1}Text${indexsub + 1}`;
                  const subTituloDescSub = attributes[subTituloDescKeySub];
                  return (
                    <React.Fragment key={indexsub}>
                      {subTituloSub && (
                        <h3
                          id={`subtitulo${index}Sub${indexsub}`}
                          className='text-xl ml-4 mt-4 mb-2 ls:max-sm:text-sm text-slate-400'>
                          {subTituloSub}
                        </h3>
                      )}
                      {subTituloDescSub && (
                        <p className='text-sm ml-4 mb-4 ls:max-sm:text-xs text-slate-500 break-words'>
                          {subTituloDescSub}
                        </p>
                      )}
                    </React.Fragment>
                  );
                })}
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

export default EntradaBlog;
