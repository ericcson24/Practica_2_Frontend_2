import { Handlers, PageProps } from "$fresh/server.ts";
import Phonetics from "../../components/Phonetics.tsx";
import Meanings from "../../components/Meanings.tsx";

interface SearchResult {
  word: string;
  phonetics: Array<{ text: string; audio: string }>;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{ definition: string; example?: string }>;
  }>;
}

type WordDetailsData = SearchResult | { error: string };

const getWordDetails = async (word: string): Promise<WordDetailsData> => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    if (!response.ok) {
      return { error: "Palabra no encontrada" };
    }
    const result = await response.json();
    return result[0];
  } catch {
    return { error: "Error al buscar la palabra" };
  }
};

export const handler: Handlers = {
    async GET(req, ctx) {
      const url = new URL(req.url);
      const word = url.searchParams.get("word");
  
      if (!word) {
        return ctx.render(null);
      }
  
      const data = await getWordDetails(word);
      return ctx.render(data);
    },
  };

const WordDetailsPage = ({ data }: PageProps<WordDetailsData>) => {
  // Check if the current route is the index page
  if (typeof window !== "undefined" && window.location.pathname === "/") {
    return null; // Do not render anything if on the index page
  }

  return (
    <div>
      <h1>Buscar Palabra</h1>
      <form method="GET" action="/test/page1">
        <input
            type="text"
            name="word"
            placeholder="Escribe una palabra en inglés"
        />
        <button type="submit">Buscar</button>
        </form>
      {data && "error" in data && <p style={{ color: "red" }}>{data.error}</p>}
      {data && !("error" in data) && (
        <div>
          <h2>Detalles para: {data.word}</h2>
          <Phonetics phonetics={data.phonetics} />
          <Meanings meanings={data.meanings} />
        </div>
      )}
    </div>
  );
};

export default WordDetailsPage;
