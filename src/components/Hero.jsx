import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogleDrive } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="flex-1 space-y-7 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>Available for Projects & Freelance</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-primary-400 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                Software Developer & Digital Creator
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Hi, I'm <br />
                <span className="text-gradient">{portfolioData.personal.name}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-medium">
                {portfolioData.personal.role.split(' / ').map((role, index, array) => (
                  <span key={role}>
                    <span className="text-white">{role}</span>
                    {index < array.length - 1 && <span className="text-primary-500 mx-2 font-bold">•</span>}
                  </span>
                ))}
              </p>
            </div>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              B.Tech CSE student at {portfolioData.personal.college} passionate about building scalable full stack web applications, creating high-impact Photoshop graphics, and crafting engaging video edits.
            </p>
            
            {/* Quick Specialization Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/30 text-primary-300 shadow-sm hover:border-primary-400 transition-colors">
                💻 Web & Frontend Dev
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-300 shadow-sm hover:border-pink-400 transition-colors">
                🎨 Graphic Design & Photoshop
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm hover:border-amber-400 transition-colors">
                🎬 Video Editing & Motion
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 flex items-center gap-2 group hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              
              <a 
                href={portfolioData.personal.resumeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full glass hover:bg-dark-800/80 text-white font-semibold transition-all flex items-center gap-2 border border-white/[0.1] hover:border-primary-500/50 hover:scale-105 active:scale-95 shadow-md"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </div>
            
            {/* Social Links & Portfolios */}
            <div className="flex items-center gap-5 pt-5 border-t border-white/[0.08]">
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Connect & Portfolios:</span>
              <div className="flex items-center gap-3">
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="GitHub Profile" 
                  className="text-gray-400 hover:text-white transition-all p-2.5 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/50 hover:scale-110"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="LinkedIn Profile" 
                  className="text-gray-400 hover:text-white transition-all p-2.5 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/50 hover:scale-110"
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href={portfolioData.personal.photoshopDrive} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="Photoshop Google Drive" 
                  className="text-pink-400 hover:text-pink-300 transition-all p-2.5 glass rounded-2xl hover:bg-pink-500/20 border-pink-500/30 hover:scale-110"
                >
                  <FaGoogleDrive size={18} />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`} 
                  title="Email" 
                  className="text-gray-400 hover:text-white transition-all p-2.5 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/50 hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Executive Professional Portrait Card */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md hidden md:flex justify-center relative">
            <div className="relative w-full max-w-[350px] lg:max-w-[380px] group">
              {/* Soft, perfectly contoured ambient background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary-600/30 via-accent-600/30 to-pink-600/20 rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Card Container */}
              <div className="relative aspect-[4/5] rounded-[2.2rem] overflow-hidden glass border border-white/[0.15] shadow-2xl bg-dark-900/80">
                {/* Clean Professional Photo */}
                <img 
                  src="/profile.png" 
                  alt="Raj Gupta" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Subtle bottom gradient to blend cleanly with card overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent pointer-events-none"></div>

                {/* Top-Right Floating Specialization Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3.5 py-1.5 rounded-full glass border border-white/[0.15] text-xs font-semibold text-white/90 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                    <span>Developer & Designer</span>
                  </div>
                </div>

                {/* Bottom Floating Info Tag */}
                <div className="absolute bottom-4 inset-x-4 z-20">
                  <div className="glass p-3.5 rounded-2xl border border-white/[0.12] backdrop-blur-xl shadow-xl flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{portfolioData.personal.name}</h4>
                      <p className="text-[11px] text-gray-300">B.Tech CSE • {portfolioData.personal.college}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
