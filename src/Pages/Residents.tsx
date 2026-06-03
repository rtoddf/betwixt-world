import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { ResidentType } from '../types';
import { fetchResidents } from '../lib/api';
import PageLayout from '@/components/PageLayout';
import Card from '../components/Card';
import '../styles/colors-and-type.scss';

function Residents() {
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    async function getData() {
      try {
        const residents = await fetchResidents();

        const residentsSorted = residents
          .sort((a: ResidentType, b: ResidentType) =>
            a.name.localeCompare(b.name),
          )
          .filter((resident: ResidentType) => isPreview || resident.active);

        setResidents(residentsSorted);

        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }
    getData();
  }, [isPreview]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    // console.log('residents: ', residents);
  }

  if (!residents) return null;

  return (
    <PageLayout>
      <div
        className={`grid grid-cols-${residents.length > 1 ? 2 : 1} md:grid-cols-3 lg:grid-cols-4 gap-4`}
      >
        {residents.map(function (resident) {
          return (
            <Card
              key={resident.slug}
              slug={resident.slug}
              hoodSlug={resident.hood.slug}
              name={resident.name}
              tag={resident.tag}
              miniBio={resident.miniBio}
              image={resident.image}
              imageInactive={resident.imageInactive}
              active={resident.active}
              isPreview={isPreview ? isPreview : false}
            />
          );
        })}
      </div>
    </PageLayout>
  );
}

export default Residents;
