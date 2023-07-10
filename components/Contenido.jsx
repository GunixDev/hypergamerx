import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

export const Contenido = ({ contenido }) => {
  return (
    <div>
      <ReactMarkdown
        className='text-white my-4 text-2xl font-bold'
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}>
        {contenido.TituloContenido}
      </ReactMarkdown>

      <ReactMarkdown className='my-4 text-slate-400' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {contenido.ContenidoTexto}
      </ReactMarkdown>

      {contenido.ContenidoImagen == null
        ? null
        : contenido.ContenidoImagen.data.map((imagen) => (
            <Image
              key={imagen.id}
              width={1000}
              height={800}
              src={imagen.attributes.url}
              alt={`imagen ${imagen.attributes.name}`}
              className='my-10 w-11/12 h-auto mx-auto'
              priority
            />
          ))}
    </div>
  );
};
