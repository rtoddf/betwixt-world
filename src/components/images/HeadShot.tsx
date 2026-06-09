import type { ResidentType } from '../../types';
import { imageRefBuilder } from '@/helperFunctions/imageRefBuilder';
import { TODAY } from '@/helperFunctions/dateHelpers';
import '@/styles/colors-and-type.scss';

function HeadShot({
  res,
  isPreview,
}: {
  res: ResidentType;
  isPreview: boolean;
}) {
  if (!res.imagePng) return null;

  const isLive = isPreview || (!!res.date && res.date <= TODAY);

  return (
    <img
      className=""
      src={imageRefBuilder(isLive ? res.imagePng : res.imagePngInactive)
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
