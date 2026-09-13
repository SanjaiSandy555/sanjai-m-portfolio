import React from 'react';
import { EDUCATION_DATA } from '../portfolioConfig';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, Sparkles, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#09090c] border-y border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3.5">
            <GraduationCap size={14} />
            <span>Academic Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education Journey
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A chronological progression of academic achievements, technical foundations, and degrees.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Vertical Timeline Spine Line */}
          <div 
            className="absolute left-3 sm:left-5 md:left-6 top-3 bottom-8 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/60 to-emerald-500/10"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {EDUCATION_DATA.map((edu, idx) => {
              const isFirst = idx === 0;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline Node Icon / Marker */}
                  <div 
                    className={`absolute -left-6 sm:-left-10 md:-left-12 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isFirst 
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50 ring-4 ring-emerald-500/20' 
                        : 'bg-[#18181f] text-emerald-400 border border-emerald-500/40 ring-4 ring-white/[0.03]'
                    }`}
                  >
                    {isFirst ? (
                      <GraduationCap size={14} className="animate-pulse" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    )}
                  </div>

                  {/* Content Block */}
                  <div className="rounded-2xl sm:rounded-3xl bg-[#121217] border border-white/10 p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                      {/* Period Badge & Status */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        {edu.period && (
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 tracking-wide">
                            <Calendar size={13} className="text-emerald-400" />
                            <span>{edu.period}</span>
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/[0.06] text-zinc-300 border border-white/10 uppercase tracking-wider">
                          {edu.status || 'Completed'}
                        </span>
                      </div>

                      {/* Score / Distinction Tag */}
                      {edu.score && (
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs sm:text-sm font-extrabold shadow-xs self-start sm:self-auto">
                          <Award size={14} className="text-emerald-300" />
                          <span>{edu.scoreLabel ? `${edu.scoreLabel}: ` : ''}{edu.score}</span>
                        </div>
                      )}
                    </div>

                    {/* Degree & Institution */}
                    <div className="mt-5 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        <span>{edu.degree}</span>
                        {isFirst && (
                          <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Latest Degree
                          </span>
                        )}
                      </h3>

                      <p className="text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-2">
                        <BookOpen size={16} className="shrink-0 text-emerald-400" />
                        <span>{edu.institution}</span>
                      </p>
                    </div>

                    {/* Highlights / Academic details */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-white/[0.06]">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                          <Sparkles size={13} className="text-emerald-400" />
                          <span>Key Highlights &amp; Coursework:</span>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-300">
                              <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
