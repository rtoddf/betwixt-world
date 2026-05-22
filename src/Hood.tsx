import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/card.scss';

import Card from './components/Card';

interface Card {
  slug: string;
  name: string;
  miniBio: string;
  tag: string;
  image: string;
  hoodslug: string;
}

function Hood() {
  const [characters, setCharacters] = useState<Card[]>([]);
  const [hoodCharacters, setHoodCharacters] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        const names = data.characters.filter(
          (char: Card) => char.hoodslug === slug,
        );

        setHoodCharacters(
          names.sort((a: Card, b: Card) => a.name.localeCompare(b.name)),
        );
        setCharacters(
          data.characters.sort((a: Card, b: Card) =>
            a.name.localeCompare(b.name),
          ),
        );
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
    console.log('characters: ', characters);
    console.log('hoodCharacters: ', hoodCharacters);
  }

  return (
    <>
      <section id="center">
        <h1>hood characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hoodCharacters.map(function (character) {
            return (
              <Card
                key={character.slug}
                slug={character.slug}
                name={character.name}
                tag={character.tag}
                miniBio={character.miniBio}
                image={character.image}
              />
            );
          })}
        </div>
      </section>
      {/* <section id="center">
        <h1>all active characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map(function (character) {
            return (
              <Card
                key={character.slug}
                slug={character.slug}
                name={character.name}
                tag={character.tag}
                miniBio={character.miniBio}
                image={character.image}
              />
            );
          })}
        </div>
      </section> */}
    </>
  );
}

export default Hood;
