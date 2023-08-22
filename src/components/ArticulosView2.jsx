import Link from "next/link";

export default function Articulos_Random({ entrada }) {
  return (
    <Link
      href={`../${
        entrada.Genero === "Curiosidades"
          ? "curiosidades"
          : entrada.Genero === "Reseña de Videojuego"
          ? "resena"
          : entrada.Genero === "Noticia"
          ? "noticia"
          : entrada.Genero === "Guia"
          ? "guia"
          : null
      }/${entrada.url}`}>
      <div className='mt-4 group'>
        <p className='text-sm ls:max-md:text-xs text-slate-300 font-bold group-hover:text-slate-200  duration-500'>
          {entrada.Titulo}
        </p>
        <p className='md:text-xs ls:max-md:hidden mt-1 text-slate-400 font-semibold group-hover:text-slate-300  duration-500'>
          {entrada.Resumen}
        </p>
      </div>
    </Link>
  );
}
