const projectId = 'cizm0hkb';
const dataset = 'production';
const apiVersion = '2025-01-01';

export async function fetchNeighborhoods() {
  const query = encodeURIComponent('*[_type == "neighborhood"]');
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}&useCdn=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching neighborhoods:', error);
    return [];
  }
}
