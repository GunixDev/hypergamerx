import {useState} from "preact/hooks";

interface Props {
  id: string;
}

export default function YtVideo({id}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1&amp;rel=0`} loading='lazy' className='w-full mx-auto my-2 sm:my-4 duration-300 rounded sm:rounded-lg aspect-video' title={id} allowFullScreen={true} allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'/>
      ) : (
        <div className='group relative w-full' onClick={() => setIsOpen(true)}>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
            <img src='/logos/youtube_videoicon.svg' width='20' height='16' alt='youtube' decoding='async' loading='lazy' className='md:h-24 md:w-8/12 w-5/12 h-10 mx-auto brightness-100 group-hover:brightness-150 duration-300'/>
          </div>
          <img
            src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
            srcSet={`https://i.ytimg.com/vi/${id}/default.jpg 256w,
            https://i3.ytimg.com/vi/${id}/mqdefault.jpg 768w,
            https://i3.ytimg.com/vi/${id}/maxresdefault.jpg 1280w`}
            alt={`${id}`} decoding='async' loading='lazy' className=' w-full mx-auto my-2 sm:my-4 brightness-50 group-hover:brightness-75 duration-300 rounded sm:rounded-lg'
          />
        </div>
      )}
    </>
  );
}
