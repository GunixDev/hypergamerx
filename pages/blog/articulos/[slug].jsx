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
  const urlBlog = `${STRAPI_URL}/api/blogs?[fields][0]=titulo&[fields][1]=Resumen&[fields][2]=url&populate[videojuego][fields][0]=Nombre&populate[imagenprincipal][fields][0}=url${locale}&filters[videojuego][Nombre][$eq]=${slug}`;
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
export const Relacionados = ({ entrada, locale }) => {
  const { t } = useTranslation("common");
  if (!entrada || !entrada.data || !entrada.data[0]) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <div className='relative mx-28 my-6'>
        {entrada.data.map((entrada) => {
          return (
            <Link key={entrada.id} href={`../${entrada.attributes.url}`}>
              <div className='xl:h-92 xl:w-88 lg:w-72 md:h-48 md:w-52 lg:h-56 sm:w-46 sm:h-46 ls:w-28 ls:h-28 relative rounded-xl bg-slate-950'>
                <Image
                  alt={`image`}
                  width={400}
                  height={200}
                  src={entrada.attributes.imagenprincipal.data.attributes.url}
                  quality={10}
                  className='rounded-xl duration-500 ls:max-sm:hidden h-46'
                />
                <h2 className='md:text-xs sm:text-xs lg:text-xs xl:text-sm ls:text-xs text-slate-400 break-words m-4'>
                  {entrada.attributes.titulo}
                </h2>
                <p className='sm:text-xs lg:text-xs md:text-xs xl:text-xs ls:max-lg:hidden duration-75 text-center text-slate-700 relative xl:mt-2 break-words mx-4'>
                  {entrada.attributes.Resumen}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Relacionados;
