import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router';
import { Link } from 'react-router';
import type { HoodType, ResidentType } from '../types';
import { fetchNeighborhoods } from '../lib/api';
import { fetchResidents } from '../lib/api';
import {
  prioritizeResidents,
  TWO_WEEKS_OUT,
} from '@/helperFunctions/dateHelpers';
import PageLayout from '@/components/PageLayout';
import HoodTease from '../components/HoodTease';

import Card from '../components/Card';
import Player from '../components/audio/Player';

function Hood() {
  const [hood, setHood] = useState<HoodType | null>(null);
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    async function getData() {
      try {
        const hoods = await fetchNeighborhoods(isPreview);
        const thisHood = hoods.filter((h: HoodType) => h.slug === slug);
        setHood(thisHood[0]);

        // server side filter
        const residents = await fetchResidents(slug);
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
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    // console.log('residents: ', residents);
  }

  if (!hood) return null;

  return (
    <PageLayout>
      <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
        <Link to={`/hoods`}>← Back to the neighborhood map</Link>
      </button>

      <HoodTease
        hood={hood}
        residents={residents}
        isPreview={isPreview}
        usage="page"
      />

      {/* <header className="bw-hood-head relative bg-[var(--bg-elevated)] p-[24px] lg:p-[48px] rounded-[var(--r)] overflow-hidden"></header> */}

      {/* audio */}
      {hood.themeSong && (
        <section className="w-[100%] p-[0 auto] lg:px-[var(--s-7)] grid grid-cols-1 min-[768px]:grid-cols-2 gap-[20px]">
          <Player source={hood} audiotype="music" isPreview={isPreview} />
        </section>
      )}

      {/* Residents */}
      <section className="bw-hood-residents w-[100%] p-[0 auto]">
        {/* lg:px-[var(--s-7)] */}
        <header className="bw-section-header bw-section-header-l">
          {hood.active && residents.length !== 0 && (
            <div className="mb-[var(--s-3)] font-[family-name:var(--font-body)] text-[14px] text-[var(--bw-burnt)] font-bold uppercase tracking-[var(--ls-allcaps)] text-center md:text-left">
              Who lives here
            </div>
          )}

          <div className="font-[family-name:var(--font-display)] text-[30px] md:text-[48px] text-[clamp(30px, 6.5vw, 56px)] leading-[0.95] tracking-[0.05em] text-center md:text-left mt-[var(--s-2)] mx-0 mb-[var(--s-3)] text-[var(--fg-display)]">
            {hood.active && residents.length !== 0
              ? 'Meet the residents'
              : 'Moving in soon'}
          </div>
        </header>
        <div
          className={`grid grid-cols-${residents.length > 1 ? 2 : 1} md:grid-cols-2 lg:grid-cols-3 gap-4`}
        >
          {residents
            .filter((res) => !!res.date && res.date <= TWO_WEEKS_OUT)
            .map(function (resident) {
              return (
                <Card
                  key={resident.slug}
                  slug={resident.slug}
                  hoodSlug={resident.hood.slug}
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
      </section>
    </PageLayout>
  );
}

export default Hood;
