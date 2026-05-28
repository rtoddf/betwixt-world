import { Link } from 'react-router';
import '../styles/layout.scss';

function Header({}: {}) {
  const nav = [
    { id: 'hoods', label: 'Hoods', path: '/hoods' },
    { id: 'residents', label: 'Residents', path: '/residents' },
    { id: 'about', label: 'About', path: '/about' },
    // { id: 'notes', label: 'Field notes' },
  ];
  return (
    <header className="bw-header">
      <Link to="/" className="bw-brand">
        <img src="../../assets/logo-icon-primary.svg" alt="Betwixt Home" />
        <span>Betwixt</span>
        {/* setRoute('home'); */}
      </Link>
      <nav className="bw-nav">
        <ul>
          {nav.map((n) => (
            <li key={n.id}>
              <Link to={n.path}>{n.label}</Link>
              {/* className={route === n.id ? 'is-active' : ''}
              setRoute(n.id); */}
            </li>
          ))}
        </ul>
      </nav>
      <Link to="/say-hello" className="bw-btn bw-btn-primary">
        Say hello
      </Link>
      {/* setRoute('visit'); */}
    </header>
  );
}

export default Header;
