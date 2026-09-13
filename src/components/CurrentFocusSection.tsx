import React from 'react';
import { ArrowRight, Code2, Database, BrainCircuit, Sparkles } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const CurrentFocusSection: React.FC = () => {
  return (
    <section id="focus" className="py-20 md:py-24 bg-[#ECEDE5]/50 border-y border-[#285943]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCE6DC] border border-[#9CAF9A]/40 text-[#285943] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Trajectory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943]">
            Where I&apos;m Heading
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-serif text-lg sm:text-xl text-[#25302A] pt-2">
            <span className="font-semibold text-[#285943]">Software Engineering</span>
            <span className="text-[#9CAF9A]">•</span>
            <span className="font-semibold text-[#285943]">Data Analytics</span>
            <span className="text-[#9CAF9A]">•</span>
            <span className="font-semibold text-[#285943]">Data Science</span>
            <span className="text-[#9CAF9A]">•</span>
            <span className="font-semibold text-[#285943]">AI / ML</span>
          </div>
          <p className="text-[#68736C] text-base max-w-2xl mx-auto pt-2">
            Building upon a disciplined software development foundation while actively expanding data analytics and exploratory machine learning capabilities through rigorous academic and project work.
          </p>
        </div>

        {/* Visual Progression: CODE → DATA → INTELLIGENCE */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CAF9A] block mb-1">
              Evolutionary Path
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#285943]">
              The Core Progression
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: CODE */}
            <div className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#9CAF9A]/30 flex flex-col justify-between space-y-4 hover:border-[#285943] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE6DC] flex items-center justify-center text-[#285943]">
                    <Code2 size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#9CAF9A]">
                    Phase 01
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#285943] mb-1">
                  CODE
                </h4>
                <p className="text-xs font-semibold text-[#68736C] uppercase tracking-wider mb-3">
                  Software Engineering &amp; Systems
                </p>
                <p className="text-xs sm:text-sm text-[#25302A] leading-relaxed">
                  Solid programming foundations in Java, Python, and modern JavaScript. Writing clean, testable, and maintainable logic that solves real business problems.
                </p>
              </div>
              <div className="pt-3 border-t border-[#ECEDE5] text-[11px] text-[#68736C]">
                Foundation: B.Sc. CS &amp; 4W Technologies Experience
              </div>
            </div>

            {/* Step 2: DATA */}
            <div className="p-6 rounded-2xl bg-[#DCE6DC]/40 border border-[#285943]/20 flex flex-col justify-between space-y-4 hover:border-[#285943] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#285943] flex items-center justify-center text-[#F5F5F0]">
                    <Database size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#285943]">
                    Phase 02
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#285943] mb-1">
                  DATA
                </h4>
                <p className="text-xs font-semibold text-[#68736C] uppercase tracking-wider mb-3">
                  Analytics, Wrangling &amp; Insights
                </p>
                <p className="text-xs sm:text-sm text-[#25302A] leading-relaxed">
                  Cleaning, aggregating, and analyzing structured data through SQL, Pandas, and interactive dashboards to extract actionable business patterns.
                </p>
              </div>
              <div className="pt-3 border-t border-[#285943]/15 text-[11px] text-[#285943] font-medium">
                Current: Relational Modeling &amp; Analytics
              </div>
            </div>

            {/* Step 3: INTELLIGENCE */}
            <div className="p-6 rounded-2xl bg-[#F5F5F0] border border-[#9CAF9A]/30 flex flex-col justify-between space-y-4 hover:border-[#285943] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE6DC] flex items-center justify-center text-[#285943]">
                    <BrainCircuit size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#9CAF9A]">
                    Phase 03
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#285943] mb-1">
                  INTELLIGENCE
                </h4>
                <p className="text-xs font-semibold text-[#68736C] uppercase tracking-wider mb-3">
                  Data Science &amp; Machine Learning
                </p>
                <p className="text-xs sm:text-sm text-[#25302A] leading-relaxed">
                  Deepening mathematical and modeling capabilities in statistical regression, classification pipelines, and exploratory neural systems.
                </p>
              </div>
              <div className="pt-3 border-t border-[#ECEDE5] text-[11px] text-[#68736C]">
                Specialization: VIT Chennai MSc Data Science
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
