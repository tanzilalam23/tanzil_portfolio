import React from 'react';
import '../style.css'; // Ensure typewriter styles are included

const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* ✅ Background 3D */}
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-OBjZ6qzl9ibeNpfO1HfvYb7u/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full z-0"
        allow="autoplay; fullscreen"
        title="3D Hero Background"
      ></iframe>

      {/* ✅ Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 pointer-events-none">
        <div className="pointer-events-auto space-y-6 max-w-full">
          <h2 className="text-3xl md:text-6xl font-bold 
            bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
            bg-clip-text text-transparent dark:bg-none dark:text-white drop-shadow-sm">
            Hi, I'm Jasleen Kaur Matharoo
          </h2>

          {/* Desktop Typewriter (hidden on mobile) */}
<p className="typewriter hidden sm:inline-block text-lg sm:text-xl text-[#4682b4] dark:text-gray-200">
  AI Innovator | Ethical Hacker | Android Developer | Hackathon Winner
</p>

{/* Mobile Version (only visible on mobile) */}
<p className="block sm:hidden text-lg text-[#4682b4] dark:text-gray-200 leading-snug text-center">
  AI Innovator <br />
  Ethical Hacker <br />
  Android Developer <br />
  Hackathon Winner</p>

          <div className="flex flex-wrap justify-center gap-6 text-lg text-white underline drop-shadow-sm mt-4">
            <a href="https://github.com/Jasleen-05" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jasleenkaurmatharoo" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/jasleenkaur05/" target="_blank" rel="noreferrer">Leetcode</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;