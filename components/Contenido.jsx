import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const Contenido = ({ contenido }) => {
  return (
    <div>
      <ReactMarkdown className='text-white my-4' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {contenido.TituloContenido}
      </ReactMarkdown>

      <ReactMarkdown className='text-white my-4' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {contenido.ContenidoTexto}
      </ReactMarkdown>
    </div>
  );
};
