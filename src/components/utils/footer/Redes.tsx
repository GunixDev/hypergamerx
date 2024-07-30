import { useTranslations } from '../../../i18n/utils';

interface RedesProps {
  lang: any;
}

export default function Redes({ lang }: RedesProps) {
  const t = useTranslations(lang);
  return (
    <div className='text-left ls:max-md:row-start-2'>
      <p className='md:text-gray-400 text-white md:font-bold ls:max-md:text-base'>{t('footer.redes')}</p>
      <div className='ml-6 ls:max-md:text-xs'>
        <ol className='ls:max-md:grid ls:max-md:grid-cols-2 ls:max-md:list-disc'>
          <li className='m-2 duration-300 lg:text-gray-200 lg:font-semibold hover:text-gray-300'>
            <a href={'https://discord.gg/KqmwVhZnfa'} hrefLang={lang} target='_blank'>
              {' '}
              Discord
            </a>
          </li>
          <li className='m-2 duration-300 lg:text-gray-200 lg:font-semibold hover:text-gray-300'>
            <a href={'https://twitter.com/HyperGamerX_ES'} hrefLang={lang} target='_blank'>
              {' '}
              Twitter
            </a>
          </li>
          <li className='m-2 duration-300 lg:text-gray-200 lg:font-semibold hover:text-gray-300'>
            <a href={'https://www.youtube.com/@HyperGamerX1'} hrefLang={lang} target='_blank'>
              {' '}
              Youtube
            </a>
          </li>
          <li className='m-2 duration-300 lg:text-gray-200 lg:font-semibold hover:text-gray-300'>
            <a href={'https://www.facebook.com/Hypergamerx'} hrefLang={lang} target='_blank'>
              {' '}
              Facebook
            </a>
          </li>
          <li className='m-2 duration-300 lg:text-gray-200 lg:font-semibold hover:text-gray-300'>
            <a href={'https://whatsapp.com/channel/0029VaH91EaAO7RD5tegmL1z'} hrefLang={lang} target='_blank'>
              {' '}
              Whatsapp
            </a>
          </li>
          <li className='m-2 duration-300 lg:text-gray-200 lg:font-semibold hover:text-gray-300'>
            <a href={'https://www.instagram.com/hypergamerx1/'} hrefLang={lang} target='_blank'>
              {' '}
              Instagram
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
