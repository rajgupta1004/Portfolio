import React from 'react';
import CustomCursor from './components/CustomCursor';
import CinematicLighting from './components/CinematicLighting';
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
    <div className="min-h-screen bg-dark-950 text-gray-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Custom High-Tech Cyber Cursor (Desktop / Mouse only, disabled on touch/coarse) */}
      <CustomCursor />

      {/* Atmospheric Cinematic Lighting Layer (Electric Blue Blooms & Streaks) */}
      <CinematicLighting />

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
