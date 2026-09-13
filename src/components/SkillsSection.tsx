import React, { useState } from 'react';
import { TECHNICAL_SKILLS_CATEGORIES, TOOLS_CATEGORIES } from '../portfolioConfig';
import { 
  Cpu, Code2, Globe, Database, BarChart3, Wrench, CheckCircle2, 
  FileSpreadsheet, Terminal, GitBranch, Layers, ShieldCheck, 
  ExternalLink, Sparkles, Filter
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedToolGroup, setSelectedToolGroup] = useState<string>('All');

  const getIconForCategory = (title: string) => {
    if (title.includes('PROGRAMMING')) {
      return <Code2 size={20} className="text-emerald-400" />;
    }
    if (title.includes('WEB')) {
      return <Globe size={20} className="text-emerald-400" />;
    }
    if (title.includes('DATABASE')) {
      return <Database size={20} className="text-emerald-400" />;
    }
    if (title.includes('DATA')) {
      return <BarChart3 size={20} className="text-emerald-400" />;
    }
    return <Cpu size={20} className="text-emerald-400" />;
  };

  const getIconForToolGroup = (groupName: string) => {
    if (groupName.includes('Data') || groupName.includes('Excel')) {
      return <FileSpreadsheet size={16} className="text-emerald-400" />;
    }
    if (groupName.includes('Remote') || groupName.includes('Server')) {
      return <Terminal size={16} className="text-emerald-400" />;
    }
    if (groupName.includes('Version') || groupName.includes('Diff')) {
      return <GitBranch size={16} className="text-emerald-400" />;
    }
    if (groupName.includes('Automation') || groupName.includes('Sync')) {
      return <Layers size={16} className="text-emerald-400" />;
    }
    return <Wrench size={16} className="text-emerald-400" />;
  };

  const toolGroupNames = ['All', ...TOOLS_CATEGORIES.map(g => g.group)];

  const filteredToolGroups = selectedToolGroup === 'All' 
    ? TOOLS_CATEGORIES 
    : TOOLS_CATEGORIES.filter(g => g.group === selectedToolGroup);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-2xl">
            A cohesive balance of core software engineering, data analytics, Microsoft Excel modeling, and enterprise production tools.
          </p>
        </div>

        {/* Technical Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TECHNICAL_SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#121217] border border-white/10 shadow-lg hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner">
                    {getIconForCategory(cat.title)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skills List with Level/Context */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const isExcel = skill.name.toLowerCase().includes('excel');
                    return (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border transition-all ${
                          isExcel 
                            ? 'bg-gradient-to-r from-[#064e3b]/50 to-[#022c22]/70 border-[#10b981]/60 ring-1 ring-[#34d399]/40 shadow-md' 
                            : 'bg-white/[0.03] border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <div className="flex items-center space-x-1.5">
                            {isExcel ? (
                              <span className="flex items-center gap-1">
                                <FileSpreadsheet size={14} className="text-[#34d399] shrink-0" />
                                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#10b981] text-zinc-950 tracking-wider">
                                  XLSX
                                </span>
                              </span>
                            ) : null}
                            <span className={`text-xs font-bold ${isExcel ? 'text-[#a7f3d0]' : 'text-white'}`}>
                              {skill.name}
                            </span>
                          </div>
                          {skill.level && (
                            <span className={`text-[10px] font-semibold shrink-0 ${isExcel ? 'text-[#34d399]' : 'text-emerald-400'}`}>
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.context && (
                          <p className={`text-[11px] mt-1 leading-snug ${isExcel ? 'text-emerald-200/90 font-medium' : 'text-zinc-400'}`}>
                            {skill.context}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
                <span>{cat.skills.length} core competencies</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Upgraded Tools Section with Tabs and Excel Spotlight */}
        <div id="tools-section" className="rounded-3xl bg-[#121217] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-start sm:items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Wrench size={22} className="text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Tools, Workflows &amp; Environments
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Production &amp; Data
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Production systems, remote deployment, spreadsheet automation, and diff verification tools.
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
              {toolGroupNames.map((group) => {
                const active = selectedToolGroup === group;
                return (
                  <button
                    key={group}
                    onClick={() => setSelectedToolGroup(group)}
                    className={`px-3 py-1 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {group === 'All' ? 'All Tools' : group.split('&')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mt-8 space-y-8">
            {filteredToolGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-3.5">
                <div className="flex items-center space-x-2">
                  {getIconForToolGroup(group.group)}
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {group.group}
                  </h4>
                  {group.description && (
                    <span className="text-xs text-zinc-500 hidden sm:inline">— {group.description}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {group.tools.map((tool, tIdx) => {
                    const isExcel = tool.name.toLowerCase().includes('excel');
                    const isHighlight = tool.highlight || isExcel;
                    return (
                      <div
                        key={tIdx}
                        className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative group ${
                          isExcel
                            ? 'bg-gradient-to-br from-[#064e3b]/85 via-[#063327] to-[#031d16] border-[#10b981]/80 ring-1 ring-[#34d399]/50 shadow-xl shadow-emerald-950/80'
                            : isHighlight
                            ? 'bg-emerald-950/25 border-emerald-500/40 ring-1 ring-emerald-500/30 shadow-md shadow-emerald-950/40'
                            : 'bg-white/[0.03] border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-white flex items-center gap-1.5">
                              {isExcel ? (
                                <FileSpreadsheet size={16} className="text-[#34d399] shrink-0" />
                              ) : (
                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                              )}
                              <span className={isExcel ? 'text-[#a7f3d0] font-extrabold' : ''}>{tool.name}</span>
                            </span>

                            {tool.badge && (
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                isExcel
                                  ? 'bg-[#10b981] text-zinc-950 font-mono tracking-wider'
                                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              }`}>
                                {tool.badge}
                              </span>
                            )}
                          </div>

                          <p className={`text-xs leading-relaxed ${isExcel ? 'text-emerald-100 font-normal' : 'text-zinc-300'}`}>
                            {tool.description}
                          </p>

                          {isExcel && (
                            <div className="mt-2.5 flex flex-wrap gap-1">
                              {['XLOOKUP & Logic', 'Dynamic Pivot Tables', 'Data Cleansing', 'KPI Models'].map((tag) => (
                                <span key={tag} className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#10b981]/20 text-[#6ee7b7] border border-[#10b981]/30">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {isHighlight && (
                          <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[11px] font-medium ${
                            isExcel ? 'border-[#10b981]/30 text-[#6ee7b7]' : 'border-emerald-500/20 text-emerald-300'
                          }`}>
                            <span className="flex items-center gap-1">
                              <Sparkles size={12} />
                              <span>{isExcel ? 'Core Analytical Specialization' : 'Key Strength'}</span>
                            </span>
                            <span className={isExcel ? 'text-[#34d399] font-bold uppercase tracking-wider text-[10px]' : 'text-emerald-400 font-bold'}>
                              {isExcel ? 'Specialist' : 'Active Use'}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
