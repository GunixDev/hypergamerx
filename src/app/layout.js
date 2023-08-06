"use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | HyperGamerX",
    default: "HyperGamerX: Tu Destino para Noticias de Videojuegos",
  },
  description:
    "Descubre las últimas noticias y curiosidades en el mundo de los videojuegos. Reseñas, avances, análisis y más, HyperGamerX tu fuente de información",
  generator: "Nextjs",
  applicationName: "HyperGamerX",
  keywords: [
    "HyperGamerX",
    "videojuegos que son",
    "videojuegos de decisiones pc",
    " clases de videojuegos",
    "videojuegos mas famosos",
    "generos de videojuegos",
    "cual es el juego mas famoso del mundo",
    "videojuegos populares",
    "Noticias de videojuegos",
    "Curiosidades de videojuegos",
    "Últimas novedades en videojuegos",
  ],
  authors: [{ name: "Sunrize Studios" }],
  creator: "Brayan Cordova",
  publisher: "Brayan Cordova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HyperGamerX: Tu Destino para Noticias de Videojuegos",
    description:
      "Descubre las últimas noticias y curiosidades en el mundo de los videojuegos. Reseñas, avances, análisis y más, HyperGamerX tu fuente de información",
    url: "https://www.hypergamerx.com/",
    siteName: "HyperGamerX",
    images: [
      {
        url: "/logo4.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Sunrize Studios"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  twitter: {
    title: "HyperGamerX: Tu Destino para Noticias de Videojuegos",
    description:
      "Descubre las últimas noticias y curiosidades en el mundo de los videojuegos. Reseñas, avances, análisis y más, HyperGamerX tu fuente de información",
    creator: "Sunrize Studios",
    images: ["https://www.hypergamerx.com/logo4.png"],
  },
};

export default function RootLayout({ children }) {
  const [Movil, setMovil] = useState(true);
  function BotonMovil() {
    setMovil(!Movil);
    setShouldFollow(false);
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
    <html lang='es'>
      <body className={inter.className}>
        {Movil ? (
          <div className='fixed z-100 right-0 bg-slate-950 w-10/12 h-full sm:max-2xl:hidden'>
            <div className='mt-14 grid grid-rows-1'>
              <Link href='/' className='w-full p-4  bg-slate-900 border-y-2 border-slate-800'>
                Inicio
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
                  <div className='grid grid-rows-2'>
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
          className={`sm:max-2xl:bg-gray-800 w-full font-sans duration-500 z-100  ${
            shouldFollow ? "fixed top-0 sm:max-2xl:opacity-20 ls:max-sm:bg-opacity-0 hover:opacity-70" : ` opacity-100`
          }`}>
          <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-16 ls:max-sm:hidden'>
            {/*<Link
              href='/blog-administrativo'
              className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out'>
              Blog Administrativo
  </Link>*/}
            <Link
              href='/'
              className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out '>
              Inicio
            </Link>
          </div>
          <div className=' mx-auto px-4 flex items-center justify-end h-14 sm:max-2xl:hidden'>
            <button onClick={BotonMovil}>
              <SlMenu />
            </button>
          </div>
        </nav>
        {children}
        <footer className=' text-white bg-gray-900 bg-opacity-70 py-8 w-full font-sans mt-10 ls:max-md:hidden'>
          <div className='container text-slate-500 mx-auto text-center grid grid-cols-3 list-none'>
            <div className='text-left'>
              <h3 className='text-slate-700 ls:max-sm:text-xs'>Terminos y condiciones</h3>
              <div className='ml-6 ls:max-md:text-xs'>
                <ol>
                  <li className='m-2'>
                    <Link href={"/terminos-servicios/AvisoLegal"}>Aviso legal</Link>
                  </li>
                  <li className='m-2'>
                    <Link href={"/terminos-servicios/PoliticaCookies"}>Politica de Cookies</Link>
                  </li>
                  <li className='m-2'>
                    <Link href={"/terminos-servicios/Privacidad"}>Privacidad</Link>
                  </li>
                </ol>
              </div>
            </div>
            <div className='text-left'>
              <h3 className='text-slate-700 ls:max-sm:text-xs'>Redes sociales</h3>
              <div className='ml-6 ls:max-md:text-xs'>
                <ol>
                  <li className='m-2'>
                    <Link href={"https://discord.gg/4uvDcbcgWm"} target='_blank'>
                      Discord
                    </Link>
                  </li>
                  <li className='m-2'>
                    <Link href={"https://twitter.com/HyperGamerX_ES"} target='_blank'>
                      Twitter
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <div>
              <p className='text-gray-400 ls:max-lg:text-xs'>
                &copy; 2023 HyperGamerX. Creado por
                <Link href={"https://sunrizestudios.vercel.app/"} target='_blank'>
                  {" "}
                  Sunrize Studios
                </Link>
                .
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8225968446465041'
        crossorigin='anonymous'
      />
    </html>
  );
}
