import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'TanzilGPT Chatbot',
    description: 'AI-powered chatbot using Llama LLM and RAG for context-aware responses.',
    tech: ['Python', 'Llama LLM', 'RAG', 'Streamlit', 'Hugging Face'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/TanzilGPT_Chatbot' },
      { label: 'Live Demo', url: 'https://github.com/tanzilalam23/TanzilGPT_Chatbot/blob/main/assets/example_interaction.gif' },
    ],
  },
  {
    title: 'Web Portfolio',
    description: 'Personal portfolio built using React with 3D Spline, dark mode, and project flips.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Jasleen-05/Web-Portfolio/tree/main' },
      { label: 'Live Demo', url: 'https://jasleen-web-portfolio.netlify.app/' },
      { label: 'GitHub-React', url: 'https://github.com/Jasleen-05/Web-Portfolio' },
      { label: 'Live Demo-React', url: 'https://react-jasleen-web-portfolio.netlify.app/' },
    ],
  },
  {
    title: 'Data Drift Detection',
    description: 'Detecting data drift in machine learning models using statistical methods and visualization techniques.',
    tech: ['NLP','RegEx','Python', 'Word Embedding', 'Vectorization', 'nltk', 'sklearn','gensim','pickle'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/Detecting-Data-Drift-_Automated' },
    ],
  },
  {
    title: 'iPhone Price Prediction KNN-ML',
    description: 'Predicting iPhone prices using KNN regression with feature engineering and hyperparameter tuning.',
    tech: ['Python', 'Classifier', 'Confusion Matrix', 'sklearn','metrics score'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/KNN-ML-project' },
    ],
  },
  {
    title: 'NASA Battery Data Prediction',
    description: 'Predicting battery life and performance using machine learning on NASA battery datasets.',
    tech: ['Python', 'sklearn', 'pandas', 'numpy', 'matplotlib'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/NASA-Battery-project' },
    ],
  },
  {
    title: 'Drug Classification using K fold',
    description: 'Classifying drugs based on their features using K-Neighbors Classifier and K-Fold cross-validation.',
    tech: ['Feature Scaling', 'K-Neighbors Classifier','Python', 'sklearn', 'StandardScaler', 'seaborn', 'matplotlib'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/Drug-Classification' },
    ],
  },
  {
    title: 'ATS Resume Screening App',
    description: 'Developed a resume screening app using Google Gemini Gen AI to match resumes with job descriptions.',
    tech: ['Gemini LLM', 'Gen AI', 'StandardScaler', 'streamlit', 'pdf2image'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/ATS' },
    ],
  },
  {
    title: 'Supply Chain Management Data Analysis',
    description: 'Analyzed supply chain data to optimize operations and improve efficiency using data visualization and statistical methods.',
    tech: ['EDA', 'pandas', 'matplotlib', 'seaborn', 'RFM model', 'K-means clustering'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/DASCM' },
      { label: 'Report', url: 'https://github.com/tanzilalam23/DASCM/blob/main/DASCM_Report.pdf' },
    ],
  },
  {
    title: 'Real-Time Vehicular Tracking System using IoT',
    description: 'Developed a real-time vehicular tracking system using IoT devices and SQL integration for monitoring and data analysis.',
    tech: ['Raspberry Pi', 'GNSS','SQL', 'Real-Time Tracking (GPS)', 'Data Analysis'],
    links: [
      { label: 'GitHub', url: 'https://github.com/tanzilalam23/IoT' },
      { label: 'Report', url: 'https://github.com/tanzilalam23/IoT/blob/main/Sensor_Networks_IoT.pdf' },
    ],
  },
];

// Floating particles for background animation
const PARTICLES = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 4,
  size: 1 + Math.random() * 2,
  opacity: 0.1 + Math.random() * 0.2,
}));

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {PARTICLES.map((p) => (
      <div
        key={p.id}
        className="absolute bg-cyan-400 rounded-full animate-pulse"
        style={{
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          opacity: p.opacity,
        }}
      />
    ))}
  </div>
);

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group perspective-1000 transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-10 opacity-0 scale-95'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl 
          bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm 
          border border-cyan-400/30 p-6 shadow-xl
          hover:shadow-cyan-400/20 hover:shadow-2xl transition-all duration-300">
          
          <div className="h-full flex flex-col">
            <h4 className="text-xl font-bold text-cyan-400 mb-3 leading-tight">
              {project.title}
            </h4>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 9).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 
                    border border-cyan-400/30 font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 8 && (
                <span className="text-xs px-3 py-1 rounded-full bg-gray-700/50 text-gray-400 
                  border border-gray-600/50 font-medium">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl rotate-y-180
          bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm 
          border border-cyan-400/50 p-6 shadow-xl
          flex flex-col items-center justify-center gap-4">
          
          <h4 className="text-lg font-bold text-cyan-400 text-center mb-2">
            {project.title}
          </h4>
          
          <div className="flex flex-col gap-3 w-full">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-xl text-center font-semibold
                  bg-cyan-400/20 text-cyan-300 border border-cyan-400/40
                  hover:bg-cyan-400 hover:text-gray-900 
                  transition-all duration-300 transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="text-xs text-gray-400 text-center mt-2">
            Hover to see details
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section id="projects" className="py-20 relative overflow-hidden">
        <FloatingParticles />
        
        <div className="relative z-10">
          <div className="container mx-auto px-6 md:px-16 max-w-7xl">
            <h3 className="text-4xl font-bold mb-16 text-center drop-shadow-lg" style={{ color: 'rgb(0,255,186)' }}>
                Featured Projects
            </h3>


            {/* Grid container for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[rgb(0,255,186)] shadow-[0_0_15px_rgba(37,40,131,0.8)] transition-transform duration-300 hover:scale-105"
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>


            {/* Bottom decoration */}
           <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[rgb(37,40,131)]"></div>
                <span>More projects on GitHub</span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[rgb(37,40,131)]"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Projects;