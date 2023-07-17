import { Layout } from "@/components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PoliticaCookies() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <div className='w-4/5 mx-auto mt-10'>
        <h1 className='text-6xl text-center font-bold my-6'>Politica de Cookies</h1>
        <article className='text-lg'>
          Esta Política de Cookies describe cómo HyperGamerX (nosotros, nuestro o sitio web) utiliza cookies y otras
          tecnologías similares para recopilar y almacenar información cuando visitas nuestro sitio web, HyperGamerX.
          Nuestro sitio web es creado por Sunrize Studios y se dedica a proporcionar artículos de videojuegos. Esta
          política también explica cómo puedes controlar el uso de cookies y las opciones que tienes en relación con
          ellas.
        </article>

        <article>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>¿Qué son las cookies?</h2>
          <p className='my-2'>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
            Estas cookies contienen información que se utiliza para mejorar la funcionalidad del sitio web, proporcionar
            análisis y permitir una experiencia personalizada para los usuarios. Las cookies también pueden ser
            utilizadas por terceros para mostrar anuncios relevantes a los usuarios.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Tipos de cookies utilizadas</h2>
          <p className='my-2'>
            2.1. Cookies necesarias: Estas cookies son esenciales para el funcionamiento básico de nuestro sitio web.
            Nos permiten autenticar usuarios, prevenir fraudes y garantizar la seguridad del sitio. 2.
          </p>
          2. Cookies de rendimiento y análisis: Utilizamos cookies de rendimiento y análisis, como Vercel Analytics y
          Google Analytics, para recopilar información sobre cómo los usuarios interactúan con nuestro sitio web. Estas
          cookies nos proporcionan datos como el país de origen, la cantidad de clics, la duración de la visita, la
          referencia de origen (por ejemplo, Twitter), el sistema operativo utilizado y el navegador utilizado. Esta
          información nos ayuda a mejorar nuestro sitio web, comprender las preferencias de nuestros usuarios y
          optimizar la experiencia del usuario.
          <p className='my-2'></p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Consentimiento para el uso de cookies:</h2>
          <p className='my-2'>
            Al visitar nuestro sitio web, te mostraremos un aviso de cookies que te solicitará tu consentimiento para el
            uso de cookies no necesarias. Al dar tu consentimiento, nos autorizas a utilizar cookies de acuerdo con los
            términos de esta política.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Control de cookies</h2>
          <p className='my-2'>
            Puedes controlar y administrar las cookies en tu navegador. La mayoría de los navegadores te permiten
            rechazar o aceptar cookies, así como eliminar las cookies existentes en tu dispositivo. Ten en cuenta que si
            optas por deshabilitar o eliminar ciertas cookies, es posible que algunas partes de nuestro sitio web no
            funcionen correctamente o que tu experiencia como usuario se vea afectada.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Cookies de terceros</h2>
          <p className='my-2'>
            Es posible que nuestro sitio web contenga cookies de terceros, como anunciantes, redes de publicidad y
            proveedores de servicios de análisis. No tenemos control sobre estas cookies y recomendamos que consultes
            las políticas de privacidad de estos terceros para obtener más información sobre sus prácticas de cookies.
          </p>
        </article>

        <article>
          <h2 className='text-2xl font-semibold mt-6 mb-2'>Cambios en nuestra política de cookies</h2>
          <p className='my-2'>
            Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento. Cualquier cambio será
            efectivo inmediatamente después de la publicación de la política actualizada en nuestro sitio web. Te
            recomendamos que revises periódicamente esta página para estar informado sobre cualquier cambio.
          </p>
        </article>
        <article>
          <p className='my-10 font-semibold'>Última actualización: 17/07/2023</p>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
