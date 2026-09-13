import React from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { LeafIcon } from './LeafIcon';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, Heart, ArrowDownToLine } from 'lucide-react';
import { downloadResume } from '../utils/resumeManager';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#060608] border-t border-white/10 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Identity & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner">
                <LeafIcon size={24} color="#10B981" accentColor="#6EE7B7" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  {PORTFOLIO_CONFIG.NAME}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {PORTFOLIO_CONFIG.DESIGNATION}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              9 months software engineering experience at 4W Technologies. Available for full-time engineering positions and freelance contracts.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-time &amp; Freelance</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-emerald-300 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Resume Actions: bg-emerald-600 text-white like the buttons */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Connect &amp; Documents
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Reach out directly for interview inquiries, project collaborations, or technical discussions.
            </p>

            <div className="flex items-center space-x-2">
              <a
                href={PORTFOLIO_CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={PORTFOLIO_CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.EMAIL}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${PORTFOLIO_CONFIG.WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
              >
                <MessageSquare size={16} />
              </a>
            </div>

            <div className="pt-2">
              <button
                id="footer-download-resume-btn"
                onClick={() => downloadResume()}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950/40 cursor-pointer"
              >
                <ArrowDownToLine size={14} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="flex items-center space-x-1">
            <span>Designed &amp; Built by</span>
            <strong className="text-white font-semibold">{PORTFOLIO_CONFIG.NAME}</strong>
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.05] hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
