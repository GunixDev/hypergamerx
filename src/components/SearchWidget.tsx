import DOMPurify from 'dompurify';
import { useState } from 'preact/hooks';
import { useTranslations } from '../i18n/utils';

export default function SearchWidget(lang: any) {
  const [value, setValue] = useState('');
  const t = useTranslations(lang.lang);

  const HandleForm = (e: any) => {
    e.preventDefault();
    setValue(DOMPurify.sanitize(e.target.value));
    const searchTerm = value;
    if (!searchTerm || searchTerm.length === 0) return;
    const url = new URL(`/en/search`, window.location.origin);
    url.searchParams.append('q', searchTerm);
    window.location.assign(url.toString());
  };
  return (
    <aside>
      <form class='form grid grid-flow-col-dense' onSubmit={HandleForm}>
        <div>
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
          className=' w-11/12 mx-2 col-span-12 px-2'
        />
      </form>
    </aside>
  );
}
