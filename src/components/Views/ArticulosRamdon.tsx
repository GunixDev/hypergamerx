import type { Locale } from '../../types';

export default function ArticulosRamdon(file: string, data: any, locale: Locale) {
  const { Title, Description, Image } = data;
  return (
    <a href={`/${locale}/blog/${file.slice(3)}/`} hreflang={locale}>
      <div class='grid grid-cols-5 gap-2'>
        <div class='col-span-2'>
          {Image !== null ? (
            <img
              src={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_165/${Image}`}
              srcset={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_55/${Image} 256w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_110/${Image} 512w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_165/${Image} 768w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_220/${Image} 1024w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_573/${Image} 1280w`}
              width='165'
              height='93'
              alt={`${Image}`}
              decoding='async'
              loading='lazy'
              class=' w-full h-auto aspect-auto  rounded-md'
            />
          ) : (
            <img
              src={`/Banner.png`}
              width='165'
              height='93'
              alt={`sin imagen`}
              decoding='async'
              loading='lazy'
              class=' w-full h-full'
            />
          )}
        </div>
        <div class='col-span-3'>
          <h3 class='subtitulo6-movil lgi:subtitulo5-movil lss:subtitulo4-movil sm:subtitulo6-movil lg:subtitulo6-desktop'>
            {Title}
          </h3>
          <p class='mt-1 minismaller-movil lgi:smaller-movil lss:smallerb-movil sm:minismaller-movil lg:minismaller-desktop'>
            {Description}
          </p>
        </div>
      </div>
    </a>
  );
}
