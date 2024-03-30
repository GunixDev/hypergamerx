import type { Locale } from '../../../types';

interface CompartirProps {
  path: string;
  locale: Locale;
}

function generarCompartirGmail(subject: string, body: string) {
  const subjectEncoded = encodeURIComponent(subject);
  const bodyEncoded = encodeURIComponent(body);
  return `mailto:?subject=${subjectEncoded}&body=${bodyEncoded}`;
}

export default function Compartir({ path, locale }: CompartirProps) {
  const url = `https://www.hypergamerx.com/${locale}/blog/${path}/`;
  const articleUrl = encodeURIComponent(url);
  const subject = `${
    locale === 'es'
      ? '⭐ Mira este artículo que vi en HyperGamerX 🎮'
      : '⭐ Check out this article I saw on HyperGamerX 🎮'
  }`;
  const body2 = `${subject}: ${url}`;

  const compartirTwitter = `https://twitter.com/intent/tweet?url=${body2}`;
  const compartirGmail = generarCompartirGmail(subject, url);

  return (
    <div className=' grid grid-cols-5 gap-x-1 lg:gap-x-3 justify-end items-end'>
      <a
        title='Whatsapp'
        class=''
        lang={locale}
        href={`https://api.whatsapp.com/send?text=${articleUrl}`}
        target='_blank'>
        <img
          class=' w-[24px] h-[24px] lgi:w-[28px] lgi:h-[28px] lg:w-[32px] lg:h-[32px]'
          src='/icons/Logos/Whatsapp.svg'
        />
      </a>
      <a title='Reddit' lang={locale} href={`https://www.reddit.com/submit?url=${body2}`} target='_blank'>
        <img
          class=' w-[24px] h-[24px] lgi:w-[28px] lgi:h-[28px] lg:w-[32px] lg:h-[32px]'
          src='/icons/Logos/Reddit.svg'
        />
      </a>
      <a
        title='Facebook'
        lang={locale}
        href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
        target='_blank'>
        <img
          class=' w-[24px] h-[24px] lgi:w-[28px] lgi:h-[28px] lg:w-[32px] lg:h-[32px]'
          src='/icons/Logos/Facebook.svg'
        />
      </a>
      <a title='Twitter' lang={locale} href={compartirTwitter} target='_blank'>
        <img
          class=' w-[24px] h-[24px] lgi:w-[28px] lgi:h-[28px] lg:w-[32px] lg:h-[32px]'
          src='/icons/Logos/Twitter.svg'
        />
      </a>
      <a title='Mail' lang={locale} href={compartirGmail} target='_blank'>
        <img
          class=' w-[24px] h-[24px] lgi:w-[28px] lgi:h-[28px] lg:w-[32px] lg:h-[32px]'
          src='/icons/Logos/Email.svg'
        />
      </a>
    </div>
  );
}
