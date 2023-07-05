import Head from "next/head";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

export const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name='description' content='Stitio web de venta de guitarras' />
        <meta name='author' content='Sunrize Studios' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='format-detection' content='telephone=no' />
        <meta property='twitter:title' content={pagina} />
        <meta property='twitter:description' content={pagina} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={`https://www.hypergamerx.com/${pagina}`} />
        <meta property='og:url' content={pagina} />
        <meta property='og:title' content={pagina} />
        <meta property='og:description' content={pagina} />
        <meta property='og:image' content={`https://www.hypergamerx.com/${pagina}`} />
        <meta property='og:site_name' content='HyperGamerX' />
        <link rel='icon' href='/logo.ico' type='image/png' />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5870727283452147'
          crossOrigin='anonymous'></script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.CLIENT_GOOGLE_A_KEY}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.CLIENT_GOOGLE_A_KEY}');
      console.log('Google Analytics gtag config executed');
    `,
          }}
        />
      </Head>
      <nav className='bg-gray-800 font-sans'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-end h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'></div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <Link
                    href='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out'>
                    Inic
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Analytics />
      {children}
      <footer className='bg-black text-white py-8 w-full font-sans mt-10'>
        <div className='container mx-auto text-center'>
          <p className='text-gray-400'>&copy; 2023 HyperGamerX.</p>
        </div>
      </footer>
    </div>
  );
};
