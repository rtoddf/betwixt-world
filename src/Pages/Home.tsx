import { useState, useEffect } from 'react';
import type { HoodType, ResidentType } from '../types';
import { fetchNeighborhoods } from '../lib/api';
import HoodTease from '../components/HoodTease';
import '../styles/colors-and-type.scss';
import '../styles/final.scss';

function Home() {
  const [hood, setHood] = useState<HoodType | null>(null);
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const hoods = await fetchNeighborhoods();
        const randomHood = hoods[Math.floor(Math.random() * hoods.length)];
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
    // console.log('hood: ', hood);
  }

  if (!hood) return null;

  return (
    <>
      <section className="w-[100%] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:px-[var(--s-7)]">
        <HoodTease hood={hood} residents={residents} usage="tease" />
      </section>
    </>
  );
}

export default Home;
