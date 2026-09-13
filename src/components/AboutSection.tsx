import React from 'react';
import { CheckCircle2, Terminal, Layers, User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0d0d11] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <User size={14} />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A little about me
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Core Mindset Statement & Quick Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#141419] border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-bl-full pointer-events-none" />
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                Core Mindset
              </p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Build.
                <br />
                Analyze.
                <br />
                Learn.
                <br />
                Improve.
              </h3>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#141419] border border-white/10 shadow-xs">
                <Terminal size={18} className="text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold uppercase text-white tracking-wide">
                  Clean Logic
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Disciplined OOP, solid design, and maintainable codebases.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#141419] border border-white/10 shadow-xs">
                <Layers size={18} className="text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold uppercase text-white tracking-wide">
                  Data Thinking
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Translating complex rows and queries into clear visual insights.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Biography in Short Readable Sections */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <div className="space-y-4">
              <p>
                My journey in technology started with a foundational degree in{' '}
                <strong className="text-white font-semibold">Computer Science</strong>, 
                where I developed a deep appreciation for core computational logic, object-oriented systems, 
                and relational database design. Currently advancing my postgraduate studies in{' '}
                <strong className="text-emerald-400 font-semibold">Data Science at VIT Chennai</strong>, 
                I bridge the gap between building software applications and analyzing the data that powers them.
              </p>

              <p>
                In professional environments such as my work at{' '}
                <strong className="text-white font-semibold">4W Technologies</strong>, 
                I engaged in day-to-day software maintenance, server synchronization tasks, remote desktop workflows, 
                and structured technical debugging. I learned that durable engineering is not just about writing code—it is about 
                verifying logic, preventing regressions, and keeping deployments predictable.
              </p>

              <p>
                Parallel to software development, I have dedicated significant time to data analytics, statistical 
                reasoning, and exploratory machine learning. Whether writing Python scripts with Pandas to clean messy 
                datasets or designing SQL queries that unearth business patterns, I thrive at the intersection where code meets insight.
              </p>
            </div>

            {/* Core Competencies Capsule List */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Areas of Hands-On Practice
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                {[
                  'Software & Web Development (Java, PHP, JavaScript, React)',
                  'Data Analytics & Wrangling (Python, Pandas, NumPy, SQL)',
                  'Machine Learning & Exploratory Data Analysis (EDA)',
                  'Relational Databases & Schema Design (MySQL, DBMS, CRUD)',
                  'Cloud & Infrastructure Foundations (AWS EC2, S3, IAM)',
                  'Linux Systems, Remote Desktop (RDC) & Production Tools'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-200 font-medium text-xs sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
