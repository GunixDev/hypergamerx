import { languages } from '../../../i18n/data_essential';
import { useTranslations } from '../../../i18n/utils';
import { useState } from 'preact/hooks';
import LanguagesSelect from '../LanguagesSelect';
import SearchWidget from '../Search';

interface MobileNavProps {
  lang2: 'en' | 'es';
  pathname: string;
}

export default function NavPreact({ lang2, pathname }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMas, setIsOpenMas] = useState(false);
  const t = useTranslations(lang2);

  return (
    <>
      {isOpenMas && (
        <div className={`${isOpenMas ? '' : 'hidden'} lg:hidden grid grid-cols-8 fixed w-full h-full z-[250]`}>
          <div className='bg-white col-span-7 lgi:col-span-5 lss:col-span-4 px-[8px] py-[10px]'>
            <div>
              <img
                onClick={() => {
                  setIsOpenMas(false);
                  setIsOpen(true);
                }}
                src='/icons/Volver.svg'
                width='140px'
                height='240px'
                class='w-[140px] sm:w-[240px] h-auto mb-1'
              />
              <hr />
            </div>
            <div className='grid grid-rows-11 h-full'>
              <div className='row-span-9 subtitulo3-movil grid grid-rows-10'>
                <a lang={lang2} href={`/${lang2}/about/`} className='flex my-auto gap-2'>
                  <img src='/icons/Periodico.svg' />
                  <span className='my-auto'>{t('footer.sobrehypergamerx')}</span>
                </a>
                <a lang={lang2} href={'mailto:sunrizecontact@gmail.com'} className='flex my-auto gap-2'>
                  <img src='/icons/Mensaje.svg' />
                  <span className='my-auto'>{t('footer.contacto')}</span>
                </a>
                <a lang={lang2} href={`/${lang2}/terminos-servicios/AvisoLegal/`} className='flex my-auto gap-2'>
                  <img src='/icons/Aviso.svg' />
                  <span className='my-auto'>{t('footer.avisolega')}</span>
                </a>
                <a lang={lang2} href={`/${lang2}/terminos-servicios/PoliticaCookies/`} className='flex my-auto gap-2'>
                  <img src='/icons/Aviso.svg' />
                  <span className='my-auto'>{t('footer.politicascookies')}</span>
                </a>
                <a lang={lang2} href={`/${lang2}/terminos-servicios/Privacidad/`} className='flex my-auto gap-2'>
                  <img src='/icons/Aviso.svg' />
                  <span className='my-auto'>{t('footer.politicas')}</span>
                </a>
              </div>
              <div className='row-span-2 text-black self-end'>
                <LanguagesSelect lang={lang2} pathname={pathname} languages={languages} />
                <p>© 2024 HyperGamerX. Creado por Sunrize Studios</p>
              </div>
            </div>
          </div>
          <div
            className='col-span-1 lgi:col-span-3 lss:col-span-4 bg-black opacity-70'
            onClick={() => {
              setIsOpen(false);
              setIsOpenMas(false);
            }}></div>
        </div>
      )}

      {isOpen && (
        <div className={`${isOpen ? '' : 'hidden'} lg:hidden grid grid-cols-8 fixed w-full h-full z-[200]`}>
          <div className='bg-white col-span-7 lgi:col-span-5 lss:col-span-4 px-[8px] py-[10px]'>
            <div>
              <img
                src='/icons/HyperGamerXLetterDark.svg'
                loading='lazy'
                alt='inicio'
                width='140px'
                height='240px'
                class='w-[140px] sm:w-[240px] h-auto mb-1'
              />
              <hr />
            </div>
            <div className='grid grid-rows-12 h-full'>
              <div className='row-span-9 subtitulo3-movil grid grid-rows-12'>
                <div className=' h-full row-span-6 grid subtitulo3-movil'>
                  <div className='my-auto'>
                    <SearchWidget lang={lang2} />
                  </div>
                  <a lang={lang2} href={`/${lang2}/`} className='flex my-auto gap-2'>
                    <img src='/icons/Casa.svg' />
                    <span className='my-auto'> {t('nav.inicio')}</span>
                  </a>
                  <a lang={lang2} href={`/${lang2}/seccion/news/`} className='flex my-auto gap-2'>
                    <img src='/icons/Periodico.svg' />
                    <span className='my-auto'> {t('nav.noticias')}</span>
                  </a>
                  <a lang={lang2} href={`/${lang2}/seccion/guides/`} className='flex my-auto gap-2'>
                    <img src='/icons/Mapa.svg' />
                    <span className='my-auto'> {t('seccion.guias')}</span>
                  </a>
                  <a
                    lang={lang2}
                    href={'https://www.paypal.com/donate/?hosted_button_id=K7PXSGWS98LXQ'}
                    target={'_blank'}
                    className='flex my-auto gap-2'>
                    <img src='/icons/Donar.svg' />
                    <span className='my-auto'>{t('footer.donar')}</span>
                  </a>
                </div>
                <div className='my-auto row-span-4 h-full grid subtitulo4-movil grid-cols-2 grid-rows-3 gap-x-1 gap-y-4'>
                  <a
                    href={'https://discord.gg/KqmwVhZnfa'}
                    hreflang={lang2}
                    target='_blank'
                    className='w-full h-auto flex gap-1 my-auto'>
                    <img src='/icons/Logos/Discord.svg' width='25px' height='25px' />
                    <span className='my-auto'>Discord</span>
                  </a>
                  <a
                    href={'https://twitter.com/HyperGamerX_'}
                    hreflang={lang2}
                    target='_blank'
                    className='w-full h-auto flex gap-1 my-auto'>
                    <img src='/icons/Logos/Twitter.svg' width='25px' height='25px' />
                    <span className='my-auto'>Twitter</span>
                  </a>
                  <a
                    href={'https://www.youtube.com/@HyperGamerX1'}
                    hreflang={lang2}
                    target='_blank'
                    className='w-full h-auto flex gap-1 my-auto'>
                    <img src='/icons/Logos/Youtube.svg' width='25px' height='25px' />
                    <span className='my-auto'>Youtube</span>
                  </a>
                  <a
                    href={'https://www.tiktok.com/@hypergamerxofficial'}
                    hreflang={lang2}
                    target='_blank'
                    className='w-full h-auto flex gap-1 my-auto'>
                    <img src='/icons/Logos/Tik tok.svg' width='25px' height='25px' />
                    <span className='my-auto'>Tik Tok</span>
                  </a>
                  <a
                    href={'https://whatsapp.com/channel/0029VaH91EaAO7RD5tegmL1z'}
                    hreflang={lang2}
                    target='_blank'
                    className='w-full h-auto flex gap-1 my-auto'>
                    <img src='/icons/Logos/Whatsapp.svg' width='25px' height='25px' />
                    <span className='my-auto'>Whatsapp</span>
                  </a>
                  <a
                    href={'https://www.facebook.com/Hypergamerx'}
                    hreflang={lang2}
                    target='_blank'
                    className='w-full h-auto flex gap-1 my-auto'>
                    <img src='/icons/Logos/Facebook.svg' width='25px' height='25px' />
                    <span className='my-auto'>Faceboook</span>
                  </a>
                </div>
              </div>
              <div className='row-span-3 text-black self-end'>
                <div
                  onClick={() => {
                    setIsOpenMas(true);
                    setIsOpen(false);
                  }}
                  className='flex gap-2 self-end mb-3 subtitulo4-movil'>
                  <img src='/icons/Puntos.svg' />
                  <span className='my-auto'>{t('nav.more')}</span>
                </div>
                <LanguagesSelect lang={lang2} pathname={pathname} languages={languages} />
                <p>
                  &copy; 2024 HyperGamerX. Creado por
                  <a href={'https://sunrizestudios.vercel.app/'} hreflang={lang2} target='_blank'>
                    {' '}
                    Sunrize Studios
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-span-1 lgi:col-span-3 lss:col-span-4 bg-black opacity-70'
            onClick={() => {
              setIsOpen(false);
              setIsOpenMas(false);
            }}></div>
        </div>
      )}

      <nav className='py-2 lg:px-4 grid lg:grid-cols-11 fixed z-[100] bg-black h-auto w-full duration-500 grid-cols-7 px-[10px]'>
        <div className='lg:hidden col-span-3 my-auto' onClick={() => setIsOpen(!isOpen)}>
          <img src='/icons/menu.svg' alt='Menu' width='24px' height='24px' />
        </div>

        <div className='lg:col-span-5 grid grid-cols-5 py-2 w-full gap-2 ls:max-lg:hidden'>
          <SearchWidget lang={lang2} />
          <LanguagesSelect lang={lang2} pathname={pathname} languages={languages} />
        </div>

        <div className='col-span-1 mx-auto my-auto w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]'>
          <a hreflang={lang2} aria-label='inicio' href={`/${lang2}/`}>
            <img src='/icons/HyperGamerX.svg' alt='inicio' width='40px' height='40px' />
          </a>
        </div>

        <div className='lg:col-span-5 col-span-3 my-auto text-center grid grid-cols-5 subtitulo6-desktop text-white ls:max-lg:hidden'>
          <a hreflang={lang2} className='col-start-3' href={`/${lang2}/seccion/guides/`}>
            {t('seccion.guias')}
          </a>
          <a hreflang={lang2} href={`/${lang2}/seccion/news/`}>
            {t('nav.noticias')}
          </a>
          <a hreflang={lang2} href={`/${lang2}/`}>
            {t('nav.inicio')}
          </a>
        </div>

        <div className='col-span-3 w-full lg:hidden'></div>
      </nav>
    </>
  );
}
