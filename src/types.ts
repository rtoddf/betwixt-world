import { type SanityImageSource } from '@sanity/image-url';

export interface HoodType {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: SanityImageSource;
  date: string;
  themeSong: boolean;
  themeColor: string;
  active: boolean;
}

export interface ResidentType {
  slug: string;
  name: string;
  pronunciation: string;
  hood: string;
  hoodslug: string;
  nationality: string;
  pronouns: string;
  age: string;
  miniBio: string;
  shortBio: string;
  tag: string;
  image: string;
  active: boolean;
}
