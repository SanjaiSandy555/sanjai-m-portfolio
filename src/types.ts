export type ProjectCategory = 'All' | 'Software' | 'Web' | 'Data' | 'AI / ML';

export interface ProjectDetail {
  id: string;
  title: string;
  category: 'Software' | 'Web' | 'Data' | 'AI / ML';
  subtitle: string;
  featured?: boolean;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    technologies: string[];
    features: string[];
    development: string;
    dataArchitecture: string;
    result: string;
    pipelineSteps?: string[];
    metrics?: { label: string; value: string }[];
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  scoreLabel: string;
  score: string;
  status: string;
  period?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  toolsUsed: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    context?: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsCovered: string[];
}

export interface FreelanceService {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  deliverables: string[];
  techStack: string[];
  estimatedTurnaround: string;
}

export interface ToolItem {
  name: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface ToolGroup {
  group: string;
  description?: string;
  tools: ToolItem[];
}
