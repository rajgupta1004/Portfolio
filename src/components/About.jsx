import React from 'react';
import { Code2, Palette, Video, Target, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Subtle Background Accent Bloom */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 cinematic-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/25 text-primary-300 mb-3">
            <Compass size={14} className="text-primary-400" />
            <span>Background &amp; Vision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 mx-auto rounded-full" />
        </div>
        
        {/* Main Glass Showcase Card */}
        <div 
          className={`glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden electric-glow-border cinematic-reveal-scale delay-150 ${
            isRevealed ? 'is-revealed' : ''
          }`}
        >
          {/* Subtle Vertical Accent Line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 via-primary-500 to-accent-600 shadow-[0_0_12px_#00f5ff]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <span>The Story</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Engineering Modern Experiences with Impact
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I am <span className="text-white font-semibold">{portfolioData.personal.name}</span>, a passionate 
                student and aspiring software engineer based in {portfolioData.personal.location}. Currently pursuing my 
                B.Tech in Computer Science and Engineering at {portfolioData.personal.college}.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {portfolioData.personal.about}
              </p>
            </div>
            
            {/* Right Pillars / Capabilities Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Target size={18} className="text-primary-400" />
                <span>Core Creative Disciplines</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/[0.08] hover:border-primary-500/50 hover:bg-dark-800/80 hover:shadow-glow-primary transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mb-3 group-hover:scale-110 transition-transform">
                    <Code2 size={18} />
                  </div>
                  <h4 className="text-primary-300 font-semibold mb-1 text-sm">Web Development</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Building clean, high-performance, and responsive React &amp; full stack web applications.
                  </p>
                </div>
                
                <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/[0.08] hover:border-pink-500/50 hover:bg-dark-800/80 hover:shadow-glow-pink transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-3 group-hover:scale-110 transition-transform">
                    <Palette size={18} />
                  </div>
                  <h4 className="text-pink-300 font-semibold mb-1 text-sm">Graphic Design</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Creating striking visual compositions, banners, posters, and advanced Photoshop manipulations.
                  </p>
                </div>
                
                <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/[0.08] hover:border-amber-500/50 hover:bg-dark-800/80 transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                    <Video size={18} />
                  </div>
                  <h4 className="text-amber-300 font-semibold mb-1 text-sm">Video Editing</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Crafting cinematic video edits, fluid pacing, sound synchronization, and dynamic motion reels.
                  </p>
                </div>
                
                <div className="p-5 rounded-2xl bg-dark-900/60 border border-white/[0.08] hover:border-accent-500/50 hover:bg-dark-800/80 hover:shadow-glow-accent transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 mb-3 group-hover:scale-110 transition-transform">
                    <Compass size={18} />
                  </div>
                  <h4 className="text-accent-300 font-semibold mb-1 text-sm">Strategic Execution</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Applying analytical thinking and creative intuition to build software people genuinely love using.
                  </p>
                </div>

              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
