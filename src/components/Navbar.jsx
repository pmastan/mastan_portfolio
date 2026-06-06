import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/projects',  label: 'Projects' },
  { to: '/skills',    label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '64px',
        background: scrolled ? 'var(--nav-blur)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1px' }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>Mastan</span>
            <span style={{ color: 'var(--rose)', fontFamily: 'Syne, sans-serif', fontSize: '1.3rem', fontWeight: 800 }}></span>
          </NavLink>

          <ul style={{ display: 'flex', gap: '0.1rem', listStyle: 'none', alignItems: 'center' }} className="desk-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} style={({ isActive }) => ({
                  textDecoration: 'none', fontFamily: 'Syne, sans-serif',
                  fontSize: '0.75rem', letterSpacing: '0.07em', fontWeight: 600,
                  padding: '0.4rem 0.8rem', borderRadius: '6px',
                  color: isActive ? 'var(--rose)' : 'var(--text2)',
                  background: isActive ? 'var(--rose-dim)' : 'transparent',
                  transition: 'all 0.2s',
                })}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={toggle} aria-label="Toggle theme"
              style={{ width: '36px', height: '36px', borderRadius: '6px', border: '1px solid var(--border2)', background: 'var(--bg3)', color: 'var(--text)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rose)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; }}>
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <a href="mailto:mastan0843@gmail.com" className="btn btn-primary"
              style={{ fontSize: '0.7rem', padding: '0.45rem 1.1rem' }} id="hire-btn">
              Hire Me
            </a>
            <button onClick={() => setOpen(o => !o)} id="hamburger"
              style={{ display: 'none', background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.2rem', padding: '4px' }}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '1.2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {LINKS.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} style={({ isActive }) => ({
                textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700,
                color: isActive ? 'var(--rose)' : 'var(--text)',
              })}>
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
      <style>{`
        @media (max-width: 768px) {
          .desk-links { display: none !important; }
          #hire-btn { display: none !important; }
          #hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
