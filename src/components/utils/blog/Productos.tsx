export default function Producto(props: any) {
  const { juego, locale } = props;

  if (!juego || typeof juego !== 'object') {
    return <div>Error: El objeto de juego no es válido.</div>;
  }

  juego.sort(() => Math.random() - 0.5);

  let data = juego.slice(0, juego.length > 3 ? 3 : juego.length);
  return (
    <div>
      {Object.values(data).map((producto: any, index: number) => (
        <a key={index} href={producto.link} target='_blank' hrefLang={locale}>
          <div class='mb-4 group'>
            <h3 class='subtitulo5-movil md:subtitulo4-movil group-hover:text-slate-300 duration-500'>
              {producto.titulo}
            </h3>
            <p class='md:smallerb-movil mt-1 smaller-movil duration-500'>{producto.descripcion}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
