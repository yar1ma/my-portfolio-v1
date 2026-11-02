import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { id: 'top', label: 'Home' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'about', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Contact' },
];

const SECTION_PAGES = ['/software', '/data', '/ai'];

export default function Nav() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [active, setActive] = useState('');
  const { pathname, hash } = useLocation();
  const onSectionPage = SECTION_PAGES.includes(pathname);
  const lastPage = sessionStorage.getItem('lastPage') || '/software';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (onSectionPage) sessionStorage.setItem('lastPage', pathname);
  }, [pathname, onSectionPage]);

  useEffect(() => {
    setActive('');
    if (!onSectionPage) return;
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname, onSectionPage]);

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, hash]);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const el = document.getElementById(link.getAttribute('href').slice(1));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <header className="nav">
      <Link to="/" className="nav-logo" aria-label="Home">
        <img src="/nav-logo.png" alt="" width="28" height="28" />
      </Link>
      <nav className="nav-links">
        {NAV_LINKS.map((link) =>
          onSectionPage ? (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'active' : ''}
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.id} to={`${lastPage}#${link.id}`}>
              {link.label}
            </Link>
          )
        )}
      </nav>
      <div className="nav-right">
        <Link to="/" className="btn-secondary nav-switch">Switch view</Link>
        <a href="https://github.com/yar1ma" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18v3.24c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/yarima-zam-atu-faruku-salaga-6204b7197/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
        </a>
        <a href="mailto:yarimasalaga29@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.2.5 7.8 6.2 7.8-6.2H4.2zm15.8 1.4-7.6 6.06a1 1 0 0 1-1.24 0L4 7.4v11.1h16V7.4z" /></svg>
        </a>
        <button
          className="theme-toggle"
          aria-label="Toggle dark mode"
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}