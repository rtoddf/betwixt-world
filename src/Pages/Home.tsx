import { useState, useEffect } from 'react';
import type { HoodType, ResidentType } from '../types';
import Hood from '../components/Hood';
import '../styles/colors-and-type.scss';
import '../styles/homepage.css';
import '../styles/card.scss';

function Home() {
  const [hood, setHood] = useState<HoodType | null>(null);
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/hoods.json');
        const data = await response.json();
        const randomHood = data[Math.floor(Math.random() * data.length)];
        setHood(randomHood);

        const responseRes = await fetch('/data/residents.json');
        const dataRes = await responseRes.json();
        const hoodResidents = dataRes.filter(
          (resident: ResidentType) => resident.hood === randomHood.slug,
        );
        setResidents(hoodResidents);

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
    // console.log('hoods: ', hoods);
  }

  console.log('hood: ', hood);
  console.log('residents: ', residents);

  if (!hood) return null;

  return (
    <>
      <section className="bw-hood w-full md:w-[768px] lg:w-[1024px] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:pb-[var(--s-9)] lg:px-[var(--s-7)]">
        <Hood hood={hood} residents={residents} />
      </section>
    </>
  );
}

export default Home;
