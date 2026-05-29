import { client } from '../lib/sanity';
import { Handler } from '@netlify/functions';

const handler: Handler = async () => {
  console.log('Dataset: pr');
  console.log('Query: *[_type == "resident"]');
  try {
    const residents = await client.fetch('*[_type == "resident"]');
    console.log('Result count:', residents.length);
    console.log('Result:', residents);
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
