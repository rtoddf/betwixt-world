import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import type { HoodType } from './types';
import './styles/colors-and-type.scss';
import './styles/hoods.scss';
import './styles/styles.css';
import './styles/character.css';

function Hoods() {
  const [hoods, setHoods] = useState<HoodType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/hoods.json');
        const data = await response.json();
        setHoods(data);

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
    console.log('hoods: ', hoods);
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {hoods.map(function (hood: HoodType) {
          return (
            <div
              key={hood.slug}
              className="text-center p-[10px] nth-[1n]:rotate-[-1deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]"
            >
              <Link to={`/${hood.slug}`} className="">
                <img
                  className="w-[80%] my-0 mx-auto drop-shadow-[0_3px_0_rgba(26,74,74,0.18)] hover:animate-wiggle-hood"
                  src={`/assets/hoods/badge-${hood.slug}.svg`}
                  alt={hood.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Hoods;
