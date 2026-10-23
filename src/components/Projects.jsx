import React, { useState } from 'react';
import { ExternalLink, Palette, Video, Code2, FolderOpen, Sparkles, Layers } from 'lucide-react';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * ProjectCard
 * Implements requirement #5:
 * - When entering viewport: reveals image first -> title & desc -> staggered tech tags -> buttons last.
 * - On hover: enlarges preview, reveals blue lighting / border highlight, action buttons elevate smoothly, subtle parallax tilt.
 * - Featured project styling differentiation.
 */
const ProjectCard = ({ project, index }) => {
  const [cardRef, isRevealed] = useScrollReveal({ 
    threshold: 0.15,
    delay: index * 120 
  });

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const isFeatured = project.id === 1;

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development':
        return <Code2 size={13} className="text-cyan-400" />;
      case 'Graphic Design':
        return <Palette size={13} className="text-pink-400" />;
      case 'Video Editing':
        return <Video size={13} className="text-amber-400" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Web Development':
        return 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300';
      case 'Graphic Design':
        return 'border-pink-500/30 bg-pink-500/10 text-pink-300';
      case 'Video Editing':
        return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
      default:
        return 'border-gray-500/30 bg-gray-500/10 text-gray-300';
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card rounded-3xl overflow-hidden group transition-all duration-500 flex flex-col h-full border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-[0_20px_45px_-10px_rgba(0,245,255,0.18)] hover:-translate-y-2 relative cinematic-reveal-scale ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      {/* Featured Ribbon / Badge */}
      {isFeatured && (
        <div className="absolute top-3 right-3 z-30">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/20">
            <Sparkles size={11} className="animate-spin" style={{ animationDuration: '6s' }} />
            <span>Featured Web App</span>
          </span>
        </div>
      )}

      {/* Project Image Viewport Entrance (Stage 1) */}
      <div className="h-56 overflow-hidden relative bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/40 to-transparent opacity-85 z-10 pointer-events-none" />
        
        <img 
          src={project.image} 
          alt={project.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          style={{
            transform: `scale(${mouseOffset.x !== 0 ? 1.05 : 1}) translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          }}
        />
        
        {/* Category Pill Tag */}
        {project.category && (
          <div className="absolute top-4 left-4 z-20">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md shadow-sm ${getCategoryColor(project.category)}`}>
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </span>
          </div>
        )}
      </div>
      
      {/* Project Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow relative z-20">
        
        {/* Title and Description (Stage 2) */}
        <div 
          className={`transition-all duration-700 delay-150 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-3 blur-sm'
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>
        
        {/* Tech Badges with subtle stagger (Stage 3) */}
        <div 
          className={`mb-6 mt-auto transition-all duration-700 delay-300 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-3 blur-sm'
          }`}
        >
          <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
            Key Focus &amp; Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.split(',').map((tech, i) => (
              <span 
                key={i} 
                className="text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-lg hover:border-cyan-400/40 transition-colors"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Buttons (Stage 4) */}
        <div 
          className={`flex items-center gap-3 pt-4 border-t border-white/[0.08] transition-all duration-700 delay-450 ease-out ${
            isRevealed ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-3 blur-sm'
          }`}
        >
          {project.driveLink ? (
            <a 
              href={project.driveLink} 
              target="_blank" 
              rel="noreferrer"
              className="btn-cinematic w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl text-white text-sm font-semibold shadow-md shadow-primary-500/20 hover:shadow-electric-cyan hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaGoogleDrive size={16} />
              <span>Open Drive Folder</span>
              <ExternalLink size={14} className="ml-1 opacity-80" />
            </a>
          ) : (
            <>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-cinematic flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-dark-900/80 hover:bg-dark-800 rounded-xl text-sm font-medium border border-white/[0.1] text-gray-200 hover:text-white hover:border-cyan-400/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FaGithub size={16} />
                  <span>Code</span>
                </a>
              )}
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-cinematic flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl text-white text-sm font-semibold shadow-md shadow-primary-500/25 hover:shadow-electric-cyan hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [headerRef, isHeaderRevealed] = useScrollReveal({ threshold: 0.1 });

  const categories = ['All', 'Web Development', 'Graphic Design', 'Video Editing'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Electric Bloom */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Scroll Reveal */}
        <div ref={headerRef} className={`text-center mb-12 cinematic-reveal ${isHeaderRevealed ? 'is-revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 mb-3">
            <Layers size={14} className="text-cyan-400" />
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects &amp; Showcase</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Curated web applications, branding graphics, and high-energy motion editing projects engineered with precision.
          </p>
        </div>

        {/* Category Filters with Smooth Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-primary-600 to-accent-600 text-white shadow-lg shadow-cyan-500/25 scale-105 border border-cyan-400/40'
                  : 'glass text-gray-300 hover:text-white hover:bg-dark-800/80 border border-white/[0.08] hover:border-cyan-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Full Creative Portfolios Drive Highlight Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-10 border border-cyan-500/30 relative overflow-hidden electric-glow-border">
          <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 border border-accent-500/30 text-accent-300 mb-2">
                <FolderOpen size={14} />
                <span>Creative Master Repositories</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Looking for Raw Design &amp; Video Drive Assets?</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
                Directly explore full raw Photoshop files, high-resolution branding graphics, posters, and 4K video editing timelines on Google Drive.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={portfolioData.personal.photoshopDrive}
                target="_blank"
                rel="noreferrer"
                className="btn-cinematic flex items-center justify-center gap-2 px-6 py-3 bg-dark-900/90 hover:bg-dark-800 border border-pink-500/40 hover:border-pink-400 rounded-2xl text-pink-300 hover:text-white font-semibold text-sm shadow-sm hover:shadow-glow-pink"
              >
                <Palette size={16} />
                <span>Photoshop Drive</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={portfolioData.personal.videoEditingDrive}
                target="_blank"
                rel="noreferrer"
                className="btn-cinematic flex items-center justify-center gap-2 px-6 py-3 bg-dark-900/90 hover:bg-dark-800 border border-amber-500/40 hover:border-amber-400 rounded-2xl text-amber-300 hover:text-white font-semibold text-sm shadow-sm"
              >
                <Video size={16} />
                <span>Video Editing Drive</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
