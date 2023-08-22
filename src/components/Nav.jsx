"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";

export default function Nav() {
  const [Movil, setMovil] = useState(false);
  function BotonMovil() {
    setMovil(!Movil);
  }

  const [Terminos, setTerminos] = useState(false);
  function BotonTerminos() {
    setTerminos(!Terminos);
    setRedes(false);
  }

  const [Redes, setRedes] = useState(false);
  function BotonRedes() {
    setRedes(!Redes);
    setTerminos(false);
  }

  const [shouldFollow, setShouldFollow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 20;
      setShouldFollow(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {Movil ? (
        <div className='fixed z-100 right-0 bg-slate-950 w-10/12  h-full sm:max-2xl:hidden'>
          <div className='mt-14 grid grid-rows-6'>
            <Link href='/' className='w-full p-3  bg-slate-900 border-y-2 border-slate-800'>
              Inicio
            </Link>
            <Link href='/blog/anuncios' className='w-full p-3  bg-slate-900 border-y-2 border-slate-800'>
              Anuncios
            </Link>
            <Link href='/blog/noticia' className='w-full p-3 bg-slate-900 border-y-2 border-slate-800'>
              Noticias
            </Link>
            <Link href='/blog/curiosidades' className='w-full p-3  bg-slate-900 border-y-2 border-slate-800'>
              Curiosidades
            </Link>
            <Link href='/blog/resena' className='w-full p-3  bg-slate-900 border-y-2 border-slate-800'>
              Reseñas
            </Link>
            <Link href='/blog/guia' className='w-full p-3  bg-slate-900 border-y-2 border-slate-800'>
              Guías
            </Link>
          </div>
          <div className='absolute bottom-0'>
            <div className='bg-slate-950 border-y-2 border-slate-900'>
              <button onClick={BotonTerminos} className='m-4 w-full text-left'>
                Terminos y condiciones
              </button>
              {Terminos ? (
                <div className='grid grid-rows-2'>
                  <Link
                    href={"/terminos-servicios/AvisoLegal"}
                    className='w-full p-4  bg-slate-900 border-y-2 border-slate-800'>
                    Aviso legal
                  </Link>

                  <Link
                    href={"/terminos-servicios/PoliticaCookies"}
                    className='w-full p-4  bg-slate-900 border-y-2 border-slate-800'>
                    Politica de Cookies
                  </Link>
                  <Link
                    href={"/terminos-servicios/Privacidad"}
                    className='w-full p-4  bg-slate-900 border-y-2 border-slate-800'>
                    Privacidad
                  </Link>
                </div>
              ) : null}
            </div>
            <div className='bg-slate-950 border-y-2 border-slate-900'>
              <button onClick={BotonRedes} className='m-4 w-full text-left'>
                Redes sociales
              </button>
              {Redes ? (
                <div className='grid grid-rows-3'>
                  <Link
                    href={"https://discord.gg/4uvDcbcgWm"}
                    target='_blank'
                    className='p-4 w-full bg-slate-900 border-y-2 border-slate-800'>
                    Discord
                  </Link>
                  <Link
                    href={"https://twitter.com/HyperGamerX_ES"}
                    target='_blank'
                    className='w-full p-4  bg-slate-900 border-y-2 border-slate-800'>
                    Twitter
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@HyperGamerX1/featured"}
                    target='_blank'
                    className='w-full p-4  bg-slate-900 border-y-2 border-slate-800'>
                    Youtube
                  </Link>
                </div>
              ) : null}
            </div>
            <div>
              <p className='text-gray-400 text-sm m-6'>
                &copy; 2023 HyperGamerX. Creado por
                <Link href={"https://sunrizestudios.vercel.app/"} target='_blank'>
                  {" "}
                  Sunrize Studios
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <nav
        className={`sm:max-2xl:bg-gray-800 w-full font-sans duration-500 z-100 ls:max-sm:fixed  ${
          shouldFollow
            ? "sm:max-2xl:fixed top-0 sm:max-2xl:opacity-20 ls:max-sm:opacity-50 hover:opacity-70"
            : ` opacity-100`
        }`}>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-16 ls:max-sm:hidden gap-4'>
          <Link
            href='/blog/guia'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
            Guías
          </Link>
          <Link
            href='/blog/resena'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
            Reseñas
          </Link>
          <Link
            href='/blog/curiosidades'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
            Curiosidades
          </Link>
          <Link
            href='/blog/noticia'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
            Noticias
          </Link>
          <Link
            href='/blog/anuncios'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
            Anuncios
          </Link>

          <Link
            href='/'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
            Inicio
          </Link>
        </div>
        <div className=' mx-auto px-4 items-center justify-end h-14 hidden ls:max-sm:flex'>
          <button onClick={BotonMovil}>
            <span className='inline-block mr-1 align-middle'>
              <SlMenu />
            </span>
            <span className=' text-sm align-middle'>Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}
