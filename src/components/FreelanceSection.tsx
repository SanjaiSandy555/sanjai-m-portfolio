import React from 'react';
import { FREELANCE_SERVICES, PORTFOLIO_CONFIG } from '../portfolioConfig';
import { 
  Briefcase, CheckCircle2, Clock, ArrowRight, MessageSquare, 
  Sparkles, Code2, FileSpreadsheet, Database, Server, ShieldCheck 
} from 'lucide-react';

interface FreelanceSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const FreelanceSection: React.FC<FreelanceSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'fullstack-web':
        return <Code2 size={20} className="text-emerald-400" />;
      case 'excel-analytics':
        return <FileSpreadsheet size={20} className="text-emerald-400" />;
      case 'database-crud':
        return <Database size={20} className="text-emerald-400" />;
      case 'server-deployment':
        return <Server size={20} className="text-emerald-400" />;
      default:
        return <Briefcase size={20} className="text-emerald-400" />;
    }
  };

  const handleHireClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="freelance" className="py-20 md:py-28 bg-[#09090c] border-t border-white/10 relative overflow-hidden">
      {/* Subtle emerald ambient aura */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Briefcase size={14} />
              <span>Client Services &amp; Contracts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Freelancing &amp; Contract Solutions
            </h2>
            <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-2xl">
              Delivering dependable, fast-turnaround freelance development, database engineering, and spreadsheet automation tailored for startups, small businesses, and academic teams.
            </p>
          </div>

          {/* Quick WhatsApp Freelance Banner */}
          <div className="shrink-0 flex items-center space-x-3 bg-[#14141a] p-3 sm:p-4 rounded-2xl border border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <p className="text-xs font-bold text-white">Status: Available Immediately</p>
              <p className="text-[11px] text-zinc-400">Fixed-price or milestone contracts</p>
            </div>
            <a
              href={`https://wa.me/${PORTFOLIO_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hi Sanjai, I am looking to hire you for a freelance project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950/40 inline-flex items-center space-x-1.5 cursor-pointer"
            >
              <MessageSquare size={13} />
              <span>Chat</span>
            </a>
          </div>
        </div>

        {/* Freelance Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FREELANCE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-white/10 shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with icon and category badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner group-hover:border-emerald-500/40 transition-colors">
                    {getServiceIcon(srv.id)}
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      {srv.category}
                    </span>
                    <span className="flex items-center space-x-1 text-[11px] text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full">
                      <Clock size={12} className="text-emerald-400" />
                      <span>{srv.estimatedTurnaround}</span>
                    </span>
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {srv.shortDescription}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    What's Included / Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-zinc-300">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer: Tech Stack and Action Button */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {srv.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleHireClick(srv.title)}
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md shadow-emerald-950/40 shrink-0 cursor-pointer"
                >
                  <span>Discuss Project</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Hire Sanjai Guarantee Banner */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Freelance Quality Assurance</h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Direct communication, clean maintainable code, disciplined milestone updates, and post-delivery support.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_CONFIG.EMAIL}?subject=${encodeURIComponent(
                'Freelance Project Inquiry - SANJAI M'
              )}`}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/[0.06] text-white border border-white/15 hover:bg-white/10 transition-colors"
            >
              Email Brief
            </a>
            <a
              href={`https://wa.me/${PORTFOLIO_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hi Sanjai, I would like to hire you for a freelance project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950/40 flex items-center space-x-1.5"
            >
              <MessageSquare size={15} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
