import React, { useState, useEffect, useRef } from 'react';
import { FileText, Download, CheckCircle2, Upload, Trash2, Sparkles, FileCheck, ArrowDownToLine } from 'lucide-react';
import { LeafIcon } from './LeafIcon';
import { 
  getStoredResume, 
  saveUploadedResume, 
  clearUploadedResume, 
  downloadResume,
  StoredResume 
} from '../utils/resumeManager';

interface ResumeCTAProps {
  onOpenResume?: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = () => {
  const [storedResume, setStoredResume] = useState<StoredResume | null>(null);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const existing = getStoredResume();
    if (existing) {
      setStoredResume(existing);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const saved = saveUploadedResume(file, dataUrl);
        setStoredResume(saved);
        setUploadNotice(`Successfully uploaded "${file.name}"! Click "Download Resume" to test.`);
        setTimeout(() => setUploadNotice(null), 5000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDownload = () => {
    const result = downloadResume();
    setUploadNotice(`Downloading ${result.fileName}...`);
    setTimeout(() => setUploadNotice(null), 4000);
  };

  const handleRemove = () => {
    clearUploadedResume();
    setStoredResume(null);
    setUploadNotice('Uploaded resume removed. Default resume will be downloaded.');
    setTimeout(() => setUploadNotice(null), 4000);
  };

  return (
    <section id="resume-section" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#121217] border border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <LeafIcon size={14} color="#10B981" />
                <span>Verified Curriculum Vitae</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Resume &amp; Professional Credentials
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Download my up-to-date resume or upload a custom version. When you click download, your uploaded resume is instantly saved to your computer.
              </p>

              {/* Verified Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-zinc-300 pt-1">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>9 Mos at 4W Technologies</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>B.Sc. Computer Science (8.45 CGPA)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Java • PHP • MySQL • Excel</span>
                </span>
              </div>

              {/* Upload Notification Alert */}
              {uploadNotice && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center space-x-2 animate-fadeIn">
                  <Sparkles size={14} className="text-emerald-400 shrink-0" />
                  <span>{uploadNotice}</span>
                </div>
              )}

              {/* Upload Status Card if a custom resume was uploaded */}
              {storedResume && (
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2.5 overflow-hidden">
                    <FileCheck size={18} className="text-emerald-400 shrink-0" />
                    <div className="truncate">
                      <p className="font-bold text-white truncate">
                        {storedResume.fileName}
                      </p>
                      <p className="text-[11px] text-emerald-300">
                        Custom file uploaded on {storedResume.uploadedAt} ({(storedResume.fileSize / 1024).toFixed(1)} KB)
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleRemove}
                    title="Remove custom uploaded resume"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              )}
            </div>

            {/* Actions & Upload Box */}
            <div className="flex flex-col gap-3.5 shrink-0 w-full sm:w-auto">
              {/* Primary Instant Download Button */}
              <button
                id="resume-cta-download-btn"
                onClick={handleDownload}
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all duration-200 shadow-xl shadow-emerald-950/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
              >
                <ArrowDownToLine size={18} />
                <span>Download Resume {storedResume ? '(Uploaded File)' : '(PDF)'}</span>
              </button>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.html,.txt"
                onChange={handleFileChange}
                className="hidden"
                id="resume-file-input"
              />

              {/* Upload / Replace Button */}
              <button
                id="resume-cta-upload-btn"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-2xl border font-semibold text-xs transition-all duration-200 cursor-pointer ${
                  isDragging 
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 scale-102' 
                    : 'bg-white/[0.05] text-zinc-200 border-white/15 hover:bg-white/10 hover:text-white hover:border-emerald-500/40'
                }`}
              >
                <Upload size={14} className="text-emerald-400" />
                <span>{storedResume ? 'Upload / Replace Resume' : 'Upload Resume File'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
