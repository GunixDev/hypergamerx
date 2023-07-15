import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export const Layout = ({ children, titulo, descripcion, imagen, keywords }) => {
  return (
    <>
      <Head>
        <title>{titulo ? titulo : "HyperGamerX: Tu Destino para Noticias de Videojuegos"}</title>
        <meta
          name='description'
          content={
            descripcion
              ? descripcion
              : "Descubre las últimas noticias y curiosidades en el mundo de los videojuegos. Reseñas, avances, análisis y más, HyperGamerX tu fuente de información"
          }
        />
        <meta name='author' content='Sunrize Studios' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        html
        <meta
          name='keywords'
          content={
            keywords
              ? `HyperGamerX, ${keywords}, videojuegos que son, videojuegos de decisiones pc, clases de videojuegos, videojuegos mas famosos, generos de videojuegos, cual es el juego mas famoso del mundo, videojuegos populares, Noticias de videojuegos, Curiosidades de videojuegos, Últimas novedades en videojuegos, videogames that are, pc decision videogames, videogame classes, most famous videogames, videogame genres, which is the most famous game in the world, popular videogames, videogame news, videogame curiosities, latest news in videogames, Articles, Interest, video, news, videogames que são, videogames de decisão para pc, aulas de videogame, videogames mais famosos, gêneros de videogame, qual é o jogo mais famoso do mundo, videogames populares, notícias de videogame, curiosidades de videogame, últimas notícias em videogames, Artigos, Interesse, vídeo, notícias`
              : `HyperGamerX ,Noticias de videojuegos, Curiosidades de videojuegos, Últimas novedades en videojuegos, Reseñas de videojuegos, Avances de videojuegos, Análisis de videojuegos, Personajes de videojuegos, Consolas de videojuegos, Industria del videojuego, E-Sports, Retrogaming, Desarrollo de videojuegos, Trucos y consejos de videojuegos, videojuegos, noticias, que es un videojuego, los videojuegos, videojuegos para jugar, juegos gratis jugar, videojuegos que son, videojuegos de decisiones pc, clases de videojuegos, videojuegos mas famosos, generos de videojuegos, cual es el juego mas famoso del mundo, videojuegos populares, Video Game News, Video Game Trivia, Latest Video Game News, Video Game Reviews, Video Game Trailers, Video Game Reviews, Video Game Characters, Video Game Consoles, Video Game Industry, E-Sports, Retrogaming, Video Game Development, Tips & Tricks video games, video games, news, what is a video game, video games, video games to play, free games to play, video games that are, pc decision video games, video game classes, most famous video games, video game genres, what is the most famous game of the world, popular video games, Articles, Interest, video, news, Notícias sobre videogames, curiosidades sobre videogames, últimas notícias sobre videogames, análises de videogames, trailers de videogames, análises de videogames, personagens de videogames, consoles de videogames, indústria de videogames, esportes eletrônicos, retrogaming, desenvolvimento de videogames, dicas e truques videogames, videogames, notícias, o que é um videogame, videogames, videogames para jogar, jogos grátis para jogar, videogames que são, videogames de decisão para pc, aulas de videogame, videogames mais famosos, gêneros de videogame, qual é o jogo mais famoso do mundo, videogames populares, Artigos, Interesse, vídeo, novo`
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
      {children}
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8225968446465041'
        crossorigin='anonymous'
      />
    </>
  );
};
