import { getListArtiAdmin } from "@/service/blogs";
import dynamic from "next/dynamic";

const Articulos_version1 = dynamic(() => import("../../../components/ArticulosView3"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

export default async function HomeAdmin() {
  const blog = await getListArtiAdmin();
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
