import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <nav className='bg-gray-800 font-sans'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-16'>
          <Link
            href='/'
            className='text-gray-300 hover:bg-gray-700 hover:text-white sm:px-1 md:px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out'>
            Inicio
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className='bg-black text-white py-8 w-full font-sans mt-10'>
        <div className='container mx-auto text-center'>
          <p className='text-gray-400'>&copy; 2023 HyperGamerX.</p>
        </div>
      </footer>
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
