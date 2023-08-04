import Image from "next/image";

export const Contenido = ({ contenido }) => {
  return (
    <div>
      <p className='text-white my-4 text-2xl font-bold'>{contenido.TituloContenido}</p>

      <p className='my-4 text-slate-400'>{contenido.ContenidoTexto}</p>

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
