import type { Locale } from '../../types';

export default function ArticulosRamdon(file: string, data: any, locale: Locale) {
  const { Title, Description, ImageCover } = data;
  return (
    <a href={`/${locale}/blog/${file.slice(3)}/`} hrefLang={locale}>
      <div className='grid grid-cols-5 gap-2'>
        <div className='col-span-2'>
          {ImageCover !== null && ImageCover.trim() !== '' ? (
            <img
              src={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_165/${ImageCover}`}
              srcset={`https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_55/${ImageCover} 256w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_110/${ImageCover} 512w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_165/${ImageCover} 768w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_220/${ImageCover} 1024w,
             https://res.cloudinary.com/de4wvqywn/image/upload/f_webp/q_auto/c_scale,w_573/${ImageCover} 1280w`}
              width='165'
              height='93'
              alt={`${ImageCover}`}
              decoding='async'
              loading='lazy'
              className=' w-full h-auto aspect-auto  rounded-md'
            />
          ) : (
            <img
              src={`/Banner.png`}
              width='165'
              height='93'
              alt={`sin imagen`}
              decoding='async'
              loading='lazy'
              className=' w-full h-full'
            />
          )}
        </div>
        <div className='col-span-3'>
          <h3 className='subtitulo6-movil lgi:subtitulo5-movil lss:subtitulo4-movil sm:subtitulo6-movil lg:subtitulo6-desktop'>
            {Title}
          </h3>
          <p className='mt-1 minismaller-movil lgi:smaller-movil lss:smallerb-movil sm:minismaller-movil lg:minismaller-desktop'>
            {Description}
          </p>
        </div>
      </div>
    </a>
  );
}
