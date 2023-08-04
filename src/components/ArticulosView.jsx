import Image from "next/image";
import { FormatearFecha } from "./Formatear_Fecha";

/* eslint-disable react/no-unescaped-entities */

export default function Articulos_version1({ entrada }) {
  return (
    <div className='xl:h-64 xl:w-88 lg:w-72 md:h-48 md:w-52 lg:h-56 sm:w-46 sm:h-46 ls:w-28 ls:h-28 relative group  rounded-xl  duration-500'>
      <a href={`/blog/${entrada.attributes.url}`} className='flex flex-col relative justify-end h-full'>
        {entrada.attributes.ImagenPrincipal.data !== null ? (
          <Image
            alt={`image`}
            src={entrada.attributes.ImagenPrincipal.data.attributes.url}
            sizes='sizes="(min-width: 1em), 1vw,(max-width: 208px), 3vw,(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 3vw'
            quality={10}
            fill={true}
            className='rounded-xl duration-500 ls:max-sm:hidden'
          />
        ) : (
          <Image
            alt={`image`}
            src={"/logo3.png"}
            sizes='sizes="(min-width: 1em), 1vw,(max-width: 208px), 3vw,(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 3vw'
            quality={10}
            fill={true}
            className='rounded-xl duration-500 ls:max-sm:hidden'
          />
        )}

        <div className='z-40 inline ls:max-sm:p-1 p-2 bg-red-700 w-fit ls:max-sm:hidden'>
          <p className='xl:max-2xl:text-sm sm:max-lg:text-xs ls:text-xs' suppressHydrationWarning>
            {FormatearFecha(entrada.attributes.updatedAt)}
          </p>
        </div>
        <div className='z-50 relative duration-300 p-3 lg:max-2xl:h-24 bg-gray-950 rounded-b-xl  lg:max-2xl:group-hover:h-52 ls:max-sm:rounded-2xl'>
          <p className='md:text-xs sm:text-xs lg:text-xs xl:text-sm ls:text-xs text-slate-400 break-words'>
            {entrada.attributes.Titulo}
          </p>
          <p className='sm:text-xs lg:text-xs md:text-xs xl:text-xs ls:max-lg:hidden duration-75 text-center text-slate-700 relative xl:mt-2 opacity-0  group-hover:opacity-100 group-hover:duration-1000 break-words'>
            {entrada.attributes.Resumen}
          </p>
        </div>
      </a>
    </div>
  );
}
