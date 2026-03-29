import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      about: 'About',
      career: 'Career',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I am Mohammad Tanzil Alam',
      roles: ['Data Engineer', 'Software Engineer', 'Cloud Engineer'],
    },
    about: {
      heading: 'About Me',
      downloadCV: '📝 Download Resume',
      downloadCVDE: '📄 Lebenslauf (DE)',
    },
    career: {
      heading: 'Career Journey',
      viewReference: '📄 View Reference',
      items: [
        {
          monthYear: 'June 2025',
          role: 'Associate Consultant Data Engineer',
          company: 'Arcondis GmbH',
          description: 'Automated KPI pipelines, database scanning, and real-time reporting for stakeholders.',
          referenceFile: '/Arcondis_Ref.pdf',
        },
        {
          monthYear: 'January 2024',
          role: 'Online Tutor',
          company: 'Self Employed',
          description: 'Designed training programs and led hands-on mentorship for data engineering and cloud.',
        },
        {
          monthYear: 'June 2022',
          role: 'Data Engineer',
          company: 'Roche Diagnostics GmbH',
          description: 'Built scalable ETL pipelines, NLP processing, and semantic search for medical data on AWS.',
          referenceFile: '/Roche_Ref.pdf',
        },
        {
          monthYear: 'September 2021',
          role: 'MSc in Data Engineering',
          company: 'Jacobs University Bremen',
          description: 'Completed Masters of Science with 100% Scholarship.',
        },
        {
          monthYear: 'June 2019',
          role: 'Software Engineer',
          company: 'Fortress6 Technologies',
          description: 'Optimized SQL, automated AWS deployments, set up CI/CD, and mentored junior developers.',
          referenceFile: '/Fortress6_Ref.pdf',
        },
        {
          monthYear: 'August 2015',
          role: 'B.Tech in Computer Science & Engineering',
          company: 'Uttarakhand Technical University',
          description: 'Completed Bachelor of Technology with distinction.',
        },
      ],
    },
    projects: {
      heading: 'Featured Projects',
      moreOnGithub: 'More projects on GitHub',
      hoverHint: 'Hover to see details',
      items: [
        { title: 'TanzilGPT Chatbot', description: 'AI-powered chatbot using Llama LLM and RAG for context-aware responses.' },
        { title: 'Web Portfolio', description: 'Personal portfolio built using React with 3D Spline, dark mode, and project flips.' },
        { title: 'Data Drift Detection', description: 'Detecting data drift in machine learning models using statistical methods and visualization techniques.' },
        { title: 'iPhone Price Prediction KNN-ML', description: 'Predicting iPhone prices using KNN regression with feature engineering and hyperparameter tuning.' },
        { title: 'NASA Battery Data Prediction', description: 'Predicting battery life and performance using machine learning on NASA battery datasets.' },
        { title: 'Drug Classification using K fold', description: 'Classifying drugs based on their features using K-Neighbors Classifier and K-Fold cross-validation.' },
        { title: 'ATS Resume Screening App', description: 'Developed a resume screening app using Google Gemini Gen AI to match resumes with job descriptions.' },
        { title: 'Supply Chain Management Data Analysis', description: 'Analyzed supply chain data to optimize operations and improve efficiency using data visualization and statistical methods.' },
        { title: 'Real-Time Vehicular Tracking System using IoT', description: 'Developed a real-time vehicular tracking system using IoT devices and SQL integration for monitoring and data analysis.' },
      ],
    },
    skills: { heading: 'Skills' },
    contact: { heading: 'Contact Me' },
  },

  de: {
    nav: {
      about: 'Über mich',
      career: 'Karriere',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hallo, ich bin Mohammad Tanzil Alam',
      roles: ['Dateningenieur', 'Softwareingenieur', 'Cloudingenieur'],
    },
    about: {
      heading: 'Über mich',
      downloadCV: '📝 Lebenslauf herunterladen',
      downloadCVDE: '📄 Lebenslauf (DE)',
    },
    career: {
      heading: 'Karriereweg',
      viewReference: '📄 Referenz ansehen',
      items: [
        {
          monthYear: 'Juni 2025',
          role: 'Associate Consultant Dateningenieur',
          company: 'Arcondis GmbH',
          description: 'Automatisierte KPI-Pipelines, Datenbankscanning und Echtzeit-Reporting für Stakeholder.',
          referenceFile: '/Arcondis_Ref.pdf',
        },
        {
          monthYear: 'Januar 2024',
          role: 'Online-Tutor',
          company: 'Selbstständig',
          description: 'Entwicklung von Trainingsprogrammen und praxisnahe Betreuung für Data Engineering und Cloud.',
        },
        {
          monthYear: 'Juni 2022',
          role: 'Dateningenieur',
          company: 'Roche Diagnostics GmbH',
          description: 'Aufbau skalierbarer ETL-Pipelines, NLP-Verarbeitung und semantische Suche für medizinische Daten auf AWS.',
          referenceFile: '/Roche_Ref.pdf',
        },
        {
          monthYear: 'September 2021',
          role: 'MSc in Data Engineering',
          company: 'Jacobs University Bremen',
          description: 'Master of Science mit 100% Stipendium abgeschlossen.',
        },
        {
          monthYear: 'Juni 2019',
          role: 'Softwareingenieur',
          company: 'Fortress6 Technologies',
          description: 'SQL-Optimierung, automatisierte AWS-Deployments, CI/CD-Einrichtung und Betreuung von Junior-Entwicklern.',
          referenceFile: '/Fortress6_Ref.pdf',
        },
        {
          monthYear: 'August 2015',
          role: 'B.Tech in Informatik & Ingenieurwesen',
          company: 'Uttarakhand Technical University',
          description: 'Bachelor of Technology mit Auszeichnung abgeschlossen.',
        },
      ],
    },
    projects: {
      heading: 'Ausgewählte Projekte',
      moreOnGithub: 'Weitere Projekte auf GitHub',
      hoverHint: 'Hover für Details',
      items: [
        { title: 'TanzilGPT Chatbot', description: 'KI-gesteuerter Chatbot mit Llama LLM und RAG für kontextbewusste Antworten.' },
        { title: 'Web Portfolio', description: 'Persönliches Portfolio mit React, 3D Spline, Dark Mode und Projektkarten.' },
        { title: 'Datendrift-Erkennung', description: 'Erkennung von Datendrift in ML-Modellen mittels statistischer Methoden und Visualisierungstechniken.' },
        { title: 'iPhone-Preisvorhersage KNN-ML', description: 'Vorhersage von iPhone-Preisen mit KNN-Regression, Feature-Engineering und Hyperparameter-Tuning.' },
        { title: 'NASA-Batteriedatenvorhersage', description: 'Vorhersage von Akkulebensdauer und -leistung mit Machine Learning auf NASA-Batteriedatensätzen.' },
        { title: 'Medikamentenklassifizierung mit K-Fold', description: 'Klassifizierung von Medikamenten mittels K-Neighbors Classifier und K-Fold-Kreuzvalidierung.' },
        { title: 'ATS Bewerbungsscreening-App', description: 'Resume-Screening-App mit Google Gemini Gen AI zum Abgleich von Lebensläufen und Stellenbeschreibungen.' },
        { title: 'Supply-Chain-Datenanalyse', description: 'Analyse von Lieferkettendaten zur Prozessoptimierung mittels Datenvisualisierung und statistischer Methoden.' },
        { title: 'Echtzeit-Fahrzeugverfolgung mit IoT', description: 'Echtzeit-Fahrzeugverfolgungssystem mit IoT-Geräten und SQL-Integration zur Überwachung und Datenanalyse.' },
      ],
    },
    skills: { heading: 'Fähigkeiten' },
    contact: { heading: 'Kontaktiere mich' },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'de' : 'en'));
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
