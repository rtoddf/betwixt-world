import { client } from '../lib/sanity';
import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const slug = event.queryStringParameters?.slug;
  const query = slug
    ? `*[_type == "resident" && hood->slug == "${slug}"]`
    : `*[_type == "resident"]`;

  try {
    const residents = await client.fetch(query);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(residents),
    };
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch residents' }),
    };
  }
};

export { handler };
