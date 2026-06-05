import { Link } from 'react-router';
import { urlFor } from '../lib/api';
import { type SanityImageSource } from '@sanity/image-url';
import '../styles/colors-and-type.scss';

function Card({
  slug,
  name,
  hoodSlug,
  tag,
  miniBio,
  image,
  imageInactive,
  date,
  isPreview,
}: {
  slug: string;
  name: string;
  hoodSlug: string;
  tag: string;
  miniBio: string;
  image: SanityImageSource;
  imageInactive: SanityImageSource;
  date: string;
  isPreview: boolean;
}) {
  const isLive =
    isPreview || (!!date && date <= new Date().toISOString().split('T')[0]);
  const twoWeeksOut = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
  const isComingSoon = !isLive && !!date && date <= twoWeeksOut;
  console.log('isComingSoon: ', isComingSoon);

  const inner = (
    <div>
      <div className="p-[10px]">
        <div className="rounded-[8px] flex flex-col overflow-hidden bg-(--bw-cream) shadow-[inset_0_0_0_1.5px_var(--bw-navy),_0_4px_0_rgba(26,74,74,0.1)]">
          <div className="relative w-full grid aspect-[2/3] place-items-center p-4 color-(--bw-navy) border-b-[1.5px] border-b-solid border-b-(--bw-navy) text-[64px] leading-none tracking-normal">
            {/* TODO:you need check to see if there's an image!! */}
            {isLive ? (
              <img src={urlFor(image)} alt={name} />
            ) : isComingSoon ? (
              <img src={urlFor(imageInactive)} alt={name} />
            ) : (
              <div className="bw-card-art bw-card-empty-art">
                <div className="bw-card-empty-text">
                  A neighbor is
                  <br />
                  moving in soon.
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block flex flex-col gap-[6px] pt-[14px] px-[16px] pb-[16px] bg-(--bw-navy-soft) font-(family-name:--font-body)">
            <h3 className="resident-name-card mb-[10px] text-(--bw-cream) font-(family-name:--font-display) border-b border-b-solid border-b-(--bw-cream) tracking-[0.05em] leading-[1.1]">
              {isLive ? name : '???'}
            </h3>
            <span className="text-(--bw-amber) text-[14px] font-bold tracking-[0.16em] uppercase">
              {isLive ? tag : 'A neighbor is moving in soon'}
            </span>
            {miniBio && isLive ? (
              <div
                className="m-[2px 0 0] text-[12px] text-(--bw-cream) leading-[1.45] italic whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: miniBio }}
              />
            ) : (
              <div className="m-[2px 0 0] text-[12px] text-(--bw-cream) leading-[1.45] italic whitespace-pre-line">
                New resident is currently working on their introductory
                limerick. They would like you to be patient. It will be worth
                the wait.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="visible md:hidden text-(--fg-display) font-(family-name:--font-body) font-bold text-[18px] text-center">
        {isLive ? name : ''}
      </div>
    </div>
  );

  return isLive ? (
    <Link
      to={`/${hoodSlug}/${slug}`}
      className="nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg] hover:animate-wiggle-card"
    >
      {inner}
    </Link>
  ) : (
    <div className="nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]">
      {inner}
    </div>
  );
}

export default Card;
