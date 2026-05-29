import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import type { HoodType } from '../types';
import { fetchNeighborhoods } from '../lib/api';

function Hoods() {
  const [hoods, setHoods] = useState<HoodType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const hoods = await fetchNeighborhoods();
        const hoodsSorted = hoods
          .sort((a: HoodType, b: HoodType) => a.name.localeCompare(b.name))
          .filter((hood: HoodType) => hood.active);

        setHoods(hoodsSorted);

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
    <section className="w-[100%] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:px-[var(--s-7)]">
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
    </section>
  );
}

export default Hoods;
