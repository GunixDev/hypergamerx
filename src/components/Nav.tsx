import type {Locale} from "@/types.ts";
import {useState} from "preact/hooks";
import {useTranslations} from "@i18n/utils.ts";
import LanguagePicker from "@components/LanguagePicker.tsx";
import {languages} from "@i18n/ui.ts";


interface nav {
  locale: Locale;
  pathname: string;
}

export default function Nav({locale, pathname}: nav) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSectionsOpen, setIsSectionsOpen] = useState(false)
  const t = useTranslations(locale)
  return (
    <>
      <section className={`grid grid-cols-7 sm:grid-cols-10 w-full h-full duration-300 ease-in-out fixed z-50 ${isMenuOpen ? 'right-0' : 'right-full '}`}>
        <div className="flex bg-neutral-50 col-span-6 sm:col-span-5 h-full flex-col justify-center items-center gap-2.5">
          <div className="flex w-full py-3 px-3.5 justify-between items-center self-stretch bg-neutral-950 text-white">
            <img src="/logos/hyperGamerXLetter.svg" loading="lazy" alt="logo" width="170px" height="18px" className="w-[170px] h-[18px]"/>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src="/icons/x.svg" loading="lazy" alt="close" width="16px" height="16px" className="w-4 h-4"/>
            </div>
          </div>
          <div className="flex px-2 flex-col items-start gap-2.5 sm:gap-1 self-stretch h-full">

            <LanguagePicker locale={locale} pathname={pathname} languages={languages}/>
            <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/`} className="flex justify-center items-center self-stretch">
              <span className="font-base w-full underline">{t('nav.home')}</span>
            </a>
            <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/blog/1/`} className="flex justify-center items-center self-stretch">
              <span className="font-base w-full underline">{t('nav.recents')}</span>
            </a>
            <a onClick={() => setIsMenuOpen(false)} className="flex justify-center items-center self-stretch" href={`/${locale}/blog/noticias/1/`}>
              <span className="font-base w-full underline">{t('nav.news')}</span>
            </a>
            <a onClick={() => setIsMenuOpen(false)} className="flex justify-center items-center self-stretch" href={`/${locale}/blog/guias/1/`}>
              <span className="font-base w-full underline">{t('nav.guides')}</span>
            </a>
            <a className="flex justify-center items-center self-stretch" href="https://www.paypal.com/donate/?hosted_button_id=K7PXSGWS98LXQ">
              <span className="font-base w-full underline">{t('nav.donate')}</span>
            </a>
          </div>
          <div className="flex px-2 flex-col items-start gap-2 self-stretch">
            <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
              <span className="font-lg">{t('nav.social')}</span>
              <div className="flex justify-between items-center self-stretch">
                <a href="https://discord.gg/KqmwVhZnfa" className="flex items-center gap-0.5 w-full">
                  <img src="/logos/discord.svg" width="12" height="12" className="rounded" alt="discord"/>
                  <span className=" font-sm underline">Discord</span>
                </a>
                <a href="https://x.com/HyperGamerX_" className="flex items-center gap-0.5 w-full">
                  <img src="/logos/twitter.svg" width="12" height="12" className="rounded" alt="x"/>
                  <span className=" font-sm underline">X</span>
                </a>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <a href="https://www.youtube.com/@HyperGamerX1" className="flex items-center gap-0.5 w-full">
                  <img src="/logos/youtube.svg" width="12" height="12" className="rounded" alt="discord"/>
                  <span className=" font-sm underline">Youtube</span>
                </a>
                <a href="https://www.tiktok.com/@hypergamerxofficial" className="flex items-center gap-0.5 w-full">
                  <img src="/logos/discord.svg" width="12" height="12" className="rounded" alt="x"/>
                  <span className=" font-sm underline">Tik tok</span>
                </a>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <a href="https://www.facebook.com/Hypergamerx" className="flex items-center gap-0.5 w-full">
                  <img src="/logos/facebook.svg" width="12" height="12" className="rounded" alt="discord"/>
                  <span className=" font-sm underline">Facebook</span>
                </a>
                <a href="https://whatsapp.com/channel/0029VaH91EaAO7RD5tegmL1z" className="flex items-center gap-0.5 w-full">
                  <img src="/logos/whatsapp.svg" width="12" height="12" className="rounded" alt="x"/>
                  <span className=" font-sm underline">Whatsapp</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
              <span className="font-lg">{t('nav.about')}</span>
              <div className="flex justify-between items-center self-stretch">
                <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/conocenos/sobre-hypergamerx/`} className="flex items-center gap-0.5 w-full">
                  <span className=" font-sm underline">{t('nav.about.hgx')}</span>
                </a>
                <a className="flex items-center gap-0.5 w-full" href="https://www.paypal.com/donate/?hosted_button_id=K7PXSGWS98LXQ">
                  <span className=" font-sm underline">{t('nav.donate')}</span>
                </a>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/conocenos/contacto/`} className="flex items-center gap-0.5 w-full">
                  <span className=" font-sm underline">{t('nav.contact_advertise')}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
              <span className="font-lg">{t('nav.legal_notices')}</span>
              <div className="flex justify-between items-center self-stretch">
                <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/avisos-y-politicas/privacidad/`} className="flex items-center gap-0.5 w-full">
                  <span className=" font-sm underline">{t('nav.privacy_policy')}</span>
                </a>
                <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/avisos-y-politicas/politica-de-cookies/`} className="flex items-center gap-0.5 w-full">
                  <span className=" font-sm underline">{t('nav.cookies_policy')}</span>
                </a>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <a onClick={() => setIsMenuOpen(false)} href={`/${locale}/avisos-y-politicas/aviso-legal/`} className="flex items-center gap-0.5 w-full">
                  <span className=" font-sm underline">{t('nav.legal_notice')}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start gap-0.5 self-stretch">
              <span className="font-sm w-full">&copy; 2024 HyperGamerX. {t('nav.created_at')}</span>
            </div>
          </div>
        </div>
        <div className={`w-full bg-neutral-950 sm:col-span-5 ${isMenuOpen ? 'opacity-35 duration-1000 delay-100' : ' opacity-0 duration-100 delay-0'} `} onClick={() => setIsMenuOpen(false)}></div>
      </section>

      <nav className="w-full xl:hidden bg-neutral-950 p-2 items-center justify-between flex">
        <div onClick={() => setIsMenuOpen(true)}>
          <img src="/icons/menu.svg" alt="menu" width="32" height="32"/>
        </div>
        <div>
          <a hrefLang={locale} aria-label="index" href={`/${locale}/`}>
            <img src="/logos/hyperGamerX.svg" alt="hypergamerx_logo inicio" width="32" height="32"/>
          </a>
        </div>
        <div>
          <a hrefLang={locale} aria-label="search" href={`/${locale}/blog/search/`} data-astro-reload>
            <img src="/icons/search.svg" alt="search" width="32" height="32"/>
          </a>
        </div>
      </nav>

      <nav className="w-full hidden xl:flex bg-neutral-950 py-4 px-10 items-center justify-between">
        <div className="flex gap-10">
          <a hrefLang={locale} aria-label="search" href={`/${locale}/blog/search/`} data-astro-reload>
            <img src="/icons/search.svg" alt="search" width="48" height="48"/>
          </a>
          <LanguagePicker locale={locale} pathname={pathname} languages={languages}/>
        </div>
        <div>
          <a hrefLang={locale} aria-label="index" href={`/${locale}/`}>
            <img src="/logos/hyperGamerX.svg" alt="hypergamerx_logo inicio" width="48" height="48"/>
          </a>
        </div>
        <div className="text-white flex relative">
          <button
            onClick={() => setIsSectionsOpen(!isSectionsOpen)}
            className="flex items-center gap-4"
          >
            Secciones <img src="/icons/flecha_Abajo.svg" alt="flecha"/>
          </button>
          {isSectionsOpen && (
            <div className="absolute top-full mt-0 flex flex-col gap-4 bg-neutral-950 py-4 px-6  rounded shadow-lg">
              <a
                onClick={() => setIsSectionsOpen(false)}
                href={`/${locale}/blog/1/`}
                className="font-base underline text-white"
              >
                {t('nav.recents')}
              </a>
              <a
                onClick={() => setIsSectionsOpen(false)}
                href={`/${locale}/blog/noticias/1/`}
                className="font-base underline text-white"
              >
                {t('nav.news')}
              </a>
              <a
                onClick={() => setIsSectionsOpen(false)}
                href={`/${locale}/blog/guias/1/`}
                className="font-base underline text-white"
              >
                {t('nav.guides')}
              </a>
            </div>
          )}
        </div>
      </nav>

    </>
  )
}
