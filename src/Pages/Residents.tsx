import { useState, useEffect } from 'react';
import type { ResidentType } from '../types';
import Card from '../components/Card';
import '../styles/colors-and-type.scss';

function Residents() {
  // const [hood, setHood] = useState<HoodType | null>(null);
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        // const response = await fetch('/data/hoods.json');
        // const data = await response.json();
        // const randomHood = data[Math.floor(Math.random() * data.length)];
        // setHood(randomHood);

        const responseRes = await fetch('/data/residents.json');
        const dataRes = await responseRes.json();
        // const hoodResidents = dataRes.filter(
        //   (resident: ResidentType) => resident.hood === randomHood.slug,
        // );
        setResidents(dataRes);

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
    console.log('residents: ', residents);
  }

  if (!residents) return null;

  return (
    <section className="w-[100%] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:px-[var(--s-7)]">
      <div
        className={`grid grid-cols-${residents.length > 1 ? 2 : 1} md:grid-cols-3 lg:grid-cols-4 gap-4`}
      >
        {residents.map(function (resident) {
          return (
            <Card
              key={resident.slug}
              slug={resident.slug}
              hood={resident.hood}
              name={resident.name}
              tag={resident.tag}
              miniBio={resident.miniBio}
              image={resident.image}
              active={resident.active}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Residents;
