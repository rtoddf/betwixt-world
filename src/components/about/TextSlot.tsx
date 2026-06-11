function TextSlot({ headline, text }: { headline: string; text: string }) {
  return (
    <div className="bw-about-lede">
      <h3>{headline}</h3>
      <div className="" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}

export default TextSlot;
