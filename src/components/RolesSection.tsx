import React from 'react';
import { TARGET_ROLES } from '../portfolioConfig';
import { BarChart3, Code, Globe, Sparkles, Check } from 'lucide-react';

export const RolesSection: React.FC = () => {
  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'data-analyst':
        return <BarChart3 size={24} className="text-[#285943]" />;
      case 'software-engineer':
        return <Code size={24} className="text-[#285943]" />;
      case 'software-developer':
        return <Globe size={24} className="text-[#285943]" />;
      default:
        return <Code size={24} className="text-[#285943]" />;
    }
  };

  return (
    <section id="roles" className="py-20 md:py-28 bg-[#F5F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCE6DC] border border-[#9CAF9A]/40 text-[#285943] text-xs font-semibold uppercase tracking-wider">
            <span>Career Direction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943]">
            What kind of role am I looking for?
          </h2>
          <p className="text-[#68736C] text-base sm:text-lg">
            Positioned for roles that demand either disciplined software engineering, analytical data rigor, or the intersection of both.
          </p>
        </div>

        {/* 3 Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TARGET_ROLES.map((role) => (
            <div
              key={role.id}
              id={`role-card-${role.id}`}
              className="rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#285943]/40 group"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#DCE6DC]/70 border border-[#9CAF9A]/30 flex items-center justify-center transition-transform group-hover:scale-105">
                    {getRoleIcon(role.id)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#285943] bg-[#ECEDE5] px-3 py-1 rounded-full border border-[#9CAF9A]/30">
                    {role.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#25302A] group-hover:text-[#285943] transition-colors mb-2">
                  {role.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68736C] leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Skills Checklist */}
                <div className="space-y-2 border-t border-[#ECEDE5] pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#68736C] block mb-2">
                    Key Focus Areas:
                  </span>
                  {role.coreSkills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#25302A]">
                      <Check size={15} className="text-[#285943] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer Highlight */}
              <div className="mt-8 pt-4 border-t border-[#ECEDE5]/80">
                <p className="text-xs font-semibold text-[#285943] italic">
                  “{role.highlight}”
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Callout: Data Science & AI */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#ECEDE5]/80 border border-[#9CAF9A]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#285943] text-[#F5F5F0] flex items-center justify-center shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#285943]">
                Continuous Advanced Exploration
              </h4>
              <p className="text-sm text-[#68736C]">
                Alongside these core roles, I maintain active research and coursework in{' '}
                <strong className="text-[#25302A]">Data Science • Machine Learning • AI</strong>.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#285943] bg-[#FFFFFF] px-4 py-2 rounded-full border border-[#9CAF9A]/30 shrink-0">
            VIT Chennai MSc DS
          </span>
        </div>
      </div>
    </section>
  );
};
