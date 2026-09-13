import React from 'react';
import { TOOLS_CATEGORIES } from '../portfolioConfig';
import { Settings, GitBranch, ArrowRight, Terminal, CheckCircle2, Laptop } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const ToolsSection: React.FC = () => {
  const systemsTools = [
    {
      name: 'Syncovery',
      role: 'File Sync & Backups',
      experience: 'Practical experience',
      desc: 'Automating multi-directory file synchronization, differential backup sets, and scheduled file replication.',
    },
    {
      name: 'WinSCP',
      role: 'Secure SFTP / FTP',
      experience: 'Worked with extensively',
      desc: 'Secure remote file transfer, session-saved key authorizations, remote file editing, and permissions verification.',
    },
    {
      name: 'CoreFTP',
      role: 'Production Transfers',
      experience: 'Practical experience',
      desc: 'Executing automated and manual batch file distribution to production web servers via encrypted tunnels.',
    },
    {
      name: 'Beyond Compare',
      role: 'Directory & File Diffing',
      experience: 'Worked with regularly',
      desc: 'Precision visual directory comparison, merge analysis, and line-by-line file diffing to catch unexpected changes.',
    },
    {
      name: 'Linux Commands',
      role: 'Terminal Operations',
      experience: 'Familiar with',
      desc: 'CLI navigation, process listing (ps, top), file permissions (chmod, chown), grep filtering, and log tailing.',
    },
    {
      name: 'Remote Desktop (RDC)',
      role: 'Remote Server Management',
      experience: 'Practical experience',
      desc: 'Establishing secure remote administrative sessions on Windows servers for maintenance and inspection.',
    },
    {
      name: 'Windows Task Scheduler',
      role: 'Routine Automation',
      experience: 'Worked with',
      desc: 'Scheduling automated batch scripts, periodic maintenance routines, and trigger-based system executions.',
    },
    {
      name: 'Windows Task Manager',
      role: 'System Resource Audit',
      experience: 'Practical experience',
      desc: 'Monitoring CPU/Memory allocations, diagnosing hung threads, and auditing background application processes.',
    },
  ];

  const buildSteps = [
    { label: 'IDE', desc: 'IntelliJ / VS Code / Eclipse' },
    { label: 'CODE', desc: 'Modular Java, Python, JS, PHP' },
    { label: 'GIT', desc: 'Atomic commits & branch staging' },
    { label: 'GITHUB', desc: 'Remote push & review tracking' },
    { label: 'TEST', desc: 'Beyond Compare diffs & checks' },
    { label: 'DEPLOY', desc: 'WinSCP / Docker staging' },
  ];

  return (
    <section id="tools" className="py-20 md:py-28 bg-[#ECEDE5]/60 border-y border-[#285943]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCE6DC] border border-[#9CAF9A]/40 text-[#285943] text-xs font-semibold uppercase tracking-wider">
            <Settings size={14} />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943]">
            Tools I Work With
          </h2>
          <p className="text-[#68736C] text-base sm:text-lg">
            Practical development environments, file distribution utilities, diffing software, and operating system tools.
          </p>
        </div>

        {/* 1. Categorized Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TOOLS_CATEGORIES.map((category) => (
            <div
              key={category.group}
              className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CAF9A] block mb-2">
                  Logical Group
                </span>
                <h3 className="font-serif text-xl font-bold text-[#25302A] mb-4 pb-3 border-b border-[#ECEDE5]">
                  {category.group}
                </h3>
                <div className="space-y-3">
                  {category.tools.map((t) => (
                    <div key={t.name} className="space-y-0.5">
                      <h4 className="text-sm font-semibold text-[#285943]">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#68736C] leading-snug">
                        {t.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Section 22: Systems & Technical Tools Subsection */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-sm">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CAF9A] block">
              Operational Focus
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#285943]">
              Systems &amp; Technical Tools
            </h3>
            <p className="text-xs sm:text-sm text-[#68736C]">
              Real-world administrative utilities and remote system workflows utilized during production maintenance and deployment cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemsTools.map((tool) => (
              <div
                key={tool.name}
                className="p-5 rounded-2xl bg-[#F5F5F0] border border-[#9CAF9A]/30 hover:bg-[#ECEDE5] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-serif text-base font-bold text-[#25302A]">
                      {tool.name}
                    </h4>
                    <span className="text-[9px] font-bold uppercase text-[#285943] bg-[#DCE6DC] px-2 py-0.5 rounded-full">
                      {tool.experience}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#285943] block mb-2">
                    {tool.role}
                  </span>
                  <p className="text-xs text-[#68736C] leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Section 23: Git & Development Workflow ("How I Build") */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CAF9A] block mb-1">
              Methodology
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#285943]">
              How I Build
            </h3>
            <p className="text-xs text-[#68736C] mt-1">
              Disciplined progression from local environment formulation to validated deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
            {buildSteps.map((step, idx) => (
              <div key={step.label} className="relative flex flex-col items-center">
                <div className="w-full p-4 rounded-2xl bg-[#F5F5F0] border border-[#9CAF9A]/30 text-center flex flex-col items-center justify-center space-y-1 hover:border-[#285943] transition-all">
                  <span className="w-6 h-6 rounded-full bg-[#DCE6DC] text-[#285943] text-xs font-bold flex items-center justify-center mb-1">
                    {idx + 1}
                  </span>
                  <span className="font-serif text-base font-bold text-[#285943]">
                    {step.label}
                  </span>
                  <span className="text-[10px] text-[#68736C] leading-tight">
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
