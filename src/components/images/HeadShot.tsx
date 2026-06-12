import { type SanityImageObject } from '@sanity/image-url';
import { imageRefBuilder } from '@/helperFunctions/imageRefBuilder';
import { TODAY } from '@/helperFunctions/dateHelpers';
import '@/styles/colors-and-type.scss';

function HeadShot({
  name,
  imagePng,
  imagePngInactive,
  isPreview,
  date,
}: {
  name: string;
  imagePng: SanityImageObject;
  imagePngInactive?: SanityImageObject;
  isPreview: boolean;
  date: string;
}) {
  if (!imagePng) return null;

  const isLive = isPreview || (!!date && date <= TODAY);

  return (
    <img
      className=""
      src={imageRefBuilder(isLive ? imagePng : (imagePngInactive ?? imagePng))
        .width(400)
        .height(400)
        .fit('crop')
        .crop('focalpoint')
        .url()}
      alt={name}
    />
  );
}

export default HeadShot;
