import { useTranslations } from 'src/i18n/utils';
import type { Locale, GameJsonArray } from '../../../types';
import FormattedDate from '@components/utils/FormattedDate';
import Estrellas from '@components/utils/blog/Estrellas';
import ArticulosRamdon from '@components/Views/ArticulosRamdon.tsx';
import Producto from '@components/utils/blog/Productos';

interface AsideBlogProps {
  locale: Locale;
  resena: undefined | boolean;
  games: GameJsonArray;
  allPosts: any;
  gamesposts: any;
  postgames: boolean;
  amazon1: any;
}

export default function AsideBlog({ locale, resena, games, allPosts, gamesposts, postgames, amazon1 }: AsideBlogProps) {
  const t = useTranslations(locale);
  return (
    <aside lang={locale} className='h-full ls:max-sm:w-full relative sm:col-span-4'>
      <div
        className={`h-full relative sm:col-span-2 ${
          resena ? 'lgi:max-sm:grid lgi:max-sm:grid-cols-9 ls:max-sm:p-2 ls:max-sm:gap-1' : ''
        }`}>
        {resena && (
          <div className=' bg-gray text-white p-2 ls:max-sm:h-full  rounded-lg w-full h-fit lgi:max-sm:col-span-4 lss:max-sm:col-span-3'>
            <p className='text-center subtitulo3-movil lgi:subtitulo4-movil lss:subtitulo3-movil lg:subtitulo3-desktop lg:my-1'>
              {games[0].Name}
            </p>
            <img
              src={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_186/${games[0].CoverImage}`}
              srcset={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_62/${games[0].CoverImage} 256w,
  https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_124/${games[0].CoverImage} 512w,
  https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_186/${games[0].CoverImage} 768w,
  https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_248/${games[0].CoverImage} 1024w,
https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_310/${games[0].CoverImage} 1280w`}
              width='186'
              height='230'
              alt={games[0].Name}
              decoding='async'
              loading='lazy'
              className='my-1 sm:my-4 w-80 h-56 md:h-64 lg:h-96 mx-auto aspect-auto'
            />
            {Estrellas(games[0].Stars, locale)}
            <p className='ml-1 lg:ml-3 smallerb-movil lg:small-desktop'>
              {t('article.lanzamiento')}:{' '}
              <span className='smallerb-movil lg:small-desktop'>
                {<FormattedDate date={games[0].DateLaunch} locale={locale} />}
              </span>
            </p>
            <p className='ml-1 lg:ml-3 smallerb-movil lg:small-desktop my-1'>
              {t('article.multijugador')}:
              <span className='smallerb-movil lg:small-desktop'>
                {games[0].Multijugador ? t('article.yes') : t('article.no')}
              </span>
            </p>
            <p className='ml-1 lg:ml-3 smallerb-movil lg:small-desktop my-1'>
              {resena && games[0].TrailerVideo && false ? (
                <>
                  <a hrefLang={locale} target='_blank' href={games[0].TrailerVideo}>
                    {t('article.vertrailer')}{' '}
                  </a>
                  <img
                    width={12}
                    height={12}
                    src='/icons/external.svg'
                    className='align-middle mx-1 inline-block'
                    alt='External'
                  />
                </>
              ) : null}
            </p>
          </div>
        )}
        {resena ? (
          <>
            {' '}
            {postgames && (
              <div className={`${resena ? 'lgi:max-sm:col-span-5 lss:max-sm:col-span-6' : ''} sm:mt-10`}>
                <h2 className='subtitulo3-movil md:subtitulo3-movil lg:subtitulo4-desktop text-center mb-4'>
                  {t('article.articulosde')} {games[0].Name}
                </h2>
                <div className='grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 mt-2 lg:mt-5'>
                  {gamesposts.map((post: any) => ArticulosRamdon(post.slug, post.data, locale))}
                </div>
              </div>
            )}
            <div className={` rounded-2xl ${resena ? ' lgi:max-sm:col-span-9' : ''}  mt-10`}>
              <h2 className='subtitulo3-movil md:subtitulo3-movil lg:subtitulo4-desktop text-center mb-4'>
                {t('article.articuclosreciente')}
              </h2>
              <div className='grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 mt-2 lg:mt-5'>
                {allPosts.map((post: any) => ArticulosRamdon(post.slug, post.data, locale))}
              </div>
            </div>
            {postgames && amazon1 !== null && amazon1 !== undefined && amazon1.length > 0 && (
              <div className={`${resena ? ' ls:max-sm:col-span-9' : ''} mt-10`}>
                <h2 className='subtitulo3-movil md:subtitulo3-movil lg:subtitulo4-desktop text-center mb-4'>
                  {games[0].Name} {t('articulo.amazon')}
                </h2>
                <div className='grid grid-cols-1 gap-2 sm:gap-3 lg:gap-5 mt-2 lg:mt-5'>
                  <Producto juego={amazon1} locale={locale} />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className={` rounded-2xl ${resena ? 'ls:max-sm:col-span-2 mt-3' : ''}`}>
              <h2 className='subtitulo3-movil md:subtitulo3-movil lg:subtitulo4-desktop text-center mb-4'>
                {t('article.articuclosreciente')}
              </h2>
              <div className='grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 mt-2 lg:mt-5'>
                {allPosts.map((post: any) => ArticulosRamdon(post.slug, post.data, locale))}
              </div>
            </div>
            {postgames && (
              <div className={`${resena ? ' ls:max-sm:col-span-6' : ''} mt-10`}>
                <h2 className='subtitulo3-movil md:subtitulo3-movil lg:subtitulo4-desktop text-center mb-4'>
                  {t('article.articulosde')} {games[0].Name}
                </h2>
                <div className='grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 mt-2 lg:mt-5'>
                  {gamesposts.map((post: any) => ArticulosRamdon(post.slug, post.data, locale))}
                </div>
              </div>
            )}
            {postgames && amazon1 !== null && amazon1 !== undefined && amazon1.length > 0 && (
              <div className={`${resena ? ' ls:max-sm:col-span-6' : ''} mt-10`}>
                <h2 className='subtitulo3-movil md:subtitulo3-movil lg:subtitulo4-desktop text-center mb-4'>
                  {games[0].Name} {t('articulo.amazon')}
                </h2>
                <div className='grid grid-cols-1 gap-2 sm:gap-3 lg:gap-5 mt-2 lg:mt-5'>
                  <Producto juego={amazon1} locale={locale} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
