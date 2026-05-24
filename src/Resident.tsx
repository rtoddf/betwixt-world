import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import type { ResidentType } from './types';
import './styles/colors-and-type.scss';
import './styles/character-details.scss';

function Resident() {
  const [resident, setResident] = useState<ResidentType | null>(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/residents.json');
        const data = await response.json();

        const thisResident = data.find((r: ResidentType) => r.slug === slug);

        setResident(thisResident);
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
        <Link to={`/${resident.hood}`}>← Back to the hood</Link>
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
