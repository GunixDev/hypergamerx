import type { Locale } from '../../types';

export default function ArticulosRamdon(file: string, data: any, locale: Locale) {
  const { Title, Description } = data;
  return (
    <a href={`/${locale}/blog/${file.slice(3)}/`} hreflang={locale}>
      <div class='mt-4 group'>
        <h3 class='text-sm ls:max-md:text-xs text-slate-300 font-bold group-hover:text-slate-200 duration-500'>
          {Title}
        </h3>
        <p class='md:text-xs ls:max-md:hidden mt-1 text-slate-400 font-semibold group-hover:text-slate-300 duration-500'>
          {Description}
        </p>
      </div>
    </a>
  );
}
