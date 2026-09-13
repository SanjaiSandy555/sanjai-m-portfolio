import React from 'react';

export const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* Atmospheric "White Smoke" Ambient Mist / Glowing Radial Fog */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full bg-white/[0.045] blur-3xl" />
      <div className="absolute top-[28%] -left-36 w-[600px] h-[600px] rounded-full bg-white/[0.035] blur-3xl" />
      <div className="absolute top-[55%] -right-36 w-[650px] h-[650px] rounded-full bg-white/[0.04] blur-3xl" />
      <div className="absolute bottom-[5%] left-1/3 w-[550px] h-[550px] rounded-full bg-emerald-950/20 blur-3xl" />

      {/* Subtle White Smoke Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-60" />

      {/* Delicate Architectural Lines & Geometric Smoke Accents */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="whiteSmokeFade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Minimal structural atmospheric paths */}
        <path
          d="M -100,200 C 350,130 680,310 1200,180 S 1800,260 2200,150"
          fill="none"
          stroke="url(#whiteSmokeFade)"
          strokeWidth="0.8"
          strokeDasharray="4 8"
        />
        <path
          d="M -100,750 C 400,680 820,840 1400,710 S 1900,810 2200,690"
          fill="none"
          stroke="url(#whiteSmokeFade)"
          strokeWidth="0.75"
          strokeDasharray="3 6"
        />

        {/* Minimal geometric markers */}
        <g stroke="#FFFFFF" strokeWidth="0.6" opacity="0.35">
          <path d="M 120,360 L 128,360 M 124,356 L 124,364" />
          <path d="M 880,220 L 888,220 M 884,216 L 884,224" />
          <path d="M 1120,590 L 1128,590 M 1124,586 L 1124,594" />
          <path d="M 450,860 L 458,860 M 454,856 L 454,864" />
        </g>
      </svg>
    </div>
  );
};
