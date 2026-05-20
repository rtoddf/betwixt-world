import '../styles/colors-and-type.css';
import '../styles/card.css';

function Card({
  name,
  tag,
  miniBio,
  image,
}: {
  name: string;
  tag: string;
  miniBio: string;
  image: string;
}) {
  return (
    <div className="p-[10px] nth-[1n]:rotate-[-0.6deg] nth-[2n]:rotate-[0.8deg] nth-[3n]:rotate-[-0.3deg]">
      <div className="rounded-[8px] flex flex-col overflow-hidden bg-(--bw-cream) shadow-[inset_0_0_0_1.5px_var(--bw-navy),_0_4px_0_rgba(26,74,74,0.1)]">
        <div className="relative w-full grid aspect-[2/3] place-items-center p-8 color-(--bw-navy) border-b-[1.5px] border-b-solid border-b-(--bw-navy) text-[64px] leading-none tracking-normal">
          <img src={`/assets/characters/${image}`} alt={name} />
        </div>
        <div className="flex flex-col gap-[6px] pt-[14px] px-[16px] pb-[16px] bg-(--bw-navy-soft) font-(family-name:--font-body)">
          <h3 className="m-0 pb-[10px] text-(--bw-cream) font-(family-name:--font-display) border-b border-b-solid border-b-(--bw-cream) text-[64px] tracking-[0.05em] leading-[1]">
            {name}
          </h3>
          <span className="text-(--bw-amber) text-[14px] font-bold tracking-[0.16em] uppercase">
            {tag}
          </span>
          <p className="m-[2px 0 0] text-[12px] text-(--bw-cream) leading-[1.45] italic whitespace-pre-line">
            <div dangerouslySetInnerHTML={{ __html: miniBio }} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
