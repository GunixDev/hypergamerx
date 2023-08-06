"use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Nav from "@/components/Nav";
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
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Nav />
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
