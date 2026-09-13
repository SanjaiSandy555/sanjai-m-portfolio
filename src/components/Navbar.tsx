import React, { useState, useEffect } from 'react';
import { LeafIcon } from './LeafIcon';
import { Menu, X, ArrowDownToLine, Eye, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../portfolioConfig';
import { downloadResume } from '../utils/resumeManager';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'freelance', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills & Tools', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Freelance', href: '#freelance', id: 'freelance' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Top-Left: Botanical Leaf Logo & Name */}
            <a
              href="#home"
              id="brand-logo"
              className="group flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all shadow-inner">
                <LeafIcon size={24} color="#10B981" accentColor="#6EE7B7" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {PORTFOLIO_CONFIG.NAME}
                </span>
                <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-medium -mt-0.5">
                  Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-navigation" className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    id={`nav-link-${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-300 bg-emerald-500/15 font-semibold border border-emerald-500/30 shadow-xs'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Side CTA: Download Resume Straightaway */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                id="navbar-resume-btn"
                onClick={() => downloadResume()}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 shadow-md hover:shadow-emerald-900/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                title="Download your resume directly"
              >
                <ArrowDownToLine size={15} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center md:hidden space-x-2">
              <button
                id="mobile-resume-quick-btn"
                onClick={() => downloadResume()}
                className="inline-flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-500"
                title="Download resume"
              >
                <ArrowDownToLine size={12} />
                <span>Resume</span>
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                className="p-2 rounded-xl text-zinc-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 z-50 md:hidden bg-black/70 backdrop-blur-md transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 right-4 left-4 bg-[#121216] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <LeafIcon size={20} color="#10B981" />
                <span className="text-base font-bold text-white">
                  Navigation
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={`mobile-nav-${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30'
                      : 'text-zinc-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResume();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium text-sm flex items-center justify-center space-x-2 hover:bg-emerald-500 transition-colors cursor-pointer"
              >
                <ArrowDownToLine size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
