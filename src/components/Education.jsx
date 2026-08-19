import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education, achievements } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & <span className="text-gradient">Achievements</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary-500" size={32} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:to-transparent">
              {education.map((item, index) => (
                <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 glass p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                      {item.score && (
                        <span className="text-xs font-medium text-gray-400">Score: {item.score}</span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                    <p className="text-gray-400">{item.college}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-accent-500" size={32} />
                <h3 className="text-2xl font-bold text-white">Achievements & Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-accent-500/50 transition-colors"
                  >
                    <div className="p-2 bg-accent-500/10 rounded-xl shrink-0 mt-1">
                      <Award className="text-accent-400" size={20} />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
        
      </div>
    </section>
  );
};

export default Education;
