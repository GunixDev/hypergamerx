import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";
import React from "react";
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Estrellas from "@/components/Estrellas";
import { PlataformasUI } from "@/components/comp_resenas/PlataformasUI";

const STRAPI_URL = process.env.STRAPI_URL;

export async function getStaticPaths({ locales }) {
  const locale = locales[0];
  const url = `${STRAPI_URL}/api/bl-resenas?locale=${locale}`;
  const respuesta = await axios.get(url);
  const entradas = respuesta.data;
  const paths = entradas.data.map((entrada) => ({
    params: { slug: entrada.attributes.url },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { slug }, locale }) {
  const urlBlog = `${STRAPI_URL}/api/bl-resenas?populate[createdBy][fields][0]=firstname&populate[updatedBy][fields][0]=firstname&populate[Contenidos][populate][fields][0]=Titulo&populate[Contenidos][populate]populate[Textos][fields][0]=Texto&populate[Contenidos][populate]populate[ContenidoImagen][fields][0]=url&populate[videojuego][populate][Caratula][fields][0]=url&populate[videojuego][populate][Plataformas][populate]&populate[Contenidos][populate]populate[Subbtitulos][populate]&populate[Contenidos][populate]populate[Textos2][populate]&locale=${locale}&filters[url][$eq]=${slug}`;
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

export const Noticias = ({ entrada, locale }) => {
  const { t } = useTranslation("common");
  if (!entrada || !entrada.data || !entrada.data[0]) {
    return <ErrorPage statusCode={404} />;
  }
  const { attributes } = entrada.data[0];
  const { videojuego, Titulo, Resumen, keywords, updatedAt, Contenidos, url } = attributes;
  return (
    <Layout
      titulo={Titulo}
      descripcion={Resumen}
      imagen={videojuego.data.attributes.Caratula.data.attributes.url}
      keywords={keywords}>
      <div className='sm:w-5/6 md:w-10/12 ls:w-11/12 m-auto my-10'>
        <div className='grid grid-cols-6 gap-4'>
          <div className=' col-span-4 relative'>
            <h1 className='text-5xl text-slate-400 font-bold work ls:max-sm:text-xl'>{Titulo}</h1>
            <div className='my-2 text-slate-700'>
              <span className='text-slate-600 text-sm ls:max-sm:text-xs'>
                {t("blogs.Actualizado")} <strong>{attributes.updatedBy.data.attributes.firstname} </strong>
                {t("blogs.Fechaupdate")}
                <strong suppressHydrationWarning> {FormatearFecha(updatedAt)}</strong>
              </span>
            </div>
            <p className='text-xl text-slate-500 ls:max-sm:text-sm'>{Resumen}</p>
            <iframe
              width='853'
              height='480'
              src={videojuego.data.attributes.TrailerVideo}
              className='w-full my-4'
              allowFullScreen></iframe>

            <div className='bg-slate-950 p-6 rounded-2xl w-fit'>
              <span className='text-xl text-center mb-2'>{t("blogs.indice")}</span>
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
            <div className='bg-slate-950 p-4 rounded-2xl w-full h-fit'>
              <h1 className='text-2xl text-slate-400 text-center font-bold work ls:max-sm:text-xl'>{Titulo}</h1>
              <Image
                width={600}
                height={400}
                src={videojuego.data.attributes.Caratula.data.attributes.url}
                alt={`image`}
                className='my-4 w-80 h-80 mx-auto object-cover '
                loading='lazy'
              />
              <Estrellas cantidad={videojuego.data.attributes.Calificacion} />
              <p className='ml-3 text-slate-300'>
                {t("blogs.Lanzamineto")}
                {": "}
                <span className='text-slate-400' suppressHydrationWarning>
                  {FormatearFecha(videojuego.data.attributes.FechaLanzamiento)}
                </span>
              </p>
              <p className='ml-3 text-slate-300'>
                {t("blogs.Multijugador")}
                {": "}
                <span className='text-slate-400'>
                  {videojuego.data.attributes.Multijugador ? t("blogs.Si") : t("blogs.No")}
                </span>
              </p>
              <div>{PlataformasUI(videojuego.data.attributes.Plataformas)}</div>
              <Link href={`../articulos/${url}`} className='hidden'>
                Ver articulos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Noticias;
