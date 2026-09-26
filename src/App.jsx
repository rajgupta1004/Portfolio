import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-100 font-sans relative selection:bg-primary-500 selection:text-white overflow-x-hidden">
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 bg-cyber-grid opacity-60 pointer-events-none z-0"></div>
      
      {/* Glowing Ambient Light Orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-accent-600/15 rounded-full blur-[140px] pointer-events-none animate-float"></div>
      <div className="fixed bottom-10 left-1/3 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
