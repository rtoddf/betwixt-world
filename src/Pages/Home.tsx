import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { HoodType, ResidentType } from '../types';
import { fetchNeighborhoods, fetchResidents } from '../lib/api';
import { prioritizeResidents } from '@/helperFunctions/dateHelpers';
import PageLayout from '@/components/PageLayout';
import HoodTease from '../components/HoodTease';
import '../styles/colors-and-type.scss';
import '../styles/final.scss';

function Home() {
  const [hood, setHood] = useState<HoodType | null>(null);
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    async function getData() {
      try {
        const hoods = await fetchNeighborhoods(isPreview);
        const randomHood = hoods[Math.floor(Math.random() * hoods.length)];
        setHood(randomHood);

        const residents = await fetchResidents();
        setResidents(
          residents
            .filter((r: ResidentType) => r.hood.slug === randomHood.slug)
            .sort((a: ResidentType, b: ResidentType) => {
              const diff =
                prioritizeResidents(a.date, isPreview) -
                prioritizeResidents(b.date, isPreview);

              if (diff !== 0) return diff;

              return a.name.localeCompare(b.name);
            }),
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
    // console.log('hood: ', hood);
  }

  if (!hood) return null;

  return (
    <PageLayout>
      <HoodTease
        hood={hood}
        residents={residents}
        isPreview={isPreview}
        usage="tease"
      />
    </PageLayout>
  );
}

export default Home;
