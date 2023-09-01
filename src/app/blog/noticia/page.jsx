import { getListNoticia } from "@/service/blogslist";
import dynamic from "next/dynamic";

const Articulos_version1 = dynamic(() => import("../../../components/ArticulosView3"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

export const metadata = {
  alternates: {
    canonical: `https://www.hypergamerx.com/blog/noticia`,
  },
};

export default async function HomeAdmin() {
  const blog = await getListNoticia();
  return (
    <main>
      <main className='w-full flex flex-col mb-10'>
        <div className='lg:w-4/5 ls:w-11/12 sm:w-11/12 md:w-11/12 mx-auto'>
          <h2 className=' ls:text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold first-line:mt-8 text-left mt-14'>
            Noticias
          </h2>
          <p className='text-slate-500 mt-2 md:mt-2 sm:mt-4 ls:mt-4 xl:mt-6 md:text-xl sm:text-base ls:text-sm'>
            Aquí en nuestra página de noticias, te sumergirás en un emocionante mundo donde la acción nunca se detiene.
            Mantente al día con las últimas novedades, avances y análisis sobre tus juegos favoritos. Desde épicos
            juegos de aventuras hasta vertiginosas experiencias multijugador, nuestro objetivo es ser tu fuente
            confiable de información sobre la industria de los videojuegos
          </p>
        </div>
        <div className='w-11/12 mx-auto'>
          <div className='grid grid-cols-3 gap-4 ls:gap-1 relative'>
            {blog.map((entrada, index) => (
              <Articulos_version1 key={index} entrada={entrada} Genero={"Noticia"} />
            ))}
          </div>
        </div>
      </main>
    </main>
  );
}
