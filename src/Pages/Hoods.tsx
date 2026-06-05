import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import type { HoodType } from '../types';
import { fetchNeighborhoods } from '../lib/api';
import { urlFor } from '../lib/api';
import PageLayout from '@/components/PageLayout';

function Hoods() {
  const [hoods, setHoods] = useState<HoodType[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    async function getData() {
      try {
        const hoods = await fetchNeighborhoods(isPreview);
        const hoodsSorted = hoods.sort((a: HoodType, b: HoodType) =>
          a.name.localeCompare(b.name),
        );

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
    // console.log('hoods: ', hoods);
  }

  return (
    <PageLayout>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {hoods.map(function (hood: HoodType) {
          return (
            <div key={hood.slug}>
              <div className="text-center p-[10px] nth-[1n]:rotate-[-1deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]">
                <Link to={`/${hood.slug}`} className="">
                  {hood.image && (
                    <img
                      className="w-[80%] my-0 mx-auto drop-shadow-[0_3px_0_rgba(26,74,74,0.18)] hover:animate-wiggle-hood"
                      src={urlFor(hood.image)}
                      alt={hood.name}
                    />
                  )}
                  {!hood.image && (
                    <img
                      className="w-[80%] my-0 mx-auto drop-shadow-[0_3px_0_rgba(26,74,74,0.18)] hover:animate-wiggle-hood"
                      src={`/assets/hoods/badge-buffer-zone.svg`}
                      alt={hood.name}
                    />
                  )}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}

export default Hoods;
