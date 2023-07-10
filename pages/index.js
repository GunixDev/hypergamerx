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
      <h1 className='text-xl mt-14'>
        <span className='inline-block align-middle mr-2'>{iconComponent}</span>
        {titulo}
      </h1>
      <h3 className='text-lg text-slate-500 my-5 duration-700 group-hover:text-slate-400'>{descripcion}</h3>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
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
      <main className='w-4/5 mx-auto flex flex-col mb-10'>
        <p className='text-6xl font-bold first-line:mt-8 text-left mt-14'>{index.data.attributes.Titulo}</p>
        <p className='text-slate-500 text-xl mt-2'>{index.data.attributes.Resumen}</p>
        <div className='mt-20'>
          <p className='text-3xl mb-5'>{index.data.attributes.ParrafoTitulo}</p>
          <p className='text-lg text-slate-400'>{index.data.attributes.ParrafoDescripcion}</p>
          <div className='grid grid-cols-2 gap-8 mt-10'>
            {index.data.attributes.Featureds.map((featured) => (
              <div key={featured.id}>{features(featured.Titulo, featured.Descripcion, featured.Icono)}</div>
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-slate-400 mt-20 mb-9'>Artículos que te pueden interesar...</h1>
          <div className='grid grid-cols-4 gap-52 relative'>
            {blog.data.map((entrada) => (
              <Articulos_version1 key={entrada.id} entrada={entrada} locale={locale} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
