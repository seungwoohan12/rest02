import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: '홈', href: '#hero' },
  { label: '서비스', href: '#services' },
  { label: '포트폴리오', href: '#portfolio' },
  { label: '팀', href: '#team' },
  { label: '회사 소개', href: '#about' },
  { label: '연락처', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#hero" onClick={() => handleNavClick('#hero')}>
          <span className="navbar__logo-mark">EG</span>
          <span className="navbar__logo-text">EVERGUIDE</span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn btn-primary navbar__cta"
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            >
              문의하기
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
