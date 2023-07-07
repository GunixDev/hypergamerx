import Image from "next/image";
import { FormatearFecha } from "@/utils/Formatear_Fecha";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

/* eslint-disable react/no-unescaped-entities */

export function Articulos_version1({ entrada }) {
  return (
    <div className='h-60 w-72 relative group shadow-2xl rounded-xl drop-shadow-lg duration-500'>
      <a href={`/blog/${entrada.attributes.url}`} className='flex flex-col relative justify-end h-full'>
        <Image
          alt={`imagen blog ${entrada.attributes.titulo}`}
          src={entrada.attributes.imagenprincipal.data.attributes.url}
          sizes='sizes="(min-width: 1em) 3vw,(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 3vw'
          quality={75}
          priority={true}
          fill={true}
          className='rounded-xl duration-500 group-hover:grayscale'
        />

        <div className='z-40 inline p-2 bg-red-700 w-fit'>
          <p className='text-xs'>{FormatearFecha(entrada.attributes.publishedAt)}</p>
        </div>
        <div className='z-50 relative duration-300 p-3 h-20 bg-gray-950 rounded-b-xl group-hover:h-52'>
          <p className='text-sm text-slate-400 break-words'>{entrada.attributes.titulo}</p>
          <ReactMarkdown
            className='text-xs duration-75 text-center text-slate-300 relative opacity-0 m-1 mt-4 group-hover:opacity-100 group-hover:duration-1000 break-words'
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}>
            {entrada.attributes.Resumen}
          </ReactMarkdown>
        </div>
      </a>
    </div>
  );
}
