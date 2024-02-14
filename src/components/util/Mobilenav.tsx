import { languages } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { useState } from 'preact/hooks';
import SearchWidget from '../SearchWidget';

interface MobileNavProps {
  lang2: 'en' | 'es';
  pathname: string;
}

export default function MobileNav({ lang2, pathname }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(lang2);

  return (
    <>
      {isOpen && (
        <div className='md:hidden fixed mt-10 bg-slate-950 text-white w-8/12 h-full z-[100]'>
          <div className='row-start-1 mx-2'>
            <div className='my-auto'>
              <label htmlFor='Lang' className='text-white text-xs'>
                {t('nav.idiomas')}
              </label>
              <select
                id='Lang'
                name='Lang'
                className='text-xs bg-gray-700 text-white'
                value={`/${lang2}/${pathname}`}
                onChange={(event) => {
                  const selectedValue = (event.target as HTMLSelectElement)?.value;
                  window.location.href = selectedValue;
                }}>
                {Object.entries(languages).map(([lang, label]) => (
                  <option key={lang} value={`/${lang}/${pathname}`}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='w-full h-full grid grid-rows-6 mx-2'>
            <div className='row-start-1'>
              <div>
                <SearchWidget lang={lang2} />
              </div>
              <p>{t('nav.navegacion')}</p>
              <div className='grid grid-rows-2 text-xs ml-5'>
                <ol className='list-disc'>
                  <li>
                    <a hreflang={lang2} href={`/${lang2}/`} className='text-blue-400'>
                      {t('nav.inicio')}
                    </a>
                  </li>
                  <li>
                    <a hreflang={lang2} href={`/${lang2}/seccion/news/`} className='text-blue-400'>
                      {t('nav.noticias')}
                    </a>
                  </li>
                  <li>
                    <a hreflang={lang2} href={`/${lang2}/seccion/guides/`} className='text-blue-400'>
                      {t('seccion.guias')}
                    </a>
                  </li>
                </ol>
              </div>
            </div>

            <div className='row-start-2'>
              {t('footer.redes')}
              <div className='ml-6 text-xs'>
                <ol className='grid grid-cols-2 list-disc'>
                  <li className='py-2 duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://discord.gg/aXmCVfcXaa'} target='_blank'>
                      {' '}
                      Discord
                    </a>
                  </li>
                  <li className=' py-2 duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://twitter.com/HyperGamerX_ES'} target='_blank'>
                      {' '}
                      Twitter
                    </a>
                  </li>
                  <li className='py-2 duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://www.youtube.com/@HyperGamerX1'} target='_blank'>
                      {' '}
                      Youtube
                    </a>
                  </li>
                  <li className='py-2 duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://www.facebook.com/Hypergamerx'} target='_blank'>
                      {' '}
                      Facebook
                    </a>
                  </li>
                  <li className='py-2 duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://whatsapp.com/channel/0029VaH91EaAO7RD5tegmL1z'} target='_blank'>
                      {' '}
                      Whatsapp
                    </a>
                  </li>
                  <li className='py-2 duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://www.instagram.com/hypergamerx1/'} target='_blank'>
                      {' '}
                      Instagram
                    </a>
                  </li>
                </ol>
              </div>
            </div>

            <div className='row-start-4'>
              {t('footer.terminos')}
              <div className='text-xs'>
                <ol className=' ml-6 list-disc'>
                  <li className='duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={`/${lang2}/terminos-servicios/AvisoLegal/`}>
                      {t('footer.avisolega')}
                    </a>
                  </li>
                  <li className='duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={`/${lang2}/terminos-servicios/PoliticaCookies/`}>
                      {t('footer.politicascookies')}
                    </a>
                  </li>
                  <li className='duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={`/${lang2}/terminos-servicios/Privacidad/`}>
                      {t('footer.politicas')}
                    </a>
                  </li>
                </ol>
              </div>
            </div>

            <div className='row-start-5'>
              {t('footer.contactoseconocenos')}
              <div className='text-xs'>
                <ol className=' ml-6 list-disc'>
                  <li className='duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'https://www.paypal.com/donate/?hosted_button_id=K7PXSGWS98LXQ'}>
                      {t('footer.donar')}
                    </a>
                  </li>
                  <li className='duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={`/${lang2}/about/`}>
                      {t('footer.sobrehypergamerx')}
                    </a>
                  </li>
                  <li className='duration-300 hover:text-gray-300'>
                    <a hreflang={lang2} href={'mailto:sunrizecontact@gmail.com'}>
                      {t('footer.contacto')}
                    </a>
                  </li>
                </ol>
              </div>
            </div>

            <div className='row-start-6 absolute bottom-12'>
              <p className='text-gray-400 ls:max-lg:text-xs'>
                &copy; 2024 HyperGamerX. {t('article.creadorpor')}
                <a
                  hreflang={lang2}
                  href={'https://sunrizestudios.vercel.app/'}
                  target='_blank'
                  className='duration-300 hover:text-red-300'>
                  {' '}
                  Sunrize Studios
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <nav className='bg-gray-900 duration-500 w-full h-auto py-2 z-[100] px-2 grid grid-cols-3 ls:max-md:fixed md:grid-cols-9 md:py-1 md:px-0  lg:py-2'>
        <div className='md:hidden col-span-1'>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}>
            <img width={20} height={20} src='/icons/menu.svg' className='align-middle mx-2' alt='Menu' />
          </button>
        </div>
        <div className='flex col-span-1 md:col-span-4'>
          <div className='text-xs md:text-xl font-bold mx-2 md:my-1 ls:max-md:text-center ls:max-md:w-full'>
            <p>
              HyperGamerX <span className='text-xs align-super md:align-top ls:max-md:font-light'>{lang2}</span>
            </p>
          </div>
          <div className='my-auto ls:max-md:hidden lg:ml-2 '>
            <label for='Lang' className='text-white text-xs md:mr-1 lg:mr-2 md:text-sm lg:text-base'>
              {t('nav.idiomas')}
            </label>

            <select
              id='Lang'
              name='Lang'
              className='text-xs md:text-sm lg:text-base bg-gray-700 text-white'
              value={`/${lang2}/${pathname}`}
              onChange={(event) => {
                const selectedValue = (event.target as HTMLSelectElement)?.value;
                window.location.href = selectedValue;
              }}>
              {Object.entries(languages).map(([lang, label]) => (
                <option key={lang} value={`/${lang}/${pathname}`}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='ls:max-md:hidden md:col-span-2 my-auto'>
          <SearchWidget lang={lang2} />
        </div>
        <div className='md:col-span-3 col-span-1 md:my-auto mx-2'>
          <div className='md:hidden absolute right-2'>
            <a hreflang={lang2} href={`/${lang2}/`} className='text-blue-400 text-xs mx-2 font-bold'>
              {t('nav.inicio')}
            </a>
          </div>
          <div className='grid grid-cols-3 lg:grid-cols text-xs md:text-sm lg:text-base ls:max-md:hidden text-center'>
            <a hreflang={lang2} href={`/${lang2}/seccion/guides/`} className='text-blue-400'>
              {t('seccion.guias')}
            </a>
            <a hreflang={lang2} href={`/${lang2}/seccion/news/`} className='text-blue-400'>
              {t('nav.noticias')}
            </a>
            <a hreflang={lang2} href={`/${lang2}/`} className='text-blue-400'>
              {t('nav.inicio')}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
