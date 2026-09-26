import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education, achievements } = portfolioData;

  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Academic background, coursework, competitions, and technical certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-3 rounded-2xl bg-primary-500/10 border border-primary-500/30">
                <GraduationCap className="text-primary-400" size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
                <p className="text-xs text-gray-400">Formal education and degrees</p>
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500 via-accent-500 to-transparent">
              {education.map((item) => (
                <div key={item.id} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-400 bg-dark-950 text-white shadow-lg shadow-primary-500/30 shrink-0 z-10 group-hover:scale-110 group-hover:bg-primary-600 transition-all">
                    <div className="w-2.5 h-2.5 bg-primary-400 group-hover:bg-white rounded-full"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="ml-6 glass-card p-6 rounded-3xl hover:-translate-y-1 transition-all flex-grow border border-white/[0.08] hover:border-primary-500/40">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary-300 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <Calendar size={12} />
                        {item.duration}
                      </span>
                      {item.score && (
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          Score: {item.score}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.college}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="p-3 rounded-2xl bg-accent-500/10 border border-accent-500/30">
                  <Award className="text-accent-400" size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Honors & Certifications</h3>
                  <p className="text-xs text-gray-400">Recognitions, workshops, and milestones</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="glass-card p-6 rounded-3xl flex items-start gap-4 border border-white/[0.08] hover:border-accent-500/50 hover:bg-dark-800/80 transition-all group"
                  >
                    <div className="p-2.5 bg-gradient-to-br from-accent-500/20 to-pink-500/20 border border-accent-500/30 rounded-2xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Award className="text-accent-400" size={20} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-200 font-medium leading-relaxed text-sm sm:text-base group-hover:text-white transition-colors">
                        {achievement}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-accent-400 font-semibold">
                        <CheckCircle2 size={12} />
                        <span>Verified Credential</span>
                      </div>
                    </div>
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
