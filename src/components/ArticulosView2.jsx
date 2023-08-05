import Link from "next/link";

export default function Articulos_Random({ entrada }) {
  return (
    <Link href={entrada.attributes.url}>
      <div className='mt-4 group'>
        <p className='text-sm text-slate-400 group-hover:text-slate-200  duration-500'>{entrada.attributes.Titulo}</p>
        <p className='text-xs mt-1 text-slate-500 group-hover:text-slate-300  duration-500'>
          {entrada.attributes.Resumen}
        </p>
      </div>
    </Link>
  );
}
