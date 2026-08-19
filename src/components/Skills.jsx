import React from 'react';
import { Code2, Layout, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary-400" size={28} />,
      items: skills.languages,
      borderColor: "border-primary-500/30",
      bgColor: "bg-primary-500/5",
    },
    {
      title: "Frontend",
      icon: <Layout className="text-accent-400" size={28} />,
      items: skills.frontend,
      borderColor: "border-accent-500/30",
      bgColor: "bg-accent-500/5",
    },
    {
      title: "Tools",
      icon: <Wrench className="text-gray-400" size={28} />,
      items: skills.tools,
      borderColor: "border-gray-500/30",
      bgColor: "bg-gray-500/5",
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Technologies I work with to bring ideas to life.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass rounded-3xl p-8 border-t-2 ${category.borderColor} hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl ${category.bgColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-dark-900 border border-gray-700/50 rounded-xl text-gray-300 font-medium text-sm hover:border-gray-500 transition-colors"
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
