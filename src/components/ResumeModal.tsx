import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_CONFIG, EXPERIENCE_DATA, EDUCATION_DATA, TECHNICAL_SKILLS_CATEGORIES } from '../portfolioConfig';
import { 
  X, Printer, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, 
  Download, Upload, CheckCircle2, FileCheck, ArrowDownToLine 
} from 'lucide-react';
import { LeafIcon } from './LeafIcon';
import { 
  getStoredResume, 
  saveUploadedResume, 
  downloadResume, 
  StoredResume 
} from '../utils/resumeManager';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [storedResume, setStoredResume] = useState<StoredResume | null>(null);
  const [downloadMessage, setDownloadMessage] = useState<string | null>(null);
  const modalFileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStoredResume(getStoredResume());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const result = downloadResume();
    setDownloadMessage(`Downloading ${result.fileName}...`);
    setTimeout(() => setDownloadMessage(null), 3500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const saved = saveUploadedResume(file, dataUrl);
        setStoredResume(saved);
        setDownloadMessage(`Saved "${file.name}". You can download it anytime!`);
        setTimeout(() => setDownloadMessage(null), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#121216] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-6 print:my-0 print:shadow-none print:border-none print:bg-white print:text-black text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Bar (Screen Only) */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-6 py-4 bg-[#18181f]/95 backdrop-blur-md border-b border-white/10 print:hidden gap-3">
          <div className="flex items-center space-x-2.5">
            <LeafIcon size={20} color="#10B981" />
            <div>
              <span className="font-bold text-sm text-white block">
                {PORTFOLIO_CONFIG.FULL_NAME} — Resume &amp; Dossier
              </span>
              {storedResume ? (
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  <span>Custom file uploaded: {storedResume.fileName}</span>
                </span>
              ) : (
                <span className="text-[11px] text-zinc-400">
                  Ready to download
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Hidden file input */}
            <input
              ref={modalFileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.html,.txt"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Upload Button */}
            <button
              onClick={() => modalFileInputRef.current?.click()}
              className="inline-flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold bg-white/[0.08] text-zinc-200 hover:text-white hover:bg-white/15 transition-colors cursor-pointer border border-white/10"
              title="Upload custom resume"
            >
              <Upload size={13} className="text-emerald-400" />
              <span className="hidden sm:inline">{storedResume ? 'Replace' : 'Upload'}</span>
            </button>

            {/* Download Button */}
            <button
              id="resume-modal-download-btn"
              onClick={handleDownload}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950/40 cursor-pointer"
            >
              <ArrowDownToLine size={14} />
              <span>Download Resume</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white/[0.05] text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Message Banner */}
        {downloadMessage && (
          <div className="bg-emerald-600 text-white px-6 py-2 text-xs font-semibold flex items-center justify-between">
            <span>{downloadMessage}</span>
            <span className="cursor-pointer" onClick={() => setDownloadMessage(null)}>✕</span>
          </div>
        )}

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight uppercase">
                  {PORTFOLIO_CONFIG.FULL_NAME}
                </h1>
                <p className="text-base font-semibold text-emerald-400 print:text-emerald-700 mt-1">
                  {PORTFOLIO_CONFIG.DESIGNATION}
                </p>
                <p className="text-xs text-zinc-400 print:text-gray-600 mt-1">
                  9 Months Software Engineer @ 4W Technologies • B.Sc. Computer Science (8.45 CGPA)
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-1.5 text-xs text-zinc-300 print:text-gray-700 text-left sm:text-right">
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Phone size={13} className="text-emerald-400" />
                  <span>{PORTFOLIO_CONFIG.PHONE}</span>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <Mail size={13} className="text-emerald-400" />
                  <span>{PORTFOLIO_CONFIG.EMAIL}</span>
                </div>
                <div className="flex items-center sm:justify-end space-x-1.5">
                  <MapPin size={13} className="text-emerald-400" />
                  <span>{PORTFOLIO_CONFIG.LOCATION}</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-white/5 print:border-gray-200 text-xs text-zinc-300 print:text-gray-700">
              <a
                href={PORTFOLIO_CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-emerald-400 print:text-emerald-700 font-medium"
              >
                <Linkedin size={13} />
                <span>LinkedIn Profile</span>
                <ExternalLink size={10} />
              </a>
              <a
                href={PORTFOLIO_CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-emerald-400 print:text-emerald-700 font-medium"
              >
                <Github size={13} />
                <span>GitHub Portfolio</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800">
              Objective
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-gray-800 leading-relaxed text-justify">
              To build a successful career in the IT industry by applying strong technical skills and a willingness to learn in a dynamic environment, while enhancing my skills, working with new technologies, and contributing to innovative solutions that support organizational success. Available for full-time engineering roles and freelance projects.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {exp.role} — <span className="font-semibold">{exp.company}</span>
                      </h3>
                      <p className="text-xs text-zinc-400 print:text-gray-600">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 print:text-emerald-800">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 print:text-gray-800">{exp.summary}</p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-300 print:text-gray-800">
                    {exp.responsibilities.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600">
                    <strong>Tech &amp; Tools:</strong> {exp.toolsUsed.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-zinc-400 print:text-gray-600">
                        {edu.institution} {edu.score ? `• ${edu.scoreLabel || 'Score'}: ${edu.score}` : ''}
                      </p>
                    </div>
                    {edu.period && (
                      <span className="text-xs font-medium text-emerald-400 print:text-emerald-800">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  {edu.highlights && (
                    <p className="text-xs text-zinc-300 print:text-gray-800">
                      {edu.highlights.join(' • ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800">
              Technical Competencies &amp; Excel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TECHNICAL_SKILLS_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.04] print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <strong className="text-white print:text-black block mb-1">
                    {cat.title}:
                  </strong>
                  <span className="text-zinc-300 print:text-gray-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Screen Actions */}
        <div className="p-4 bg-[#18181f] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden">
          <span className="text-xs text-zinc-400">
            {storedResume 
              ? `Currently loaded: "${storedResume.fileName}". Clicking download will download this file.`
              : 'Click "Download Resume" to save the official resume document.'}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              Download
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/[0.08] text-xs font-semibold text-zinc-200 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
