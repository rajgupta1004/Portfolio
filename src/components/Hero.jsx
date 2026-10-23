import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGoogleDrive } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const [stage, setStage] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 5;
    }
    return 0;
  });
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Cinematic Intro Choreography (short, graceful, non-blocking)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const t1 = setTimeout(() => setStage(1), 80);   // Badge & subtitle
    const t2 = setTimeout(() => setStage(2), 240);  // Name & main headline
    const t3 = setTimeout(() => setStage(3), 450);  // "I build for the web..." word reveal
    const t4 = setTimeout(() => setStage(4), 700);  // Paragraph & portrait bloom
    const t5 = setTimeout(() => setStage(5), 900);  // Buttons, badges & socials

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  // Subtle 3D portrait mouse tilt on desktop
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Gentle max tilt of ~5 degrees
    const tiltX = -(y / (rect.height / 2)) * 6;
    const tiltY = (x / (rect.width / 2)) * 6;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Words for the featured statement "I build for the web. I design for impact."
  const manifestoWords = [
    { text: "I", highlight: false },
    { text: "build", highlight: false },
    { text: "for", highlight: false },
    { text: "the", highlight: false },
    { text: "web.", highlight: true, color: "text-primary-400" },
    { text: "I", highlight: false },
    { text: "design", highlight: false },
    { text: "for", highlight: false },
    { text: "impact.", highlight: true, color: "text-gradient-cyan font-bold" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      
      {/* Background Soft Electric Light Streaks */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-[130px] animate-pulse-slow" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-electric-cyan/10 rounded-full blur-[140px] animate-aurora-drift" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Cinematic Typography & CTAs */}
          <div className="flex-1 space-y-7">
            
            {/* Availability Badge */}
            <div 
              className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 backdrop-blur-md shadow-sm transition-all duration-700 ease-out ${
                stage >= 1 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span className="tracking-wide">Available for Projects & Freelance</span>
            </div>

            {/* Main Headline Group */}
            <div className="space-y-3">
              <h2 
                className={`text-cyan-400 font-semibold tracking-widest uppercase text-xs sm:text-sm flex items-center gap-2 transition-all duration-700 delay-75 ease-out ${
                  stage >= 1 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
                }`}
              >
                <Sparkles size={14} className="text-cyan-300 animate-pulse" />
                Software Developer &amp; Creative Technologist
              </h2>

              <h1 
                className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight transition-all duration-800 ease-out ${
                  stage >= 2 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-6 blur-md'
                }`}
              >
                <span className="text-gray-200">Hi, I'm</span> <br />
                <span className="text-gradient drop-shadow-sm">{portfolioData.personal.name}</span>
              </h1>

              {/* Cinematic Manifesto Statement: "I build for the web. I design for impact." */}
              <div 
                className="pt-2 text-xl sm:text-2xl lg:text-3xl font-display font-medium text-gray-200 flex flex-wrap gap-x-2.5 gap-y-1 items-baseline"
                aria-label="I build for the web. I design for impact."
              >
                {manifestoWords.map((item, idx) => (
                  <span key={idx} className="text-mask-container">
                    <span 
                      className={`text-mask-word ${stage >= 3 ? 'word-revealed' : ''} ${item.color || ''}`}
                      style={{ transitionDelay: `${idx * 55}ms` }}
                    >
                      {item.text}
                    </span>
                  </span>
                ))}
              </div>

              {/* Roles String */}
              <p 
                className={`text-base sm:text-lg text-gray-300 font-medium transition-all duration-700 ease-out pt-1 ${
                  stage >= 4 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
                }`}
              >
                {portfolioData.personal.role.split(' / ').map((role, index, array) => (
                  <span key={role}>
                    <span className="text-gray-200 font-medium">{role}</span>
                    {index < array.length - 1 && <span className="text-primary-500 mx-2 font-bold">•</span>}
                  </span>
                ))}
              </p>
            </div>
            
            {/* Description Paragraph */}
            <p 
              className={`text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed transition-all duration-700 ease-out ${
                stage >= 4 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              B.Tech CSE student at {portfolioData.personal.college} passionate about engineering scalable, high-performance web applications, crafting award-worthy user interfaces, and directing high-impact visual media.
            </p>
            
            {/* Quick Specialization Tags */}
            <div 
              className={`flex flex-wrap gap-2.5 pt-1 transition-all duration-700 ease-out ${
                stage >= 4 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/30 text-primary-300 shadow-sm hover:border-primary-400 hover:shadow-glow-primary transition-all duration-300">
                💻 Web &amp; Frontend Dev
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-500/10 border border-pink-500/30 text-pink-300 shadow-sm hover:border-pink-400 hover:shadow-glow-pink transition-all duration-300">
                🎨 Graphic Design &amp; Photoshop
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 shadow-sm hover:border-amber-400 transition-all duration-300">
                🎬 Video Editing &amp; Motion
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 ease-out ${
                stage >= 5 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              <a 
                href="#projects" 
                className="btn-cinematic px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold flex items-center gap-2 group shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 active:scale-95"
              >
                <span>Explore Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              
              <a 
                href={portfolioData.personal.resumeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-cinematic px-8 py-3.5 rounded-full glass hover:bg-dark-800/80 text-white font-semibold flex items-center gap-2 border border-white/[0.12] hover:border-cyan-500/50 hover:shadow-electric-cyan hover:scale-105 active:scale-95"
              >
                <Download size={18} className="text-cyan-400" />
                <span>Resume</span>
              </a>
            </div>
            
            {/* Social Links & Portfolios */}
            <div 
              className={`flex items-center gap-5 pt-5 border-t border-white/[0.08] transition-all duration-700 ease-out ${
                stage >= 5 ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Connect &amp; Portfolios:</span>
              <div className="flex items-center gap-3">
                <a 
                  href={portfolioData.personal.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="GitHub Profile" 
                  className="text-gray-400 hover:text-white transition-all p-2.5 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/50 hover:scale-110 hover:shadow-glow-primary"
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href={portfolioData.personal.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="LinkedIn Profile" 
                  className="text-gray-400 hover:text-white transition-all p-2.5 glass rounded-2xl hover:bg-dark-800 hover:border-primary-500/50 hover:scale-110 hover:shadow-glow-primary"
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href={portfolioData.personal.photoshopDrive} 
                  target="_blank" 
                  rel="noreferrer" 
                  title="Photoshop Google Drive" 
                  className="text-pink-400 hover:text-pink-300 transition-all p-2.5 glass rounded-2xl hover:bg-pink-500/20 border-pink-500/30 hover:scale-110 hover:shadow-glow-pink"
                >
                  <FaGoogleDrive size={18} />
                </a>
                <a 
                  href={`mailto:${portfolioData.personal.email}`} 
                  title="Email" 
                  className="text-gray-400 hover:text-white transition-all p-2.5 glass rounded-2xl hover:bg-dark-800 hover:border-cyan-500/50 hover:scale-110 hover:shadow-glow-cyan"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

          </div>
          
          {/* Right Column: Executive Cinematic Portrait Card */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md hidden md:flex justify-center relative">
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`relative w-full max-w-[360px] lg:max-w-[390px] group portrait-container transition-all duration-1000 ease-out ${
                stage >= 3 ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-95 blur-md'
              }`}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Contoured Electric-Blue Ambient Glow Bloom */}
              <div 
                className="absolute -inset-4 rounded-[2.8rem] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(0, 245, 255, 0.35) 0%, rgba(59, 130, 246, 0.28) 40%, rgba(139, 92, 246, 0.15) 70%, transparent 85%)',
                  filter: 'blur(35px)',
                }}
              />
              
              {/* Outer Glow Border Wrap */}
              <div className="relative aspect-[4/5] rounded-[2.3rem] p-[1.5px] bg-gradient-to-b from-cyan-400/40 via-primary-500/20 to-accent-600/30 shadow-2xl">
                
                {/* Main Card Container */}
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden glass bg-dark-900/90 shadow-2xl">
                  
                  {/* Clean Professional Portrait */}
                  <img 
                    src="/profile.png" 
                    alt="Raj Gupta" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Cinematic Gradient Shadow to blend cleanly with info overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/95 via-dark-950/25 to-transparent pointer-events-none" />

                  {/* Top-Right Floating Specialization Badge */}
                  <div className="absolute top-4 right-4 z-20 animate-float-slow">
                    <div className="px-3.5 py-1.5 rounded-full glass border border-white/[0.15] text-xs font-semibold text-white/95 backdrop-blur-md shadow-lg flex items-center gap-1.5 hover:border-cyan-400/50 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>Developer &amp; Designer</span>
                    </div>
                  </div>

                  {/* Bottom Floating Info Tag */}
                  <div className="absolute bottom-4 inset-x-4 z-20">
                    <div className="glass p-3.5 rounded-2xl border border-white/[0.14] backdrop-blur-xl shadow-xl flex items-center justify-between group-hover:border-primary-500/40 transition-colors">
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                          <span>{portfolioData.personal.name}</span>
                        </h4>
                        <p className="text-[11px] text-gray-300">B.Tech CSE • {portfolioData.personal.college}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Verified</span>
                      </div>
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
