import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'education', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-nav py-3 border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.7)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-black tracking-tight text-gradient flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-primary-600 to-accent-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/25 group-hover:scale-105 group-hover:shadow-electric-cyan transition-all duration-300">
                RG
              </span>
              <span className="group-hover:text-cyan-300 transition-colors duration-300">{portfolioData.personal.name}</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1.5 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/[0.08] border border-cyan-400/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#00f5ff]" />
                  )}
                </a>
              );
            })}
            
            <div className="flex items-center space-x-2.5 pl-3 border-l border-white/[0.12]">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                title="GitHub"
                className="text-gray-400 hover:text-white transition-all p-2 bg-dark-900/60 rounded-xl hover:bg-dark-800 border border-white/[0.08] hover:border-cyan-400/40 hover:scale-105"
              >
                <FaGithub size={17} />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                title="LinkedIn"
                className="text-gray-400 hover:text-white transition-all p-2 bg-dark-900/60 rounded-xl hover:bg-dark-800 border border-white/[0.08] hover:border-cyan-400/40 hover:scale-105"
              >
                <FaLinkedin size={17} />
              </a>
              
              <a 
                href="#contact"
                className="btn-cinematic ml-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white text-xs font-semibold shadow-md shadow-primary-500/25 flex items-center gap-1.5 transition-all hover:scale-105"
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
              className="p-2 rounded-xl glass text-gray-300 hover:text-white focus:outline-none border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full animate-in slide-in-from-top-2 border-t border-white/[0.08] shadow-2xl bg-dark-950/95 backdrop-blur-2xl">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2.5 text-base font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-white/[0.08] border border-cyan-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-dark-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="flex items-center justify-between px-2 pt-4 border-t border-white/[0.08] mt-3">
              <div className="flex space-x-3">
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white p-2 glass rounded-xl border border-white/10">
                  <FaGithub size={18} />
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white p-2 glass rounded-xl border border-white/10">
                  <FaLinkedin size={18} />
                </a>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white p-2 glass rounded-xl border border-white/10">
                  <Mail size={18} />
                </a>
              </div>
              
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-cinematic px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-semibold shadow-md shadow-primary-500/25"
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
