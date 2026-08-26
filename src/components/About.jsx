import React from 'react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am <span className="text-white font-medium">{portfolioData.personal.name}</span>, a passionate 
                student and aspiring developer based in {portfolioData.personal.location}. I am currently pursuing my 
                B.Tech in Computer Science and Engineering at {portfolioData.personal.college}.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                {portfolioData.personal.about}
              </p>
            </div>
            
            <div className="space-y-6">
               <h3 className="text-2xl font-semibold text-white">
                What Drives Me
              </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-dark-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-primary-500/50 transition-colors">
                     <h4 className="text-primary-400 font-medium mb-2">My Focus</h4>
                     <p className="text-gray-400 text-sm">Building clean, responsive, and user-centric frontend and full stack applications.</p>
                  </div>
                  <div className="bg-dark-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-accent-500/50 transition-colors">
                     <h4 className="text-accent-400 font-medium mb-2">My Approach</h4>
                     <p className="text-gray-400 text-sm">Applying analytical problem-solving skills to craft efficient digital solutions.</p>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
