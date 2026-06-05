import { client } from '../lib/sanity';
import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  try {
    const isPreview = event.queryStringParameters?.preview === 'true';
    const today = new Date().toISOString().split('T')[0];

    const query = isPreview
      ? `*[_type == "neighborhood"]`
      : `*[_type == "neighborhood" && count(*[_type == "resident" && references(^._id) && date <= $today]) > 0]`;

    const neighborhoods = await client.fetch(query, isPreview ? {} : { today });

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
