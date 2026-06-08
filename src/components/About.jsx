import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const About = () => {
  const { lang, t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <section id="about" className="py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold mb-10 text-center" style={{ color: 'rgb(0,255,186)' }}>
          {t.about.heading}
        </h3>

        <div className="rounded-2xl bg-[rgba(17,24,39,0.8)] dark:bg-[rgba(17,24,39,0.8)] border border-[rgba(37,40,131,0.5)] shadow-xl transition-all duration-300 hover:scale-[1.02] p-8 max-w-4xl mx-auto text-left relative">

          {/* English */}
          {lang === 'en' && (
            <>
              <p className="text-lg leading-relaxed text-white">
                I'm <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Mohammad Tanzil Alam</span> — a
                Data & Software Engineer based in Wuppertal, Germany, with 4+ years of hands-on experience
                across cloud infrastructure, data systems, and software engineering.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                I started as a <span style={{ color: 'rgb(0,255,186)' }}>Software Engineer</span>, building
                CI/CD pipelines for 60+ clients, automating AWS microservice deployments with
                <span style={{ color: 'rgb(0,255,186)' }}> Terraform</span> across 13+ ISPs, and mentoring
                junior developers — so my data engineering work has always been grounded in solid software
                fundamentals. That background means I don't just build pipelines; I build them to last.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                On the data side, I design and deliver end-to-end
                <span style={{ color: 'rgb(0,255,186)' }}> ETL/ELT pipelines</span>, AWS cloud infrastructure,
                and GDPR-compliant data architectures — most recently at
                <span style={{ color: 'rgb(0,255,186)' }}> Roche Diagnostics</span> and
                <span style={{ color: 'rgb(0,255,186)' }}> Arcondis GmbH</span> in healthcare and consulting.
                At Arcondis, I automated an ERP–CRM ingestion pipeline that saved
                <span style={{ color: 'rgb(0,255,186)' }}> 20+ hours of manual work monthly</span>. At Roche,
                I reduced data access time by <span style={{ color: 'rgb(0,255,186)' }}>60%</span> and achieved
                <span style={{ color: 'rgb(0,255,186)' }}> 99.5% accuracy</span> processing clinical NLP data.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                I'm <span style={{ color: 'rgb(0,255,186)' }}>AWS Certified</span>, hold an M.Sc. in Data
                Engineering from Jacobs University (full merit scholarship, top 5% Microsoft Tech Associate),
                speak <span style={{ color: 'rgb(0,255,186)' }}>German at B2</span> level, and hold an EU Blue Card.
                When a project genuinely calls for ML or AI —
                <span style={{ color: 'rgb(0,255,186)' }}> vector embeddings, RAG, NLP</span> — I bring it in.
                But I'm an engineer first, and I pick the right tool for the job.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                Outside of engineering, I <span style={{ color: 'rgb(0,255,186)' }}>mentor</span> bachelor's
                and master's students in data engineering, DevOps, and cloud computing. I learn fast,
                implement faster, and I'm always looking for the next hard problem to solve.
              </p>
            </>
          )}

          {/* German */}
          {lang === 'de' && (
            <>
              <p className="text-lg leading-relaxed text-white">
                Ich bin <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Mohammad Tanzil Alam</span> —
                Data & Software Engineer aus Wuppertal mit über 4 Jahren praktischer Erfahrung in
                Cloud-Infrastruktur, Datensystemen und Softwareentwicklung.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                Ich habe als <span style={{ color: 'rgb(0,255,186)' }}>Software Engineer</span> angefangen —
                CI/CD-Pipelines für 60+ Kunden aufgebaut, AWS-Microservice-Deployments mit
                <span style={{ color: 'rgb(0,255,186)' }}> Terraform</span> für 13+ ISPs automatisiert und
                Junior-Entwickler betreut. Meine Data-Engineering-Arbeit hat daher immer ein solides
                softwaretechnisches Fundament. Das bedeutet: Ich baue Pipelines nicht nur — ich baue sie so,
                dass sie halten.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                Im Bereich Data Engineering entwerfe und liefere ich durchgängige
                <span style={{ color: 'rgb(0,255,186)' }}> ETL/ELT-Pipelines</span>, AWS-Cloud-Infrastruktur
                und DSGVO-konforme Datenarchitekturen — zuletzt bei
                <span style={{ color: 'rgb(0,255,186)' }}> Roche Diagnostics</span> und
                <span style={{ color: 'rgb(0,255,186)' }}> Arcondis GmbH</span> im Gesundheits- und
                Beratungsbereich. Bei Arcondis habe ich eine ERP–CRM-Ingestionspipeline automatisiert und
                damit <span style={{ color: 'rgb(0,255,186)' }}>20+ Stunden manueller Arbeit pro Monat</span> eingespart.
                Bei Roche habe ich die Datenzugriffszeit um <span style={{ color: 'rgb(0,255,186)' }}>60%</span> reduziert
                und bei der Verarbeitung klinischer NLP-Daten eine Genauigkeit von
                <span style={{ color: 'rgb(0,255,186)' }}> 99,5%</span> erreicht.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                Ich bin <span style={{ color: 'rgb(0,255,186)' }}>AWS-zertifiziert</span>, habe einen M.Sc. in
                Data Engineering von der Jacobs University (Vollstipendium, Top 5% beim Microsoft Tech
                Associate), spreche <span style={{ color: 'rgb(0,255,186)' }}>Deutsch auf B2-Niveau</span> und
                besitze eine EU Blue Card. Wenn ein Projekt ML oder KI erfordert —
                <span style={{ color: 'rgb(0,255,186)' }}> Vektoreinbettungen, RAG, NLP</span> — setze ich
                diese gezielt ein. Aber ich bin zuerst Ingenieur und wähle das richtige Werkzeug für die
                jeweilige Aufgabe.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                Neben meiner Ingenieurtätigkeit <span style={{ color: 'rgb(0,255,186)' }}>begleite ich</span> Bachelor-
                und Masterstudierende in den Bereichen Data Engineering, DevOps und Cloud Computing. Ich
                lerne schnell, setze schneller um — und suche immer nach dem nächsten schwierigen Problem.
              </p>
            </>
          )}

          {/* ✅ Play Video Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: 'rgb(37,40,131)',
                color: 'rgb(0,255,186)',
                border: '1px solid rgb(0,255,186)',
                boxShadow: '0 0 12px rgba(0,255,186,0.3)',
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
              <span style={{ fontSize: '1.2rem' }}>▶</span>
              {lang === 'en' ? 'Watch My Intro' : 'Intro-Video ansehen'}
            </button>
          </div>

          <br />

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


      )}
    </div>
  );
};

export default About;
