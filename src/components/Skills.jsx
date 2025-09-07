import React from 'react';

const skills = [
  { name: 'GenAI', logo: '/logos/genai.png' },
  { name: 'LLM', logo: '/logos/llm.png' },
  { name: 'RAG', logo: '/logos/rag.png' },
  { name: 'Python', logo: '/logos/python.png' },
  { name: 'Java', logo: '/logos/java.png' },
  { name: 'C++', logo: '/logos/c++.png' },
  { name: 'AWS', logo: '/logos/aws.png' },
  { name: 'parquet', logo: '/logos/para.png' },
  { name: 'Raspberry Pi', logo: '/logos/RaspberryPi.png' },
  { name: 'NLP', logo: '/logos/nlp.png' },
  { name: 'MySQL', logo: '/logos/mysql.png' },
  { name: 'Machine Learning', logo: '/logos/ml.png' },
  { name: 'Hugging Face', logo: '/logos/hf.png' },
  { name: 'Streamlit', logo: '/logos/streamlit.png' },
  { name: 'scikit-learn', logo: '/logos/skl.png' },
  { name: 'Docker', logo: '/logos/docker.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'REST API', logo: '/logos/rest.png' },
  { name: 'JIRA', logo: '/logos/jira.png' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 text-center bg-[rgb(25,32,50)] dark:bg-[rgb(17,24,39)]"
    >
      <div className="container mx-auto px-6 md:px-16">
        <h3
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 drop-shadow-lg"
          style={{ color: 'rgb(0,255,186)' }}
        >
          Skills
        </h3>

        <div className="rounded-2xl bg-[rgb(37,40,131)] border border-[rgb(0,255,186)] shadow-[0_0_25px_rgba(0,255,186,0.5)] transition-all duration-300 hover:scale-[1.02] p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Skills List */}
            <div className="flex flex-wrap justify-center gap-4 text-lg md:w-2/3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag flex items-center gap-2 px-3 py-1 rounded-full font-medium text-white transition-all duration-300"
                  style={{
                    backgroundColor: 'rgb(37,40,131)',
                    boxShadow: '0 0 6px rgb(0,255,186)',
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-icon-glow w-6 h-6"
                  />
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
                style={{ filter: 'drop-shadow(0 0 15px rgb(0,255,186))' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
