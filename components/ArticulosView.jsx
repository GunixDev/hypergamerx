import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

/* eslint-disable react/no-unescaped-entities */

export function Articulos_version1({ entrada, locale }) {
  return (
    <div className='sm:h-46 md:h-50 lg:h-56 xl:h-64 sm:w-50 md:w-64 lg:w-72 xl:w-88 relative group shadow-2xl rounded-xl drop-shadow-lg duration-500'>
      <a href={`/${locale}/blog/${entrada.attributes.url}`} className='flex flex-col relative justify-end h-full'>
        <Image
          alt={`imagen blog ${entrada.attributes.titulo}`}
          src={entrada.attributes.imagenprincipal.data.attributes.url}
          sizes='sizes="(min-width: 1em) 3vw,(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 3vw'
          quality={25}
          priority={true}
          fill={true}
          className='rounded-xl duration-500 '
        />

        <div className='z-40 inline sm:p-1 xl:p-2 bg-red-700 w-fit'>
          <p className='sm:text-lss ms:text-lsss lg:text-ls xl:text-sm' suppressHydrationWarning>
            {FormatearFecha(entrada.attributes.publishedAt)}
          </p>
        </div>
        <div className='z-50 relative duration-300 p-3 md:h-20 xl:h-24 bg-gray-950 rounded-b-xl sm:group-hover:h-36 md:group-hover:h-48 lg:group-hover:h-44 xl:group-hover:h-52'>
          <p className='md:text-xs sm:text-lss lg:text-lss xl:text-sm text-slate-400 break-words'>
            {entrada.attributes.titulo}
          </p>
          <ReactMarkdown
            className='sm:text-lssss lg:text-lsss md:text-lsss xl:text-ls duration-75 text-center text-slate-700 relative xl:mt-2 opacity-0  group-hover:opacity-100 group-hover:duration-1000 break-words'
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}>
            {entrada.attributes.Resumen}
          </ReactMarkdown>
        </div>
      </a>
    </div>
  );
}
