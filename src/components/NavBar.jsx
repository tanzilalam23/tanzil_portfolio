import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav
      className="p-4 shadow flex flex-wrap justify-between items-center sticky top-0 z-50"
      style={{ backgroundColor: 'rgb(17,24,39)' }}
    >
      <h1
        className="text-xl font-bold neon-text cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Mohammad Tanzil Alam
      </h1>

      <div className="flex flex-wrap items-center justify-end gap-2 md:space-x-4">
        {/* ✅ Clean Language Toggle — no Google, no popups, no banners */}
        <button
          onClick={toggleLang}
          title={lang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'}
          style={{
            backgroundColor: 'rgb(37,40,131)',
            color: 'rgb(0,255,186)',
            border: '1px solid rgb(0,255,186)',
            boxShadow: '0 0 8px rgba(0,255,186,0.4)',
            borderRadius: '9999px',
            padding: '0.35rem 0.85rem',
            fontSize: '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgb(0,255,186)';
            e.currentTarget.style.color = 'rgb(17,24,39)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'rgb(37,40,131)';
            e.currentTarget.style.color = 'rgb(0,255,186)';
          }}
        >
          🌐 {lang === 'en' ? 'DE' : 'EN'}
        </button>
        {/* Navigation Links */}
        <a href="#about"          className="nav-link" style={{ color: 'rgb(0,255,186)' }}>{t.nav.about}</a>
        <a href="#career"         className="nav-link" style={{ color: 'rgb(0,255,186)' }}>{t.nav.career}</a>
        <a href="#projects"       className="nav-link" style={{ color: 'rgb(0,255,186)' }}>{t.nav.projects}</a>
        <a href="#skills"         className="nav-link" style={{ color: 'rgb(0,255,186)' }}>{t.nav.skills}</a>
        <a href="#contactOptions" className="nav-link" style={{ color: 'rgb(0,255,186)' }}>{t.nav.contact}</a>

        
      </div>
    </nav>
  );
};

export default Navbar;