import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/character-details.scss';

interface Character {
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

function CharacterDetails() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        console.log('data: ', data);

        const thisCharacter = data.characters.find(
          (char: Character) => char.slug === slug,
        );

        setCharacter(thisCharacter);
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
    console.log('character: ', character);
  }

  if (!character) return null;
  return (
    <section>
      <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
        <Link to={`/hoods/${character.hoodslug}`}>← Back to the hood</Link>
      </button>
      <div className="grid grid-cols-3">
        <div className="image-holder p-[10px]">
          <img
            src={`/assets/characters/${character.image}`}
            alt={character.name}
          />
        </div>
        <div className="content-holder col-span-2 p-[10px]">
          <h1 className="font-(family-name:--font-display)">
            {character.name}
          </h1>
          <h3 className="font-(family-name:--font-body)">{character.tag}</h3>
          <div>{character.pronunciation}</div>
          <div>{character.hood}</div>
          <div>{character.nationality}</div>
          <div>{character.pronouns}</div>
          <div>{character.age}</div>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: character.miniBio }}
          />
          <div
            className="short-bio"
            dangerouslySetInnerHTML={{ __html: character.shortBio }}
          />
        </div>
      </div>
    </section>
  );
}

export default CharacterDetails;
