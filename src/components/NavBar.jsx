import React, { useEffect, useState } from 'react';

const Navbar = () => {
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
    <nav className="p-4 shadow flex flex-wrap justify-between items-center sticky top-0 z-50"
         style={{ backgroundColor: 'rgb(17,24,39)' }}>
      <h1
        className="text-xl font-bold neon-text cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Mohammad Tanzil Alam
      </h1>



      <div className="flex flex-wrap items-center justify-end gap-2 md:space-x-4">
        {/* Navigation Links */}
        <a href="#about" className="nav-link" style={{ color: 'rgb(0,255,186)' }}>About</a>
        <a href="#career" className="nav-link" style={{ color: 'rgb(0,255,186)' }}>Career</a>
        <a href="#projects" className="nav-link" style={{ color: 'rgb(0,255,186)' }}>Projects</a>
        <a href="#skills" className="nav-link" style={{ color: 'rgb(0,255,186)' }}>Skills</a>
        <a href="#contactOptions" className="nav-link" style={{ color: 'rgb(0,255,186)' }}>Contact</a>

        
      </div>
    </nav>
  );
};

export default Navbar;
