import { useState, useEffect } from 'react';
import './styles/colors-and-type.css';
import './styles/card.css';

import Card from './components/Card';

interface Card {
  name: string;
  bio: string;
  tag: string;
  image: string;
}

function App() {
  const [characters, setCharacters] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        console.log('data: ', data);

        setCharacters(data.characters);
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
  }

  return (
    <>
      <section id="center">
        <div className="grid grid-cols-3 gap-4">
          {characters.map(function (character) {
            console.log('character: ', character.name);
            return (
              <Card
                name={character.name}
                tag={character.tag}
                bio={character.bio}
                image={character.image}
              />
            );
          })}
        </div>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
