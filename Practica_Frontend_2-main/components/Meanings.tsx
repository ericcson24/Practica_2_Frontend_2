export default function Meanings({ meanings }: { meanings: any[] }) {
  return (
    <div className="meaning-box">
      <h2 className="texto-lg fuente-negrita">Meanings</h2>
      <ul className="meaning-list">
        {meanings.map((m, index) => (
          <li key={index} className="meaning-item">
            <strong>{m.partOfSpeech}</strong>
            <p>{m.definitions[0].definition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
