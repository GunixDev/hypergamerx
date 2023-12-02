type Props = {
  image: any;
  title: any;
  fileName: any;
  fecha: any;
};

export default function ListData({ image, title, fileName, fecha }: Props) {
  return (
    <a href={`/blog/${fileName}`}>
      <div className='grid lg:grid-flow-col-dense lg:grid-cols-5'>
        <div className=' lg:col-span-2'>
          {image !== null ? (
            <img
              width={100}
              height={120}
              alt={`image`}
              src={image}
              className='rounded-xl w-full h-[112px] object-cover fill-neutral-500 brightness-75  group-hover:brightness-50 transition-all duration-500 ease-in-out ls:max-lg:hidden '
            />
          ) : (
            <img alt='sin imagen' src='/logo3.png' className='rounded-xl ls:max-sm:hidden' />
          )}
        </div>
        <div>
          <div className='lg:absolute'>
            <h3 className='z-50 font-normal md:font-bold md:ml-2 text-xs md:text-base'>{title}</h3>
            <p className='z-50 font-bold ml-2 text-xs text-blue-600 ls:max-md:hidden'>{fecha}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
