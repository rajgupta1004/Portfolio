import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-4">
              <h2 className="text-primary-500 font-semibold tracking-wider uppercase text-sm md:text-base">
                Welcome to my portfolio
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <br />
                <span className="text-gradient">{portfolioData.personal.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-medium">
                {portfolioData.personal.role.split(' / ').map((role, index, array) => (
                  <span key={role}>
                    {role}
                    {index < array.length - 1 && <span className="text-primary-500 mx-2">/</span>}
                  </span>
                ))}
              </p>
            </div>
            
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              I am a {portfolioData.personal.college} student with an interest in technology, 
              computer design, software development, and building useful digital projects.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-medium transition-all shadow-lg hover:shadow-primary-500/25 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={portfolioData.personal.resumeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 rounded-full glass hover:bg-dark-700/50 text-white font-medium transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4 border-t border-gray-800">
              <span className="text-gray-500 text-sm">Connect with me:</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full hover:bg-dark-700/50">
                <FaGithub size={20} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full hover:bg-dark-700/50">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full hover:bg-dark-700/50">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md md:max-w-none hidden md:block">
             <div className="relative aspect-square rounded-full glass flex items-center justify-center overflow-hidden border border-gray-700/50">
               {/* Profile Image */}
               <img src="/profile.png" alt="Raj Gupta" className="w-full h-full object-cover relative z-10" />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-accent-600/20 mix-blend-overlay z-20 pointer-events-none"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
