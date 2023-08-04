import {
  SiPlaystation,
  SiPlaystation2,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiPlaystationvita,
  SiWindows,
  SiWindows11,
  SiWindows95,
  SiWindowsxp,
  SiMacos,
  SiLinux,
  SiXbox,
  SiNintendo3Ds,
  SiNintendogamecube,
  SiNintendoswitch,
  SiWiiu,
  SiAndroid,
  SiIos,
  SiAmazonfiretv,
  SiOculus,
} from "react-icons/si";

export function PlataformasUI(plataformas) {
  return (
    <div className='ml-3'>
      <span className='align-middle text-slate-300'>Plataformas: </span>
      <div className='inline-block'>
        {plataformas.Windows ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiWindows className='inline-block align-middle' /> Windows
          </span>
        ) : null}{" "}
        {plataformas.MacOs ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiMacos className='inline-block align-middle' /> MacOS
          </span>
        ) : null}
        {plataformas.Linux ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiLinux className='inline-block align-middle' /> Linux
          </span>
        ) : null}
        {plataformas.Android ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiAndroid className='inline-block align-middle' /> Android
          </span>
        ) : null}
        {plataformas.IOS ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiIos className='inline-block align-middle' /> IPhone
          </span>
        ) : null}
        {plataformas.PlayStationVita ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiPlaystationvita className='inline-block align-middle' /> PlayStationVita
          </span>
        ) : null}
        {plataformas.Playstation3 ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiPlaystation3 className='inline-block align-middle' /> PlayStation3
          </span>
        ) : null}
        {plataformas.PlayStation4 ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiPlaystation4 className='inline-block align-middle' /> PlayStation4
          </span>
        ) : null}
        {plataformas.Playstation5 ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiPlaystation5 className='inline-block align-middle' /> PlayStation5
          </span>
        ) : null}
        {plataformas.xbox360 ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiXbox className='inline-block align-middle' /> Xbox360
          </span>
        ) : null}
        {plataformas.xboxone ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiXbox className='inline-block align-middle' /> XboxOne
          </span>
        ) : null}
        {plataformas.WiiU ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiWiiu className='inline-block align-middle' /> Wii U
          </span>
        ) : null}
        {plataformas.Nintendo3DS ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiNintendo3Ds className='inline-block align-middle' /> Nintendo 3DS
          </span>
        ) : null}
        {plataformas.AmazonFire ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiAmazonfiretv className='inline-block align-middle' /> AmazonFire
          </span>
        ) : null}
        {plataformas.Oculus ? (
          <span className='inline-block align-middle mx-2 text-slate-400'>
            <SiOculus className='inline-block align-middle' /> Oculus
          </span>
        ) : null}
      </div>
    </div>
  );
}
