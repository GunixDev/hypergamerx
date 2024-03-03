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
        <a key={index} href={producto.link} target='_blank' hreflang={locale}>
          <div class='mt-4 group'>
            <h3 class='text-sm ls:max-md:text-xs text-slate-200 font-extrabold group-hover:text-slate-300 duration-500'>
              {producto.titulo}
            </h3>
            <p class='md:text-xs ls:max-md:hidden mt-1 text-slate-400 font-semibold group-hover:text-slate-300 duration-500'>
              {producto.descripcion}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
