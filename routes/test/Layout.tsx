import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
  const Component = props.Component;

  console.log(Component)
  return (
    <div>
      <header>
        <h1>Diccionario</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="./test/page1">Ir al formulario de búsqueda</a>
        </nav>
      </header>
      <main>
        {/* Renderizar el componente principal */}
        <Component />
      </main>
    </div>
  );
};

export default Layout;
