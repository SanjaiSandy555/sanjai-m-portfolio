import React from 'react';
import { PhotoPortrait } from './PhotoPortrait';
import { PORTFOLIO_CONFIG, HERO_CAREER_TAGS, HERO_INTERESTS } from '../portfolioConfig';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { downloadResume } from '../utils/resumeManager';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                SOFTWARE • DATA • TECHNOLOGY
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Software Engineer &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  Data Analyst
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-snug">
                Building software. Analyzing data. Exploring what’s next.
              </p>
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-3 max-w-2xl text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                {PORTFOLIO_CONFIG.SECONDARY_TAGLINE}
              </p>
              <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-zinc-200 bg-white/[0.04] py-1.5 px-3 rounded-lg border-l-3 border-emerald-500">
                <span>{PORTFOLIO_CONFIG.AVAILABILITY}</span>
              </div>
            </div>

            {/* Hero Career Tags & Secondary Line */}
            <div className="pt-1 space-y-2.5">
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {HERO_CAREER_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-zinc-200 bg-[#18181b] border border-white/10 shadow-xs hover:border-emerald-500/40 hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-400 tracking-wide">
                {HERO_INTERESTS}
              </p>
            </div>

            {/* Action Buttons: bg-emerald-600 text-white like the buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-download-resume-btn"
                onClick={() => {
                  downloadResume();
                }}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-all duration-200 shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                title="Download your uploaded resume or official document"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </button>

              <button
                id="hero-freelance-btn"
                onClick={() => {
                  const el = document.getElementById('freelance');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 font-semibold text-sm hover:bg-emerald-500/20 hover:text-white transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
              >
                <span>Freelance Services</span>
                <ArrowRight size={15} />
              </button>

              <button
                id="hero-view-work-btn"
                onClick={scrollToProjects}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white/[0.06] text-zinc-200 border border-white/15 font-semibold text-sm hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
              >
                <span>View Projects</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 text-zinc-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Connect:
              </span>
              <a
                href={PORTFOLIO_CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={PORTFOLIO_CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.EMAIL}`}
                aria-label="Email Sanjai"
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column (Visual Portrait Showcase) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhotoPortrait />
          </div>
        </div>
      </div>
    </section>
  );
};
