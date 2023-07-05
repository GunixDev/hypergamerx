import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";

export const EntradaBlog = ({ entrada }) => {
  if (entrada && entrada.data && entrada.data[0]) {
    return (
      <div>
        <div>
          <h1>Entrada de Blog</h1>
          <p>{entrada.data[0].attributes.titulo}</p>
          <p>{entrada.data[0].attributes.resumen}</p>
          <p>{entrada.data[0].attributes.contenido}</p>
        </div>
        <Image
          layout='responsive'
          width={800}
          height={600}
          src={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
          alt={`imagen blog ${entrada.data[0].attributes.titulo}`}
        />
        <h3>{FormatearFecha(entrada.data[0].attributes.publishedAt)}</h3>
      </div>
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
