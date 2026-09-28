import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Eye, 
  ExternalLink, 
  X, 
  Download, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education, achievements } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

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
          
          {/* Achievements & Certifications */}
          {achievements && achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="p-3 rounded-2xl bg-accent-500/10 border border-accent-500/30">
                  <Award className="text-accent-400" size={26} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Honors & Certifications</h3>
                  <p className="text-xs text-gray-400">Click any certificate to view or download</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {achievements.map((item, index) => {
                  const title = typeof item === 'string' ? item : item.title;
                  const certUrl = typeof item === 'object' ? item.certificateUrl : null;
                  const issuer = typeof item === 'object' ? item.issuer : null;
                  const badge = typeof item === 'object' ? item.badge : 'Verified Credential';

                  return (
                    <div 
                      key={item.id || index}
                      onClick={() => certUrl && setSelectedCert(item)}
                      className={`glass-card p-6 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/[0.08] hover:border-accent-500/50 hover:bg-dark-800/80 transition-all group ${
                        certUrl ? 'cursor-pointer hover:-translate-y-1' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-2.5 bg-gradient-to-br from-accent-500/20 to-pink-500/20 border border-accent-500/30 rounded-2xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          <Award className="text-accent-400" size={20} />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <p className="text-gray-200 font-medium leading-relaxed text-sm sm:text-base group-hover:text-white transition-colors">
                            {title}
                          </p>
                          {issuer && (
                            <p className="text-xs text-gray-400">{issuer}</p>
                          )}
                          <div className="flex flex-wrap items-center gap-2 pt-0.5">
                            <span className="inline-flex items-center gap-1 text-[11px] text-accent-400 bg-accent-500/10 border border-accent-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                              <CheckCircle2 size={12} />
                              {badge}
                            </span>
                            {item.date && (
                              <span className="text-[11px] text-gray-400 font-medium">
                                • {item.date}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {certUrl && (
                        <div className="w-full sm:w-auto flex justify-end shrink-0 pt-2 sm:pt-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCert(item);
                            }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-accent-600 to-pink-600 hover:from-accent-500 hover:to-pink-500 text-white shadow-lg shadow-accent-500/20 transition-all hover:scale-105 active:scale-95"
                          >
                            <Eye size={14} />
                            <span>View Certificate</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
        </div>
        
      </div>

      {/* Certificate Lightbox / Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="glass-card bg-dark-900/95 border border-white/15 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl shadow-primary-950/60 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-dark-950/60">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-accent-500/15 border border-accent-500/30 text-accent-400 shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <span>{selectedCert.issuer || "Verified Certificate"}</span>
                    {selectedCert.date && <span>• {selectedCert.date}</span>}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedCert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={15} />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <a
                  href={selectedCert.certificateUrl}
                  download
                  className="p-2 sm:px-3 sm:py-2 rounded-xl bg-accent-500/15 hover:bg-accent-500/25 border border-accent-500/30 text-accent-300 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                  title="Download Certificate"
                >
                  <Download size={15} />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/10 text-gray-400 transition-colors"
                  title="Close (Esc)"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body / Viewer */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-dark-950/40">
              {selectedCert.certificateUrl?.endsWith('.pdf') || selectedCert.type === 'pdf' ? (
                <div className="w-full h-[65vh] sm:h-[72vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-dark-900">
                  <iframe
                    src={`${selectedCert.certificateUrl}#toolbar=0&navpanes=0`}
                    title={selectedCert.title}
                    className="w-full h-full rounded-2xl border-none"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center max-h-[72vh] w-full">
                  <img
                    src={selectedCert.certificateUrl}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-dark-950/80 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-accent-400">
                <Sparkles size={13} />
                Official Verified Credential
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Press <kbd className="px-1.5 py-0.5 bg-dark-800 border border-white/10 rounded text-[10px] text-gray-300">Esc</kbd> to close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;

