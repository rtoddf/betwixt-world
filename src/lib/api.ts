import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { createClient } from '@sanity/client';

const projectId = 'cizm0hkb';
const dataset = 'pr';

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: '2025-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source).url();

export const fileUrl = (source: any) => {
  const { asset } = source;
  if (!asset) return '';
  const ref = asset._ref;
  const [, id, ext] = ref.split('-'); // Remove extra comma
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${ext}`;
};

export async function fetchNeighborhoods() {
  try {
    const response = await fetch('/.netlify/functions/neighborhoods');
    const neighborhoods = await response.json();
    return neighborhoods;
  } catch (error) {
    console.error('Error fetching neighborhoods:', error);
    return [];
  }
}

export async function fetchResidents() {
  try {
    const response = await fetch('/.netlify/functions/residents');
    const residents = await response.json();
    return residents;
  } catch (error) {
    console.error('Error fetching residents:', error);
    return [];
  }
}
