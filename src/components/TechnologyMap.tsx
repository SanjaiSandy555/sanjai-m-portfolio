import React, { useState } from 'react';
import { Network, Sparkles, Database, Cloud, Code, BarChart2, Cpu } from 'lucide-react';
import { LeafIcon } from './LeafIcon';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';

export const TechnologyMap: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<string | null>('Software Engineering');

  const branches = [
    {
      id: 'software',
      title: 'Software Engineering',
      icon: <Code size={18} />,
      technologies: ['Java', 'React', 'PHP', 'JavaScript', 'Object-Oriented Design', 'Modular Architecture'],
      summary: 'Building robust, maintainable full-stack applications and stable backend engines.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: <BarChart2 size={18} />,
      technologies: ['Python', 'SQL', 'Power BI', 'Exploratory Data Analysis', 'Data Cleaning', 'Reporting Dashboards'],
      summary: 'Wrangling complex datasets, formulating business insights, and visual reporting.'
    },
    {
      id: 'data-science',
      title: 'Data Science',
      icon: <Sparkles size={18} />,
      technologies: ['Pandas', 'NumPy', 'Scikit-Learn', 'Feature Engineering', 'Regression Modeling', 'Statistical Testing'],
      summary: 'Applying rigorous mathematical analysis, exploratory modeling, and predictive pipelines.'
    },
    {
      id: 'ai',
      title: 'AI / Intelligent Systems',
      icon: <Cpu size={18} />,
      technologies: ['Machine Learning', 'Computer Vision Foundations', 'Classification Metrics', 'Neural Concepts'],
      summary: 'Continuous exploration into intelligent pattern recognition and machine learning systems.'
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: <Cloud size={18} />,
      technologies: ['AWS', 'Amazon EC2', 'Amazon S3', 'AWS IAM', 'CloudWatch Telemetry'],
      summary: 'Foundational cloud services for scalable compute, secure identity, and media storage.'
    },
    {
      id: 'databases',
      title: 'Databases & Foundations',
      icon: <Database size={18} />,
      technologies: ['MySQL', 'RDBMS', 'CRUD Operations', 'Query Optimization', 'Relational Schema 3NF'],
      summary: 'Disciplined relational data modeling, ACID adherence, and optimized indexing.'
    }
  ];

  return (
    <section id="tech-map" className="py-20 md:py-28 bg-[#F5F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCE6DC] border border-[#9CAF9A]/40 text-[#285943] text-xs font-semibold uppercase tracking-wider">
            <Network size={14} />
            <span>Signature Visual</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943]">
            My Technology Landscape
          </h2>
          <p className="text-[#68736C] text-base sm:text-lg">
            A cohesive interconnected web of capabilities radiating from core software foundations into data science and intelligence.
          </p>
        </div>

        {/* Central Core & Interactive Branches Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-sm relative">
          {/* Central Hub Display */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#285943] text-[#F5F5F0] shadow-sm">
              <LeafIcon size={18} color="#F5F5F0" accentColor="#9CAF9A" />
              <span className="font-serif text-lg font-bold tracking-wider">
                {PORTFOLIO_CONFIG.NAME.toUpperCase()}
              </span>
              <span className="text-xs text-[#DCE6DC] uppercase tracking-wider pl-2 border-l border-[#DCE6DC]/30">
                Core Hub
              </span>
            </div>
            <p className="text-xs text-[#68736C] mt-2">
              Select any domain below to inspect associated technologies and practical focus:
            </p>
          </div>

          {/* Connected Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch) => {
              const isSelected = activeBranch === branch.title;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranch(branch.title)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#ECEDE5]/90 border-[#285943] shadow-md scale-[1.02]'
                      : 'bg-[#F5F5F0]/70 border-[#9CAF9A]/30 hover:border-[#285943]/50 hover:bg-[#FFFFFF]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#285943] text-[#F5F5F0]' : 'bg-[#DCE6DC] text-[#285943]'
                      }`}>
                        {branch.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CAF9A]">
                        Pillar
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#25302A] mb-1.5">
                      {branch.title}
                    </h3>
                    <p className="text-xs text-[#68736C] leading-relaxed mb-4">
                      {branch.summary}
                    </p>

                    {/* Branching Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#9CAF9A]/20">
                      {branch.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${
                            isSelected
                              ? 'bg-[#285943] text-[#F5F5F0]'
                              : 'bg-[#FFFFFF] text-[#285943] border border-[#9CAF9A]/30'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Connecting Footnote */}
          <div className="mt-10 pt-6 border-t border-[#ECEDE5] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#68736C]">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#285943]" />
              <span>Unified skill tree spanning application engineering to predictive modeling.</span>
            </span>
            <span className="font-semibold text-[#285943]">
              Software + Data + Cloud Ecosystem
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
