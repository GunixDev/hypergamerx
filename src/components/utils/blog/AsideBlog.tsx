import { useTranslations } from 'src/i18n/utils';
import type { Locale, GameJsonArray } from '../../../types';
import FormattedDate from '@components/utils/FormattedDate';
import Estrellas from '@components/utils/blog/Estrellas';
import ArticulosRamdon from '@components/Views/ArticulosRamdon';
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
    <aside lang={locale} class='h-full ls:max-sm:w-full relative sm:col-span-2'>
      <div
        class={`h-full relative sm:col-span-2 ${
          resena ? 'ls:max-sm:grid ls:max-sm:grid-cols-5 ls:max-sm:p-2 ls:max-sm:gap-1' : ''
        }`}>
        {resena && (
          <div class='bg-slate-950 p-2 md:p-4 rounded-2xl w-full h-fit ls:max-sm:col-span-3'>
            <p class='text-sm text-slate-400 text-center font-bold md:text-xl xl:text-2xl'>{games[0].Name}</p>
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
              class='my-1 sm:my-4 w-80 h-56 md:h-64 lg:h-96 mx-auto object-cover'
            />
            {Estrellas(games[0].Stars, locale)}
            <p class='ml-1 lg:ml-3 text-xs lg:text-base text-slate-300'>
              {t('article.lanzamiento')}:{' '}
              <span class='text-slate-400 text-xs sm:text-base'>
                {<FormattedDate date={games[0].DateLaunch} locale={locale} />}
              </span>
            </p>
            <p class='ml-1 lg:ml-3 text-xs lg:text-base text-slate-300'>
              {t('article.multijugador')}:
              <span class='text-slate-400'>{games[0].Multijugador ? t('article.yes') : t('article.no')}</span>
            </p>
            <p class='ml-1 lg:ml-3 text-xs lg:text-base text-slate-300 hover:text-slate-100 duration-300'>
              {resena && games[0].TrailerVideo ? (
                <>
                  <a hreflang={locale} target='_blank' href={games[0].TrailerVideo}>
                    {t('article.vertrailer')}{' '}
                  </a>
                  <img
                    width={12}
                    height={12}
                    src='/icons/external.svg'
                    class='align-middle mx-1 inline-block'
                    alt='External'
                  />
                </>
              ) : null}
            </p>
          </div>
        )}
        <div
          class={`bg-slate-950 mb-1 md:p-5 ls:max-md:p-3 rounded-2xl md:mt-10 ${
            resena ? 'ls:max-sm:col-span-2' : ' w-11/12 mx-auto'
          }`}>
          <h2 class='md:text-lg font-bold ls:max-md:text-base text-white'>{t('article.articuclosreciente')}</h2>
          {allPosts.map((post: any) => ArticulosRamdon(post.slug, post.data, locale))}
        </div>
        {postgames && (
          <div
            class={`bg-slate-950 md:p-5 ls:max-md:p-3 rounded-2xl ${
              resena ? ' ls:max-sm:col-span-6' : ' w-11/12 mx-auto'
            }`}>
            <h2 class='md:text-lg font-bold ls:max-md:text-base text-white'>
              {t('article.articulosde')} {games[0].Name}
            </h2>
            {gamesposts.map((post: any) => ArticulosRamdon(post.slug, post.data, locale))}
          </div>
        )}
        {postgames && amazon1 !== null && amazon1 !== undefined && amazon1.length > 0 && (
          <div
            class={`bg-slate-950 md:p-5 ls:max-md:p-3 rounded-2xl ${
              resena ? ' ls:max-sm:col-span-6' : ' w-11/12 mx-auto'
            }`}>
            <h2 class='md:text-lg font-bold ls:max-md:text-base text-white'>
              {t('articulo.compraproductosde')} {games[0].Name}
            </h2>
            <Producto juego={amazon1} locale={locale} />
          </div>
        )}
      </div>
    </aside>
  );
}
