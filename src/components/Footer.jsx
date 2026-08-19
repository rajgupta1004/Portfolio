import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary-600/10 blur-[100px] rounded-t-[100%] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{portfolioData.personal.name}</h3>
            <p className="text-gray-400">{portfolioData.personal.role.split(' / ')[0]}</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-2 bg-dark-800 rounded-full hover:bg-dark-700">
              <FaGithub size={20} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-2 bg-dark-800 rounded-full hover:bg-dark-700">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-2 bg-dark-800 rounded-full hover:bg-dark-700">
              <Mail size={20} />
            </a>
            <a href={`tel:${portfolioData.personal.phone}`} className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all p-2 bg-dark-800 rounded-full hover:bg-dark-700">
              <Phone size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with React & Tailwind <Heart size={14} className="text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
