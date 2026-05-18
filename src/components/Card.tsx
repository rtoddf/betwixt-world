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
        <div className="portrait p-8">
          <img src={`/assets/characters/${image}`} alt={name} />
        </div>
        <div className="body font-(family-name:--font-body)">
          <h3 className="name font-(family-name:--font-display)">{name}</h3>
          <span className="tag">{tag}</span>
          <p className="bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
