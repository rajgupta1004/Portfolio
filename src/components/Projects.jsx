import React, { useState } from 'react';
import { ExternalLink, Palette, Video, Code2, FolderOpen } from 'lucide-react';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Graphic Design', 'Video Editing'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Development':
        return <Code2 size={14} className="text-primary-400" />;
      case 'Graphic Design':
        return <Palette size={14} className="text-pink-400" />;
      case 'Video Editing':
        return <Video size={14} className="text-amber-400" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Web Development':
        return 'border-primary-500/30 bg-primary-500/10 text-primary-300';
      case 'Graphic Design':
        return 'border-pink-500/30 bg-pink-500/10 text-pink-300';
      case 'Video Editing':
        return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
      default:
        return 'border-gray-500/30 bg-gray-500/10 text-gray-300';
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects & Creative Work</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            A curated showcase of web applications, Photoshop graphic designs, and video editing samples.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/20 scale-105'
                  : 'glass text-gray-300 hover:text-white hover:bg-dark-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass rounded-3xl overflow-hidden group hover:border-gray-600 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent opacity-80 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                {project.category && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Key Tools & Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(',').map((tech, i) => (
                      <span key={i} className="text-xs text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2.5 py-1 rounded-md">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-800">
                  {project.driveLink ? (
                    <a 
                      href={project.driveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-primary-600 via-indigo-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl text-white text-sm font-semibold transition-all shadow-md hover:shadow-primary-500/25"
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
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-dark-800 hover:bg-dark-700 rounded-xl text-sm font-medium transition-colors border border-gray-700/40 text-gray-200 hover:text-white"
                        >
                          <FaGithub size={16} />
                          Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl text-white text-sm font-medium transition-all"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Drive Access Highlight Banner */}
        <div className="mt-16 glass rounded-3xl p-8 md:p-10 border border-primary-500/30 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-accent-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 border border-accent-500/30 text-accent-400 mb-2">
                <FolderOpen size={14} />
                Creative Portfolios
              </div>
              <h3 className="text-2xl font-bold text-white">Looking for Full Design & Video Drive Files?</h3>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl">
                Browse original high-resolution Photoshop graphics, banners, photo edits, and complete video editing samples directly on Google Drive.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={portfolioData.personal.photoshopDrive}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-800/80 hover:bg-dark-700/80 border border-pink-500/30 hover:border-pink-500/60 rounded-2xl text-pink-300 hover:text-white font-medium text-sm transition-all shadow-sm"
              >
                <Palette size={16} />
                <span>Photoshop Drive</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={portfolioData.personal.videoEditingDrive}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-800/80 hover:bg-dark-700/80 border border-amber-500/30 hover:border-amber-500/60 rounded-2xl text-amber-300 hover:text-white font-medium text-sm transition-all shadow-sm"
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

