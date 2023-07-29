import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useTranslation } from "next-i18next";

export const Estrellas = ({ cantidad }) => {
  const { t } = useTranslation("common");
  return (
    <div className='mx-auto ml-3'>
      <span className='inline-block align-middle  mr-2 text-slate-300'>{t("blogs.Estrellas")}: </span>
      {cantidad >= 4.5 ? (
        <>
          <BsStarFill className='inline-block align-middle text-slate-400' />
          <BsStarFill className='inline-block align-middle text-slate-400' />
          <BsStarFill className='inline-block align-middle text-slate-400' />
          <BsStarFill className='inline-block align-middle text-slate-400' />
          {cantidad >= 5 ? (
            <BsStarFill className='inline-block align-middle text-slate-400' />
          ) : (
            <BsStarHalf className='inline-block align-middle text-slate-400' />
          )}
        </>
      ) : cantidad >= 3.5 ? (
        <>
          <BsStarFill className='inline-block align-middle text-slate-400' />
          <BsStarFill className='inline-block align-middle text-slate-400' />
          <BsStarFill className='inline-block align-middle text-slate-400' />
          {cantidad >= 4 ? (
            <BsStarFill className='inline-block align-middle text-slate-400' />
          ) : (
            <BsStarHalf className='inline-block align-middle text-slate-400' />
          )}
          <BsStar className='inline-block align-middle text-slate-400' />
        </>
      ) : cantidad >= 2.5 ? (
        <>
          <BsStarFill className='inline-block align-middle text-slate-400' />
          <BsStarFill className='inline-block align-middle text-slate-400' />
          {cantidad >= 3 ? (
            <BsStarFill className='inline-block align-middle text-slate-400' />
          ) : (
            <BsStarHalf className='inline-block align-middle text-slate-400' />
          )}
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
        </>
      ) : cantidad >= 1.5 ? (
        <>
          <BsStarFill className='inline-block align-middle text-slate-400' />
          {cantidad >= 2 ? (
            <BsStarFill className='inline-block align-middle text-slate-400' />
          ) : (
            <BsStarHalf className='inline-block align-middle text-slate-400' />
          )}
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
        </>
      ) : cantidad >= 0.5 ? (
        <>
          {cantidad >= 1 ? (
            <BsStarFill className='inline-block align-middle text-slate-400' />
          ) : (
            <BsStarHalf className='inline-block align-middle text-slate-400' />
          )}
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
        </>
      ) : (
        <>
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
          <BsStar className='inline-block align-middle text-slate-400' />
        </>
      )}
      <span className='ml-2 align-middle text-slate-400'>{cantidad}</span>
    </div>
  );
};

export default Estrellas;
