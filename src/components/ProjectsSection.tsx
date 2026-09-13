import React, { useState } from 'react';
import { PROJECTS_DATA } from '../portfolioConfig';
import { ProjectDetail, ProjectCategory } from '../types';
import { FolderGit2, ExternalLink, Github, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectDetail | null>(null);

  const filterOptions: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'All' },
    { label: 'Software', value: 'Software' },
    { label: 'Web Applications', value: 'Web' },
    { label: 'Data Analytics', value: 'Data' },
    { label: 'AI & Machine Learning', value: 'AI / ML' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0d0d11] border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 size={14} />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-2xl">
              Practical software systems and data analytics case studies addressing real requirements.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedFilter(opt.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === opt.value
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                    : 'bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group p-6 sm:p-7 rounded-3xl bg-[#141419] border border-white/10 shadow-lg hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.05] text-zinc-300 border border-white/10">
                    {proj.category}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Tagline / Subtitle */}
                <p className="text-xs font-semibold text-emerald-400/90 mb-3">
                  {proj.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {proj.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.05] text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-lg text-xs font-medium bg-white/[0.03] text-zinc-500">
                      +{proj.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions: Case Study Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveProjectModal(proj)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center space-x-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {proj.liveDemoUrl && (
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Viewer: Dark Aesthetic with Sticky Visible Header */}
      {activeProjectModal && (
        <div
          id="project-case-study-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-start p-3 sm:p-6 md:py-10"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#121217] border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominently Visible Modal Header */}
            <div className="sticky top-0 z-20 bg-[#16161d]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-white/10 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {activeProjectModal.category}
                  </span>
                  <LeafIcon size={16} color="#10B981" />
                  <span className="text-xs font-medium text-zinc-400">Full Project Case Study</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {activeProjectModal.title}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                  {activeProjectModal.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                aria-label="Close case study dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[68vh] overflow-y-auto text-sm text-zinc-300 leading-relaxed">
              <p className="text-sm sm:text-base text-zinc-200">
                {activeProjectModal.shortDescription}
              </p>

              {activeProjectModal.caseStudy && (
                <>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Problem Statement:
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {activeProjectModal.caseStudy.problem}
                    </p>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 pt-2 border-t border-white/5">
                      Engineering Solution:
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {activeProjectModal.caseStudy.solution}
                    </p>
                  </div>

                  {activeProjectModal.caseStudy.features && (
                    <div className="space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                        Key Features &amp; Architecture:
                      </h3>
                      <ul className="space-y-2">
                        {activeProjectModal.caseStudy.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                            <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeProjectModal.caseStudy.result && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                      <p className="text-xs sm:text-sm text-zinc-200">
                        <strong className="text-emerald-400">Outcome &amp; Impact: </strong>
                        {activeProjectModal.caseStudy.result}
                      </p>
                    </div>
                  )}
                </>
              )}

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                  Tools &amp; Stack Applied:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-white/[0.06] text-zinc-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-4 bg-[#16161d]/95 backdrop-blur-md border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white/[0.06] text-zinc-200 text-xs font-semibold hover:bg-white/15 transition-colors"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                {activeProjectModal.liveDemoUrl && (
                  <a
                    href={activeProjectModal.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-xl bg-white/[0.08] text-zinc-300 text-xs font-medium hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
