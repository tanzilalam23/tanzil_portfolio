import React from 'react';
import '../style.css';

const Hero = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* ✅ Spline 3D Model */}
      <iframe
        src="https://my.spline.design/robotfollowcursorforlandingpage-OBjZ6qzl9ibeNpfO1HfvYb7u/"
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="3D Hero Background"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none object-cover"
      ></iframe>

      {/* ✅ Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 md:px-6">
        <div className="pointer-events-auto space-y-4 sm:space-y-6 max-w-[90vw] md:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold 
            bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
            bg-clip-text text-transparent dark:bg-none dark:text-white drop-shadow-sm">
            Hi, I'm Jasleen Kaur Matharoo
          </h2>

          <p className="typewriter text-base sm:text-lg md:text-xl text-[#4682b4] dark:text-gray-200 leading-snug">
            AI Innovator | Ethical Hacker | Android Developer | Hackathon Winner
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg text-white underline drop-shadow-sm mt-2">
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