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
  // an underscore will stop the ts error that it's declared but never used
  const [hoods, setHoods] = useState<{ name: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        console.log('data: ', data);

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
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {hoods.map(function (n) {
          return (
            <div
              key={n.slug}
              className="text-center p-[10px] nth-[1n]:rotate-[-1deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]"
            >
              <Link to={`/hoods/${n.slug}`} className="">
                <img
                  className="w-[80%] my-0 mx-auto drop-shadow-[0px_3px_1px_rgba(0,0,0,0.2)] hover:animate-wiggle-hood"
                  src={`/assets/hoods/badge-${n.slug}.svg`}
                  alt={n.name}
                />
                {/* <p>{n.name}</p> */}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
