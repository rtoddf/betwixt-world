import '../../styles/styles.scss';

function Stamp({ lineOne, lineTwo }: { lineOne: string; lineTwo: string }) {
  return (
    <div
      className="bw-featured-stamp absolute w-[96px] h-[96px] top-[var(--s-4)] right-[var(--s-4)] text-burnt"
      aria-hidden="true"
    >
      <span className="bw-featured-stamp-top">{lineOne}</span>
      <span className="bw-featured-stamp-mid">{lineTwo}</span>
      {/* <span className="bw-featured-stamp-bot">No. 01</span> */}
    </div>
  );
}

export default Stamp;
