export default function Phonetics(
  props: { phonetics: Array<{ text?: string; audio?: string }> },
) {
  return (
    <div className="phonetics-container">
      <h3>Phonetics</h3>
      <ul>
        {props.phonetics.map((phonetic, index) => (
          <li key={index} className="phonetic-item">
            {phonetic.text && <p className="phonetic-text">{phonetic.text}</p>}
            {phonetic.audio ? (
              <audio controls className="phonetic-audio">
                <source src={phonetic.audio} type="audio/mpeg" />
               
              </audio>
            ) : (
              <p className="no-audio">No audio available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
