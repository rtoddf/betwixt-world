function Transcript({ text }: { text: string }) {
  return (
    <div className="bt-cc vertical-container" aria-label={`Transcript`}>
      <div
        className="vertical-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

export default Transcript;
