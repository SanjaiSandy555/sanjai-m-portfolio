import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { Code2, BarChart2, Sparkles, Database, Terminal } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const PhotoPortrait: React.FC = () => {
  return (
    <div id="hero-photo-container" className="relative flex items-center justify-center p-4 sm:p-8">
      {/* Subtle geometric background accents */}
      <div className="absolute -top-6 -right-6 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/[0.05] rounded-full blur-2xl pointer-events-none" />

      {/* Floating Pill Label 1: Software (Top-Left) */}
      <div
        id="badge-software"
        className="absolute -top-2 -left-2 sm:top-2 sm:-left-4 z-20 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#18181b]/90 backdrop-blur-md border border-white/10 shadow-lg text-xs font-semibold text-zinc-200 transition-transform duration-300 hover:scale-105 hover:border-emerald-500/40"
      >
        <Code2 size={13} className="text-emerald-400" />
        <span>Software</span>
      </div>

      {/* Floating Pill Label 2: Data (Top-Right) */}
      <div
        id="badge-data"
        className="absolute top-6 -right-3 sm:top-8 sm:-right-6 z-20 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#18181b]/90 backdrop-blur-md border border-white/10 shadow-lg text-xs font-semibold text-zinc-200 transition-transform duration-300 hover:scale-105 hover:border-emerald-500/40"
      >
        <BarChart2 size={13} className="text-emerald-400" />
        <span>Data</span>
      </div>

      {/* Floating Pill Label 3: AI (Bottom-Left) */}
      <div
        id="badge-ai"
        className="absolute bottom-6 -left-3 sm:bottom-10 sm:-left-5 z-20 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#18181b]/90 backdrop-blur-md border border-white/10 shadow-lg text-xs font-semibold text-zinc-200 transition-transform duration-300 hover:scale-105 hover:border-emerald-500/40"
      >
        <Sparkles size={13} className="text-emerald-400" />
        <span>AI / ML</span>
      </div>

      {/* Floating Pill Label 4: Analytics (Bottom-Right) */}
      <div
        id="badge-analytics"
        className="absolute -bottom-2 right-2 sm:bottom-0 sm:right-4 z-20 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#18181b]/90 backdrop-blur-md border border-white/10 shadow-lg text-xs font-semibold text-zinc-200 transition-transform duration-300 hover:scale-105 hover:border-emerald-500/40"
      >
        <Database size={13} className="text-emerald-400" />
        <span>Analytics</span>
      </div>

      {/* Portrait Frame: Dark card with subtle gradient border */}
      <div className="relative w-60 h-68 sm:w-68 sm:h-76 md:w-76 md:h-84 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#121216] relative flex flex-col items-center justify-center text-center p-6">
          {PORTFOLIO_CONFIG.PROFILE_IMAGE ? (
            <img
              src={PORTFOLIO_CONFIG.PROFILE_IMAGE}
              alt={PORTFOLIO_CONFIG.FULL_NAME}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-between py-6 px-2 bg-gradient-to-b from-[#18181b] to-[#0f0f12]">
              <div className="w-11 h-11 rounded-2xl bg-white/[0.05] flex items-center justify-center border border-white/10 shadow-inner">
                <Terminal size={20} className="text-emerald-400" />
              </div>

              <div className="space-y-3">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center text-white shadow-xl border border-white/10">
                  <LeafIcon size={34} color="#10B981" accentColor="#6EE7B7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {PORTFOLIO_CONFIG.NAME}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium">
                    Software &amp; Data Analyst
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-medium text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Opportunities</span>
              </div>
            </div>
          )}

          {/* Minimal watermark */}
          <div className="absolute bottom-2 right-2 opacity-15 pointer-events-none">
            <LeafIcon size={24} color="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
  );
};
