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
