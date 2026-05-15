import '../styles/colors-and-type.css';
import '../styles/card.css';
import zaman from '/assets/characters/zaman.png';

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
    <>
      <div className="card rounded-[8px] flex flex-col overflow-hidden bg-(--bw-cream)">
        <div className="portrait p-8">
          <img src={zaman} alt="Zaman" />
        </div>
        <div className="body font-(family-name:--font-body)">
          <h3 className="name font-(family-name:--font-display)">{name}</h3>
          <span className="tag">{tag}</span>
          <p className="bio">{bio}</p>
        </div>
      </div>

      {/* <div className="card">
            <div className="portrait p-8">
              <img src={aella} alt="Aella" />
            </div>
            <div className="body">
              <h3 className="name">Aella</h3>
              <span className="tag">Mischief</span>
              <p className="bio">
                There once was a girl with deep pockets, Full of acorns and
                string and old lockets. She'd count them by name, Each evening
                the same, Then sleep with them tucked in their sockets.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="portrait p-8">
              <img src={azrael} alt="Azrael" />
            </div>
            <div className="body">
              <h3 className="name">Azrael</h3>
              <span className="tag">Death</span>
              <p className="bio">
                There once was a girl with deep pockets, Full of acorns and
                string and old lockets. She'd count them by name, Each evening
                the same, Then sleep with them tucked in their sockets.
              </p>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default Card;
