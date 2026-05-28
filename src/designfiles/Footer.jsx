/* global React */
function Footer({ setRoute }) {
  return (
    <footer className="bw-footer">
      <div className="bw-footer-inner">
        <div className="bw-footer-brand">
          <img src="../../assets/logo-icon-on-navy.svg" alt="" />
          <div>
            <div className="bw-footer-wm">Betwixt</div>
            <div className="bw-footer-tag">You've got neighbors. Now meet ours.</div>
          </div>
        </div>
        <div className="bw-footer-cols">
          <div>
            <div className="bw-footer-h">Visit</div>
            <a onClick={() => setRoute && setRoute('home')}>The neighborhood</a>
            <a onClick={() => setRoute && setRoute('about')}>About Betwixt</a>
            <a onClick={() => setRoute && setRoute('visit')}>Say hello</a>
          </div>
          <div>
            <div className="bw-footer-h">Read</div>
            <a>Field notes</a>
            <a>For grown-ups</a>
            <a>For teachers</a>
          </div>
          <div>
            <div className="bw-footer-h">The studio</div>
            <a>Press</a>
            <a>Careers</a>
            <a>Privacy</a>
          </div>
        </div>
      </div>
      <div className="bw-footer-strip">
        <span>© Betwixt Studio, 2026</span>
        <span>Made by hand on a wooden table.</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
