import { ComponentChildren } from "preact";


export default function Layout({ children }: { children: ComponentChildren }) {

  return (
    <div>
      <header>
        <h1>Diccionario</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
