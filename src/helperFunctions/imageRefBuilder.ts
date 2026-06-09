import { type SanityImageObject } from '@sanity/image-url';
import { builder } from '@/lib/api';

export function imageRefBuilder(image: SanityImageObject) {
  const ref = image.asset._ref;
  const refSplit = ref.split('-');

  const ext = refSplit[3];
  const dimensions = refSplit[2].split('x');
  const width = parseInt(dimensions[0]);
  const height = parseInt(dimensions[1]);

  let urlBuilder = builder.image(image);

  if (ext === 'svg') {
    urlBuilder = urlBuilder.format('png');
  }

  if (image.hotspot) {
    urlBuilder = urlBuilder.focalPoint(image.hotspot.x, image.hotspot.y);
  }

  if (image.crop && ext !== 'svg') {
    urlBuilder = urlBuilder.rect(
      Math.round(width * image.crop.left),
      Math.round(height * image.crop.top),
      Math.round(width * (1 - image.crop.left - image.crop.right)),
      Math.round(height * (1 - image.crop.top - image.crop.bottom)),
    );
  }

  return urlBuilder;
}
