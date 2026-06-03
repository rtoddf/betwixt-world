import { type SanityImageSource } from '@sanity/image-url';

export interface HoodType {
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
  themeColor: string;
  active: boolean;
}

export interface ResidentType {
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
  miniBio: string;
  shortBio: string;
  tag: string;
  image: string;
  imageInactive: string;
  active: boolean;
  voiceFile?: {
    _type: 'file';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
}
