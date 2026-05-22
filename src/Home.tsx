import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/card.scss';

interface Card {
  slug: string;
  name: string;
  miniBio: string;
  tag: string;
  image: string;
  hood: string[];
  hoodslug: string;
}

function Home() {
  const [characters, setCharacters] = useState<Card[]>([]);
  const [hoods, setHoods] = useState<{ name: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        console.log('data: ', data);

        setCharacters(data.characters);
        const allHoods: { name: string; slug: string }[] = data.characters.map(
          (character: Card) => ({
            name: character.hood,
            slug: character.hoodslug,
          }),
        );
        const unique: { name: string; slug: string }[] = allHoods.filter(
          (hood, index, self) =>
            self.findIndex((h) => h.slug === hood.slug) === index,
        );
        setHoods(unique);

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
    // console.log('characters: ', characters);
    // console.log('hoods: ', hoods);
  }

  return (
    <>
      {hoods.map(function (n) {
        return (
          <p key={n.slug}>
            <Link to={`/hoods/${n.slug}`} className="">
              {n.name}
            </Link>
          </p>
        );
      })}
    </>
  );
}

export default Home;
