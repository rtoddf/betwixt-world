import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import type { HoodType, ResidentType } from './types';
import './styles/colors-and-type.scss';
import './styles/hoods.scss';
import './styles/styles.css';
import './styles/character.css';

import Card from './components/Card';
import Player from './components/Player';

function Hood() {
  const [hood, setHood] = useState<HoodType | null>(null);
  const [residents, setResidents] = useState<ResidentType[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/hoods.json');
        const data = await response.json();
        const thisHood = data.filter((h: HoodType) => h.slug === slug);
        setHood(thisHood[0]);

        const responseRes = await fetch('/data/residents.json');
        const dataRes = await responseRes.json();
        const hoodResidents = dataRes.filter(
          (resident: ResidentType) => resident.hood === slug,
        );
        setResidents(
          hoodResidents.sort((a: ResidentType, b: ResidentType) =>
            a.name.localeCompare(b.name),
          ),
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
    console.log('residents: ', residents);
    console.log('hood: ', hood);
  }

  if (!hood) return null;

  return (
    <>
      <section className="bw-hood w-full md:w-[768px] lg:w-[1024px] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:pb-[var(--s-9)] lg:px-[var(--s-7)]">
        <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
          <Link to={`/hoods`}>← Back to the neighborhood map</Link>
        </button>
        <header className="bw-hood-head relative bg-[var(--bg-elevated)] p-[24px] lg:p-[48px] rounded-[var(--r)] overflow-hidden">
          <div className="bw-hood-head-grid grid grid-cols-none lg:grid-cols-[auto_1fr] gap-[32px] relative items-center z-[1]">
            <div className="relative w-full h-full lg:w-[168px] lg:h-[168px] grid place-items-center shrink-0 rounded-[50%] bg-transparent">
              {hood.slug ? (
                <img
                  className="block w-full h-full drop-shadow-[0_3px_0_rgba(26,74,74,0.18)]"
                  src={`/assets/hoods/badge-${hood.slug}.svg`}
                  alt={hood.name}
                />
              ) : (
                <p className="w-[128px] h-[128px] bg-[var(--hood-accent)] shadow-[0_0_0_6px var(--bg-elevated),0_0_07.5px var(--bw-navy);]">
                  filler image
                </p>
              )}
            </div>
            <div className="bw-hood-head-text">
              <div className="mb-[var(--s-3)] font-[family-name:var(--font-body)] text-[14px] text-[var(--bw-burnt)] font-bold uppercase tracking-[var(--ls-allcaps)] text-center md:text-left">
                {hood.tagline}
              </div>
              <div className="max-w-[56ch] m-0 mb-[20px] text-[var(--fg)] text-[17px] leading-[1.55] text-center md:text-left">
                {hood.description}
              </div>
              <div className="bw-hood-stats grid grid-cols-3 place-items-center text-[13px] text-[var(--fg-muted)]">
                <div className="grid items-center w-full p-[5px] text-center">
                  <div className="leading-[1.5]">residents</div>
                  <div className="font-semibold leading-[1.5]">
                    {residents.filter((r) => r.active).length}
                  </div>
                </div>
                <div className="w-full p-[5px] border-l-[1px] border-r-[1px] border-[var(--bw-burnt)] text-center">
                  <div className="leading-[1.5]">
                    {hood.active ? 'broke ground' : 'breaking ground'}
                  </div>
                  <div className="font-semibold leading-[1.5]">
                    {hood.date !== '' ? hood.date : 'soon'}
                  </div>
                </div>
                <div className="w-full p-[5px] text-center">
                  <div className="leading-[1.5]">utilities on</div>
                  <div className="font-semibold leading-[1.5]">
                    {hood.active ? `yes` : `no`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Theme song — fat audio band */}
        <section className="bw-theme-song">
          <div className="bw-theme-song-eyebrow">
            <span className="bw-eyebrow bw-eyebrow-amber">Theme song</span>
            <span className="bw-theme-song-subtitle">
              A two-minute walk through the block.
            </span>
          </div>
          <Player />
          {/* <VoicePlayer
            label={n.themeSong.title}
            duration={n.themeSong.duration}
            palette="theme"
          /> */}
          <div className="bw-theme-song-credit">Artist</div>
        </section>

        {/* Residents */}
        <section className="bw-hood-residents">
          <header className="bw-section-header bw-section-header-l">
            <div className="mb-[var(--s-3)] font-[family-name:var(--font-body)] text-[14px] text-[var(--bw-burnt)] font-bold uppercase tracking-[var(--ls-allcaps)] text-center md:text-left">
              Who lives here
            </div>
            <div className="font-[family-name:var(--font-display)] text-[30px] md:text-[48px] text-[clamp(30px, 6.5vw, 56px)] leading-[0.95] tracking-[0.05em] text-center md:text-left mt-[var(--s-2)] mx-0 mb-[var(--s-3)] text-[var(--fg-display)]">
              Meet the residents
            </div>
          </header>
          <div
            className={`grid grid-cols-${residents.length > 1 ? 2 : 1} md:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {residents.map(function (resident) {
              return (
                <Card
                  key={resident.slug}
                  slug={resident.slug}
                  hood={resident.hood}
                  name={resident.name}
                  tag={resident.tag}
                  miniBio={resident.miniBio}
                  image={resident.image}
                  active={resident.active}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}

export default Hood;
