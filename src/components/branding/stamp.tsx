import '../../styles/styles.scss';
// import '../../styles/voice-player.css';

function Stamp({
  lineOne,
  lineTwo,
  usage,
}: {
  lineOne: string;
  lineTwo: string;
  usage: string;
}) {
  return (
    <div
      className={`bw-featured-stamp ${usage === 'player' && 'vp-stamp'}`}
      aria-hidden="true"
    >
      <span className="bw-featured-stamp-top">{lineOne}</span>
      <span className="bw-featured-stamp-mid">{lineTwo}</span>
      {/* <span className="bw-featured-stamp-bot">No. 01</span> */}
    </div>
  );
}

export default Stamp;
