import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  const { t } = useTranslation("common");
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <nav className='bg-gray-800 font-sans'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-16'>
          <Link
            href='/'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out'>
            {t("Header.Inicio")}
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className=' text-white bg-gray-900 bg-opacity-70 py-8 w-full font-sans mt-10'>
        <div className='container text-slate-500 mx-auto text-center grid grid-cols-3 list-none'>
          <div className='text-left'>
            <h3 className='text-slate-700 ls:max-sm:text-ls'>Terminos y servicios</h3>
            <div className='ml-6 ls:max-md:text-lss'>
              <li>
                <Link href={"/terminos-servicios/AvisoLegal"}>Aviso legal y términos de uso</Link>
              </li>
              <li>Política de Cookies</li>
              <li>Privacidad</li>
            </div>
          </div>
          <div className='text-left'>
            <h3 className='text-slate-700 ls:max-sm:text-ls'>Redes Sociales</h3>
            <div className='ml-6 ls:max-md:text-lss'>
              <li>
                <Link href={"https://discord.gg/4uvDcbcgWm"} target='_blank'>
                  Discord
                </Link>
              </li>
              <li>
                <Link href={"https://twitter.com/HyperGamerX_ES"} target='_blank'>
                  Twitter
                </Link>
              </li>
            </div>
          </div>
          <div>
            <p className='text-gray-400'>&copy; 2023 HyperGamerX.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
