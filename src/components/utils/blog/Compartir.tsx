import React from 'preact';
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

  const compartirWhatsapp = `whatsapp://send?text=${url}`;
  const compartirFacebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const compartirTwitter = `https://twitter.com/intent/tweet?url=${body2}`;
  const compartirGmail = generarCompartirGmail(subject, url);

  return (
    <div className='grid grid-cols-6 my-2 w-52 gap-2'>
      <a title='Whatsapp' lang={locale} href={`https://api.whatsapp.com/send?text=${articleUrl}`} target='_blank'>
        <img width='40px' height='40px' src='/icons/share/whatsapp-svgrepo-com.svg'></img>
      </a>
      <a title='Reddit' lang={locale} href={`https://www.reddit.com/submit?url=${body2}`} target='_blank'>
        <img width='40px' height='40px' src='/icons/share/reddit-svgrepo-com.svg'></img>
      </a>
      <a
        title='Facebook'
        lang={locale}
        href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
        target='_blank'>
        <img width='40px' height='40px' className='fill-white' src='/icons/share/facebook-svgrepo-com.svg'></img>
      </a>
      <a title='Twitter' lang={locale} href={compartirTwitter} target='_blank'>
        <img width='40px' height='40px' className='scale-110 fill-white' src='/icons/share/twitter.svg'></img>
      </a>
      <a title='Mail' lang={locale} href={compartirGmail} target='_blank'>
        <img width='40px' height='40px' src='/icons/share/mail-svgrepo-com.svg'></img>
      </a>
    </div>
  );
}
