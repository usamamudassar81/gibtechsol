export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  portfolioCategory?: 'mern' | 'wordpress' | 'shopify' | 'figma';
  badge?: string;
  type?: string;
  image: string;
  secondaryImage?: string;
  mockupType?: 'dashboard' | 'ecommerce' | 'mobile' | 'web';
  overview: string;
  technologies: string[];
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  outcome: string;
  deliverables: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  liveLabel?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  highlightPoints: string[];
  featured?: boolean;
  deliverables: string[];
  techStack: string[];
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'E-commerce';
  description: string;
  experience: string;
  iconType: string;
  useCases: string[];
}

export interface ProcessStage {
  id: string;
  stepNumber: string;
  kicker: string;
  title: string;
  description: string;
  summaryHeader: string;
  summarySubtitle: string;
}
