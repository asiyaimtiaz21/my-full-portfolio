import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import resumePDF from '../assets/pdfs/my-resume.pdf';
import './Navbar.css';

const links = [
  { to: '/about',       label: 'About'       },
  { to: '/projects',    label: 'Projects'    },
  { to: '/skills',      label: 'Skills'      },
  { to: '/photography', label: 'Photography' },
];

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const hamburgerRef              = useRef(null);
  const overlayRef                = useRef(null);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const firstLink = overlayRef.current?.querySelector('a');
      firstLink?.focus();
    } else {
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const isProjectDetail = location.pathname.startsWith('/project/');
  const close  = () => setMenuOpen(false);
  const toggle = () => setMenuOpen(prev => !prev);

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>

        <Link to="/" className="navbar-logo" onClick={close}>
          Asiya Imtiaz
        </Link>

        <span className="navbar-sep" aria-hidden="true" />

        {/* Desktop navigation */}
        <nav className="navbar-nav" aria-label="Primary navigation">
          <ul className="navbar-links">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive || (to === '/projects' && isProjectDetail) ? 'active' : ''
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="navbar-resume">
                Résumé ↗
              </a>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className="navbar-cta" onClick={close}>
          Let's Talk
          <span aria-hidden="true">→</span>
        </Link>

        {/* Hamburger — mobile only */}
        <button
          ref={hamburgerRef}
          className={`hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={toggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        ref={overlayRef}
        className={`nav-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <nav className="nav-overlay-nav">
          {links.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-overlay-link${isActive || (to === '/projects' && isProjectDetail) ? ' active' : ''}`
              }
              onClick={close}
              tabIndex={menuOpen ? 0 : -1}
              style={{ '--link-index': i }}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-overlay-link${isActive ? ' active' : ''}`
            }
            onClick={close}
            tabIndex={menuOpen ? 0 : -1}
            style={{ '--link-index': links.length }}
          >
            Contact
          </NavLink>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-overlay-link"
            tabIndex={menuOpen ? 0 : -1}
            style={{ '--link-index': links.length + 1 }}
          >
            Résumé ↗
          </a>
        </nav>

        <p className="nav-overlay-tagline">Digital Designer · Central Florida</p>
      </div>
    </>
  );
}

export default Navbar;
