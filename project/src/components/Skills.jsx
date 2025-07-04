import React from 'react';

const skills = [
  'Python', 'Java', 'C++', 'Kotlin', 'XML',
  'Android Studio', 'Ethical Hacking', 'MySQL',
  'Machine Learning', 'HTML', 'CSS', 'JavaScript'
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 text-center bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-10">Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="skill-tag"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;