import React from 'react';
import { Cloud, Server, HardDrive, KeyRound, Activity, User, ArrowDown, Shield, Bell } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const CloudSection: React.FC = () => {
  return (
    <section id="cloud" className="py-20 md:py-28 bg-[#F5F5F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCE6DC] border border-[#9CAF9A]/40 text-[#285943] text-xs font-semibold uppercase tracking-wider">
            <Cloud size={14} />
            <span>AWS Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943]">
            Cloud &amp; Infrastructure
          </h2>
          <p className="text-[#68736C] text-base sm:text-lg">
            Practical knowledge of foundational Amazon Web Services powering modern hosted applications.
          </p>
        </div>

        {/* 4 Core AWS Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              name: 'Amazon EC2',
              role: 'Compute',
              desc: 'Virtual server provisioning, instance configuration, security groups, and SSH key administration.',
              icon: <Server size={22} className="text-[#285943]" />
            },
            {
              name: 'Amazon S3',
              role: 'Object Storage',
              desc: 'Scalable cloud object storage for application media, datasets, static web builds, and automated backups.',
              icon: <HardDrive size={22} className="text-[#285943]" />
            },
            {
              name: 'AWS IAM',
              role: 'Identity & Access',
              desc: 'Fine-grained policy definitions, user roles, principle of least privilege, and credential security.',
              icon: <KeyRound size={22} className="text-[#285943]" />
            },
            {
              name: 'CloudWatch / Monitoring',
              role: 'System Metrics',
              desc: 'Performance metric alarms, CPU/memory telemetry, application log streams, and uptime auditing.',
              icon: <Activity size={22} className="text-[#285943]" />
            },
          ].map((svc) => (
            <div
              key={svc.name}
              className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-xs hover:border-[#285943]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCE6DC]/80 flex items-center justify-center mb-4">
                  {svc.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9CAF9A] block mb-1">
                  {svc.role}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#25302A] mb-2">
                  {svc.name}
                </h3>
                <p className="text-xs text-[#68736C] leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Architecture Flow: User ↓ EC2 ↓ Application ↓ S3 (surrounded by IAM and Monitoring) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-sm relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#9CAF9A] block mb-1">
              Architecture Layout
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#285943]">
              Cloud Request &amp; Storage Flow
            </h3>
            <p className="text-xs text-[#68736C] mt-1">
              Linear application execution surrounded by governance and continuous telemetry.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto py-4">
            {/* Guarding Badges on Sides (IAM Left, Monitoring Right) */}
            <div className="hidden md:flex flex-col items-center absolute left-0 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-[#ECEDE5] border border-[#9CAF9A]/40 text-center w-36">
              <Shield size={20} className="text-[#285943] mb-1" />
              <span className="text-xs font-bold text-[#285943]">AWS IAM</span>
              <span className="text-[10px] text-[#68736C]">Security &amp; Roles</span>
            </div>

            <div className="hidden md:flex flex-col items-center absolute right-0 top-1/2 -translate-y-1/2 p-3.5 rounded-2xl bg-[#ECEDE5] border border-[#9CAF9A]/40 text-center w-36">
              <Bell size={20} className="text-[#285943] mb-1" />
              <span className="text-xs font-bold text-[#285943]">Monitoring</span>
              <span className="text-[10px] text-[#68736C]">Logs &amp; Metrics</span>
            </div>

            {/* Central Vertical Execution Stack */}
            <div className="flex flex-col items-center space-y-3 max-w-xs mx-auto">
              {/* Step 1: User */}
              <div className="w-full p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#9CAF9A]/30 flex items-center justify-center space-x-2 text-[#25302A] shadow-xs">
                <User size={16} className="text-[#285943]" />
                <span className="font-semibold text-sm">Client / User Ingress</span>
              </div>

              <ArrowDown size={18} className="text-[#285943]" />

              {/* Step 2: EC2 */}
              <div className="w-full p-3.5 rounded-2xl bg-[#DCE6DC]/80 border border-[#285943]/20 flex items-center justify-center space-x-2 text-[#285943] shadow-xs">
                <Server size={16} className="text-[#285943]" />
                <span className="font-semibold text-sm">Amazon EC2 (Compute Host)</span>
              </div>

              <ArrowDown size={18} className="text-[#285943]" />

              {/* Step 3: Application */}
              <div className="w-full p-3.5 rounded-2xl bg-[#285943] text-[#F5F5F0] flex items-center justify-center space-x-2 shadow-xs">
                <Cloud size={16} />
                <span className="font-semibold text-sm">Application Runtime &amp; APIs</span>
              </div>

              <ArrowDown size={18} className="text-[#285943]" />

              {/* Step 4: S3 */}
              <div className="w-full p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#9CAF9A]/30 flex items-center justify-center space-x-2 text-[#25302A] shadow-xs">
                <HardDrive size={16} className="text-[#285943]" />
                <span className="font-semibold text-sm">Amazon S3 (Data &amp; Artifact Storage)</span>
              </div>
            </div>

            {/* Mobile Fallback for IAM & Monitoring */}
            <div className="flex md:hidden justify-center gap-3 mt-6 pt-4 border-t border-[#ECEDE5]">
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#ECEDE5] text-[11px] text-[#285943] font-semibold">
                <Shield size={12} />
                <span>IAM Protected</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#ECEDE5] text-[11px] text-[#285943] font-semibold">
                <Bell size={12} />
                <span>CloudWatch Monitored</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
