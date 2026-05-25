/* global React */
// FeaturedHood — one rotating featured-neighborhood card for the homepage.
//
// Drawn from the hood page's top section, but lighter: badge + slogan +
// description + a tiny stat strip + CTAs. A tilted amber "now on the block"
// postmark sits at the corner. Designed to be swapped for whatever hood is
// currently featured, or a new launch.

function FeaturedHood({ setRoute, hoodId = 'intangibles' }) {
  const n = window.BW_NEIGHBORHOODS[hoodId];
  if (!n) return null;

  const placename = n.placename || n.name.replace(/^The\s+/i, '').toUpperCase();
  const goHood = () => { location.hash = `neighborhood/${hoodId}`; };

  return (
    <section className="bw-featured-hood">
      <article className="bw-featured-hood-card">
        {/* Tilted postmark — the "this is the one right now" mark */}
        <div className="bw-featured-stamp" aria-hidden="true">
          <span className="bw-featured-stamp-top">Now on</span>
          <span className="bw-featured-stamp-mid">the Block</span>
          <span className="bw-featured-stamp-bot">No. 01</span>
        </div>

        <div className="bw-featured-hood-grid">
          {/* Left — the hood mark + sign plate */}
          <div className="bw-featured-hood-mark">
            <div className="bw-hood-stamp-circle bw-featured-hood-circle">
              <span className="bw-hood-stamp-dashed" />
              {n.badgeImage && (
                <img
                  src={n.badgeImage}
                  alt=""
                  className="bw-featured-hood-circle-art"
                />
              )}
            </div>
            <div className="bw-hood-stamp-plate bw-featured-hood-plate">
              <span className="bw-hood-stamp-plate-text">{placename}</span>
            </div>
          </div>

          {/* Right — the words */}
          <div className="bw-featured-hood-body">
            <div className="bw-eyebrow">Featured neighborhood</div>
            <h2 className="bw-featured-hood-slogan">
              {n.slogan || 'Come on in.'}
            </h2>
            <p className="bw-featured-hood-desc">{n.description}</p>

            <dl className="bw-featured-hood-stats">
              <div className="bw-featured-hood-stat">
                <dt>residents</dt>
                <dd>{n.members.length}</dd>
              </div>
              <div className="bw-featured-hood-stat">
                <dt>broke ground</dt>
                <dd>{n.opened || '—'}</dd>
              </div>
              <div className="bw-featured-hood-stat bw-featured-hood-stat-porch">
                <dt>porch light</dt>
                <dd>
                  <span className="bw-porch-dot" aria-hidden="true" />
                  {n.porchLight || 'on'}
                </dd>
              </div>
            </dl>

            <div className="bw-featured-hood-ctas">
              <button
                type="button"
                className="bw-btn bw-btn-primary"
                onClick={goHood}
              >
                Walk {placename.charAt(0) + placename.slice(1).toLowerCase()}
              </button>
              <button
                type="button"
                className="bw-link bw-featured-hood-link"
                onClick={goHood}
              >
                Every hood →
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

window.FeaturedHood = FeaturedHood;
