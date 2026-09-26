import React from 'react';
import { Code2, Layout, Wrench, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary-400" size={26} />,
      items: skills.languages,
      borderColor: "border-primary-500/30",
      bgColor: "bg-primary-500/10",
    },
    {
      title: "Frontend",
      icon: <Layout className="text-accent-400" size={26} />,
      items: skills.frontend,
      borderColor: "border-accent-500/30",
      bgColor: "bg-accent-500/10",
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-emerald-400" size={26} />,
      items: skills.tools,
      borderColor: "border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Creative & Media",
      icon: <Sparkles className="text-pink-400" size={26} />,
      items: skills.creative || ["Adobe Photoshop", "Graphic Design", "Video Editing", "Visual Design"],
      borderColor: "border-pink-500/30",
      bgColor: "bg-pink-500/10",
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Technologies and creative tools I work with to bring ideas to life.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass rounded-3xl p-6 border-t-2 ${category.borderColor} hover:-translate-y-2 transition-transform duration-300 flex flex-col`}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className={`p-3 rounded-2xl ${category.bgColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-dark-900 border border-gray-700/50 rounded-xl text-gray-300 font-medium text-xs hover:border-gray-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;

