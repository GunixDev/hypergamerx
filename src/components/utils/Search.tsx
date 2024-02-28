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
    <search>
      <form class='form grid grid-flow-col-dense' onSubmit={HandleForm}>
        <div class='md:text-xs lg:text-base text-sm'>
          <label for='search'>{t('articulo.search')}</label>
        </div>
        <input
          type='search'
          required
          min='2'
          max='24'
          id='search'
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          name='search'
          placeholder={t('articulo.searchinput')}
          className=' w-8/12 sm:w-11/12 mx-1 sm:mx-2 col-span-12 px-1 sm:px-2 md:text-sm lg:text-base text-sm'
        />
      </form>
    </search>
  );
}
