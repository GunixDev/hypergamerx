import { getListTodo } from "../service/blogslist";
import Feature from "@/components/Feaure";
import dynamic from "next/dynamic";

const Articulos_version1 = dynamic(() => import("../components/ArticulosView"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const blog = await getListTodo();
  return (
    <main>
      <main className='w-full flex flex-col mb-10'>
        <div className='lg:w-4/5 ls:w-11/12 sm:w-11/12 md:w-11/12 mx-auto'>
          <h1 className=' ls:text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold first-line:mt-8 text-left mt-14'>
            La fuente definitiva de noticias y curiosidades sobre videojuegos.
          </h1>
          <p className='text-slate-500 mt-2 md:mt-2 sm:mt-4 ls:mt-4 xl:mt-6 md:text-xl sm:text-base ls:text-sm'>
            ¿Eres un jugador apasionado que busca estar al día con las últimas noticias? ¡No busques más allá de
            HyperGamerX! Nuestro sitio web ofrece la mejor experiencia para los jugadores que buscan mantenerse al día
            con las últimas tendencias.
          </p>
          <div className='mt-20 ls:mt-12 sm:mt-16 md:mt-20'>
            <h2 className='ls:text-lg sm:text-2xl md:text-3xl ls:mb-2 sm:mb-5'>Todo a tu disposición</h2>
            <p className='text-slate-400 sm:text-sm md:text-lg ls:text-xs'>
              Tenemos muchas características impresionantes esperándote en nuestra página web. Nuestro objetivo es
              brindarte una experiencia excepcional, desde noticias de última hora y curiosidades fascinantes hasta
              reseñas imparciales y entrevistas exclusivas. Pero eso no es todo. También nos enorgullece ofrecerte una
              navegación intuitiva y fluida, para que encuentres fácilmente la información que estás buscando. Prepárate
              para sumergirte en un mundo lleno de emocionantes contenidos y descubrimientos, mientras disfrutas de una
              experiencia de navegación impecable. ¡Bienvenido a nuestra comunidad de amantes de los videojuegos!
            </p>
            <div className='grid grid-cols-2 sm:gap-5 md:gap-8 mt-10'>
              <Feature
                titulo='Contenido de alta calidad'
                descripcion='HyperGamerX está respaldado por contenido de alta calidad y elementos bien construidos que lo mantienen actualizado con todo lo que sucede en el mundo de los juegos. ¡Recibe noticias rápidas, descubre todo lo que necesitas saber y más!'
                icono='corazon'
              />
              <Feature
                titulo='Manténgase actualizado con Noticias rápidas'
                descripcion='Descubra lo que está sucediendo en el mundo de los juegos de inmediato con las actualizaciones de noticias en tiempo real de HyperGamerX. Nos aseguramos de que se mantenga informado sobre los últimos desarrollos, para que nunca se pierda ningún nuevo anuncio emocionante.'
                icono='rapidez'
              />
              <Feature
                titulo='Diseño atractivo y funcional'
                descripcion='Nuestra página web está diseñada para la máxima usabilidad y estética en un solo paquete. Nuestro diseño estéticamente agradable hace que sea fácil para usted encontrar lo que necesita rápidamente mientras sigue disfrutando de navegar a través de nuestro contenido.'
                icono='diseño'
              />
              <Feature
                titulo='Escuchamos a la comunidad'
                descripcion='Valoramos a nuestra comunidad y siempre nos esforzamos por asegurarnos de que se escuche su opinión. Escuchamos constantemente los comentarios de los jugadores, por lo que podemos asegurarnos de que estamos ofreciendo un servicio que satisfaga sus necesidades.'
                icono='chat'
              />
            </div>
          </div>
        </div>
        <div className='w-11/12 mx-auto'>
          <h2 className='ls:max-sm:text-lg sm:text-2xl lg:text-3xl text-slate-400 ls:mt-6 ls:mb-6 sm:mt-10 sm:mb-4 lg:mt-20 lg:mb-9'>
            Artículos que te pueden interesar...
          </h2>
          <div className='grid grid-cols-3 gap-4 ls:gap-1 relative'>
            {blog.map((entrada, index) => (
              <Articulos_version1 key={index} entrada={entrada} />
            ))}
          </div>
        </div>
      </main>
    </main>
  );
}
