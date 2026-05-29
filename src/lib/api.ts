import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'cizm0hkb',
  dataset: 'pr',
  apiVersion: '2025-01-01',
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source).url();

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
