import type { HoodType } from '../types';
import { fileUrl } from '../lib/api';
import '../styles/colors-and-type.scss';

function Player({ hood }: { hood: HoodType }) {
  return (
    <div>
      {hood.themeSong ? <audio src={fileUrl(hood.themeSong)} controls /> : null}
    </div>
  );
}

export default Player;
