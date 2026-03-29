import React from 'react';
import { useLanguage } from './LanguageContext';

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section id="about" className="py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold mb-10 text-center" style={{ color: 'rgb(0,255,186)' }}>
          {t.about.heading}
        </h3>

        <div className="rounded-2xl bg-[rgba(17,24,39,0.8)] dark:bg-[rgba(17,24,39,0.8)] border border-[rgba(37,40,131,0.5)] shadow-xl transition-all duration-300 hover:scale-[1.02] p-8 max-w-4xl mx-auto text-left">

          {/* ── English paragraphs ── */}
          {lang === 'en' && (
            <>
              <p className="text-lg leading-relaxed text-white">
                I'm <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Mohammad Tanzil Alam</span>, a Data Engineer with 4+ years of experience building
                cloud-native data platforms, distributed ETL pipelines, and AI-powered analytics solutions.
                I am <span className="font-medium" style={{ color: 'rgb(0,255,186)' }}>AWS Certified</span> with expertise in
                <span style={{ color: 'rgb(0,255,186)' }}> Python, SQL, PySpark, and Terraform</span>,
                and experienced in designing AI-driven applications with
                <span style={{ color: 'rgb(0,255,186)' }}> Large Language Models (LLMs), semantic search, and vector databases (FAISS)</span>.
              </p>

              <p className="text-lg leading-relaxed mt-4 text-white">
                I have delivered impactful projects such as
                <span style={{ color: 'rgb(0,255,186)' }}> automated KPI pipelines</span>,
                real-time reporting systems, and
                <span style={{ color: 'rgb(0,255,186)' }}> NLP-based healthcare data processing</span>.
                My work leverages advanced techniques including
                <span style={{ color: 'rgb(0,255,186)' }}> Retrieval-Augmented Generation (RAG), semantic embeddings</span>, and
                <span style={{ color: 'rgb(0,255,186)' }}> AI-powered dashboards </span>
                to unlock new analytics use cases and accelerate digital transformation.
              </p>

              <p className="text-lg leading-relaxed mt-4 text-white">
                Beyond engineering, I mentor aspiring data engineers,
                design interactive <span style={{ color: 'rgb(0,255,186)' }}>AI applications</span>, and pursue certifications in
                <span style={{ color: 'rgb(0,255,186)' }}> machine learning and cloud engineering</span>.
                My toolkit extends to <span style={{ color: 'rgb(0,255,186)' }}>Docker, Streamlit, Git, and modern DevOps practices</span>,
                enabling me to bridge data engineering with scalable deployments.
              </p>
            </>
          )}

          {/* ── German paragraphs ── */}
          {lang === 'de' && (
            <>
              <p className="text-lg leading-relaxed text-white">
                Ich bin <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Mohammad Tanzil Alam</span>, ein Dateningenieur mit über 4 Jahren Erfahrung im Aufbau
                cloudnativer Datenplattformen, verteilter ETL-Pipelines und KI-gestützter Analyselösungen.
                Ich bin <span className="font-medium" style={{ color: 'rgb(0,255,186)' }}>AWS-zertifiziert</span> mit Expertise in
                <span style={{ color: 'rgb(0,255,186)' }}> Python, SQL, PySpark und Terraform</span>,
                und erfahren in der Entwicklung KI-gesteuerter Anwendungen mit
                <span style={{ color: 'rgb(0,255,186)' }}> großen Sprachmodellen (LLMs), semantischer Suche und Vektordatenbanken (FAISS)</span>.
              </p>

              <p className="text-lg leading-relaxed mt-4 text-white">
                Ich habe wirkungsvolle Projekte realisiert, darunter
                <span style={{ color: 'rgb(0,255,186)' }}> automatisierte KPI-Pipelines</span>,
                Echtzeit-Berichtssysteme und
                <span style={{ color: 'rgb(0,255,186)' }}> NLP-basierte Gesundheitsdatenverarbeitung</span>.
                Meine Arbeit nutzt fortschrittliche Techniken wie
                <span style={{ color: 'rgb(0,255,186)' }}> Retrieval-Augmented Generation (RAG), semantische Einbettungen</span> und
                <span style={{ color: 'rgb(0,255,186)' }}> KI-gestützte Dashboards</span>,
                um neue Analyseanwendungsfälle zu erschließen und die digitale Transformation zu beschleunigen.
              </p>

              <p className="text-lg leading-relaxed mt-4 text-white">
                Neben meiner Ingenieurtätigkeit betreue ich angehende Dateningenieure,
                entwickle interaktive <span style={{ color: 'rgb(0,255,186)' }}>KI-Anwendungen</span> und strebe Zertifizierungen in
                <span style={{ color: 'rgb(0,255,186)' }}> Machine Learning und Cloud Engineering</span> an.
                Mein Werkzeugkasten umfasst <span style={{ color: 'rgb(0,255,186)' }}>Docker, Streamlit, Git und moderne DevOps-Praktiken</span>,
                die es mir ermöglichen, Data Engineering mit skalierbaren Deployments zu verbinden.
              </p>
            </>
          )}

          <br />

          {/* ✅ Both CV buttons side by side */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* English CV */}
            <a
              href="/Mohd_Tanzil_CV.pdf"
              download
              className="inline-block px-6 py-2 rounded-full shadow-md transition"
              style={{
                backgroundColor: 'rgb(37,40,131)',
                color: 'rgb(0,255,186)',
                border: '1px solid rgb(0,255,186)',
                boxShadow: '0 0 8px rgba(0,255,186,0.3)',
                textDecoration: 'none',
                fontWeight: '500',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgb(0,255,186)';
                e.currentTarget.style.color = 'rgb(17,24,39)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgb(37,40,131)';
                e.currentTarget.style.color = 'rgb(0,255,186)';
              }}
            >
              📝 {lang === 'en' ? 'Download Resume (EN)' : 'Lebenslauf herunterladen (EN)'}
            </a>

            {/* German CV */}
            <a
              href="/Mohd_Tanzil_lebenslauf.pdf"
              download
              className="inline-block px-6 py-2 rounded-full shadow-md transition"
              style={{
                backgroundColor: 'rgb(37,40,131)',
                color: 'rgb(0,255,186)',
                border: '1px solid rgb(0,255,186)',
                boxShadow: '0 0 8px rgba(0,255,186,0.3)',
                textDecoration: 'none',
                fontWeight: '500',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgb(0,255,186)';
                e.currentTarget.style.color = 'rgb(17,24,39)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgb(37,40,131)';
                e.currentTarget.style.color = 'rgb(0,255,186)';
              }}
            >
              📄 {lang === 'en' ? 'Download Resume (DE)' : 'Lebenslauf herunterladen (DE)'}
            </a>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(40)].map((_, i) => {
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              const delay = Math.random() * 2;
              const duration = 1.5 + Math.random() * 2;
              const size = 1 + Math.random() * 2;
              const opacity = 0.2 + Math.random() * 0.3;
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
                    opacity,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;