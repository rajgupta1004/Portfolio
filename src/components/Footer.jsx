import React from 'react';
import { Mail, Phone, Sparkles, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogleDrive } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden">
      {/* Ambient Electric Background Ground Bloom */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[260px] blur-[130px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.2) 0%, rgba(59, 130, 246, 0.15) 45%, rgba(139, 92, 246, 0.1) 70%, transparent 85%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-primary-600 to-accent-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-cyan-500/25">
                RG
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">{portfolioData.personal.name}</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Software Developer &amp; Creative Technologist crafting impactful web apps, graphic designs, and cinematic videos.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noreferrer" 
              title="GitHub"
              className="btn-cinematic text-gray-400 hover:text-white p-3 glass rounded-2xl hover:bg-dark-800 hover:border-cyan-400/40 hover:shadow-glow-primary"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              title="LinkedIn"
              className="btn-cinematic text-gray-400 hover:text-white p-3 glass rounded-2xl hover:bg-dark-800 hover:border-cyan-400/40 hover:shadow-glow-primary"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href={portfolioData.personal.photoshopDrive} 
              target="_blank" 
              rel="noreferrer" 
              title="Photoshop Google Drive"
              className="btn-cinematic text-pink-400 hover:text-pink-300 p-3 glass rounded-2xl hover:bg-pink-500/10 border-pink-500/30 hover:shadow-glow-pink"
            >
              <FaGoogleDrive size={18} />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              title="Email" 
              className="btn-cinematic text-gray-400 hover:text-white p-3 glass rounded-2xl hover:bg-dark-800 hover:border-cyan-400/40 hover:shadow-glow-cyan"
            >
              <Mail size={18} />
            </a>
            <a 
              href={`tel:${portfolioData.personal.phone}`} 
              title="Phone" 
              className="btn-cinematic text-gray-400 hover:text-white p-3 glass rounded-2xl hover:bg-dark-800 hover:border-cyan-400/40 hover:shadow-glow-cyan"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="btn-cinematic text-gray-400 hover:text-cyan-300 p-3 glass rounded-2xl hover:bg-dark-800 hover:border-cyan-400/40 hover:shadow-glow-cyan"
            >
              <ArrowUp size={18} />
            </button>
          </div>
          
        </div>
        
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500 flex items-center gap-1">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Sparkles size={13} />
              Full Stack &amp; Creative Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
