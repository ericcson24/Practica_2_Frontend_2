export default function Meanings(props: {
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{ definition: string; example?: string }>;
  }>;
}) {
  return (
    <div className="meanings-container">
      <h3>Meanings</h3>
      {props.meanings.map((meaning, index) => (
        <div key={index} className="meaning-item">
          <h4>{meaning.partOfSpeech}</h4>
          <ul>
            {meaning.definitions.map((definition, defIndex) => (
              <li key={defIndex} className="definition-item">
                <p>{definition.definition}</p>
                {definition.example && (
                  <p>
                    <i>Ejemplo: {definition.example}</i>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
