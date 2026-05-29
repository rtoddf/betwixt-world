/* global React */
function About() {
  return (
    <article className="bw-about">
      <div className="bw-eyebrow">About Betwixt</div>
      <h1 className="bw-display">
        A neighborhood,
        <br />
        not a curriculum.
      </h1>
      <p className="bw-about-lede">
        Betwixt is a place where feelings, conditions, and human-made situations
        have kids who personify them. We made it for kids, and for the grown-ups
        who love them, and for ourselves.
      </p>

      <div className="bw-about-grid">
        <section>
          <h3>Who lives here</h3>
          <p>
            Residents are inclusive, dignified, and defined by who they are —
            not what they have. Worry is a kid, not a symptom. Big Feeling is
            not a problem to solve. They are just neighbors.
          </p>
        </section>
        <section>
          <h3>How we make things</h3>
          <p>
            Slowly, by hand, in cream and teal. Nothing here is generated;
            nothing is glossy. The wobble in the letters and the warmth in the
            page are the point.
          </p>
        </section>
        <section>
          <h3>What we don't do</h3>
          <p>
            We don't diagnose. We don't gamify. We don't push notifications. We
            don't believe a kid is a metric.
          </p>
        </section>
        <section>
          <h3>What we hope</h3>
          <p>
            That a kid meets a neighbor. That a grown-up remembers one. That for
            a minute the world is just a little more porch and a little less
            feed.
          </p>
        </section>
      </div>
    </article>
  );
}

window.About = About;
