import { PageProps } from "$fresh/server.ts";
import Layout from "./test/Layout.tsx";

export default function App(props: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rick & Fresh</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Layout {...props} />
      </body>
    </html>
  );
}