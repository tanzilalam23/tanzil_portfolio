import React from 'react';
import '../style.css'; // Make sure this includes your typewriter animation styles

const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* ✅ Spline 3D Background */}
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-OBjZ6qzl9ibeNpfO1HfvYb7u/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full z-0"
        allow="autoplay; fullscreen"
        title="3D Hero Background"
      ></iframe>

      {/* ✅ Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 pointer-events-none">
        <div className="pointer-events-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold 
            bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
            bg-clip-text text-transparent dark:bg-none dark:text-white drop-shadow-sm">
            Hi, I'm Jasleen Kaur Matharoo
          </h2>

          {/* ✅ Typewriter text */}
          <p className="typewriter text-xl text-[#4682b4] dark:text-gray-200">
            AI Innovator | Ethical Hacker | Android Developer | Hackathon Winner
          </p>

          {/* ✅ Links */}
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