import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/card.scss';
import './styles/styles.css';
import './styles/character.css';

import Card from './components/Card';

interface Card {
  slug: string;
  name: string;
  miniBio: string;
  tag: string;
  image: string;
  hood: string;
  hoodslug: string;
}

function Hood() {
  const [characters, setCharacters] = useState<Card[]>([]);
  const [hoodCharacters, setHoodCharacters] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/data/characters.json');
        const data = await response.json();
        const names = data.characters.filter(
          (char: Card) => char.hoodslug === slug,
        );

        setHoodCharacters(
          names.sort((a: Card, b: Card) => a.name.localeCompare(b.name)),
        );
        setCharacters(
          data.characters.sort((a: Card, b: Card) =>
            a.name.localeCompare(b.name),
          ),
        );
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log('characters: ', characters);
    console.log('hoodCharacters: ', hoodCharacters);
  }

  return (
    <>
      <section className="bw-hood">
        <header className="bw-hood-head">
          <div className="bw-hood-head-grid">
            <div className="bw-hood-badge">
              <img src={`/assets/logo-hood.svg`} alt="" />
            </div>
            <div className="bw-hood-head-text">
              <div className="bw-eyebrow">Neighborhood No. 02</div>
              <h1 className="bw-hood-name">{hoodCharacters[0].hood}</h1>
              <p className="bw-hood-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                ullamcorper libero, id eleifend nulla. Maecenas posuere, risus
                nec congue imperdiet, nisl ante facilisis diam, vel semper leo
                dolor a ligula. Vivamus malesuada sagittis erat, eu vestibulum
                enim elementum vitae.
              </p>
              <div className="bw-hood-stats">
                <span className="bw-hood-stat">
                  <strong>{hoodCharacters.length}</strong> residents
                </span>
                <span className="bw-hood-stat-sep">·</span>
                <span className="bw-hood-stat">
                  moved in <strong>spring 2026</strong>
                </span>
                <span className="bw-hood-stat-sep">·</span>
                <span className="bw-hood-stat">
                  porch light <strong>on</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hoodCharacters.map(function (character) {
            return (
              <Card
                key={character.slug}
                slug={character.slug}
                name={character.name}
                tag={character.tag}
                miniBio={character.miniBio}
                image={character.image}
              />
            );
          })}
        </div>
      </section>
      {/* <section id="center">
        <h1>all active characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map(function (character) {
            return (
              <Card
                key={character.slug}
                slug={character.slug}
                name={character.name}
                tag={character.tag}
                miniBio={character.miniBio}
                image={character.image}
              />
            );
          })}
        </div>
      </section> */}
    </>
  );
}

export default Hood;
