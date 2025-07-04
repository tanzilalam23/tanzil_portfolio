import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-10 text-center">
          About Me
        </h3>

        {/* Glassmorphic tile */}
        <div className="rounded-2xl bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] p-8">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-left text-gray-800 dark:text-white">
            I’m a B.Tech CSE student at Amity University Raipur (2022–2026),
            passionate about AI, cybersecurity, and smart innovations.
            I’ve won multiple hackathons including the Internal SIH 2024 and
            Kalinga Hackathon 2025. I enjoy building solutions to real-world problems like
            women’s safety, smart agriculture, and healthcare analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;