import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export const Layout = ({ children, titulo, descripcion, imagen, keywords }) => {
  return (
    <>
      <Head>
        <title>{titulo ? titulo : "HyperGamerX"}</title>
        <meta
          name='description'
          content={
            descripcion
              ? descripcion
              : "Descubre las últimas noticias, curiosidades y novedades en el mundo de los videojuegos. Reseñas, avances, análisis, personajes destacados y más. Mantente actualizado con nuestra amplia cobertura de la industria del videojuego y disfruta de contenido exclusivo para los amantes de los juegos."
          }
        />
        <meta name='author' content='Sunrize Studios' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='keywords'
          content={
            keywords
              ? keywords
              : "Noticias de videojuegos, Curiosidades de videojuegos, Últimas novedades en videojuegos, Reseñas de videojuegos, Avances de videojuegos, Análisis de videojuegos, Personajes de videojuegos, Consolas de videojuegos, Industria del videojuego, E-Sports, Retrogaming, Desarrollo de videojuegos, Trucos y consejos de videojuegos"
          }
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='format-detection' content='telephone=no' />
        <meta property='twitter:title' content={titulo ? titulo : "HyperGamerX"} />
        <meta
          property='twitter:description'
          content={
            descripcion
              ? descripcion
              : "Descubre las últimas noticias, curiosidades y novedades en el mundo de los videojuegos. Reseñas, avances, análisis, personajes destacados y más. Mantente actualizado con nuestra amplia cobertura de la industria del videojuego y disfruta de contenido exclusivo para los amantes de los juegos."
          }
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={imagen ? imagen : `https://www.hypergamerx.com/logo4.png`} />
        <meta property='og:url' content={titulo ? titulo : "HyperGamerX"} />
        <meta property='og:title' content={titulo ? titulo : "HyperGamerX"} />
        <meta
          property='og:description'
          content={
            descripcion
              ? descripcion
              : "Descubre las últimas noticias, curiosidades y novedades en el mundo de los videojuegos. Reseñas, avances, análisis, personajes destacados y más. Mantente actualizado con nuestra amplia cobertura de la industria del videojuego y disfruta de contenido exclusivo para los amantes de los juegos."
          }
        />
        <meta property='og:image' content={imagen ? imagen : `https://www.hypergamerx.com/logo4.png`} />
        <meta property='og:site_name' content='HyperGamerX' />
        <link rel='icon' href='/logo.png' type='image/png' />
      </Head>
      <nav className='bg-gray-800 font-sans'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-16'>
          <Link
            href='/'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out'>
            Inicio
          </Link>
        </div>
      </nav>

      {children}
      <footer className='bg-black text-white py-8 w-full font-sans mt-10'>
        <div className='container mx-auto text-center'>
          <p className='text-gray-400'>&copy; 2023 HyperGamerX.</p>
        </div>
      </footer>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8225968446465041'
        crossorigin='anonymous'></Script>
    </>
  );
};
