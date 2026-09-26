import React from 'react';
import { Mail, Phone, Heart, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogleDrive } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-white/[0.08] pt-16 pb-10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-primary-600/10 via-accent-600/10 to-transparent blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-primary-500/25">
                RG
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">{portfolioData.personal.name}</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Student Developer & Multimedia Creator crafting impactful digital web apps, designs, and videos.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noreferrer" 
              title="GitHub"
              className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-3 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/40"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              title="LinkedIn"
              className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-3 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/40"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href={portfolioData.personal.photoshopDrive} 
              target="_blank" 
              rel="noreferrer" 
              title="Photoshop Google Drive"
              className="text-pink-400 hover:text-pink-300 hover:-translate-y-1 transition-all p-3 glass rounded-2xl hover:bg-pink-500/10 border-pink-500/30"
            >
              <FaGoogleDrive size={18} />
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              title="Email"
              className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-3 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/40"
            >
              <Mail size={18} />
            </a>
            <a 
              href={`tel:${portfolioData.personal.phone}`} 
              title="Phone"
              className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-3 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/40"
            >
              <Phone size={18} />
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-gray-500 flex items-center gap-1">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1.5 text-primary-400">
              <Sparkles size={13} />
              Full Stack & Multimedia Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
