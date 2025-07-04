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
    <nav className="p-4 bg-white dark:bg-gray-800 shadow flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-purple-600 dark:text-purple-400">
        Jasleen Kaur
      </h1>

      <div className="flex items-center space-x-4">
        {/* Navigation Links */}
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#contact" className="nav-link">Contact</a>

        {/* 🌞🌙 Theme Toggle */}
        <div className="flex items-center space-x-2 ml-2">
          <span>🌞</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="theme-toggle"
              checked={isDark}
              onChange={() => setIsDark(!isDark)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition-all"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform transform peer-checked:translate-x-full"></div>
          </label>
          <span>🌙</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;