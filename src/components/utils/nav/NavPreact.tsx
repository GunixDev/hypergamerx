import { languages } from '../../../i18n/data_essential';
import { useTranslations } from '../../../i18n/utils';
import { useState } from 'preact/hooks';
import DesktopNav from './MobileNav';
import LanguagesSelect from '../LanguagesSelect';
import Search from '../Search';

interface MobileNavProps {
  lang2: 'en' | 'es';
  pathname: string;
}

export default function NavPreact({ lang2, pathname }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(lang2);

  return (
    <>
      {isOpen && <DesktopNav lang={lang2} pathname={pathname} languages={languages} />}

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
          <div className='text-xs md:text-xl font-bold sm:mx-2 md:my-1 ls:max-md:text-center ls:max-md:w-full'>
            <p>
              HyperGamerX <span className='text-xs align-super md:align-top ls:max-md:font-light'>{lang2}</span>
            </p>
          </div>
          <LanguagesSelect lang={lang2} pathname={pathname} languages={languages} />
        </div>
        <div className='ls:max-md:hidden md:col-span-2 my-auto'>
          <Search lang={lang2} />
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
