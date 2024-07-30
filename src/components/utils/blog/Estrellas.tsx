import { useTranslations } from '../../../i18n/utils';
import type { Locale } from '../../../types';

export default function Estrellas(cantidad: number, locale: Locale) {
  const t = useTranslations(locale);

  return (
    cantidad && (
      <div className='mx-auto ml-1 lg:ml-3'>
        <span className='inline-block align-middle mr-0 lg:mr-2 smallerb-movil lg:small-desktop'>
          {t('article.estrellas')}:
        </span>
        <span className='ml-1 lg:ml-2 text-xs sm:text-base align-middle text-black-white'>{cantidad + '  '}</span>
        {cantidad >= 4.5 ? (
          <>
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            {cantidad >= 5 ? (
              <img
                src='/icons/star-fill.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            ) : (
              <img
                src='/icons/star-half.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            )}
          </>
        ) : cantidad >= 3.5 ? (
          <>
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            {cantidad >= 4 ? (
              <img
                src='/icons/star-fill.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            ) : (
              <img
                src='/icons/star-half.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            )}
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
          </>
        ) : cantidad >= 2.5 ? (
          <>
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            {cantidad >= 3 ? (
              <img
                src='/icons/star-fill.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            ) : (
              <img
                src='/icons/star-half.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            )}
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
          </>
        ) : cantidad >= 1.5 ? (
          <>
            <img
              src='/icons/star-fill.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            {cantidad >= 2 ? (
              <img
                src='/icons/star-fill.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            ) : (
              <img
                src='/icons/star-half.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            )}
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
          </>
        ) : cantidad >= 0.5 ? (
          <>
            {cantidad >= 1 ? (
              <img
                src='/icons/star-fill.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            ) : (
              <img
                src='/icons/star-half.svg'
                className='inline-block align-middle text-black-white ls:max-sm:hidden'
                alt='Star Icon'
              />
            )}
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
          </>
        ) : (
          <>
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
            <img
              src='/icons/star.svg'
              className='inline-block align-middle text-black-white ls:max-sm:hidden'
              alt='Star Icon'
            />
          </>
        )}
      </div>
    )
  );
}
