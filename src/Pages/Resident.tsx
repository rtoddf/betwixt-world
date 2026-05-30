import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import type { HoodType, ResidentType } from '../types';
import { fetchNeighborhoods } from '../lib/api';
import { fetchResidents } from '../lib/api';
import { urlFor } from '../lib/api';
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
    // console.log('resident: ', resident);
  }

  if (!resident) return null;

  return (
    <section className="bw-hood w-[100%] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:px-[var(--s-7)]">
      <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
        <Link to={`/${neighborhood?.slug}`}>← Back to the hood</Link>
      </button>
      <div className="bw-detail-grid">
        <figure className="bw-detail-art">
          <img src={urlFor(resident.image)} alt={resident.name} />
        </figure>
        <div className="bw-detail-body">
          <div className="bw-eyebrow">
            Resident · {neighborhood?.name} · #{resident.name}
          </div>
          <h1 className="bw-detail-name font-(family-name:--font-display)">
            {resident.name}
          </h1>
          {/* <h1 className="bw-detail-name">{resident.name}</h1> */}
          {resident.pronunciation && (
            <div className="bw-detail-pron">/{resident.pronunciation}/</div>
          )}

          {/* Concept stamp */}
          <div className="bw-concept-stamp">
            <span className="bw-concept-stamp-eyebrow">Represents</span>
            <span className="bw-concept-stamp-value">{resident.tag}</span>
          </div>

          {/* Meta grid — 2x2 pinboard */}
          <dl className="bw-meta-grid">
            <MetaPin label="Hood" value={neighborhood?.name || 'Buffer Zone'} />
            <MetaPin label="Ethnicity / mix" value={resident.nationality} />
            <MetaPin label="Pronouns" value={resident.pronouns} />
            <MetaPin label="Age" value={`${resident.age} years`} />
          </dl>

          {/* The Verse */}
          <section className="bw-detail-section bw-detail-verse-section">
            <div className="bw-eyebrow bw-eyebrow-amber">The verse</div>
            <blockquote
              className="bw-detail-verse"
              dangerouslySetInnerHTML={{ __html: resident.miniBio }}
            />
          </section>

          {/* The Story */}
          <section className="bw-detail-section">
            <div className="bw-eyebrow bw-eyebrow-amber">The story</div>
            <div
              className="bw-detail-prose"
              dangerouslySetInnerHTML={{ __html: resident.shortBio }}
            />
          </section>

          {/* Disclaimer for grown-ups */}
          <aside className="bw-detail-aside">
            <div className="bw-eyebrow bw-eyebrow-amber">For grown-ups</div>
            <p>
              {resident.name} is a character, not a diagnosis. {resident.name}{' '}
              is not <em>about</em> {resident.tag.toLowerCase()} any more than a
              kid is <em>about</em> their hair color. Please introduce them as a
              neighbor.
            </p>
          </aside>
        </div>
        {/* <div className="content-holder col-span-2 p-[10px]"> */}
      </div>
    </section>
  );
}

export default Resident;
