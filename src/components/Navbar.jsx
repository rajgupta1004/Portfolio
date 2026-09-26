import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sparkles, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-black tracking-tight text-gradient flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform">
                RG
              </span>
              <span>{portfolioData.personal.name}</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-white/[0.05] px-3.5 py-1.5 rounded-full transition-all text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-3 pl-3 border-l border-white/[0.1]">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                title="GitHub"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-dark-900/60 rounded-xl hover:bg-dark-800 border border-white/[0.05]"
              >
                <FaGithub size={17} />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                title="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-dark-900/60 rounded-xl hover:bg-dark-800 border border-white/[0.05]"
              >
                <FaLinkedin size={17} />
              </a>
              
              <a 
                href="#contact"
                className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white text-xs font-semibold shadow-md shadow-primary-500/25 flex items-center gap-1.5 transition-all hover:scale-105"
              >
                <Send size={13} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl glass text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full animate-in slide-in-from-top-2 border-t border-white/[0.08]">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-gray-300 hover:text-primary-400 hover:bg-dark-800/80 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between px-2 pt-4 border-t border-white/[0.08] mt-3">
              <div className="flex space-x-4">
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white p-2 glass rounded-xl">
                  <FaGithub size={20} />
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white p-2 glass rounded-xl">
                  <FaLinkedin size={20} />
                </a>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white p-2 glass rounded-xl">
                  <Mail size={20} />
                </a>
              </div>
              
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
