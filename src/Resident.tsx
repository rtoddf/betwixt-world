import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/character-details.scss';

interface Resident {
  slug: string;
  name: string;
  pronunciation: string;
  hood: string;
  hoodslug: string;
  nationality: string;
  pronouns: string;
  age: string;
  miniBio: string;
  shortBio: string;
  tag: string;
  image: string;
}

function Resident() {
  const [resident, setResident] = useState<Resident | null>(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();

        const thisCharacter = data.characters.find(
          (char: Resident) => char.slug === slug,
        );

        setResident(thisCharacter);
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
    console.log('resident: ', resident);
  }

  if (!resident) return null;
  return (
    <section>
      <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
        <Link to={`/${resident.hoodslug}`}>← Back to the hood</Link>
      </button>
      <div className="grid grid-cols-3">
        <div className="image-holder p-[10px]">
          <img
            src={`/assets/characters/${resident.image}`}
            alt={resident.name}
          />
        </div>
        <div className="content-holder col-span-2 p-[10px]">
          <h1 className="font-(family-name:--font-display)">{resident.name}</h1>
          <h3 className="font-(family-name:--font-body)">{resident.tag}</h3>
          <div>{resident.pronunciation}</div>
          <div>{resident.hood}</div>
          <div>{resident.nationality}</div>
          <div>{resident.pronouns}</div>
          <div>{resident.age}</div>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: resident.miniBio }}
          />
          <div
            className="short-bio"
            dangerouslySetInnerHTML={{ __html: resident.shortBio }}
          />
        </div>
      </div>
    </section>
  );
}

export default Resident;
