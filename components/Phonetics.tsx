export default function Phonetics({ phonetics }: { phonetics: { text: string; audio?: string }[] }) {
  return (
    <div className="phonetics-box">
      <h3 className="texto-lg fuente-negrita">Phonetics</h3>
      <div className="espaciado-y-4">
        {phonetics.map((phonetic) => (
          <PhoneticItem key={phonetic.text} phonetic={phonetic} />
        ))}
      </div>
    </div>
  );
}

function PhoneticItem({ phonetic }: { phonetic: { text: string; audio?: string } }) {
  const getAudioUrl = (audio?: string) => (audio?.startsWith("http") ? audio : `https:${audio}`);

  return (
    <div className="borde-abajo pb-2">
      <p className="texto-gris-700">{phonetic.text}</p>
      {phonetic.audio ? (
        <audio controls className="margen-superior-2">
          <source src={getAudioUrl(phonetic.audio)} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      ) : (
        <p className="texto-gris-500 texto-pequeño">No audio disponible</p>
      )}
    </div>
  );
}
