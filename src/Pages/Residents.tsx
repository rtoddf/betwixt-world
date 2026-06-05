import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { ResidentType } from '../types';
import { fetchResidents } from '../lib/api';
import PageLayout from '@/components/PageLayout';
import Card from '../components/Card';
import PageNotFound from '@/components/PageNotFound';
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
          .filter(
            (resident: ResidentType) =>
              isPreview ||
              resident.date <= new Date().toISOString().split('T')[0],
          );

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
    console.log('residents: ', residents);
  }

  // if (!residents) return null;

  if (residents.length > 0 && residents) {
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
                hoodSlug={
                  resident.hood.slug ? resident.hood.slug : 'buffer-zone'
                }
                name={resident.name}
                tag={resident.tag}
                miniBio={resident.miniBio}
                image={resident.image}
                imageInactive={
                  resident.imageInactive ? resident.imageInactive : ''
                }
                date={resident.date}
                isPreview={isPreview ? isPreview : false}
              />
            );
          })}
        </div>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        <PageNotFound />
      </PageLayout>
    );
  }
}

export default Residents;
