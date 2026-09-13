import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Copy, Check, Github, Linkedin, ExternalLink } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isCopied, setIsCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const messageText = `Hello Sanjai,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'Portfolio Inquiry'}

Message:
${formData.message}`;

    const url = `https://wa.me/${PORTFOLIO_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
    
    // Redirect to WhatsApp
    window.open(url, '_blank');

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.EMAIL);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0d0d11] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Currently open to opportunities as a Software Engineer, Full-time positions, and Freelance contract projects.
          </p>
        </div>

        {/* Contact Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Email & Location (No separate WhatsApp card) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#141419] border border-white/10 shadow-lg space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-zinc-400">Inquiries, interviews &amp; formal reach-outs</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#09090b] border border-white/10">
                <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate mr-2">
                  {PORTFOLIO_CONFIG.EMAIL}
                </span>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/15 text-xs font-semibold text-zinc-200 flex items-center space-x-1.5 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {isCopied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.EMAIL}`}
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-white/[0.06] text-zinc-200 text-xs font-semibold hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  <span>Open in Mail Client</span>
                </a>
              </div>
            </div>

            {/* Location & Availability Status */}
            <div className="p-6 rounded-3xl bg-[#141419] border border-white/10 shadow-lg space-y-3">
              <div className="flex items-center space-x-3 text-xs text-zinc-300">
                <MapPin size={16} className="text-emerald-400 shrink-0" />
                <span>{PORTFOLIO_CONFIG.LOCATION}</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>{PORTFOLIO_CONFIG.AVAILABILITY}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PORTFOLIO_CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#141419] border border-white/10 text-xs font-semibold text-zinc-200 hover:text-white hover:border-emerald-500/40 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#141419] border border-white/10 text-xs font-semibold text-zinc-200 hover:text-white hover:border-emerald-500/40 transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Correspondence Form that redirects into WhatsApp on submit */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#141419] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                    Submitting will instantly prepare and open your message in WhatsApp.
                  </p>
                </div>
                <LeafIcon size={22} color="#10B981" />
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
                  <h4 className="font-bold text-base text-white">Opening WhatsApp...</h4>
                  <p className="text-xs text-zinc-300">
                    Your message has been formatted and redirected into WhatsApp to chat with Sanjai directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-zinc-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-zinc-300">
                        Your Email / Contact *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="text"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com or phone"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-zinc-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Software Engineer Role / Freelance Project"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-zinc-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Sanjai, I saw your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button: bg-emerald-600 text-white like the buttons */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-all duration-200 shadow-md shadow-emerald-950/40 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
