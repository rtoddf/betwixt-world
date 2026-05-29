import type { HoodType } from '../types';
import { fileUrl } from '../lib/api';
import '../styles/colors-and-type.scss';

function Player({ hood }: { hood: HoodType }) {
  console.log('hood: ', hood.themeSong);
  return (
    <div>
      {/* <audio src={`/assets/music/${hood.slug}.mp3`} controls /> */}
      <audio src={fileUrl(hood.themeSong)} controls />
    </div>
  );
}

export default Player;
