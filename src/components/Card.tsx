import { Link } from 'react-router';
import { createImageUrlBuilder } from '@sanity/image-url';
import '../styles/colors-and-type.scss';

function Card({
  slug,
  name,
  hood,
  tag,
  miniBio,
  image,
  active,
}: {
  slug: string;
  name: string;
  hood: string;
  tag: string;
  miniBio: string;
  image: string;
  active: boolean;
}) {
  const builder = createImageUrlBuilder({
    projectId: 'cizm0hkb',
    dataset: 'pr',
  });

  const urlFor = (source: object) => builder.image(source).url();

  console.log('active: ', active);
  const inner = (
    <div>
      <div className="p-[10px]">
        <div className="rounded-[8px] flex flex-col overflow-hidden bg-(--bw-cream) shadow-[inset_0_0_0_1.5px_var(--bw-navy),_0_4px_0_rgba(26,74,74,0.1)]">
          <div className="relative w-full grid aspect-[2/3] place-items-center p-4 color-(--bw-navy) border-b-[1.5px] border-b-solid border-b-(--bw-navy) text-[64px] leading-none tracking-normal">
            {/* TODO:you need check to see if there's an image!! */}
            {active ? (
              // <img src={`/assets/characters/${hood}/${image}`} alt={name} />
              <img src={urlFor(image)} alt={name} />
            ) : (
              <div className="text-[var(--bw-navy)] text-[22px] text-center font-[family-name:var(--font-display)] tracking-[0.05em] leading-[1.2]">
                A neighbor is moving in soon
              </div>
            )}
          </div>

          <div className="hidden md:block flex flex-col gap-[6px] pt-[14px] px-[16px] pb-[16px] bg-(--bw-navy-soft) font-(family-name:--font-body)">
            <h3 className="resident-name-card mb-[10px] text-(--bw-cream) font-(family-name:--font-display) border-b border-b-solid border-b-(--bw-cream) tracking-[0.05em] leading-[1.1]">
              {active ? name : '???'}
            </h3>
            <span className="text-(--bw-amber) text-[14px] font-bold tracking-[0.16em] uppercase">
              {active ? tag : 'intro to be made soon'}
            </span>
            {active ? (
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
        {active ? name : ''}
      </div>
    </div>
  );

  return active ? (
    <Link
      to={`/${hood}/${slug}`}
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
