// Feature.js
import { BsFillLightningChargeFill, BsFillGrid1X2Fill, BsFillHeartFill, BsChatDotsFill } from "react-icons/bs";

const icons = {
  corazon: <BsFillHeartFill />,
  rapidez: <BsFillLightningChargeFill />,
  diseño: <BsFillGrid1X2Fill />,
  chat: <BsChatDotsFill />,
};

export default function Feature({ titulo, descripcion, icono }) {
  const iconComponent = icons[icono] || null;

  return (
    <div className='group text-slate-400 duration-500 hover:text-slate-50 ls:ml-2'>
      <h2 className='sm:mt-10 ls:mt-4 md:mt-14 md:text-xl ls:text-ls sm:text-lg'>
        <span className='inline-block align-middle ls:mr-1 sm:mr-1 md:mr-2'>{iconComponent}</span>
        {titulo}
      </h2>
      <h3 className='md:text-lg ls:text-lss sm:text-sm text-slate-500 sm:my-3 md:my-5 duration-700 group-hover:text-slate-400'>
        {descripcion}
      </h3>
    </div>
  );
}
