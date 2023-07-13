import { Layout } from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const Articulos_version1 = dynamic(() => import("../components/ArticulosView"), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
  onError: (error) => {
    console.error("Error al cargar el componente:", error);
    return <p>Ocurrió un error al cargar el componente.</p>;
  },
});

const Feature = dynamic(() => import("../components/Feaure"), {
  loading: () => <p>Cargando...</p>,
  ssr: false,
  onError: (error) => {
    console.error("Error al cargar el componente:", error);
    return <p>Ocurrió un error al cargar el componente.</p>;
  },
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
      <main className='lg:w-4/5 sm:w-11/12 md:w-11/12 mx-auto flex flex-col mb-10'>
        <p className='text-6xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold first-line:mt-8 text-left mt-14'>
          {t("Index.Titulo")}
        </p>
        <p className='text-slate-500 mt-2 md:mt-2 sm:mt-4 xl:mt-6 md:text-xl sm:text-base'>{t("Index.Resumen")}</p>
        <div className='mt-20'>
          <p className='sm:text-2xl md:text-3xl mb-5'>{t("Index.ParrafoTitulo")}</p>
          <p className='text-slate-400 sm:text-sm md:text-lg'>{t("Index.ParrafoDescripcion")}</p>
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
        <div>
          <h1 className='text-3xl text-slate-400 mt-20 mb-9'>{t("Index.Articulos")}</h1>
          <div className='grid grid-cols-4 sm:gap-52 md:gap-72 lg:gap-80 xl:gap-96 relative'>
            {blog.data.map((entrada, index) => (
              <Articulos_version1 key={index} entrada={entrada} locale={locale} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
