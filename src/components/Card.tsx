import '../styles/colors-and-type.css';
import '../styles/card.css';

function Card({
  name,
  tag,
  bio,
  image,
}: {
  name: string;
  tag: string;
  bio: string;
  image: string;
}) {
  return (
    <div className="card-holder p-[10px]">
      <div className="card rounded-[8px] flex flex-col overflow-hidden bg-(--bw-cream)">
        <div className="relative w-full grid aspect-[2/3] place-items-center p-8 color-(--bw-navy) border-b-[1.5px] border-b-solid border-b-(--bw-navy) text-[64px] leading-none tracking-normal">
          <img src={`/assets/characters/${image}`} alt={name} />
        </div>
        <div className="flex flex-col gap-[6px] pt-[14px] px-[16px] pb-[16px] bg-(--bw-navy-soft) font-(family-name:--font-body)">
          <h3 className="name font-(family-name:--font-display)">{name}</h3>
          <span className="color-(--bw-amber) text-[14px] font-bold tracking-[0.16em] uppercase">
            {tag}
          </span>
          <p className="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
