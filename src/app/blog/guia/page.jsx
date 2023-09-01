import { getListGuia } from "@/service/blogslist";
import dynamic from "next/dynamic";

const Articulos_version1 = dynamic(() => import("../../../components/ArticulosView3"), {
  loading: () => <p>Cargando...</p>,
  srr: false,
  error: () => <p>Error</p>,
});

export const metadata = {
  alternates: {
    canonical: `https://www.hypergamerx.com/blog/guia`,
  },
};

export default async function HomeAdmin() {
  const blog = await getListGuia();
  return (
    <main>
      <main className='w-full flex flex-col mb-10'>
        <div className='lg:w-4/5 ls:w-11/12 sm:w-11/12 md:w-11/12 mx-auto'>
          <h2 className=' ls:text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold first-line:mt-8 text-left mt-14'>
            Guías
          </h2>
          <p className='text-slate-500 mt-2 md:mt-2 sm:mt-4 ls:mt-4 xl:mt-6 md:text-xl sm:text-base ls:text-sm'>
            ¡Bienvenido a nuestra plataforma de guías de videojuegos, donde encontrarás toda la ayuda que necesitas para
            convertirte en un jugador experto! Sumérgete en el emocionante mundo de los videojuegos con nuestras
            exhaustivas y precisas guías, diseñadas para llevarte desde principiante hasta maestro en cualquier juego
            que elijas.
          </p>
        </div>
        <div className='w-11/12 mx-auto'>
          <div className='grid grid-cols-3 gap-4 ls:gap-1 relative'>
            {blog.map((entrada, index) => (
              <Articulos_version1 key={index} entrada={entrada} Genero={"Guia"} />
            ))}
          </div>
        </div>
      </main>
    </main>
  );
}
