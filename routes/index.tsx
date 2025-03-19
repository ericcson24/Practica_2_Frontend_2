import { PageProps } from "$fresh/server.ts";

export default function Home(_props: PageProps) {
  return (
    <div>
      <h1>Diccionario Inglés</h1>
      <p>
        Bienvenido a la práctica de frontend con Fresh. Usa el formulario para
        buscar palabras en el diccionario.
      </p>
      <a href="./test/page1" className="button">Ir al formulario de búsqueda</a>
    </div>
  );
}
