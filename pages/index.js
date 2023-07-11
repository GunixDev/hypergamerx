import { Layout } from "@/components/Layout";
import { Articulos_version1 } from "@/components/ArticulosView";
import { BsFillLightningChargeFill, BsFillGrid1X2Fill, BsFillHeartFill, BsChatDotsFill } from "react-icons/bs";

function features(titulo, descripcion, icono) {
  let iconComponent;

  switch (icono) {
    case "corazon":
      iconComponent = <BsFillHeartFill />;
      break;
    case "rapidez":
      iconComponent = <BsFillLightningChargeFill />;
      break;
    case "diseño":
      iconComponent = <BsFillGrid1X2Fill />;
      break;
    case "chat":
      iconComponent = <BsChatDotsFill />;
      break;
    default:
      iconComponent = null;
      break;
  }
  return (
    <div className='group text-slate-400 duration-500 hover:text-slate-50'>
      <h1 className='sm:mt-10 md:mt-14 md:text-xl sm:text-lg'>
        <span className='inline-block align-middle sm:mr-1 md:mr-2'>{iconComponent}</span>
        {titulo}
      </h1>
      <h3 className='md:text-lg sm:text-sm text-slate-500 sm:my-3 md:my-5 duration-700 group-hover:text-slate-400'>
        {descripcion}
      </h3>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const blogurl = `${process.env.STRAPI_URL}/api/blogs?populate=deep&locale=${locale}`;
  const indexblogurl = `${process.env.STRAPI_URL}/api/paginainicio?locale=${locale}&populate=Featureds`;
  const [resIndex, resBlog] = await Promise.all([fetch(indexblogurl), fetch(blogurl)]);
  const [index, blog] = await Promise.all([resIndex.json(), resBlog.json()]);

  return {
    props: { index, blog, locale },
  };
}

export default function Home({ blog, index, locale }) {
  return (
    <Layout>
      <main className='lg:w-4/5 sm:w-11/12 md:w-11/12 mx-auto flex flex-col mb-10'>
        <p className='text-6xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold first-line:mt-8 text-left mt-14'>
          {index.data.attributes.Titulo}
        </p>
        <p className='text-slate-500 mt-2 md:mt-2 sm:mt-4 xl:mt-6 md:text-xl sm:text-base'>
          {index.data.attributes.Resumen}
        </p>
        <div className='mt-20'>
          <p className='sm:text-2xl md:text-3xl mb-5 '>{index.data.attributes.ParrafoTitulo}</p>
          <p className='text-slate-400 sm:text-sm md:text-lg'>{index.data.attributes.ParrafoDescripcion}</p>
          <div className='grid grid-cols-2 sm:gap-5 md:gap-8 mt-10'>
            {index.data.attributes.Featureds.map((featured) => (
              <div key={featured.id}>{features(featured.Titulo, featured.Descripcion, featured.Icono)}</div>
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-slate-400 mt-20 mb-9'>Artículos que te pueden interesar...</h1>
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
