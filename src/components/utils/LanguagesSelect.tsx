import { useTranslations } from '../../i18n/utils';

interface LanguagesSelectProps {
  lang: 'en' | 'es';
  pathname: string;
  languages: any;
}
export default function LanguagesSelect({ lang, pathname, languages }: LanguagesSelectProps) {
  const t = useTranslations(lang);
  return (
    <div className='my-auto ls:max-md:hidden lg:ml-2 '>
      <label for='Lang' className='text-white text-xs md:mr-1 lg:mr-2 md:text-sm lg:text-base'>
        {t('nav.idiomas')}
      </label>

      <select
        id='Lang'
        name='Lang'
        className='text-xs md:text-sm lg:text-base bg-gray-700 text-white'
        value={`/${lang}/${pathname}`}
        onChange={(event) => {
          const selectedValue = (event.target as HTMLSelectElement)?.value;
          window.location.href = selectedValue;
        }}>
        {Object.entries(languages).map(([lang, label]) => (
          <option key={lang} value={`/${lang}/${pathname}`}>
            {String(label)}
          </option>
        ))}
      </select>
    </div>
  );
}
