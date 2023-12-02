type Props = {
  image: any;
  title: any;
  description: any;
  fileName: any;
  fecha: any;
};

export default function Carrusel({ image, title, description, fileName, fecha }: Props) {
  return (
    <a href={`/blog/${fileName}`}>
      <div>
        <div className='rounded-l-xl w-full bg-gradient-to-t from-black absolute z-20 h-64 lg:h-96'></div>
        {image !== null ? (
          <img
            width={1280}
            height={720}
            alt={`image`}
            src={image}
            className='rounded-l-xl w-full object-cover fill-neutral-500 brightness-75 group-hover:brightness-50 transition-all duration-500 ease-in-out z-0 absolute h-64 lg:h-96'
          />
        ) : (
          <img alt='sin imagen' src='/logo3.png' className='rounded-xl ls:max-sm:hidden' />
        )}
      </div>
      <div className=' absolute w-11/12 left-5 bottom-0 z-50 mb-4'>
        <h3 className='z-50 font-medium lg:font-extrabold text-lg lg:text-2xl ls:max-md:text-sm ls:max-md:font-normal'>
          {title}
        </h3>
        <p className='z-50 text-xs lg:text-base my-1 text-blue-500'>{fecha}</p>
        <p className='z-50 lg:text-lg text-xs ls:max-md:hidden'>{description}</p>
      </div>
    </a>
  );
}
