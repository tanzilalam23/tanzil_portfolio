import React, { useEffect, useRef, useState } from 'react';

// Career data with PDF references
const careerJourney = [
  { 
    monthYear: 'June 2025', 
    role: 'Associate Consultant Data Engineer', 
    company: 'Arcondis GmbH', 
    description: 'Automated KPI pipelines, database scanning, and real-time reporting for stakeholders.',
    referenceFile: '/Arcondis_Ref.pdf'
  },
  { 
    monthYear: 'January 2024', 
    role: 'Online Tutor', 
    description: 'Designed training programs and led hands-on mentorship for data engineering and cloud.',
  },
  { 
    monthYear: 'June 2022', 
    role: 'Data Engineer', 
    company: 'Roche Diagnostics GmbH', 
    description: 'Built scalable ETL pipelines, NLP processing, and semantic search for medical data on AWS.',
    referenceFile: '/Roche_Ref.pdf'
  },
  { 
    monthYear: 'September 2021', 
    role: 'MSc in Data Engineering', 
    company: 'Jacobs University Bremen', 
    description: 'Completed Masters of Science with 100% Scholarship.'
  },
  { 
    monthYear: 'June 2019', 
    role: 'Software Engineer', 
    company: 'Fortress6 Technologies', 
    description: 'Optimized SQL, automated AWS deployments, set up CI/CD, and mentored junior developers.',
    referenceFile: '/Fortress6_Ref.pdf'
  },
   { 
    monthYear: 'August 2015', 
    role: 'B.Tech in Computer Science & Engineering', 
    company: 'Uttarakhand Technical University', 
    description: 'Completed Bachelor of Technology with distinction.'
  },
];

// Floating particles
const PARTICLES = Array.from({ length: 30 }).map((_, i) => {
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = Math.random() * 3;
  const duration = 2 + Math.random() * 3;
  const size = 1 + Math.random() * 2;
  const opacity = 0.1 + Math.random() * 0.3;
  return {
    id: i,
    style: {
      left: `${left}%`,
      top: `${top}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      opacity: opacity,
    },
  };
});

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {PARTICLES.map((p) => (
      <div
        key={p.id}
        className="absolute bg-green-400 rounded-full animate-pulse"
        style={p.style}
      />
    ))}
  </div>
);

const CareerJourney = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [modalContent, setModalContent] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          } else {
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        },
        { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(observer => observer?.disconnect());
  }, []);

  const getAnimationClasses = (index, isVisible) => {
    const isLeft = index % 2 === 0;
    if (isVisible) return 'translate-x-0 opacity-100 scale-100';
    return isLeft ? '-translate-x-16 opacity-0 scale-95' : 'translate-x-16 opacity-0 scale-95';
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section id="career" className="py-20 relative overflow-hidden">
        <FloatingParticles />

        <div className="relative z-10">
          <h3 className="text-4xl font-bold mb-16 text-center text-green-400 drop-shadow-lg">
            Career Journey
          </h3>

          <div className="relative max-w-6xl mx-auto px-6">
            {/* Glowing vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full 
              bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 
              shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            </div>

            <div className="space-y-16">
              {careerJourney.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isVisible = visibleItems.has(index);

                const cardContent = (
                  <div
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`bg-gray-800/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl 
                      border border-gray-600 transition-all duration-700 ease-out transform 
                      ${getAnimationClasses(index, isVisible)} 
                      hover:scale-[1.02] hover:shadow-xl
                      ${isLeft 
                        ? "hover:shadow-green-400/30 hover:border-green-400/50" 
                        : "hover:shadow-blue-400/30 hover:border-blue-400/50"
                      } w-full md:w-auto`}
                  >
                    <div className={isLeft ? "text-left md:text-right" : "text-left"}>
                      <p className="text-green-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                        {item.monthYear}
                      </p>
                      <h4 className="text-2xl font-bold text-white mb-3 leading-tight">
                        {item.role}
                      </h4>
                      <p className="text-blue-400 font-medium mb-4 text-lg">
                        @ {item.company}
                      </p>
                      <p className="text-gray-300 leading-relaxed text-base">
                        {item.description}
                      </p>

                      {item.referenceFile && (
                        <div className={`mt-6 flex ${isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
                          <button
                            onClick={() => setModalContent(item.referenceFile)}
                            className="px-6 py-3 bg-green-500/20 border border-green-400/40 rounded-xl 
                              text-green-400 text-sm font-medium hover:bg-green-500/30 
                              hover:border-green-400/60 transition-all duration-300 
                              flex items-center gap-2"
                          >
                            📄 View Reference
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );

                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center min-h-[200px]">
                    {/* Left side content */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-12 flex justify-start md:justify-end">
                      {isLeft && cardContent}
                    </div>

                   {/* Center marker */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                      <div
                        className={`w-8 h-8 rounded-full border-4 border-gray-900 transition-all duration-500 ${
                          isVisible ? 'scale-125' : 'scale-100'
                        }`}
                        style={{
                          background: isLeft 
                            ? 'linear-gradient(135deg, #22c55e, #10b981)' 
                            : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                          boxShadow: isLeft 
                            ? '0 0 20px rgba(34,197,94,0.8)' 
                            : '0 0 20px rgba(59,130,246,0.8)',
                        }}
                      >
                      </div>
                    </div>
                    

                    {/* Right side content */}
                    <div className="w-full md:w-1/2 pl-0 md:pl-12 flex justify-start md:justify-start">
                      {!isLeft && cardContent}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal PDF Viewer */}
        {modalContent && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
            <div className="bg-gray-900 border border-gray-700 text-gray-200 p-6 rounded-2xl 
              shadow-2xl max-w-5xl w-full h-[90vh] relative">
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl 
                  w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 
                  transition-colors z-10"
              >
                ✕
              </button>

              <h4 className="text-xl font-bold text-green-400 mb-4 pr-12">
                Reference Letter
              </h4>

              <div className="w-full h-[calc(100%-4rem)] bg-white rounded-lg overflow-hidden">
                <iframe 
                  src={modalContent} 
                  className="w-full h-full"
                  title="Reference Letter"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CareerJourney;
