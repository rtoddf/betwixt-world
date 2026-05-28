export interface HoodType {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  date: string;
  theme: boolean;
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
