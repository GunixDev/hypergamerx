import { useState } from 'preact/hooks';

interface IframeProps {
  id: string;
}

export default function MobileNav({ id }: IframeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&amp;rel=0`}
          loading='lazy'
          className='md:h-96 h-64 w-full md:w-10/12 mx-auto my-4 md:my-6'
          width='445'
          height='200'
          title={id}
          allowFullScreen={true}
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
      ) : (
        <div className='group relative'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
            <img
              onClick={() => setIsOpen(true)}
              src='/icons/youtube.svg'
              width='20'
              height='16'
              alt='youtube'
              decoding='async'
              loading='lazy'
              className='md:h-24 md:w-8/12 w-7/12 h-14 mx-auto brightness-100 group-hover:brightness-150 duration-300'
            />
          </div>
          <img
            onClick={() => setIsOpen(true)}
            src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
            srcset={`https://i3.ytimg.com/vi/${id}/mqdefault.jpg 256w,
            https://i3.ytimg.com/vi/${id}/maxresdefault.jpg 1280w`}
            width='479'
            height='270'
            alt={`${id}`}
            decoding='async'
            loading='lazy'
            className=' w-full mx-auto my-4 md:my-6 brightness-50 group-hover:brightness-75 duration-300 '
          />
        </div>
      )}
    </>
  );
}
