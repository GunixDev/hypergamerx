import Link from "next/link";
export default function ErrorPage() {
  return (
    <>
      <div class=' w-auto h-screen flex flex-col items-center justify-center'>
        <div className=' my-4'>
          <p className=' font-bold text-2xl'>Error 404</p>
        </div>
        <div className='text-center'>
          <h6>Error al encontrar la pagina</h6>
          <h5>Verifica que el link este bien puesto</h5>
          <Link href={"/"} className=' text-red-600 text-lg font-bold'>
            Regresar
          </Link>
        </div>
      </div>
    </>
  );
}
