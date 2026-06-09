import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { ResidentType } from '../types';
import { fetchResidents } from '../lib/api';
import PageLayout from '@/components/PageLayout';
// import Card from '../components/Card';
import HeadShot from '@/components/images/HeadShot';
import PageNotFound from '@/components/PageNotFound';
import {
  prioritizeResidents,
  TWO_WEEKS_OUT,
} from '@/helperFunctions/dateHelpers';
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

        setResidents(
          residents.sort((a: ResidentType, b: ResidentType) => {
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
  }, [isPreview]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    // console.log('residents: ', residents);
  }

  if (!residents) return null;

  if (residents.length > 0) {
    return (
      <PageLayout>
        <div
          className={`grid grid-cols-${residents.length > 1 ? 2 : 1} md:grid-cols-3 lg:grid-cols-4 gap-4`}
        >
          {residents
            .filter((res) => !!res.date && res.date <= TWO_WEEKS_OUT)
            .map(function (resident) {
              return (
                <>
                  <HeadShot res={resident} />
                  {/* <Card
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
                  /> */}
                </>
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
