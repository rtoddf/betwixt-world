import { Link } from 'react-router';
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

  const inner = (
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

  return isLive ? (
    <Link
      to={`/${res.hood.slug}/${res.slug}`}
      className="nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg] hover:animate-wiggle-card"
    >
      {inner}
    </Link>
  ) : (
    <div className="nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]">
      {inner}
    </div>
  );
}

export default HeadShot;
