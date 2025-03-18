export default function Phonetics(
  props: { phonetics: Array<{ text: string; audio: string }> },
) {
  return (
    <div>
      <h3>Phonetics</h3>
      <ul>
        {props.phonetics.map((phonetic, index) => (
          <li key={index}>
            {phonetic.text && <p>{phonetic.text}</p>}
            {phonetic.audio && (
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
