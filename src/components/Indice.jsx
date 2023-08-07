"use client";
import { useState } from "react";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import Link from "next/link";

export default function Indice({ Contenidos }) {
  const [ButtonIndice, SetButtonIndice] = useState(false);
  function SetIndice() {
    SetButtonIndice(!ButtonIndice);
  }

  return (
    <div className='sm:hidden bg-slate-950 p-4 rounded-2xl w-fit mt-4'>
      <button onClick={SetIndice}>
        <h2 className=' align-middle font-bold text-white'>
          Indice
          <span className='inline-block   ml-2'>{ButtonIndice ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}</span>
        </h2>
      </button>
      {ButtonIndice
        ? Contenidos.map((arti) => {
            return (
              <div key={arti.id} className=' grid grid-cols-1'>
                <Link
                  href={`#subtitulo${arti.TituloContenido}`}
                  className='text-xs bg-slate-900 p-2 text-slate-300 mt-3 hover:text-slate-50 duration-300'>
                  {arti.TituloContenido}
                </Link>
                {arti.Subbtitulos.map((subtitulo) => {
                  return (
                    <Link
                      key={subtitulo.id}
                      href={`#subtitulo${arti.TituloContenido}Sub${subtitulo.SubSubTitulo}`}
                      className='text-xs ml-4 text-slate-400 hover:text-slate-300 duration-300 p-2 '>
                      {subtitulo.SubSubTitulo}
                    </Link>
                  );
                })}
              </div>
            );
          })
        : null}
    </div>
  );
}
