import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { ResidentType } from '../types';
import { fetchResidents } from '../lib/api';
import PageLayout from '@/components/PageLayout';
import Tile from '@/components/Tile';
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
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-[50px]`}>
          {residents
            .filter((res) => !!res.date && res.date <= TWO_WEEKS_OUT)
            .map(function (resident) {
              return (
                <>
                  <Tile
                    key={resident.slug}
                    slug={resident.slug}
                    quote={resident.quote}
                    hoodSlug={
                      resident.hood.slug ? resident.hood.slug : 'buffer-zone'
                    }
                    name={resident.name}
                    tag={resident.tag}
                    imagePng={resident.imagePng}
                    imagePngInactive={resident.imagePngInactive}
                    stamp={resident.stamp}
                    date={resident.date}
                    isPreview={isPreview ? isPreview : false}
                  />
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
