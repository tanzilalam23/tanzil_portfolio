import React from 'react';
import '../style.css'; // Ensure your flip + glow styles are in this file

const projects = [
  {
    title: 'Crypto Website',
    description:
      'Luxury, glassmorphic-style crypto trading site with animations and Web3 onboarding.',
    tech: ['HTML', 'CSS', 'TypeScript'],
    link: 'https://github.com/Jasleen-05/crypto-website-jasleen',
  },
  {
    title: 'Web Portfolio',
    description:
      'Personal portfolio built using React with 3D Spline, dark mode, and project flips.',
    tech: ['React', 'Tailwind CSS', 'JavaScript','HTML'],
    link: 'https://github.com/Jasleen-05/Web-Portfolio',
  },
  {
    title: 'AURA – Women’s Safety App',
    description:
      'Real-time AR scanning, voice SOS, emotion recognition, AI shield & legal help.',
    tech: ['Android', 'Kotlin', 'XML'],
    link: 'https://github.com/Jasleen-05/Aura',
  },
  {
    title: 'Property Price Predictor',
    description:
      'ML model predicting property rates using trend analysis and linear regression.',
    tech: ['Python', 'ML', 'Linear Regression'],
    link: 'https://github.com/Jasleen-05/Property-Price-Prediction',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Predicts potential customer loss using behavioral analytics and unsupervised learning.',
    tech: ['Python', 'ML', 'Unsupervised Learning'],
    link: 'https://github.com/Jasleen-05/Customer-Churn-Prediction',
  },
  {
    title: 'Early Disease Detection',
    description:
      'Analyzes patient data to detect potential diseases using predictive modeling.',
    tech: ['Healthcare', 'ML', 'Data Science', 'Python'],
    link: 'https://github.com/Jasleen-05/Early-Disease-Detection',
  },
  {
    title: 'E-Bidding Website',
    description:
      'Bid-based platform using HTML, CSS, and JavaScript for dynamic auction functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Jasleen-05/E-bidding',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-16">
        <h3 className="text-3xl font-bold text-purple-600 mb-10 text-center">Projects</h3>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                {/* Front */}
                <div className="flip-front project-bubble">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div className="flip-back">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;