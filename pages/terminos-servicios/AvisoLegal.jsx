import { Layout } from "@/components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AvisoLegal() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <div className='w-4/5 mx-auto mt-10'>
        <h1 className='text-4xl text-center'>Aviso legal</h1>
        <article>
          Este Aviso Legal establece los términos y condiciones de uso de la página web HyperGamerX, que se dedica a la
          venta y promoción de artículos relacionados con videojuegos. Al acceder y utilizar el Sitio, aceptas cumplir y
          estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con ellos, te rogamos que no
          utilices este sitio web.
        </article>
        <article>
          <h1>Propiedad intelectual:</h1>
          <p>
            Todos los contenidos y materiales presentes en el Sitio, incluyendo pero no limitándose a logotipos, marcas
            registradas, textos, imágenes, gráficos, diseños, software, códigos y cualquier otro elemento, son propiedad
            de HyperGamerX o de sus respectivos propietarios y están protegidos por las leyes de propiedad intelectual
            vigentes. Queda estrictamente prohibida su reproducción, distribución, modificación o uso no autorizado, a
            menos que se cuente con el permiso expreso por escrito de HyperGamerX.
          </p>
        </article>

        <article>
          <h1>Uso del Sitio:</h1>
          <p>
            El uso del Sitio se realiza bajo tu propio riesgo. HyperGamerX no se responsabiliza por cualquier daño o
            perjuicio que pueda resultar de la utilización de este Sitio. Aunque nos esforzamos por mantener la
            información actualizada y precisa, no ofrecemos garantías sobre la exactitud, integridad o confiabilidad de
            los contenidos del Sitio.
          </p>
        </article>

        <article>
          <h1>Enlaces a terceros:</h1>
          <p>
            El Sitio puede contener enlaces a otros sitios web que son propiedad o están operados por terceros. Estos
            enlaces son proporcionados únicamente para tu conveniencia. HyperGamerX no controla ni avala el contenido de
            esos sitios web, y no asume ninguna responsabilidad por ellos. Te recomendamos revisar los términos y
            condiciones y las políticas de privacidad de cualquier sitio web de terceros que visites.
          </p>
        </article>

        <article>
          <h1>Comentarios y contenido del usuario:</h1>
          <p>
            Los usuarios del Sitio pueden tener la posibilidad de dejar comentarios o aportar contenido. Al hacerlo,
            aceptas que eres el único responsable de tu contenido y que no violas los derechos de terceros ni las leyes
            aplicables. HyperGamerX se reserva el derecho de eliminar cualquier contenido que considere inapropiado o
            que viole estos términos y condiciones.
          </p>
        </article>

        <article>
          <h1>Limitación de responsabilidad:</h1>
          <p>
            En la máxima medida permitida por la ley aplicable, HyperGamerX no será responsable de ningún daño directo,
            indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de uso del Sitio,
            incluyendo, entre otros, pérdidas de beneficios, interrupción del negocio, pérdida de información o
            cualquier otro tipo de pérdida económica.
          </p>
        </article>

        <article>
          <h1>Modificaciones:</h1>
          <p>
            HyperGamerX se reserva el derecho de realizar cambios o modificaciones en estos términos y condiciones en
            cualquier momento y sin previo aviso. Se recomienda revisar periódicamente esta página para estar al tanto
            de cualquier actualización.
          </p>
        </article>

        <article>
          <h1>Legislación aplicable:</h1>
          <p>
            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del lugar donde se
            encuentra establecido HyperGamerX.
          </p>
        </article>
        <article>
          <p>proporcionados en el Sitio. Última actualización: [Fecha de la última actualización]</p>
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
