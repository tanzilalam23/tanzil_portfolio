import React from 'react';

const skills = [
  'Python', 'Java', 'C++', 'Kotlin', 'XML',
  'Android Studio', 'Ethical Hacking', 'MySQL',
  'Machine Learning', 'HTML', 'CSS', 'JavaScript',
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 text-center">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-10">Skills</h3>

        <div className="rounded-2xl bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] p-8">
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;