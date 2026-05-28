import { Link, NavLink } from 'react-router';
import Button from './Button';
import '../styles/layout.scss';

function Header() {
  const nav = [
    { id: 'hoods', label: 'Hoods', path: '/hoods' },
    { id: 'residents', label: 'Residents', path: '/residents' },
    { id: 'about', label: 'About', path: '/about' },
  ];
  return (
    <header className="bw-header">
      <Link to="/" className="bw-brand">
        <img src="../../assets/logo-icon-primary.svg" alt="Betwixt Home" />
        <span>Betwixt</span>
      </Link>
      <nav className="bw-nav">
        <ul>
          {nav.map((n) => (
            <li key={n.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'bw-link is-active' : 'bw-link'
                }
                to={n.path}
              >
                {n.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button slug={`/say-hello`} pretext="" text="Say hello" />
    </header>
  );
}

export default Header;
