
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";

export default function Home(props: PageProps) {
  return (
    <Layout>
      <h1>Diccionario Inglés</h1>
      <a href="/search">Buscar una palabra</a>
    </Layout>
  );
}
