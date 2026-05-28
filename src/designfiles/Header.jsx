/* global React */
const { useState } = React;

function Header({ route, setRoute }) {
  const nav = [
    { id: 'home',    label: 'Neighbors' },
    { id: 'notes',   label: 'Field notes' },
    { id: 'about',   label: 'About' },
    { id: 'visit',   label: 'Visit' },
  ];
  return (
    <header className="bw-header">
      <a className="bw-brand" href="#home" onClick={(e)=>{e.preventDefault(); setRoute('home');}}>
        <img src="../../assets/logo-icon-primary.svg" alt="" />
        <span>Betwixt</span>
      </a>
      <nav className="bw-nav">
        <ul>
          {nav.map(n => (
            <li key={n.id}>
              <a href={`#${n.id}`}
                 className={route === n.id ? 'is-active' : ''}
                 onClick={(e)=>{e.preventDefault(); setRoute(n.id);}}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#visit" className="bw-btn bw-btn-primary"
         onClick={(e)=>{e.preventDefault(); setRoute('visit');}}>
        Say hello
      </a>
    </header>
  );
}

window.Header = Header;
