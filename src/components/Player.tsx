import mySound from '/assets/music/intangimere.mp3'; // Import local file
import '../styles/colors-and-type.scss';

function Player() {
  return (
    <div>
      <audio src={mySound} controls />
    </div>
  );
}

export default Player;
