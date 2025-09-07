import React, { useEffect, useState } from "react";
import "../style.css";

// Typewriter / cycling roles component for mobile
const TypewriterRoles = ({ roles, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [roles, interval]);

  return (
    <p className="text-lg text-white dark:text-gray-200 font-semibold drop-shadow-md">
      {roles[currentIndex]}
    </p>
  );
};

const Hero = () => {
  const roles = [
    "Data Engineer",
    "Gen AI Engineer",
    "Software Engineer",
    "AWS Cloud Practitioner",
  ];

  return (
    <header className="relative h-screen overflow-x-hidden overflow-y-auto">
      {/* ✅ Background 3D orb */}
      <iframe
        src="https://my.spline.design/robotindatacentercopy-NeosdgPsHEW8oajbotf4kS5v/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none sm:pointer-events-auto"
        allow="autoplay; fullscreen"
        title="3D Hero Background"
      />


      {/* ✅ Name Above Robot */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto text-center px-4"
        style={{ top: "10%" }}
      >
        <h2
          className="text-3xl md:text-6xl font-bold 
            bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 
            bg-clip-text text-transparent dark:text-white drop-shadow-lg
            whitespace-normal md:whitespace-nowrap"
        >
          Hi, I'm Mohammad Tanzil Alam
        </h2>
      </div>

      {/* ✅ Roles at Robot Base */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto text-center">
        {/* Desktop Typewriter / static roles */}
        <p className="hidden sm:inline-block text-lg sm:text-xl text-white dark:text-gray-200 drop-shadow-md">
          {roles.join(" | ")}
        </p>

        {/* Mobile Version with cycling typewriter effect */}
        <div className="block sm:hidden mt-2">
          <TypewriterRoles roles={roles} interval={2000} />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-lg text-white underline drop-shadow-sm mt-4">
          <a
            href="https://github.com/tanzilalam23"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-tanzil-alam/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
