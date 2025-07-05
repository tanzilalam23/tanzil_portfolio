import React from 'react';

const skills = [
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'C++', logo: '/logos/c++.png' },
  { name: 'Kotlin', logo: '/logos/kotlin.png' },
  { name: 'XML', logo: '/logos/xml.png' },
  { name: 'Android Studio', logo: '/logos/android.png' },
  { name: 'Ethical Hacking', logo: '/logos/ethical.png' },
  { name: 'MySQL', logo: '/logos/mysql.png' },
  { name: 'Machine Learning', logo: '/logos/ml.png' },
  { name: 'HTML', logo: '/logos/html.png' },
  { name: 'CSS', logo: '/logos/css.png' },
  { name: 'JavaScript', logo: '/logos/js.png' },
  { name: 'React', logo: '/logos/react.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 text-center">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-10">Skills</h3>

        <div className="rounded-2xl bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Skills List */}
            <div className="flex flex-wrap justify-center gap-4 text-lg md:w-2/3">
              {skills.map((skill, index) => (
                  <span key={index} className="skill-tag flex items-center gap-2">
                <img src={skill.logo} alt={skill.name} className="skill-icon-glow"/>
                {skill.name}
              </span>
              ))}
            </div>

           {/* 3D Image */}
<div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
  <img
    src="/Tech-Stack.png"
    alt="3D Skill"
    className="w-32 h-32 bounce-glow"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;