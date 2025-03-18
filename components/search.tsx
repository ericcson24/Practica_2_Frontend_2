import { Handlers, PageProps } from "$fresh/server.ts";
import Phonetics from "../components/Phonetics.tsx";
import Meanings from "../components/Meanings.tsx";

interface WordData {
  phonetics: { text: string; audio: string }[];
  meanings: { partOfSpeech: string; definitions: { definition: string }[] }[];
}

interface SearchPageProps {
  data: WordData | null;
  word: string | null;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const word = url.searchParams.get("word");
    let data: WordData | null = null;

    if (word) {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const json = await res.json();
      data = json[0] || null;
    }

    return ctx.render({ data, word });
  },
};

export default function SearchPage(props: PageProps<SearchPageProps>) {
  const { data, word } = props.data || {};

  return (
    <div>
      <h1>Buscar Palabra</h1>
      <form method="GET">
        <input type="text" name="word" defaultValue={word || ""} />
        <button type="submit">Buscar</button>
      </form>
      {data && (
        <>
          <Phonetics phonetics={data.phonetics} />
          <Meanings meanings={data.meanings} />
        </>
      )}
    </div>
  );
}