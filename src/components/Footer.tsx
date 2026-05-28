import { Link } from 'react-router';

function Footer() {
  const footerNav = [
    { id: 'hoods', label: 'The Hoods', path: '/hoods' },
    { id: 'residents', label: 'The Residents', path: '/residents' },
    { id: 'about', label: 'About Betwixt', path: '/about' },
    { id: 'hello', label: 'Say Hello', path: '/say-hello' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bw-footer">
      <div className="bw-footer-inner">
        <div className="bw-footer-brand">
          <img src="../../assets/logo-icon-on-navy.svg" alt="" />
          <div>
            <div className="bw-footer-wm">Betwixt</div>
            <div className="bw-footer-tag">
              You've got neighbors. Now meet ours.
            </div>
          </div>
        </div>
        <div className="bw-footer-cols">
          <div>
            <div className="bw-footer-h">Visit</div>
            {footerNav.map((n) => (
              <Link className="bw-link" to={n.path}>
                {n.label}
              </Link>
            ))}
            {/* <a onClick={() => setRoute && setRoute('home')}>The neighborhood</a>
            <a onClick={() => setRoute && setRoute('about')}>About Betwixt</a>
            <a onClick={() => setRoute && setRoute('visit')}>Say hello</a> */}
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
      <div className="bw-footer-strip">
        <span>© Betwixt, {currentYear}</span>
        <span>Made by hand on a wooden table</span>
      </div>
    </footer>
  );
}

export default Footer;
