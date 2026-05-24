/* global React */
const { useState: useStateCD, useRef: useRefCD, useEffect: useEffectCD } = React;

// ────────────────────────────────────────────────────────────────────
// VoicePlayer — teal footer band, cream play button, amber accent rail
// ────────────────────────────────────────────────────────────────────
function VoicePlayer({ label, duration = 47, palette = 'teal' }) {
  const [playing, setPlaying] = useStateCD(false);
  const [elapsed, setElapsed] = useStateCD(0);
  const tickRef = useRefCD(null);

  useEffectCD(() => {
    if (!playing) { clearInterval(tickRef.current); return; }
    tickRef.current = setInterval(() => {
      setElapsed((e) => {
        if (e + 0.25 >= duration) { setPlaying(false); return 0; }
        return e + 0.25;
      });
    }, 250);
    return () => clearInterval(tickRef.current);
  }, [playing, duration]);

  const pct = (elapsed / duration) * 100;
  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, '0')}`;
  };

  // 56 bars at ~3-4px each — proper waveform density
  const bars = useRefCD(
    Array.from({ length: 56 }, () => 0.25 + Math.random() * 0.75)
  ).current;

  return (
    <div className={`bw-voice bw-voice-${palette}`}>
      <button
        type="button"
        className="bw-voice-btn"
        aria-label={playing ? 'Pause' : 'Play'}
        onClick={() => setPlaying((p) => !p)}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <rect x="6" y="5" width="4.5" height="14" rx="1" fill="currentColor" />
            <rect x="13.5" y="5" width="4.5" height="14" rx="1" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
          </svg>
        )}
      </button>

      <div className="bw-voice-stack">
        <div className="bw-voice-label">{label}</div>
        <div
          className="bw-voice-wave"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration)}
          aria-valuenow={Math.round(elapsed)}
          onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            setElapsed(Math.max(0, Math.min(duration, x * duration)));
          }}
        >
          {bars.map((h, i) => {
            const reached = (i / bars.length) * 100 <= pct;
            return (
              <span
                key={i}
                className={`bw-voice-bar ${reached ? 'is-on' : ''}`}
                style={{ height: `${Math.round(h * 100)}%` }}
              />
            );
          })}
        </div>
      </div>

      <div className="bw-voice-time">
        <span>{fmt(elapsed)}</span>
        <span className="bw-voice-time-sep">/</span>
        <span>{fmt(duration)}</span>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// MetaPin — a labeled stat cell. Reused for Neighborhood/Pronouns/etc
// ────────────────────────────────────────────────────────────────────
function MetaPin({ label, value, accent }) {
  return (
    <div className="bw-meta-pin">
      <div className="bw-meta-label" style={accent ? { color: accent } : null}>
        {label}
      </div>
      <div className="bw-meta-value">{value}</div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// CharacterDetail — Zaman, by default
// ────────────────────────────────────────────────────────────────────
function CharacterDetail({ setRoute, characterId = 'zaman' }) {
  const c = window.BW_CHARACTERS[characterId] || window.BW_CHARACTERS.zaman;

  return (
    <article className="bw-detail">
      <button className="bw-link bw-back"
              onClick={() => setRoute && setRoute('neighborhood')}>
        ← Back to {c.neighborhood}
      </button>

      <div className="bw-detail-grid">
        {/* LEFT — full-height illustration */}
        <figure className="bw-detail-art">
          <image-slot
            id={`char-detail-${c.id}`}
            shape="rect"
            radius="0"
            placeholder={`Full-length illustration · ${c.name}`}
            className="bw-detail-slot"
          />
          <figcaption className="bw-detail-caption">
            <span className="bw-detail-caption-dot" />
            The barefoot rule — always shown full length.
          </figcaption>
        </figure>

        {/* RIGHT — content stack */}
        <div className="bw-detail-body">
          <div className="bw-eyebrow">
            Resident · {c.neighborhood} · #{c.id}
          </div>

          <h1 className="bw-detail-name">{c.name}</h1>
          {c.pronunciation && (
            <div className="bw-detail-pron">/{c.pronunciation}/</div>
          )}

          {/* Concept stamp */}
          <div className="bw-concept-stamp">
            <span className="bw-concept-stamp-eyebrow">Represents</span>
            <span className="bw-concept-stamp-value">{c.concept}</span>
          </div>

          {/* Meta grid — 2x2 pinboard */}
          <dl className="bw-meta-grid">
            <MetaPin label="Neighborhood" value={c.neighborhood} />
            <MetaPin label="Ethnicity / mix" value={c.ethnicity} />
            <MetaPin label="Pronouns" value={c.pronouns} />
            <MetaPin label="Age" value={`${c.age} years`} />
          </dl>

          {/* The Verse */}
          <section className="bw-detail-section bw-detail-verse-section">
            <div className="bw-eyebrow bw-eyebrow-amber">The verse</div>
            <blockquote className="bw-detail-verse">
              {c.verse}
            </blockquote>
          </section>

          {/* The Story */}
          <section className="bw-detail-section">
            <div className="bw-eyebrow bw-eyebrow-amber">The story</div>
            <p className="bw-detail-prose">{c.prose}</p>
          </section>

          {/* Voice player */}
          <VoicePlayer
            label={c.voice?.label || `Hear ${c.name}`}
            duration={c.voice?.duration || 47}
          />

          {/* Disclaimer for grown-ups */}
          <aside className="bw-detail-aside">
            <div className="bw-eyebrow bw-eyebrow-amber">For grown-ups</div>
            <p>
              {c.name} is a character, not a diagnosis. {c.name} is not <em>about</em>{' '}
              {c.concept.toLowerCase()} any more than a kid is <em>about</em> their hair color.
              Please introduce them as a neighbor.
            </p>
          </aside>
        </div>
      </div>
    </article>
  );
}

window.CharacterDetail = CharacterDetail;
window.VoicePlayer = VoicePlayer;
