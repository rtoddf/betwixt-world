import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router';
import { Link } from 'react-router';
import type { HoodType, ResidentType } from '../types';
import { fetchNeighborhoods } from '../lib/api';
import { fetchResidents } from '../lib/api';
import { urlFor } from '../lib/api';
import PageLayout from '@/components/PageLayout';
import Player from '../components/audio/Player';
import '../styles/colors-and-type.scss';

// ────────────────────────────────────────────────────────────────────
// MetaPin — a labeled stat cell. Reused for Neighborhood/Pronouns/etc
// ────────────────────────────────────────────────────────────────────
function MetaPin({ label, value }: { label: string; value: string }) {
  return (
    <div className="bw-meta-pin">
      <div className="bw-meta-label">{label}</div>
      <div className="bw-meta-value">{value}</div>
    </div>
  );
}

function Resident() {
  const { slug, hood } = useParams();
  const [resident, setResident] = useState<ResidentType | null>(null);
  const [neighborhood, setNeighborhood] = useState<HoodType | null>(null);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  useEffect(() => {
    async function getData() {
      try {
        const residents = await fetchResidents();
        const thisResident = residents.find(
          (r: ResidentType) => r.slug === slug,
        );

        const hoods = await fetchNeighborhoods();
        const thisHood = hoods.find((h: HoodType) => h.slug === hood);

        setResident(thisResident);
        setNeighborhood(thisHood);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }
    getData();
  }, [slug, hood]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log('resident: ', resident);
  }

  if (!resident) return null;
  const isLive =
    isPreview ||
    (!!resident.date &&
      resident.date <= new Date().toISOString().split('T')[0]);

  // console.log('isPreview: ', isPreview);

  return (
    <PageLayout>
      <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
        <Link to={`/${neighborhood?.slug}`}>← Back to the hood</Link>
      </button>
      <div className="bw-detail-grid">
        <figure className="bw-detail-art">
          {isLive ? (
            <img src={urlFor(resident.image)} alt={resident.name} />
          ) : (
            <img src={urlFor(resident.imageInactive)} alt={resident.name} />
          )}
        </figure>
        <div className="bw-detail-body">
          <div className="bw-eyebrow">
            Resident · {neighborhood?.name || 'Relocating'}{' '}
            {resident.name && isLive && ` · #${resident.name}`}
          </div>
          <h1 className="bw-detail-name font-(family-name:--font-display)">
            {isLive ? resident.name : '???'}
          </h1>

          {resident.pronunciation && isLive && (
            <div className="bw-detail-pron">/{resident.pronunciation}/</div>
          )}

          {/* Concept stamp */}
          {resident.tag && isLive && (
            <div className="bw-concept-stamp">
              <span className="bw-concept-stamp-eyebrow">Represents</span>
              <span className="bw-concept-stamp-value">{resident.tag}</span>
            </div>
          )}

          {resident.tag && isLive && (
            <dl className="bw-meta-grid">
              <MetaPin
                label="Hood"
                value={neighborhood?.name || 'Relocating'}
              />
              <MetaPin
                label="Ethnicity / mix"
                value={resident.nationality || 'Unkown'}
              />
              <MetaPin
                label="Pronouns"
                value={resident.pronouns || 'Still figuring it out'}
              />
              <MetaPin
                label="Age"
                value={resident.age ? `${resident.age} years` : 'Timeless'}
              />
            </dl>
          )}

          {/* audio */}
          {resident.voiceFile && isLive && (
            <section className="w-[100%] p-[0 auto] lg:px-[var(--s-7)] grid grid-cols-1 gap-[20px] mt-[40px]">
              <Player
                source={resident}
                audiotype="voice"
                isPreview={isPreview}
              />
            </section>
          )}

          {/* audio */}
          {resident.voiceMusicFile && isLive && (
            <section className="w-[100%] p-[0 auto] lg:px-[var(--s-7)] grid grid-cols-1 gap-[20px] mt-[40px]">
              <Player
                source={resident}
                audiotype="music"
                isPreview={isPreview}
              />
            </section>
          )}

          {/* The Verse */}
          {resident.miniBio && isLive && (
            <section className="bw-detail-section bw-detail-verse-section">
              <div className="bw-eyebrow bw-eyebrow-amber">The verse</div>
              <blockquote
                className="bw-detail-verse"
                dangerouslySetInnerHTML={{ __html: resident.miniBio }}
              />
            </section>
          )}

          {/* The Story */}
          {resident.shortBio && isLive && (
            <section className="bw-detail-section">
              <div className="bw-eyebrow bw-eyebrow-amber">The story</div>
              <div
                className="bw-detail-prose"
                dangerouslySetInnerHTML={{ __html: resident.shortBio }}
              />
            </section>
          )}

          {/* Disclaimer for grown-ups */}
          {resident.tag && isLive && (
            <aside className="bw-detail-aside">
              <div className="bw-eyebrow bw-eyebrow-amber">For grown-ups</div>
              <p>
                {resident.name} is a character, not a diagnosis. {resident.name}{' '}
                is not <em>about</em> {resident.tag.toLowerCase()} any more than
                a kid is <em>about</em> their hair color. Please introduce them
                as a neighbor.
              </p>
            </aside>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default Resident;
