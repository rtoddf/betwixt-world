import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'cizm0hkb',
  dataset: 'pr',
  apiVersion: '2025-01-01',
  useCdn: true,
});
