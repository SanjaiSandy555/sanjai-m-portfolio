import React from 'react';
import { CERTIFICATIONS_DATA } from '../portfolioConfig';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Licenses &amp; Certifications
          </h2>
          <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Continuous skill development across data science, programming, cloud architectures, and machine learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#141419] border border-white/10 shadow-lg hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    {cert.issuer}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    <Award size={16} className="text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-zinc-400 mb-4">
                  {cert.date}
                </p>

                {/* Skills Covered Pills */}
                {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsCovered.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.05] text-zinc-300 border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-zinc-400 font-medium">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <span>Credential Verified</span>
                </span>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
