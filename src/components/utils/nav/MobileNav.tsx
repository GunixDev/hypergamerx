import { useTranslations } from '../../../i18n/utils';
import Redes from '../footer/Redes';
import LanguagesSelect from '../LanguagesSelect';
import Search from '../Search';

interface MobilNavProps {
  lang: 'en' | 'es';
  pathname: string;
  languages: any;
}

export default function DesktopNav({ lang, pathname, languages }: MobilNavProps) {
  const t = useTranslations(lang);
  return (
    <div className='md:hidden fixed mt-10 bg-slate-950 text-white w-8/12 sm:w-5/12 h-full z-[100]'>
      <div className='row-start-1 mx-2 ls:max-sm:mt-2'>
        <LanguagesSelect lang={lang} pathname={pathname} languages={languages} />
      </div>

      <div className='w-full h-full grid grid-rows-6 mx-2'>
        <div className='row-start-1'>
          <div>
            <Search lang={lang} />
          </div>
          <p>{t('nav.navegacion')}</p>
          <div className='grid grid-rows-2 text-xs ml-5'>
            <ol className='list-disc'>
              <li>
                <a hreflang={lang} href={`/${lang}/`} className='text-blue-400'>
                  {t('nav.inicio')}
                </a>
              </li>
              <li>
                <a hreflang={lang} href={`/${lang}/seccion/news/`} className='text-blue-400'>
                  {t('nav.noticias')}
                </a>
              </li>
              <li>
                <a hreflang={lang} href={`/${lang}/seccion/guides/`} className='text-blue-400'>
                  {t('seccion.guias')}
                </a>
              </li>
            </ol>
          </div>
        </div>

        <Redes lang={lang} />

        <div className='row-start-4'>
          {t('footer.terminos')}
          <div className='text-xs'>
            <ol className=' ml-6 list-disc'>
              <li className='duration-300 hover:text-gray-300'>
                <a hreflang={lang} href={`/${lang}/terminos-servicios/AvisoLegal/`}>
                  {t('footer.avisolega')}
                </a>
              </li>
              <li className='duration-300 hover:text-gray-300'>
                <a hreflang={lang} href={`/${lang}/terminos-servicios/PoliticaCookies/`}>
                  {t('footer.politicascookies')}
                </a>
              </li>
              <li className='duration-300 hover:text-gray-300'>
                <a hreflang={lang} href={`/${lang}/terminos-servicios/Privacidad/`}>
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
                <a hreflang={lang} href={'https://www.paypal.com/donate/?hosted_button_id=K7PXSGWS98LXQ'}>
                  {t('footer.donar')}
                </a>
              </li>
              <li className='duration-300 hover:text-gray-300'>
                <a hreflang={lang} href={`/${lang}/about/`}>
                  {t('footer.sobrehypergamerx')}
                </a>
              </li>
              <li className='duration-300 hover:text-gray-300'>
                <a hreflang={lang} href={'mailto:sunrizecontact@gmail.com'}>
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
              hreflang={lang}
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
  );
}
