import React from 'react';
import { Code2, Layout, Wrench, Sparkles, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
  const { skills } = portfolioData;
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-cyan-400" size={24} />,
      items: skills.languages,
      borderColor: "border-cyan-500/30 hover:border-cyan-400/60",
      bgColor: "bg-cyan-500/10",
      accentGlow: "hover:shadow-glow-cyan",
      chipClass: "hover:border-cyan-400/50 hover:text-cyan-300",
    },
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-primary-400" size={24} />,
      items: skills.frontend,
      borderColor: "border-primary-500/30 hover:border-primary-400/60",
      bgColor: "bg-primary-500/10",
      accentGlow: "hover:shadow-glow-primary",
      chipClass: "hover:border-primary-400/50 hover:text-primary-300",
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-emerald-400" size={24} />,
      items: skills.tools,
      borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
      bgColor: "bg-emerald-500/10",
      accentGlow: "hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)]",
      chipClass: "hover:border-emerald-400/50 hover:text-emerald-300",
    },
    {
      title: "Creative & Media",
      icon: <Sparkles className="text-pink-400" size={24} />,
      items: skills.creative || ["Adobe Photoshop", "Graphic Design", "Video Editing", "Visual Design"],
      borderColor: "border-pink-500/30 hover:border-pink-400/60",
      bgColor: "bg-pink-500/10",
      accentGlow: "hover:shadow-glow-pink",
      chipClass: "hover:border-pink-400/50 hover:text-pink-300",
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden bg-dark-900/30">
      {/* Soft Ambient Light Bloom */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className={`text-center mb-16 cinematic-reveal ${isRevealed ? 'is-revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent-500/10 border border-accent-500/25 text-accent-300 mb-3">
            <Cpu size={14} className="text-accent-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Technical &amp; Creative <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Modern technologies and digital tools I leverage to build fluid, high-performance web solutions.
          </p>
        </div>
        
        {/* Cards Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const delayClasses = ['delay-75', 'delay-150', 'delay-225', 'delay-300'];
            return (
              <div 
                key={index} 
                className={`glass-card rounded-3xl p-6 border-t-2 ${category.borderColor} ${category.accentGlow} transition-all duration-500 flex flex-col group cinematic-reveal-scale ${delayClasses[index] || ''} ${
                  isRevealed ? 'is-revealed' : ''
                }`}
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-3 rounded-2xl ${category.bgColor} border border-white/[0.05] group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 bg-dark-950/70 border border-white/[0.08] rounded-xl text-gray-300 font-medium text-xs transition-all duration-200 hover:scale-105 hover:bg-dark-900 ${category.chipClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
