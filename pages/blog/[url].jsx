import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";

export const EntradaBlog = ({ entrada }) => {
  if (entrada && entrada.data && entrada.data[0]) {
    return (
      <Layout pagina={entrada.data[0].attributes.titulo}>
        <div className='w-2/3 m-auto my-10'>
          <div>
            <p className='text-5xl text-slate-400 font-bold'>{entrada.data[0].attributes.titulo}</p>
            <h3 className='text-slate-500 my-2'>{FormatearFecha(entrada.data[0].attributes.publishedAt)}</h3>
            <p className='text-xl text-slate-500'>{entrada.data[0].attributes.resumen}</p>
          </div>
          <Image
            width={800}
            height={600}
            src={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
            alt={`imagen blog ${entrada.data[0].attributes.titulo}`}
            className='my-8 w-auto h-auto mx-auto'
            priority
          />
          <p>{entrada.data[0].attributes.contenido}</p>
        </div>
      </Layout>
    );
  } else {
    return <ErrorPage statusCode={404} />;
  }
};

export async function getStaticPaths() {
  const url = `${process.env.STRAPI_URL}/api/blogs?populate=*`;
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
  const urlBlog = `${process.env.STRAPI_URL}/api/blogs/?filters[url][$eq]=${url}&populate=*`;
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
