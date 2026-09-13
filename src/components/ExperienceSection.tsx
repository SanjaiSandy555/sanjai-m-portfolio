import React from 'react';
import { EXPERIENCE_DATA } from '../portfolioConfig';
import { Briefcase, Calendar, MapPin, CheckCircle, Terminal, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={14} />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Real-world software engineering, application maintenance, and operations in enterprise settings.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 rounded-3xl bg-[#141419] border border-white/10 shadow-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {exp.role}
                    </span>
                    <span className="text-xs font-medium text-zinc-400 px-2 py-0.5 rounded bg-white/[0.05]">
                      Enterprise Experience
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
                  <span className="flex items-center space-x-1.5 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/5">
                    <Calendar size={15} className="text-emerald-400" />
                    <span className="font-medium text-zinc-300">{exp.period}</span>
                  </span>
                  <span className="flex items-center space-x-1.5 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/5">
                    <MapPin size={15} className="text-emerald-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              {exp.summary && (
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {exp.summary}
                </p>
              )}

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Key Responsibilities &amp; Impact
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-300">
                  {exp.responsibilities.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5">
                      <CheckCircle size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Operations handled */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-zinc-400 mr-2 flex items-center gap-1">
                    <Terminal size={13} className="text-emerald-400" />
                    Environment &amp; Stack:
                  </span>
                  {exp.toolsUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.05] text-zinc-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-xs text-zinc-400">
                  <Layers size={13} className="text-emerald-400" />
                  <span>Production Maintenance Lifecycle</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
