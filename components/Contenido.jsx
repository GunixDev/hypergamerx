import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const Contenido = ({ contenido }) => {
  return (
    <div>
      <ReactMarkdown
        className='text-white my-4 text-2xl font-bold'
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}>
        {contenido.TituloContenido}
      </ReactMarkdown>

      <ReactMarkdown className=' my-4 text-slate-400' remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {contenido.ContenidoTexto}
      </ReactMarkdown>
    </div>
  );
};
