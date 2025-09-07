import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section id="about" className="py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold mb-10 text-center" style={{ color: 'rgb(0,255,186)' }}>
          About Me
        </h3>

        <div className="rounded-2xl bg-[rgba(17,24,39,0.8)] dark:bg-[rgba(17,24,39,0.8)] border border-[rgba(37,40,131,0.5)] shadow-xl transition-all duration-300 hover:scale-[1.02] p-8 max-w-4xl mx-auto text-left">
          
          <p className="text-lg leading-relaxed text-white">
            I'm <span className="font-semibold" style={{ color: "rgb(0,255,186)" }}>Mohammad Tanzil Alam</span>, a Data Engineer with 4+ years of experience building 
            cloud-native data platforms, distributed ETL pipelines, and AI-powered analytics solutions. 
            I am <span className="font-medium" style={{ color: "rgb(0,255,186)" }}>AWS Certified</span> with expertise in 
            <span style={{ color: "rgb(0,255,186)" }}> Python, SQL, PySpark, and Terraform</span>, 
            and experienced in designing AI-driven applications with 
            <span style={{ color: "rgb(0,255,186)" }}> Large Language Models (LLMs), semantic search, and vector databases (FAISS)</span>.
          </p>

          <p className="text-lg leading-relaxed mt-4 text-white">
            I have delivered impactful projects such as 
            <span style={{ color: "rgb(0,255,186)" }}> automated KPI pipelines</span>, 
            real-time reporting systems, and 
            <span style={{ color: "rgb(0,255,186)" }}> NLP-based healthcare data processing</span>. 
            My work leverages advanced techniques including 
            <span style={{ color: "rgb(0,255,186)" }}> Retrieval-Augmented Generation (RAG), semantic embeddings</span>, and 
            <span style={{ color: "rgb(0,255,186)" }}> AI-powered dashboards </span> 
            to unlock new analytics use cases and accelerate digital transformation.
          </p>

          <p className="text-lg leading-relaxed mt-4 text-white">
            Beyond engineering, I mentor aspiring data engineers, 
            design interactive <span style={{ color: "rgb(0,255,186)" }}>AI applications</span>, and pursue certifications in 
            <span style={{ color: "rgb(0,255,186)" }}> machine learning and cloud engineering</span>. 
            My toolkit extends to <span style={{ color: "rgb(0,255,186)" }}>Docker, Streamlit, Git, and modern DevOps practices</span>, 
            enabling me to bridge data engineering with scalable deployments.
          </p>

          <br />

          {/* ✅ Resume Download Button */}
          <div className="text-center">
            <a
              href="/Tanzil_Alam_CV.pdf"
              download
              className="inline-block bg-[rgb(37,40,131)] text-white px-6 py-2 rounded-full shadow-md hover:bg-[rgb(0,255,186)] transition"
            >
              📝 Download Resume
            </a>
          </div>
          
          {/* Floating particles for extra visual flair */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => {
              const left = Math.random() * 100; // 0% to 100%
              const top = Math.random() * 100;  // 0% to 100%
              const delay = Math.random() * 2;  // 0s to 2s
              const duration = 1.5 + Math.random() * 2; // 1.5s to 3.5s
              const size = 1 + Math.random() * 2; // 1px to 3px
              const opacity = 0.2 + Math.random() * 0.3; // 0.2 to 0.5

              return (
              <div
                  key={i}
                  className="absolute bg-green-400 rounded-full animate-pulse"
                  style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: opacity,
                  }}
              ></div>
              );
          })}
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default About;