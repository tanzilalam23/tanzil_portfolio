import React from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './style.css'; // Ensure it includes flip effects, glassmorphism, dark styles, typewriter, etc.

function App() {
  return (
    <div className="App bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;