interface LanguagesSelectProps {
  lang: 'en' | 'es';
  pathname: string;
  languages: any;
}

export default function LanguagesSelect({lang, pathname, languages}: LanguagesSelectProps) {
  return (
    <div className='w-full col-span-2 ls:max-lg:my-1 text-black bg-white'>
      <select
        id='Lang'
        aria-label='Cambiar idioma'
        name='Lang'
        className='minismall-desktop py-0.5 rounded-md w-full ls:max-lg:border-2 ls:max-lg:border-black bg-white'
        value={`/${lang}/${pathname}`}
        onChange={(event) => {
          const selectedValue = (event.target as HTMLSelectElement)?.value;
          window.location.href = selectedValue;
        }}>
        {Object.entries(languages).map(([lang, label]) => (
          <option className='text-black' key={lang} value={`/${lang}/${pathname}`}>
            {String(label)}
          </option>
        ))}
      </select>
    </div>
  );
}
