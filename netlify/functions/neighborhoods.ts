import { client } from '../lib/sanity';
import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  try {
    const neighborhoods = await client.fetch('*[_type == "neighborhood"]');
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
