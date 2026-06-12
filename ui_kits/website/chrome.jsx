/* Shared chrome: Nav (minimize + active section) + Footer */
const { useState: useStateCh, useEffect: useEffectCh } = React;

function StarMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path fill="currentColor" d="M 50 3 L 53.83 40.76 L 69.09 30.91 L 59.24 46.17 L 97 50 L 59.24 53.83 L 69.09 69.09 L 53.83 59.24 L 50 97 L 46.17 59.24 L 30.91 69.09 L 40.76 53.83 L 3 50 L 40.76 46.17 L 30.91 30.91 L 46.17 40.76 Z"/>
      <circle cx="50" cy="50" r="5.2" fill="currentColor"/>
    </svg>
  );
}

function Nav({ active, onNav, page }) {
  const [scrolled, setScrolled] = useStateCh(false);
  useEffectCh(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', on, { passive: true }); on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  const onHome = page === 'home';
  const links = [
    { key: 'projects', label: 'Projects', href: 'projects.html', on: page === 'projects' },
    { key: 'services', label: 'Services', href: 'services.html', on: page === 'services' },
    { key: 'about', label: 'About', href: 'about.html', on: page === 'about' },
  ];
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav__brand" href="index.html">
        <StarMark className="nav__star" />
        <span className="nav__bt">
          <span className="n">Azmi Construction Services</span>
          <span className="d">EXECUTIVE CONSTRUCTION ADVISORY</span>
        </span>
      </a>
      <div className="nav__links">
        {links.map((l) => (
          <a key={l.key}
            className={(l.on || active === l.key) ? 'is-active' : ''}
            href={l.href}
            onClick={(e) => { if (l.inPage && onHome && onNav) { e.preventDefault(); onNav(l.key); } }}>
            {l.label}
          </a>
        ))}
        <a className="nav__cta nav-cta-desktop" href="consultation.html">
          Start a Consultation
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  useLucide();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__grid"></div>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__bn"><StarMark className="footer__star" /><span className="n">Azmi Construction Services</span></div>
            <div className="d">EXECUTIVE CONSTRUCTION ADVISORY</div>
            <p className="footer__tag">International construction & urban development consultant. Shaping the cities of tomorrow across global regions.</p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__h">Navigate</span>
              <a href="projects.html">Projects</a>
              <a href="services.html">Services</a>
              <a href="about.html">About</a>
              <a href="consultation.html">Consultation</a>
            </div>
            <div className="footer__col">
              <span className="footer__h">Contact</span>
              <a href="mailto:syedkamranazmi@yahoo.com"><i data-lucide="mail" style={{ width: 14, height: 14 }}></i> syedkamranazmi@yahoo.com</a>
              <a href="https://www.linkedin.com/in/kamran-azmi/"><i data-lucide="linkedin" style={{ width: 14, height: 14 }}></i> /in/kamran-azmi</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} Azmi Construction Services</span>
          <span>Executive Construction Advisory · 40+ Years Global Expertise</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
