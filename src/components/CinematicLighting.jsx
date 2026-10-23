import React from 'react';

/**
 * CinematicLighting
 * Ultra-performant ambient lighting layer:
 * - Restrained electric-blue & deep cyan blooms
 * - Slow organic aurora drift
 * - Subtle traveling cinematic light streak
 * - 100% CSS GPU accelerated with 0 JS animation loops (8GB RAM optimized)
 */
const CinematicLighting = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Cyber Matrix Grid with radial mask */}
      <div 
        className="absolute inset-0 bg-cyber-grid opacity-35"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 85%)'
        }}
      />

      {/* Primary Electric-Cyan Bloom (Top Center/Left) */}
      <div 
        className="absolute -top-24 left-1/4 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full blur-[140px] opacity-30 animate-aurora-drift"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.25) 0%, rgba(59, 130, 246, 0.18) 45%, transparent 75%)',
          willChange: 'transform'
        }}
      />

      {/* Deep Indigo/Violet Accent Bloom (Mid Right) */}
      <div 
        className="absolute top-1/3 -right-20 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full blur-[150px] opacity-25 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 80%)',
          willChange: 'transform'
        }}
      />

      {/* Subtle Electric Blue Ground Bloom (Bottom Left) */}
      <div 
        className="absolute bottom-10 left-10 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, rgba(37, 99, 235, 0.12) 60%, transparent 80%)',
        }}
      />

      {/* Cinematic Horizontal Light Beam Sweep */}
      <div className="cinematic-light-streak" />

      {/* Perimeter Vignette for cinematic focus */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, transparent 50%, rgba(3, 7, 18, 0.7) 100%)'
        }}
      />
    </div>
  );
};

export default CinematicLighting;
