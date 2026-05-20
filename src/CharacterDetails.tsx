import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/colors-and-type.css';
import './styles/card.css';

interface Character {
  slug: string;
  name: string;
  miniBio: string;
  tag: string;
  image: string;
}

function CharacterDetails() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        console.log('data: ', data);

        const thisCharacter = data.characters.find(
          (char: Character) => char.slug === slug,
        );

        setCharacter(thisCharacter);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log('character: ', character);
  }

  if (!character) return null;
  return <h1>character details for {character.name}</h1>;
}

export default CharacterDetails;
