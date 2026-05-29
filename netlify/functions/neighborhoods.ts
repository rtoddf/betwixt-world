import { Handler } from '@netlify/functions';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'cizm0hkb',
  dataset: 'pr',
  apiVersion: '2025-01-01',
  useCdn: true,
});

const handler: Handler = async () => {
  console.log('Dataset: pr');
  console.log('Query: *[_type == "neighborhood"]');
  try {
    const neighborhoods = await client.fetch('*[_type == "neighborhood"]');
    console.log('Result count:', neighborhoods.length);
    console.log('Result:', neighborhoods);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(neighborhoods),
    };
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch neighborhoods' }),
    };
  }
};

export { handler };
