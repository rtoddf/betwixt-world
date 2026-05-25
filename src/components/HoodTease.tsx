import { Link } from 'react-router';
import type { HoodType, ResidentType } from '../types';
import HoodStatus from './HoodStatus';
import '../styles/colors-and-type.scss';
import '../styles/card.scss';

function HoodTease({
  hood,
  residents,
}: {
  hood: HoodType;
  residents: Array<ResidentType>;
}) {
  return (
    <article className="bw-featured-hood-card p-[0 auto] p-[24px] ">
      {/* Tilted postmark — the "this is the one right now" mark */}
      <div className="bw-featured-stamp" aria-hidden="true">
        <span className="bw-featured-stamp-top">Now on</span>
        <span className="bw-featured-stamp-mid">the Block</span>
        <span className="bw-featured-stamp-bot">No. 01</span>
      </div>

      <div className="bw-hood-head-grid grid grid-cols-none lg:grid-cols-[auto_1fr] gap-[32px] relative items-center z-[2]">
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

        <div className="bw-featured-hood-body">
          <div className="bw-eyebrow">Featured neighborhood</div>
          <div className="my-[var(--s-4)] mx-0 text-[var(--fg-display)] font-(family-name:--font-display) font-normal text-[clamp(40px, 5.2vw, 60px)] tracking-[var(--ls-display] leading-[1.04]">
            {hood.tagline || 'Come on in.'}
          </div>
          <p className="bw-featured-hood-desc">{hood.description}</p>

          <HoodStatus
            date={hood.date}
            res={residents.filter((r) => r.active).length}
            active={hood.active}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] justify-items-center mt-[30px]">
        <Link to={`/${hood.slug}`}>
          <button type="button" className="bw-btn bw-btn-primary">
            Visit <span className="hidden md:inline-block">{hood.name}</span>
          </button>
        </Link>

        <Link to={`/hoods`}>
          <button type="button" className="bw-btn bw-btn-primary">
            All Hoods
          </button>
        </Link>
      </div>
    </article>
  );
}

export default HoodTease;
