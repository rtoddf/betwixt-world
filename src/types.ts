import {
  type SanityImageSource,
  type SanityImageObject,
} from '@sanity/image-url';

export interface HoodType {
  _type: 'neighborhood';
  _id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: SanityImageSource;
  date: string;
  themeSong?: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  transcript: string;
  themeColor: string;
  active: boolean;
}

export interface ResidentType {
  _type: 'resident';
  slug: string;
  name: string;
  pronunciation: string;
  hood: {
    slug: string;
    name: string;
  };
  hoodslug: string;
  nationality: string;
  pronouns: string;
  age: string;
  quote: string;
  miniBio: string;
  shortBio: string;
  tag: string;
  image: SanityImageSource;
  stamp: SanityImageSource;
  imagePng: SanityImageObject;
  imageInactive: SanityImageSource;
  imagePngInactive: SanityImageObject;
  date: string;
  transcript: string;
  voiceFile?: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  voiceMusicFile?: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}
