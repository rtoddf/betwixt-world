import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/card.scss';
import './styles/styles.css';
import './styles/character.css';

import Card from './components/Card';
import Player from './components/Player';

interface Card {
  slug: string;
  name: string;
  miniBio: string;
  tag: string;
  image: string;
  hood: string;
  hoodslug: string;
  hooddescription: string;
  active: string;
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
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log('characters: ', characters);
    console.log('hoodCharacters: ', hoodCharacters);
  }

  return (
    <>
      <section className="bw-hood w-full md:w-[768px] lg:w-[1024px] p-[0 auto] p-[24px] lg:pt-[var(--s-7)] lg:pb-[var(--s-9)] lg:px-[var(--s-7)]">
        <button className="bw-back m-0 p-0 bg-transparent text-[var(--bw-teal)] border-none font-[family-name:var(--font-body)] font-semibold leading-normal cursor-pointer">
          <Link to={`/`}>← Back to the neighborhood map</Link>
        </button>
        <header className="bw-hood-head relative bg-[var(--bg-elevated)] p-[24px] lg:p-[48px] rounded-[var(--r)] overflow-hidden">
          <div className="bw-hood-head-grid grid grid-cols-none lg:grid-cols-[auto_1fr] gap-[32px] relative items-center z-[1]">
            <div className="relative w-full h-full lg:w-[168px] lg:h-[168px] grid place-items-center shrink-0 rounded-[50%] bg-transparent">
              {hoodCharacters[0].hoodslug ? (
                <img
                  className="block w-full h-full drop-shadow-[0_3px_0_rgba(26,74,74,0.18)]"
                  src={`/assets/hoods/badge-${hoodCharacters[0].hoodslug}.svg`}
                  alt={hoodCharacters[0].hood}
                />
              ) : (
                <p className="w-[128px] h-[128px] bg-[var(--hood-accent)] shadow-[0_0_0_6px var(--bg-elevated),0_0_07.5px var(--bw-navy);]">
                  filler image
                </p>
              )}
            </div>
            <div className="bw-hood-head-text">
              <div className="mb-[var(--s-3)] font-[family-name:var(--font-body)] text-[14px] text-[var(--bw-burnt)] font-bold uppercase tracking-[var(--ls-allcaps)] text-center md:text-left">
                Catchphrase
              </div>
              {/* <div className="font-[family-name:var(--font-display)] text-[48px] md:text-[80px] text-[clamp(48px, 6.5vw, 80px)] leading-[0.95] tracking-[0.05em] text-center md:text-left mt-[var(--s-2)] mx-0 mb-[var(--s-3)] text-[var(--fg-display)]">
                {hoodCharacters[0].hood}
              </div> */}
              <div className="max-w-[56ch] m-0 mb-[20px] text-[var(--fg)] text-[17px] leading-[1.55] text-center md:text-left">
                {hoodCharacters[0].hooddescription}
              </div>
              <div className="bw-hood-stats grid grid-cols-3 place-items-center text-[13px] text-[var(--fg-muted)]">
                <span className="bw-hood-stat">
                  <strong>{hoodCharacters.length}</strong> residents
                </span>
                <span className="bw-hood-stat">
                  moved in <strong>spring 2026</strong>
                </span>
                <span className="bw-hood-stat">
                  streetlights{' '}
                  <strong>{hoodCharacters[0].active ? `yes` : `no`}</strong>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Theme song — fat audio band */}
        <section className="bw-theme-song">
          <div className="bw-theme-song-eyebrow">
            <span className="bw-eyebrow bw-eyebrow-amber">Theme song</span>
            <span className="bw-theme-song-subtitle">
              A two-minute walk through the block.
            </span>
          </div>
          <Player />
          {/* <VoicePlayer
            label={n.themeSong.title}
            duration={n.themeSong.duration}
            palette="theme"
          /> */}
          <div className="bw-theme-song-credit">Artist</div>
        </section>

        {/* Residents */}
        <section className="bw-hood-residents">
          <header className="bw-section-header bw-section-header-l">
            <div className="mb-[var(--s-3)] font-[family-name:var(--font-body)] text-[14px] text-[var(--bw-burnt)] font-bold uppercase tracking-[var(--ls-allcaps)] text-center md:text-left">
              Who lives here
            </div>
            <div className="font-[family-name:var(--font-display)] text-[30px] md:text-[48px] text-[clamp(30px, 6.5vw, 56px)] leading-[0.95] tracking-[0.05em] text-center md:text-left mt-[var(--s-2)] mx-0 mb-[var(--s-3)] text-[var(--fg-display)]">
              Meet the residents
            </div>
          </header>
          <div
            className={`grid grid-cols-${hoodCharacters.length > 1 ? 2 : 1} md:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {hoodCharacters.map(function (character) {
              return (
                <Card
                  key={character.slug}
                  slug={character.slug}
                  name={character.name}
                  tag={character.tag}
                  miniBio={character.miniBio}
                  image={character.image}
                  active={character.active}
                />
              );
            })}
          </div>
        </section>
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
