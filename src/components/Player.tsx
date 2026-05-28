import type { HoodType } from '../types';
import '../styles/colors-and-type.scss';

function Player({ hood }: { hood: HoodType }) {
  return (
    <div>
      <audio src={`/assets/music/${hood.slug}.mp3`} controls />
    </div>
  );
}

export default Player;
