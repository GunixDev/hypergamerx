import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ErrorPage from "next/error";
import { Layout } from "@/components/Layout";
import { Contenido } from "@/components/Contenido";

export const EntradaBlog = ({ entrada, locale }) => {
  if (typeof entrada === "undefined") {
    return (
      <Layout>
        <div className='flex items-center justify-center h-96 my-20'>
          <p className='text-center text-4xl'>Cargando...</p>
        </div>
      </Layout>
    );
  }

  if (entrada && entrada.data[0]) {
    return (
      <Layout
        titulo={entrada.data[0].attributes.titulo}
        descripcion={entrada.data[0].attributes.Resumen}
        imagen={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
        keywords={entrada.data[0].attributes.keywords}>
        <div className='w-2/3 m-auto my-10'>
          <div>
            <p className='text-5xl text-slate-400 font-bold work'>{entrada.data[0].attributes.titulo}</p>
            <h3 className='text-slate-500 my-4 text-sm' suppressHydrationWarning>
              {FormatearFecha(entrada.data[0].attributes.publishedAt)}
            </h3>
            <p className='text-xl text-slate-500'>{entrada.data[0].attributes.Resumen}</p>
          </div>
          <Image
            width={1000}
            height={800}
            src={entrada.data[0].attributes.imagenprincipal.data.attributes.url}
            alt={`imagen blog ${entrada.data[0].attributes.titulo}`}
            className='my-8 w-11/12 h-auto mx-auto'
            priority
          />
          <div>
            {typeof entrada.data[0].attributes.ContenidoSubTitulo1 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo1}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion1 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion1}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen1 == null ||
            entrada.data[0].attributes.ContenidoImagen1.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen1.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen1.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo2 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo2}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion2 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion2}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen2 == null ||
            entrada.data[0].attributes.ContenidoImagen2.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen2.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen2.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}
            {typeof entrada.data[0].attributes.ContenidoSubTitulo3 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo3}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion3 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion3}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen3 == null ||
            entrada.data[0].attributes.ContenidoImagen3.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen3.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen3.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo4 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo4}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion4 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion4}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen4 == null ||
            entrada.data[0].attributes.ContenidoImagen4.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen4.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen4.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo5 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo5}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion5 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion5}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen5 == null ||
            entrada.data[0].attributes.ContenidoImagen5.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen5.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen5.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}
            {typeof entrada.data[0].attributes.ContenidoSubTitulo6 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo6}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion6 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion6}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen6 == null ||
            entrada.data[0].attributes.ContenidoImagen6.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen6.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen6.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo7 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo7}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion7 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion7}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen7 == null ||
            entrada.data[0].attributes.ContenidoImagen7.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen7.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen7.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo8 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo8}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion8 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion8}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen8 == null ||
            entrada.data[0].attributes.ContenidoImagen8.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen8.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen8.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo9 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo9}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion9 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion9}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen9 == null ||
            entrada.data[0].attributes.ContenidoImagen9.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen9.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen9.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}

            {typeof entrada.data[0].attributes.ContenidoSubTitulo10 == null ? null : (
              <p className='text-2xl mt-8 mb-2'>{entrada.data[0].attributes.ContenidoSubTitulo10}</p>
            )}

            {typeof entrada.data[0].attributes.ContenidoDescripcion10 == null ? null : (
              <p className='my-2 text-slate-500'>{entrada.data[0].attributes.ContenidoDescripcion10}</p>
            )}

            {entrada.data[0].attributes.ContenidoImagen10 == null ||
            entrada.data[0].attributes.ContenidoImagen10.data == null ||
            typeof entrada.data[0].attributes.ContenidoImagen10.data === "undefined"
              ? null
              : entrada.data[0].attributes.ContenidoImagen10.data.map((imagen) => (
                  <Image
                    width={1000}
                    height={800}
                    src={imagen.attributes.url}
                    alt={`imagen blog ${imagen.attributes.titulo}`}
                    className='my-8 w-11/12 h-auto mx-auto'
                    priority
                    key={imagen.id}
                  />
                ))}
          </div>
        </div>
      </Layout>
    );
  } else {
    return <ErrorPage statusCode={404} />;
  }
};

export async function getStaticPaths({ locales }) {
  const locale = locales[0];
  const url = `${process.env.STRAPI_URL}/api/blogs?locale=en`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.data.map((entrada) => ({
    params: { url: entrada.attributes.url },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { url }, locale }) {
  const urlBlog = `${process.env.STRAPI_URL}/api/blogs?populate=imagenprincipal&populate=ContenidoImagen1&populate=ContenidoImagen2&populate=ContenidoImagen3&populate=ContenidoImagen4&populate=ContenidoImagen5&populate=ContenidoImagen6&populate=ContenidoImagen7&populate=ContenidoImagen8&populate=ContenidoImagen9&populate=ContenidoImagen10&locale=${locale}&filters[url][$eq]=${url}`;

  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();
  return {
    props: {
      entrada: entrada,
      locale,
    },
  };
}

export default EntradaBlog;
