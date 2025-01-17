import type {Locale} from "@/types.ts";

interface Props {
  locale: Locale;
  pathname: string;
  languages: any;
}

export default function LanguagePicker({locale, pathname, languages}: Props) {
  return (
      <select id="locale" aria-label="cambiar idioma" name="locale" className="flex bg-white px-2 xl:px-4 xl:pr-36 xl:py-2 py-1 justify-between items-center self-stretch border-neutral-950 rounded border font-xs xl:font-sm" value={`/${locale}/${pathname}`}
              onChange={(event) => {
                const selectedValue = (event.target as HTMLSelectElement)?.value;
                window.location.href = selectedValue;
              }}>
        {Object.entries(languages).map(([lang, label]) => (
          <option className='text-black bg-white font-xs' key={lang} value={`/${lang}/${pathname}`}>
            {String(label)}
          </option>        ))}
      </select>
  );
}
