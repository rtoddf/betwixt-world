import { Link } from 'react-router';
import { type SanityImageObject } from '@sanity/image-url';
import { type SanityImageSource } from '@sanity/image-url';
import { urlFor } from '../lib/api';
import { TODAY } from '@/helperFunctions/dateHelpers';
import HeadShot from '@/components/images/HeadShot';
import '../styles/colors-and-type.scss';

function Tile({
  slug,
  name,
  quote,
  hoodSlug,
  tag,
  imagePng,
  imagePngInactive,
  stamp,
  date,
  isPreview,
}: {
  slug: string;
  name: string;
  quote: string;
  hoodSlug: string;
  tag: string;
  imagePng: SanityImageObject;
  imagePngInactive?: SanityImageObject;
  stamp: SanityImageSource;
  date: string;
  isPreview: boolean;
}) {
  const isLive = isPreview || (!!date && date <= TODAY);
  // const twoWeeksOut = TWO_WEEKS_OUT;
  // const isComingSoon = !isLive && !!date && date <= twoWeeksOut;
  console.log('quote: ', quote);

  const inner = (
    <div className="tile">
      <div className="head">{/* <Stamp /> */}</div>
      <div className="halo">
        <div className="disc">
          <HeadShot
            imagePng={imagePng}
            imagePngInactive={imagePngInactive}
            name={name}
            isPreview={isPreview ? isPreview : false}
            date={date}
          />
        </div>
      </div>
      <div className="typewrap">
        <span className="typebadge">
          <span className="inf">
            {stamp && <img src={urlFor(stamp)} alt={name} />}
          </span>
          {isLive ? tag : 'coming soon'}
        </span>
      </div>
      <div className="name">{isLive ? name : '???'}</div>
      <div className="mono hood">
        {isLive ? hoodSlug : `new ${hoodSlug} resident`}
      </div>
      <div className="verseline">
        {isLive && quote
          ? `"${quote}"`
          : `"Still deciding how they'll introduce themselves. Whatever they decide, we're sure it will be clever and worth the wait."`}
      </div>
    </div>
  );

  return isLive ? (
    <Link
      to={`/${hoodSlug}/${slug}`}
      className="nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg] origin-bottom hover:animate-rattle"
    >
      {inner}
    </Link>
  ) : (
    <div className="nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]">
      {inner}
    </div>
  );
}

// hover:animate-wiggle-card

export default Tile;
