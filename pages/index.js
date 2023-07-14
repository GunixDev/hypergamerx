import { Layout } from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const Articulos_version1 = dynamic(() => import("../components/ArticulosView"), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
});

const Feature = dynamic(() => import("../components/Feaure"), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
});

export async function getStaticProps({ locale }) {
  const blogurl = `${process.env.STRAPI_URL}/api/blogs?populate=deep&locale=${locale}`;
  const respuesta = await fetch(blogurl);
  const blog = await respuesta.json();
  return {
    props: {
      blog: blog,
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home({ blog, locale }) {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <main className='w-full flex flex-col mb-10'>
        <div className='lg:w-4/5 ls:w-11/12 sm:w-11/12 md:w-11/12 mx-auto'>
          <h1 className=' ls:text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold first-line:mt-8 text-left mt-14'>
            {t("Index.Titulo")}
          </h1>
          <p className='text-slate-500 mt-2 md:mt-2 sm:mt-4 ls:mt-4 xl:mt-6 md:text-xl sm:text-base ls:text-sm'>
            {t("Index.Resumen")}
          </p>
          <div className='mt-20 ls:mt-12 sm:mt-16 md:mt-20'>
            <h2 className='ls:text-lg sm:text-2xl md:text-3xl ls:mb-2 sm:mb-5'>{t("Index.ParrafoTitulo")}</h2>
            <p className='text-slate-400 sm:text-sm md:text-lg ls:text-ls'>{t("Index.ParrafoDescripcion")}</p>
            <div className='grid grid-cols-2 sm:gap-5 md:gap-8 mt-10'>
              {[1, 2, 3, 4].map((index) => (
                <Feature
                  key={index}
                  titulo={t(`Index.Featureds.Featured${index}.FeaturedTitulo`)}
                  descripcion={t(`Index.Featureds.Featured${index}.FeaturedDescripcion`)}
                  icono={t(`Index.Featureds.Featured${index}.FeaturedIcono`)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='w-11/12 mx-auto'>
          <h2 className='ls:max-sm:text-lg sm:text-2xl lg:text-3xl text-slate-400 ls:mt-6 ls:mb-6 sm:mt-10 sm:mb-4 lg:mt-20 lg:mb-9'>
            {t("Index.Articulos")}
          </h2>
          <div className='grid grid-cols-3 gap-4 ls:gap-1 relative'>
            {blog.data.map((entrada, index) => (
              <Articulos_version1 key={index} entrada={entrada} locale={locale} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
