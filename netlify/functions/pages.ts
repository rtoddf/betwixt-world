import { client } from '../lib/sanity';
import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const slug = event.queryStringParameters?.slug;

  const query = slug
    ? `*[_type == "page" && slug.current == $slug][0]{
        ...,
        slots[]{
          columnCount,
          hide,
          components[]{
            ...
          }
        }
      }`
    : `*[_type == "page"]`;

  try {
    const data = await client.fetch(query, slug ? { slug } : {});
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch page' }),
    };
  }
};

export { handler };
