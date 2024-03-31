import DOMPurify from 'dompurify';
import { useState } from 'preact/hooks';
import { useTranslations } from '../../i18n/utils';

export default function SearchWidget(lang: any) {
  const [value, setValue] = useState('');
  const t = useTranslations(lang.lang);

  const HandleForm = (e: any) => {
    e.preventDefault();
    setValue(DOMPurify.sanitize(e.target.value));
    const searchTerm = value;
    if (!searchTerm || searchTerm.length === 0) return;
    const url = new URL(`/${lang.lang}/search`, window.location.origin);
    url.searchParams.append('q', searchTerm);
    window.location.assign(url.toString());
  };
  return (
    <div className='lg:w-11/12 w-full col-span-3'>
      <search>
        <form className='form grid grid-cols-12 my-auto' onSubmit={HandleForm}>
          <div className={`col-span-1 my-auto ls:max-lg:hidden`}>
            <img src='/icons/Search.svg' alt='Buscar' />
          </div>
          <input
            type='search'
            required
            min='2'
            max='64'
            id='search'
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            name='search'
            placeholder={t('articulo.searchinput')}
            className={
              'minismaller-movil py-1.5 ls:max-lg:my-1 lg:py-0 lg:small-desktop lg:placeholder:text-dark-white lg:text-white border-[1px] border-dark lg:border-white rounded-md lg:bg-light-gray lg:ml-2.5 px-1 col-span-11 my-auto'
            }
          />
        </form>
      </search>
    </div>
  );
}
