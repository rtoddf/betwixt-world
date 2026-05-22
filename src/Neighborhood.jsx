/* global React */

function Neighborhood({
  setRoute,
  openCharacter,
  neighborhoodId = 'intangibles',
}) {
  const n = window.BW_NEIGHBORHOODS[neighborhoodId];
  const allChars = window.BW_CHARACTERS;
  const residents = n.members.map((id) => allChars[id]).filter(Boolean);

  return (
    <article className="bw-hood">
      <button
        className="bw-link bw-back"
        onClick={() => setRoute && setRoute('home')}
      >
        ← Back to the neighborhood map
      </button>

      {/* Hood header — badge + name + description, framed in terracotta */}
      <header className="bw-hood-head">
        <div className="bw-hood-head-grid">
          <div className="bw-hood-badge" style={{ '--hood-accent': n.accent }}>
            {n.badgeImage ? (
              <img
                className="bw-hood-badge-img"
                src={n.badgeImage}
                alt={`${n.name} badge`}
              />
            ) : (
              <span className="bw-hood-badge-mark">{n.badge}</span>
            )}
          </div>
          <div className="bw-hood-head-text">
            <div className="bw-eyebrow">Neighborhood No. 02</div>
            <h1 className="bw-hood-name">{n.name}</h1>
            <p className="bw-hood-desc">{n.description}</p>
            <div className="bw-hood-stats">
              <span className="bw-hood-stat">
                <strong>{n.members.length}</strong> residents
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

      {/* Theme song — fat audio band */}
      <section className="bw-theme-song">
        <div className="bw-theme-song-eyebrow">
          <span className="bw-eyebrow bw-eyebrow-amber">Theme song</span>
          <span className="bw-theme-song-subtitle">
            A two-minute walk through the block.
          </span>
        </div>
        <VoicePlayer
          label={n.themeSong.title}
          duration={n.themeSong.duration}
          palette="theme"
        />
        <div className="bw-theme-song-credit">{n.themeSong.artist}</div>
      </section>

      {/* Residents */}
      <section className="bw-hood-residents">
        <header className="bw-section-header bw-section-header-l">
          <div className="bw-eyebrow">Who lives here</div>
          <h2>Meet the residents.</h2>
        </header>
        <div className="bw-grid">
          {residents.map((r, i) => (
            <CharacterCard
              key={r.id}
              resident={r}
              tilt={i % 2 === 0 ? -0.6 : 0.6}
              onOpen={openCharacter}
            />
          ))}
          {/* Empty slot — moving-in placeholder */}
          <article className="bw-card-v2 bw-card-empty">
            <div className="bw-card-art bw-card-empty-art">
              <div className="bw-card-empty-text">
                A neighbor is
                <br />
                moving in soon.
              </div>
            </div>
            <div className="bw-card-foot bw-card-foot-empty">
              <div className="bw-card-name">???</div>
              <div className="bw-card-rule" />
              <div className="bw-card-concept">To be introduced</div>
            </div>
          </article>
        </div>
      </section>
    </article>
  );
}

export default Neighborhood;
