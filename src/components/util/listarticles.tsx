type Props = {
  image: any;
  title: any;
  fileName: any;
  fecha: any;
};

export default function ListArticles({ image, title, fileName, fecha }: Props) {
  return (
    <a href={`/blog/${fileName}`}>
      <div className='grid grid-flow-row-dense'>
        <div>
          {image !== null ? (
            <img
              alt={`image`}
              src={image}
              width={100}
              height={120}
              className='rounded-t-xl w-full h-16 md:h-36 object-cover group-hover:brightness-50 duration-500'
            />
          ) : (
            <img
              alt={`image`}
              src={'/logo3.png'}
              sizes='sizes="(min-width: 1em), 1vw,(max-width: 208px), 3vw,(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 3vw'
              className='rounded-xl duration-500 object-cover group-hover:brightness-50  h-16 md:h-36'
            />
          )}
        </div>
        <div>
          <p className='text-xs text-blue-600 lg:my-1'>{fecha}</p>
          <h3 className='text-xs md:text-sm text-slate-400 group-hover:text-slate-100 duration-500'>{title}</h3>
        </div>
      </div>
    </a>
  );
}
