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
                Based in <span style={{ color: 'rgb(0,255,186)' }}>Wuppertal, Germany</span>, I bring over 4 years of hands-on experience transforming fragmented, unstructured data into high-performance, intelligent ecosystem foundations. My career bridges three core pillars: <span style={{ color: 'rgb(0,255,186)' }}>robust software engineering</span>, <span style={{ color: 'rgb(0,255,186)' }}>scalable cloud data management</span>, and <span style={{ color: 'rgb(0,255,186)' }}>customized Generative AI development</span>.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                I don't just build wrappers or call standard APIs—I engineer stable, highly optimized backend architectures from index preparation to low-latency deployment.
              </p>
          
              <h3 className="text-xl font-bold mt-6" style={{ color: 'rgb(0,255,186)' }}>🚀 What I Bring to the Table</h3>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">1. Solid Software & Cloud Foundations</h4>
                <p className="text-lg leading-relaxed mt-1 text-white">
                  I started deep in the software layer—automating AWS microservice infrastructures using <span style={{ color: 'rgb(0,255,186)' }}>Terraform (IaC)</span> across 13+ ISPs, building custom <span style={{ color: 'rgb(0,255,186)' }}>CI/CD deployment automation pipelines</span> for 60+ external clients, and mentoring engineering teams. Because my data and AI work is grounded in these production software fundamentals, every system I build is highly stable, maintainable, and built for scale.
                </p>
              </div>
          
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">2. Enterprise Data & Semantic Engineering</h4>
                <p className="text-lg leading-relaxed mt-1 text-white">
                  In my engineering roles at <span style={{ color: 'rgb(0,255,186)' }}>Roche Diagnostics</span> and <span style={{ color: 'rgb(0,255,186)' }}>Arcondis GmbH</span>, I solved complex data challenges in highly regulated, GxP-compliant environments.
                </p>
                <ul className="list-disc pl-6 mt-2 text-white">
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>At Arcondis:</span> I acted as the key technical liaison between the CTO and Managing Director, translating technical requirements to secure executive buy-in for zero-cost cloud structures while automating pipelines to save <span style={{ color: 'rgb(0,255,186)' }}>20+ hours of manual work monthly</span>.
                  </li>
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>At Roche:</span> I built automated data drift detection architectures for core clinical NLP systems and spearheaded an enterprise data initiative to digitalize unstructured oncology guidelines—leveraging <span style={{ color: 'rgb(0,255,186)' }}>SPARQL, SKOS</span>, and <span style={{ color: 'rgb(0,255,186)' }}>AWS serverless pipelines (Glue, Athena, S3)</span> to map complex text straight to <span style={{ color: 'rgb(0,255,186)' }}>SNOMED CT knowledge graphs</span>.
                  </li>
                </ul>
              </div>
          
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">3. Advanced Generative AI & Customized RAG Architecture (<span style={{ color: 'rgb(0,255,186)' }}>TANZILGPT</span>)</h4>
                <p className="text-lg leading-relaxed mt-1 text-white">
                  I actively design and build deep-tech AI tools from scratch. For my proprietary engine powering TANZILGPT, I engineered a localized, production-grade <span style={{ color: 'rgb(0,255,186)' }}>Retrieval-Augmented Generation (RAG)</span> lifecycle, handling both data preparation and real-time execution:
                </p>
                <ul className="list-disc pl-6 mt-2 text-white">
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>The Indexing & Chunking Engine:</span> Designed an intelligent text-processing pipeline in Python that extracts raw data from multi-format files (parsing nested Jupyter Notebook cells, PyMuPDF streams, and HTML structures). Implemented a custom chunking algorithm that detects semantic boundaries with strict word-overlap parameters, using <span style={{ color: 'rgb(0,255,186)' }}>MD5 cryptographic hashing</span> for structural text deduplication.
                  </li>
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Vector Storage & High-Performance Retrieval:</span> Developed vector-space embeddings utilizing normalized <span style={{ color: 'rgb(0,255,186)' }}>SentenceTransformers</span> mapped to optimized <span style={{ color: 'rgb(0,255,186)' }}>FAISS vector indexes</span>.
                  </li>
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>LLM Orchestration & Web Deployment:</span> Managed asynchronous low-latency inferencing through the cloud-based <span style={{ color: 'rgb(0,255,186)' }}>Groq API</span>. Built the front-end architecture using <span style={{ color: 'rgb(0,255,186)' }}>Streamlit</span> with advanced programmatic query-preprocessing rules, strict string-matching guardrails, session management, and custom web UI injection.
                  </li>
                </ul>
              </div>
          
              <h3 className="text-xl font-bold mt-6" style={{ color: 'rgb(0,255,186)' }}>🌐 My AI Chatbot</h3>
              <p className="text-lg leading-relaxed mt-2 text-white">
                👉 <span className="font-semibold">Interact with my Custom AI:</span> <a href="https://tanzilgptchatbot-xnar8e26wtwwhkuz3nhy7r.streamlit.app/" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color: 'rgb(0,255,186)' }}>Launch TANZILGPT Chatbot</a>
              </p>
              <div className="mt-2 p-3 rounded-lg border border-gray-700 bg-gray-900 bg-opacity-40 text-sm leading-relaxed text-gray-300">
                <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>💡 System Note:</span> Because this application is hosted on a free Streamlit Community Cloud instance, the server may go into "sleep mode" if it hasn't been queried recently. If the page appears inactive, simply click the <span className="font-semibold text-white">"Yes, wake this app up"</span> button on the screen. It will spin up the container and be ready to process your questions within a few seconds.
              </div>
          
              <h3 className="text-xl font-bold mt-6" style={{ color: 'rgb(0,255,186)' }}>📊 Quick Credentials</h3>
              <ul className="list-disc pl-6 mt-2 text-white text-lg leading-relaxed">
                <li className="mt-1"><span className="font-semibold">Education:</span> M.Sc. in Data Engineering from <span style={{ color: 'rgb(0,255,186)' }}>Jacobs (Constructor) University, Bremen</span> (Awarded 100% Academic Merit Scholarship).</li>
                <li className="mt-1"><span className="font-semibold">Certifications:</span> <span style={{ color: 'rgb(0,255,186)' }}>Microsoft Technology Associate</span> (Scored 96%, Top 5% Performance ranking).</li>
                <li className="mt-1"><span className="font-semibold">Leadership:</span> Technical Mentor guiding Master's thesis architecture projects for premier German research institutes like the <span style={{ color: 'rgb(0,255,186)' }}>Fraunhofer Institute</span>.</li>
                <li className="mt-1"><span className="font-semibold">Languages:</span> English (Fluent) | <span style={{ color: 'rgb(0,255,186)' }}>German (Professional B2 compliance completed)</span>.</li>
                <li className="mt-1"><span className="font-semibold">Status:</span> Holder of an <span style={{ color: 'rgb(0,255,186)' }}>EU Blue Card</span>, fully authorized for long-term technical roles in Germany.</li>
              </ul>
          
              <p className="text-lg font-medium leading-relaxed mt-6 italic" style={{ color: 'rgb(0,255,186)' }}>
                I learn fast, implement faster, and I am always looking for the next highly complex, ambiguous data or AI problem to solve.
              </p>
            </>
          )}
          
          {/* German */}
          {lang === 'de' && (
            <>
              <p className="text-lg leading-relaxed text-white">
                Mit Sitz in <span style={{ color: 'rgb(0,255,186)' }}>Wuppertal, Deutschland</span>, bringe ich über 4 Jahre praktische Erfahrung in der Transformation fragmentierter, unstrukturierter Daten in hochperformante, intelligente Ökosystem-Fundamente mit. Meine Karriere schlägt eine Brücke zwischen drei Kernsäulen: <span style={{ color: 'rgb(0,255,186)' }}>robuster Softwareentwicklung</span>, <span style={{ color: 'rgb(0,255,186)' }}>skalierbarem Cloud-Datenmanagement</span> und <span style={{ color: 'rgb(0,255,186)' }}>maßgeschneiderter Generative-AI-Entwicklung</span>.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-white">
                Ich baue nicht nur Wrapper oder rufe Standard-APIs auf — ich entwickle stabile, hochoptimierte Backend-Architekturen von der Indexvorbereitung bis zum Deployment mit geringer Latenz.
              </p>
          
              <h3 className="text-xl font-bold mt-6" style={{ color: 'rgb(0,255,186)' }}>🚀 Was ich mitbringe</h3>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">1. Solide Software- & Cloud-Fundamente</h4>
                <p className="text-lg leading-relaxed mt-1 text-white">
                  Ich habe tief in der Software-Schicht angefangen — Automatisierung von AWS-Mikroservice-Infrastrukturen mittels <span style={{ color: 'rgb(0,255,186)' }}>Terraform (IaC)</span> über 13+ ISPs hinweg, Aufbau maßgeschneiderter <span style={{ color: 'rgb(0,255,186)' }}>CI/CD-Deployment-Automatisierungspipelines</span> für 60+ externe Kunden sowie Mentoring von Entwicklungsteams. Da meine Data- und AI-Arbeit in diesen produktiven Software-Grundlagen verwurzelt ist, ist jedes von mir gebaute System hochgradig stabil, wartbar und für Skalierbarkeit ausgelegt.
                </p>
              </div>
          
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">2. Enterprise Data & Semantic Engineering</h4>
                <p className="text-lg leading-relaxed mt-1 text-white">
                  In meinen Rollen als Engineer bei <span style={{ color: 'rgb(0,255,186)' }}>Roche Diagnostics</span> and <span style={{ color: 'rgb(0,255,186)' }}>Arcondis GmbH</span> habe ich komplexe Datenherausforderungen in hochgradig regulierten, GxP-konformen Umgebungen gelöst.
                </p>
                <ul className="list-disc pl-6 mt-2 text-white">
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Bei Arcondis:</span> Ich fungierte als zentrales technisches Bindeglied zwischen dem CTO und dem Managing Director, übersetzte technische Anforderungen zur Sicherung des Management-Buy-Ins für kostenneutrale Cloud-Strukturen und automatisierte Pipelines, was monatlich <span style={{ color: 'rgb(0,255,186)' }}>20+ Stunden manueller Arbeit einsparte</span>.
                  </li>
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Bei Roche:</span> Ich habe automatisierte Datendrift-Erkennungsarchitekturen für klinische Kern-NLP-Systeme entwickelt und leitete eine Enterprise-Dateninitiative zur Digitalisierung unstrukturierter Onkologie-Richtlinien — unter Nutzung von <span style={{ color: 'rgb(0,255,186)' }}>SPARQL, SKOS</span> und <span style={{ color: 'rgb(0,255,186)' }}>serverlosen AWS-Pipelines (Glue, Athena, S3)</span>, um komplexe Texte direkt auf <span style={{ color: 'rgb(0,255,186)' }}>SNOMED-CT-Wissensgraphen</span> abzubilden.
                  </li>
                </ul>
              </div>
          
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">3. Fortgeschrittene Generative AI & Maßgeschneiderte RAG-Architektur (<span style={{ color: 'rgb(0,255,186)' }}>TANZILGPT</span>)</h4>
                <p className="text-lg leading-relaxed mt-1 text-white">
                  Ich konzipiere und baue Deep-Tech-AI-Tools aktiv von Grund auf neu. Für meine proprietäre Engine, die TANZILGPT antreibt, habe ich einen lokalisierten, produktionsreifen <span style={{ color: 'rgb(0,255,186)' }}>RAG-Lebenszyklus (Retrieval-Augmented Generation)</span> entwickelt, der sowohl die Datenaufbereitung als auch die Echtzeit-Ausführung übernimmt:
                </p>
                <ul className="list-disc pl-6 mt-2 text-white">
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Die Indexierungs- & Chunking-Engine:</span> Entwicklung einer intelligenten Textverarbeitungspipeline in Python, die Rohdaten aus Multiformat-Dateien extrahiert (Parsen verschachtelter Jupyter-Notebook-Zellen, PyMuPDF-Streams und HTML-Strukturen). Implementierung eines benutzerdefinierten Chunking-Algorithmus, der semantische Grenzen mit strikten Wortüberschneidungsparametern erkennt, unter Verwendung von <span style={{ color: 'rgb(0,255,186)' }}>kryptografischem MD5-Hashing</span> zur strukturellen Datendeduplizierung.
                  </li>
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>Vektorspeicherung & Hochleistungs-Retrieval:</span> Entwicklung von Vektorraum-Einbettungen unter Verwendung normalisierter <span style={{ color: 'rgb(0,255,186)' }}>SentenceTransformers</span>, die auf optimierte <span style={{ color: 'rgb(0,255,186)' }}>FAISS-Vektorindizes</span> abgebildet werden.
                  </li>
                  <li className="mt-1">
                    <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>LLM-Orchestrierung & Web-Deployment:</span> Steuerung asynchroner Inferenzen mit geringer Latenz über die cloudbasierte <span style={{ color: 'rgb(0,255,186)' }}>Groq-API</span>. Aufbau der Frontend-Architektur mittels <span style={{ color: 'rgb(0,255,186)' }}>Streamlit</span> mit fortgeschrittenen programmatischen Regeln zur Abfrage-Vorverarbeitung, strikten String-Matching-Guardrails, Session-Management und benutzerdefinierter Web-UI-Injektion.
                  </li>
                </ul>
              </div>
          
              <h3 className="text-xl font-bold mt-6" style={{ color: 'rgb(0,255,186)' }}>🌐 Live-Projekt-Präsentation</h3>
              <p className="text-lg leading-relaxed mt-2 text-white">
                👉 <span className="font-semibold">Interagiere mit meiner maßgeschneiderten KI:</span> <a href="https://tanzilgptchatbot-xnar8e26wtwwhkuz3nhy7r.streamlit.app/" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color: 'rgb(0,255,186)' }}>TANZILGPT Chatbot starten</a>
              </p>
              <div className="mt-2 p-3 rounded-lg border border-gray-700 bg-gray-900 bg-opacity-40 text-sm leading-relaxed text-gray-300">
                <span className="font-semibold" style={{ color: 'rgb(0,255,186)' }}>💡 Systemhinweis:</span> Da diese Anwendung auf einer kostenlosen Streamlit Community Cloud-Instanz gehostet wird, kann der Server in den „Schlafmodus“ wechseln, wenn er längere Zeit nicht abgefragt wurde. Falls die Seite inaktiv erscheint, klicken Sie einfach auf die Schaltfläche <span className="font-semibold text-white">"Yes, wake this app up"</span> auf dem Bildschirm. Dadurch wird der Container hochgefahren und ist innerhalb weniger Sekunden bereit, Ihre Fragen zu verarbeiten.
              </div>
          
              <h3 className="text-xl font-bold mt-6" style={{ color: 'rgb(0,255,186)' }}>📊 Schnelle Qualifikationen</h3>
              <ul className="list-disc pl-6 mt-2 text-white text-lg leading-relaxed">
                <li className="mt-1"><span className="font-semibold">Ausbildung:</span> M.Sc. in Data Engineering von der <span style={{ color: 'rgb(0,255,186)' }}>Jacobs (Constructor) University, Bremen</span> (Vollstipendium für akademische Spitzenleistungen).</li>
                <li className="mt-1"><span className="font-semibold">Zertifizierungen:</span> <span style={{ color: 'rgb(0,255,186)' }}>Microsoft Technology Associate</span> (Ergebnis: 96%, Top 5% Performance-Ranking).</li>
                <li className="mt-1"><span className="font-semibold">Führung/Mentoring:</span> Technischer Mentor bei der Betreuung von Masterarbeits-Architekturprojekten für führende deutsche Forschungsinstitute wie das <span style={{ color: 'rgb(0,255,186)' }}>Fraunhofer-Institut</span>.</li>
                <li className="mt-1"><span className="font-semibold">Sprachen:</span> Englisch (Fließend) | <span style={{ color: 'rgb(0,255,186)' }}>Deutsch (Professionelle B2-Konformität abgeschlossen)</span>.</li>
                <li className="mt-1"><span className="font-semibold">Status:</span> Inhaber einer <span style={{ color: 'rgb(0,255,186)' }}>EU Blue Card</span>, uneingeschränkte Arbeitserlaubnis für langfristige technische Positionen in Deutschland.</li>
              </ul>
          
              <p className="text-lg font-medium leading-relaxed mt-6 italic" style={{ color: 'rgb(0,255,186)' }}>
                Ich lerne schnell, setze schneller um — und suche immer nach dem nächsten hochkomplexen, unklaren Daten- oder KI-Problem.
              </p>
            </>
          )}

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
