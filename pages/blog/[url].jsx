import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";
import { Contenido } from "@/components/Contenido";

export const EntradaBlog = ({ entrada }) => {
  if (entrada && entrada.data && entrada.data[0]) {
    return (
      <Layout
        titulo={entrada.data[0].attributes.titulo}
        descripcion={entrada.data[0].attributes.Resumen}
        imagen={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
        keywords={entrada.data[0].attributes.keywords}>
        <div className='w-2/3 m-auto my-10'>
          <div>
            <p className='text-5xl text-slate-400 font-bold work'>{entrada.data[0].attributes.titulo}</p>
            <h3 className='text-slate-500 my-4 text-sm'>
              Publicado: {FormatearFecha(entrada.data[0].attributes.publishedAt)}
            </h3>
            <p className='text-xl text-slate-500'>{entrada.data[0].attributes.Resumen}</p>
          </div>
          <Image
            width={1000}
            height={800}
            src={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
            alt={`imagen blog ${entrada.data[0].attributes.titulo}`}
            className='my-8 w-auto h-auto mx-autos'
            priority
          />
          <p>{entrada.data[0].attributes.contenido}</p>
          <div>
            {entrada.data[0].attributes.Contenido.map((contenido) => (
              <div key={contenido.id}>
                <Contenido contenido={contenido} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  } else {
    return <ErrorPage statusCode={404} />;
  }
};

export async function getStaticPaths() {
  const url = `${process.env.STRAPI_URL}/api/blogs?populate=deep`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.data.map((entrada) => ({
    params: { url: entrada.attributes.url },
  }));
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.STRAPI_URL}/api/blogs/?filters[url][$eq]=${url}&populate=deep`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada,
    },
  };
}
/*export async function getServerSideProps({ query: { id } }) {
  const resupuesta = await fetch(`${process.env.STRAPI_URL}/api/blogs/${id}?populate=*`);
  const entrada = await resupuesta.json();
  return {
    props: { entrada: entrada ? entrada : null },
  };
}*/
export default EntradaBlog;
