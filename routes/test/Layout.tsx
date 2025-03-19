import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
  const Component = props.Component;

  return (
    <div>
      <header>
        <h1>Diccionario</h1>
        <nav className="button-container">
          <a href="/" className="button">Inicio</a>
          <a href="../test/page1" className="button">Ir al formulario de búsqueda</a>
        </nav>
      </header>
      <main>
        <Component />
      </main>
    </div>
  );
};

export default Layout;
