import { Link } from 'react-router';
import type { HoodType, ResidentType } from '../types';
import { urlFor } from '../lib/api';
import Stamp from './branding/stamp';
import HoodStatus from './HoodStatus';
import Button from './Button';
import '../styles/colors-and-type.scss';

function HoodTease({
  hood,
  residents,
  usage,
}: {
  hood: HoodType;
  residents: Array<ResidentType>;
  usage: string;
}) {
  return (
    <article className="bw-featured-hood-card p-[0 auto] p-[24px] ">
      {/* Tilted postmark — the "this is the one right now" mark */}
      {usage === 'tease' && <Stamp lineOne="Now on" lineTwo="the Block" />}

      <div className="bw-hood-head-grid grid grid-cols-none lg:grid-cols-[auto_1fr] gap-0 md:gap-[32px] relative items-center z-[2]">
        <div className="relative w-[200px] h-[200px] lg:w-[168px] lg:h-[168px] grid place-items-center shrink-0 rounded-[50%] bg-transparent mt-0 mb-0 ml-[auto] mr-[auto]">
          {/* TODO: you need a placeholder image */}
          {usage === 'tease' ? (
            <Link to={`/${hood.slug}`}>
              {hood.image && (
                <img
                  className="block w-full h-full drop-shadow-[0_3px_0_rgba(26,74,74,0.18)]"
                  src={urlFor(hood.image)}
                  alt={hood.name}
                />
              )}
            </Link>
          ) : (
            <img
              className="block w-full h-full drop-shadow-[0_3px_0_rgba(26,74,74,0.18)]"
              src={urlFor(hood.image)}
              alt={hood.name}
            />
          )}
        </div>

        <div className="bw-featured-hood-body">
          {usage === 'tease' && (
            <div className="bw-eyebrow font-(family-name:--font-body) text-burnt text-[14px] font-semibold uppercase text-center md:text-left">
              Featured neighborhood
            </div>
          )}

          <div className="my-[var(--s-4)] mx-0 text-[var(--fg-display)] text-[48px] font-(family-name:--font-display) font-normal tracking-[var(--ls-display] leading-[1.04] text-center md:text-left">
            {hood.name}
          </div>
          <div className="my-[var(--s-1)] mx-0 text-[var(--bw-burnt)] font-(family-name:--font-body) font-bold tracking-[var(--ls-display] leading-[1.04] text-center md:text-left">
            {hood.tagline || 'Come on in.'}
          </div>
          <p className="bw-featured-hood-desc text-center md:text-left">
            {hood.description}
          </p>

          <HoodStatus
            date={hood.date}
            res={residents.filter((r) => r.active).length}
            active={hood.active}
          />
        </div>
      </div>
      {usage === 'tease' && (
        <div className="grid grid-cols-2 gap-[10px] justify-items-center mt-[30px] font-(family-name:--font-body)">
          <Button slug={`/${hood.slug}`} pretext={`Visit `} text={hood.name} />
          <Button slug={`/hoods`} pretext="" text="All Hoods" />
        </div>
      )}
    </article>
  );
}

export default HoodTease;
