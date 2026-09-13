import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { FreelanceSection } from './components/FreelanceSection';
import { ResumeCTA } from './components/ResumeCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundPattern } from './components/BackgroundPattern';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200 relative font-sans">
      {/* Aesthetic dark theme background with white smoke ambient lighting */}
      <BackgroundPattern />

      {/* Persistent Navigation Header with Leaf Logo */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <FreelanceSection />
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />
        <ContactSection />
      </main>

      {/* Redesigned Modern Footer with Leaf Logo */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Resume & Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
