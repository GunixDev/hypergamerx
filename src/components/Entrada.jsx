import { FormatearFecha } from "@/utils/Formatear_Fecha";
import Image from "next/image";
import Link from "next/link";

export const Entrada = ({ entrada }) => {
  return (
    <article className='mt-20'>
      <Image
        priority={true}
        layout='responsive'
        width={800}
        height={600}
        src={entrada.attributes.imagenprincipal.data.attributes.url}
        alt={`imagen blog ${entrada.attributes.titulo}`}
      />
      <div>
        <h1>{entrada.attributes.titulo}</h1>
        <h2>{entrada.attributes.resumen}</h2>
        <h3>{FormatearFecha(entrada.attributes.publishedAt)}</h3>
        <h3>{entrada.attributes.contenido}</h3>
        <Link href={`/blog/${entrada.attributes.url}`}>Leer entrada</Link>
      </div>
    </article>
  );
};
