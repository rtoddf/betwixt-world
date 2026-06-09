import type { ResidentType } from '../../types';
import { imageRefBuilder } from '@/helperFunctions/imageRefBuilder';
import '@/styles/colors-and-type.scss';

function HeadShot({ res }: { res: ResidentType }) {
  if (!res.imagePng) return null;

  return (
    <img
      className=""
      src={imageRefBuilder(res.imagePng)
        .width(400)
        .height(400)
        .fit('crop')
        .crop('focalpoint')
        .url()}
      alt={res.name}
    />
  );
}

export default HeadShot;
