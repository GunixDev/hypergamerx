import Image from "next/image";
import { Inter } from "next/font/google";
import { Entrada } from "@/components/Entrada";
import { Layout } from "@/components/Layout";

export async function getStaticProps() {
  const resupuesta = await fetch(`${process.env.API_URl}/api/blogs?populate=*`);
  const entradas = await resupuesta.json();

  return {
    props: { entradas },
  };
}

export default function Home({ entradas }) {
  return (
    <Layout pagina='inicio'>
      <div>
        {entradas.data.map((entrada) => (
          <Entrada key={entrada.id} entrada={entrada} />
        ))}
      </div>
    </Layout>
  );
}
