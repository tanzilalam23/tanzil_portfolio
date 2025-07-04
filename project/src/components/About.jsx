import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-16">
      <h3 className="text-3xl font-bold text-purple-600 mb-10 text-center">About Me</h3>

      <div className="rounded-2xl bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] p-8 max-w-4xl mx-auto text-left">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-white">
          I’m <span className="font-semibold text-purple-600">Jasleen Kaur Matharoo</span>, a dedicated B.Tech Computer Science student at Amity University Raipur (2022–2026), with a strong foundation in 
          <span className="font-medium text-purple-500"> AI, Android development, ethical hacking</span> and innovative software solutions. I am passionate about turning real-world challenges into impactful tech projects.
        </p>

        <p className="text-lg leading-relaxed mt-4 text-gray-800 dark:text-white">
          I've developed smart systems including <span className="font-medium">AURA – an AI-driven women’s safety ecosystem</span>, and have won notable hackathons like the 
          <span className="font-semibold"> Internal SIH 2024</span> and 
          <span className="font-semibold"> Kalinga Hackathon 2025</span>. I enjoy building things that matter—whether it’s smart agriculture, predictive healthcare, or crime prevention.
        </p>

        <p className="text-lg leading-relaxed mt-4 text-gray-800 dark:text-white">
          Outside of coding, I actively pursue learning through certifications in 
          <span className="italic">machine learning, ethical hacking</span>, and Android development. My toolkit includes <strong>Python, Kotlin, SQL, C++, Android Studio</strong> and more.
        </p>
      </div>
    </section>
  );
};

export default About;