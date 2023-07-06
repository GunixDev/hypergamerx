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

export async function getServerSideProps() {
  const resupuesta = await fetch(`${process.env.STRAPI_URL}/api/blogs?populate=*`);
  const entradas = await resupuesta.json();

  return {
    props: { entradas },
  };
}

export default function Home({ entradas }) {
  return (
    <Layout>
      <main className='w-4/5 mx-auto flex flex-col mb-10'>
        <p className='text-6xl font-bold first-line:mt-8 text-left mt-14'>
          La fuente definitiva de noticias y curiosidades sobre videojuegos.
        </p>
        <p className='text-slate-500 text-xl mt-2'>
          ¿Eres un jugador apasionado que busca estar al día con las últimas noticias? ¡No busques más allá de
          HyperGamerX! Nuestro sitio web ofrece la mejor experiencia para los jugadores que buscan mantenerse al día con
          las últimas tendencias.
        </p>
        <div className='mt-20'>
          <p className='text-3xl mb-5'>Todo a tu disposición</p>
          <p className='text-lg text-slate-400'>
            Tenemos muchas características impresionantes esperándote en nuestra página web. Nuestro objetivo es
            brindarte una experiencia excepcional, desde noticias de última hora y curiosidades fascinantes hasta
            reseñas imparciales y entrevistas exclusivas. Pero eso no es todo. También nos enorgullece ofrecerte una
            navegación intuitiva y fluida, para que encuentres fácilmente la información que estás buscando. Prepárate
            para sumergirte en un mundo lleno de emocionantes contenidos y descubrimientos, mientras disfrutas de una
            experiencia de navegación impecable. ¡Bienvenido a nuestra comunidad de amantes de los videojuegos!
          </p>
          <div className='grid grid-cols-2 gap-8 mt-10'>
            {features(
              "Contenido de alta calidad",
              "HyperGamerX está respaldado por contenido de alta calidad y elementos bien construidos que lo mantienen actualizado con todo lo que sucede en el mundo de los juegos. ¡Recibe noticias rápidas, descubre todo lo que necesitas saber y más!",
              "corazon",
            )}

            {features(
              "Manténgase actualizado con Noticias rápidas",
              "Descubra lo que está sucediendo en el mundo de los juegos de inmediato con las actualizaciones de noticias en tiempo real de HyperGamerX. Nos aseguramos de que se mantenga informado sobre los últimos desarrollos, para que nunca se pierda ningún nuevo anuncio emocionante.",
              "rapidez",
            )}

            {features(
              "Diseño atractivo y funcional",
              "Nuestra página web está diseñada para la máxima usabilidad y estética en un solo paquete. Nuestro diseño estéticamente agradable hace que sea fácil para usted encontrar lo que necesita rápidamente mientras sigue disfrutando de navegar a través de nuestro contenido.",
              "diseño",
            )}

            {features(
              "Escuchamos a la comunidad",
              "Valoramos a nuestra comunidad y siempre nos esforzamos por asegurarnos de que se escuche su opinión. Escuchamos constantemente los comentarios de los jugadores, por lo que podemos asegurarnos de que estamos ofreciendo un servicio que satisfaga sus necesidades.",
              "chat",
            )}
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-slate-400 mt-20 mb-9'>Artículos que te pueden interesar...</h1>
          <div className='grid grid-cols-4 gap-52 relative'>
            {entradas.data.map((entrada) => (
              <Articulos_version1 key={entrada.id} entrada={entrada} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
