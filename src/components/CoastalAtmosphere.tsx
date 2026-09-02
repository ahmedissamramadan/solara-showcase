import React from 'react';

interface CoastalAtmosphereProps {
  isSoundActive?: boolean;
}

export const CoastalAtmosphere: React.FC<CoastalAtmosphereProps> = ({ isSoundActive = false }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* 1. Deep Mediterranean Water Depth Gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(14, 30, 56, 0.6) 0%, rgba(5, 8, 15, 0.95) 75%)'
        }}
      />

      {/* 2. Shimmering Water Caustics / Sunbeam Refraction Layer */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isSoundActive ? 'opacity-[0.07]' : 'opacity-[0.04]'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.4) 0%, transparent 40%), 
                            radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.25) 0%, transparent 50%),
                            radial-gradient(circle at 20% 70%, rgba(212, 175, 55, 0.2) 0%, transparent 45%)`,
          filter: 'blur(30px)',
          transform: 'translateZ(0)',
          willChange: 'opacity'
        }}
      />

      {/* 3. Subtle Animated Coastal Wave Crest Ribbons */}
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-[0.035] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <path
          d="M0,160 C320,300 420,40 720,160 C1020,280 1120,80 1440,200 L1440,900 L0,900 Z"
          fill="url(#wave-gradient)"
        />
        <path
          d="M0,280 C360,120 540,360 900,240 C1260,120 1340,320 1440,260 L1440,900 L0,900 Z"
          fill="url(#wave-gradient-gold)"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0A1424" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-gold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0A1424" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Golden Sun Dust / Sea Salt Spray Floating Particles */}
      <div className="absolute inset-0">
        {[
          { top: '15%', left: '20%', size: '3px', delay: '0s', duration: '7s' },
          { top: '28%', left: '75%', size: '2px', delay: '1.5s', duration: '9s' },
          { top: '45%', left: '35%', size: '4px', delay: '3s', duration: '8s' },
          { top: '65%', left: '85%', size: '2.5px', delay: '0.5s', duration: '10s' },
          { top: '80%', left: '15%', size: '3px', delay: '2s', duration: '7.5s' },
          { top: '92%', left: '60%', size: '2px', delay: '4s', duration: '8.5s' },
        ].map((particle, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-solara-gold/40 shadow-gold-glow animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

    </div>
  );
};
