import React from 'react';
import {
  Code2,
  Globe,
  ShoppingBag,
  Figma,
  ArrowRight,
  ExternalLink,
  Check,
  CheckCircle2,
  Layers,
  FolderKanban,
  HeartHandshake,
  Award,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: (service?: string) => void;
  onNavigateServices: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onOpenConsultation,
  onNavigateServices,
}) => {
  // Authoritative structured project data
  const projects: Project[] = [
    {
      id: 'taskflow-mern',
      title: 'TaskFlow Pro',
      client: 'TaskFlow Systems (San Francisco, US)',
      category: 'MERN STACK',
      portfolioCategory: 'mern',
      badge: 'MERN STACK',
      type: 'WEB APPLICATION',
      image: '/src/assets/images/taskflow_mern_mockup_1791362064954.jpg',
      overview:
        'A powerful project management platform built with the MERN stack, designed to help distributed teams manage workflows, track sprint velocity and collaborate efficiently.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      highlights: [
        'Real-time task synchronization via Socket.io websockets',
        'Secure multi-tenant JWT authentication & role-based access control',
        'Responsive Kanban architecture with sub-second state persistence',
      ],
      outcome:
        'Eliminated manual workflow bottlenecks and unified cross-functional sprint planning into one central workspace.',
      metrics: [
        { label: 'Latency', value: '< 60ms' },
        { label: 'Sprint Speed', value: '38% faster' },
        { label: 'Reliability', value: '99.98%' },
      ],
      challenge:
        'The team needed an agile project management engine capable of handling high-frequency task updates without screen jitter or database deadlocks.',
      solution:
        'We architected an event-driven Node.js & Express API connected to MongoDB, paired with an optimistic React UI that updates cards instantly.',
      deliverables: [
        'Kanban Board System',
        'Real-time Chat & Activity Feed',
        'Analytics Dashboard',
        'RESTful API Gateway',
      ],
      liveUrl: 'https://demo.taskflow-pro.example.com',
      liveLabel: 'Live Demo',
    },
    {
      id: 'business-growth-wp',
      title: 'Business Growth Hub',
      client: 'Apex Capital Advisors (London, UK)',
      category: 'WORDPRESS',
      portfolioCategory: 'wordpress',
      badge: 'WORDPRESS',
      type: 'CORPORATE PORTAL',
      image: '/src/assets/images/wordpress_growth_mockup_1791362086772.jpg',
      overview:
        'A modern WordPress corporate portal with custom theme engineering, advanced plugin architecture and optimized performance, designed to elevate brand authority and capture high-value enterprise leads.',
      technologies: ['WordPress', 'PHP', 'Custom Theme', 'ACF Pro', 'WooCommerce', 'Tailwind CSS'],
      highlights: [
        'Custom modular theme development with bespoke Gutenberg block library',
        'Advanced webhook integrations with enterprise CRM and marketing funnels',
        'Core Web Vitals score of 99 with sub-second page transitions',
      ],
      outcome:
        'Transformed an outdated static presence into a flexible digital publishing hub that drove a 64% increase in qualified inquiries.',
      metrics: [
        { label: 'Mobile Score', value: '99/100' },
        { label: 'Lead Inquiries', value: '+64%' },
        { label: 'Time to Publish', value: '-50%' },
      ],
      challenge:
        'The client struggled with heavy template bloat and slow server response times that penalized their SEO rankings and conversion rate.',
      solution:
        'We engineered a clean custom WordPress theme from scratch without third-party page builders, using lightweight PHP 8 components and ACF Pro.',
      deliverables: [
        'Bespoke Block-Based Theme',
        'CRM Integration Pipeline',
        'Security Hardening Protocol',
        'Content Migration Suite',
      ],
      liveUrl: 'https://demo.growthhub.example.com',
      liveLabel: 'Live Website',
    },
    {
      id: 'urbanfit-shopify',
      title: 'UrbanFit Fashion Store',
      client: 'UrbanFit Apparel (New York, US)',
      category: 'SHOPIFY',
      portfolioCategory: 'shopify',
      badge: 'SHOPIFY',
      type: 'E-COMMERCE STORE',
      image: '/src/assets/images/project_ecommerce_shopify_1791356747561.jpg',
      overview:
        'A fully functional direct-to-consumer Shopify store with a minimalist editorial design, multi-currency checkout and seamless drawer cart experience, built to convert shoppers into repeat buyers.',
      technologies: ['Shopify Plus', 'Liquid', 'JavaScript', 'Storefront API', 'Tailwind CSS'],
      highlights: [
        'Bespoke Liquid theme development optimized for frictionless mobile navigation',
        'Instant AJAX slide-out cart with dynamic upsell and bundle calculations',
        'Global payment gateway routing with zero third-party script latency',
      ],
      outcome:
        'Lowered mobile cart abandonment and boosted average order value through streamlined product variations and fast checkout.',
      metrics: [
        { label: 'Conversion Lift', value: '+41.8%' },
        { label: 'First Contentful Paint', value: '720ms' },
        { label: 'Checkout Velocity', value: '3.2x' },
      ],
      challenge:
        'Slow mobile store performance and a cluttered default checkout were eroding checkout completion rates during high-traffic drops.',
      solution:
        'We designed and built a bespoke Liquid theme with streamlined assets, pre-fetched collection pages, and optimized cart drawer logic.',
      deliverables: [
        'Shopify Plus Theme',
        'Custom Cart Drawer',
        'Size Guide & Variant Selector',
        'ERP Inventory Sync',
      ],
      liveUrl: 'https://demo.urbanfit.example.com',
      liveLabel: 'Live Store',
    },
    {
      id: 'fintech-figma-uiux',
      title: 'FinTech App UI/UX',
      client: 'AuraPay Global (Zurich, Switzerland)',
      category: 'FIGMA UI/UX',
      portfolioCategory: 'figma',
      badge: 'FIGMA',
      type: 'MOBILE DESIGN SYSTEM',
      image: '/src/assets/images/figma_uiux_mockup_1791362110374.jpg',
      overview:
        'A clean and intuitive mobile banking design system engineered for a next-generation fintech platform, prioritizing clarity, accessibility and friction-free multi-currency transfers.',
      technologies: ['Figma', 'Design Systems', 'User Research', 'Interactive Prototyping', 'iOS HIG'],
      highlights: [
        'End-to-end user research, persona definition and verified journey wireframes',
        'Atomic design system featuring 200+ tokenized reusable UI components',
        'High-fidelity interactive prototype tested with 40+ usability participants',
      ],
      outcome:
        'Standardized the design handoff across mobile engineering teams and cut front-end development implementation time by 30%.',
      metrics: [
        { label: 'Design Tokens', value: '200+' },
        { label: 'Usability Score', value: '94/100' },
        { label: 'Dev Handoff Speed', value: '30% faster' },
      ],
      challenge:
        'Complex regulatory screens and dense multi-asset balances were creating visual confusion and user drop-off in early wireframes.',
      solution:
        'We established a clean visual hierarchy with calm spacing, clear typographic tiers, and progressive disclosure for nested financial transactions.',
      deliverables: [
        'Complete Figma Design File',
        'Interactive Mobile Prototype',
        'Design System Documentation',
        'Developer Specification Guide',
      ],
      liveUrl: 'https://figma.com/@gittechsols/fintech-system',
      liveLabel: 'View Prototype',
    },
  ];

  const categories = [
    {
      id: 'mern',
      number: '01',
      title: 'MERN STACK',
      heading: 'Full-Stack Web Applications',
      statement:
        'Full-stack applications engineered for performance, scalability and real-world business workflows.',
      icon: Code2,
    },
    {
      id: 'wordpress',
      number: '02',
      title: 'WORDPRESS',
      heading: 'Custom Enterprise WordPress',
      statement:
        'Professional WordPress websites built for performance, flexibility and long-term content management.',
      icon: Globe,
    },
    {
      id: 'shopify',
      number: '03',
      title: 'SHOPIFY',
      heading: 'Conversion-Focused Commerce',
      statement:
        'Conversion-focused storefronts designed for modern commerce and seamless customer experiences.',
      icon: ShoppingBag,
    },
    {
      id: 'figma',
      number: '04',
      title: 'FIGMA UI/UX',
      heading: 'Thoughtful Product Interfaces',
      statement:
        'Thoughtful interfaces and scalable design systems created around real user needs.',
      icon: Figma,
    },
  ];

  const metrics = [
    {
      icon: FolderKanban,
      value: '50+',
      label: 'Projects Delivered',
    },
    {
      icon: HeartHandshake,
      value: '10+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      value: '5+',
      label: 'Years Experience',
    },
    {
      icon: CheckCircle2,
      value: '100%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0F172A] pt-24 sm:pt-28">
      {/* ========================================================= */}
      {/* 1. PORTFOLIO HERO SECTION                                 */}
      {/* ========================================================= */}
      <section className="relative pb-12 sm:pb-16 border-b border-[#E2E8F0] overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4 sm:pt-8">
            
            {/* Left Content */}
            <div className="max-w-2xl text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="text-[11px] font-bold text-[#2563EB] tracking-[0.14em] uppercase">
                  OUR PROJECTS
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-fluid-hero font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-3.5 text-balance">
                Ideas Turned Into <br className="hidden sm:inline" />
                <span className="text-[#2563EB]">Real Digital Products</span>
              </h1>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed max-w-[560px]">
                Explore selected work across MERN, WordPress, Shopify and Figma. Each project combines
                strategy, thoughtful design and reliable development.
              </p>
            </div>

            {/* Right Quick Category Indicator Badges */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2.5 pb-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#CBD5E1] text-[#1E293B] shadow-2xs">
                <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>MERN Stack</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#CBD5E1] text-[#1E293B] shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>WordPress</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#CBD5E1] text-[#1E293B] shadow-2xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Shopify</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#CBD5E1] text-[#1E293B] shadow-2xs">
                <Figma className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Figma UI/UX</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. EDITORIAL ALTERNATING CASE STUDY SECTIONS              */}
      {/* ========================================================= */}
      <div className="divide-y divide-[#E2E8F0]">
        {categories.map((category, catIdx) => {
          const categoryProjects = projects.filter(
            (p) => p.portfolioCategory === category.id
          );

          if (categoryProjects.length === 0) return null;

          return (
            <section
              key={category.id}
              id={`portfolio-${category.id}`}
              className="py-14 sm:py-20 lg:py-24"
            >
              <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
                
                {/* Compact Category Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 pb-6 border-b border-[#F1F5F9]">
                  <div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-[#2563EB] tracking-[0.16em] uppercase block mb-1">
                      {category.number} / {category.title}
                    </span>
                    <h2 className="text-[24px] sm:text-[28px] font-bold text-[#0F172A] tracking-tight">
                      {category.heading}
                    </h2>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-[#64748B] max-w-md leading-relaxed">
                    {category.statement}
                  </p>
                </div>

                {/* Projects in this Category with Alternating Layout */}
                <div className="space-y-16 sm:space-y-24">
                  {categoryProjects.map((project, pIdx) => {
                    // Global alternating index determines layout direction
                    const isEven = (catIdx + pIdx) % 2 === 0;

                    return (
                      <article
                        key={project.id}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                      >
                        {/* ================================================= */}
                        {/* PROJECT IMAGE (55% desktop width)                 */}
                        {/* ================================================= */}
                        <div
                          className={`lg:col-span-7 ${
                            isEven ? 'lg:order-1' : 'lg:order-2'
                          }`}
                        >
                          <div
                            onClick={() => onSelectProject(project)}
                            className="group relative rounded-[20px] overflow-hidden border border-[#CBD5E1] bg-[#F8FAFC] shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08)] cursor-pointer"
                          >
                            {/* Project presentation screenshot */}
                            <div className="aspect-[16/10] overflow-hidden bg-[#0B1528] relative">
                              <img
                                src={project.image}
                                alt={`${project.title} - ${project.category} Showcase`}
                                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-350 ease-out"
                                loading={catIdx === 0 ? 'eager' : 'lazy'}
                              />
                            </div>

                            {/* Category watermark pill overlay in top right */}
                            <div className="absolute top-4 right-4 z-10 pointer-events-none">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-[#0F172A] shadow-xs">
                                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                                <span>{project.badge}</span>
                              </span>
                            </div>

                            {/* Subtle hover prompt overlay */}
                            <div className="absolute inset-0 bg-[#0F172A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                              <span className="px-4 py-2 rounded-full bg-white text-[#0F172A] text-xs font-semibold shadow-md flex items-center gap-1.5">
                                <span>Inspect Case Study</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* ================================================= */}
                        {/* PROJECT CONTENT (45% desktop width)               */}
                        {/* ================================================= */}
                        <div
                          className={`lg:col-span-5 flex flex-col items-start text-left ${
                            isEven ? 'lg:order-2' : 'lg:order-1'
                          }`}
                        >
                          {/* Top Row: Category Badge + Project Sequence Number */}
                          <div className="flex items-center justify-between w-full mb-3">
                            <span className="text-[10px] font-bold tracking-wider uppercase text-[#2563EB] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#DBEAFE]">
                              {project.badge}
                            </span>
                            <span className="font-mono text-xs font-semibold text-[#94A3B8]">
                              0{catIdx + 1} / 04
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-[26px] sm:text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight mb-3">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[14px] text-[#475569] leading-relaxed mb-5">
                            {project.overview}
                          </p>

                          {/* Technology Stack Chips */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono text-[#334155] bg-[#F1F5F9] px-2 py-0.5 rounded-md border border-[#E2E8F0]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Highlights List */}
                          <div className="space-y-2 mb-5 w-full">
                            {project.highlights.map((highlight) => (
                              <div key={highlight} className="flex items-start gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 stroke-[2.5]" />
                                </div>
                                <span className="text-[13px] text-[#334155] font-medium leading-snug">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Optional Project Outcome */}
                          {project.outcome && (
                            <div className="mb-6 p-3 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] w-full text-left">
                              <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#2563EB] block mb-0.5">
                                OUTCOME
                              </span>
                              <p className="text-[12px] text-[#475569] leading-relaxed">
                                {project.outcome}
                              </p>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                              type="button"
                              onClick={() => onSelectProject(project)}
                              className="px-5 py-2.5 rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-sm shadow-[#2563EB]/25"
                            >
                              <span>View Case Study</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>

                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2.5 rounded-[12px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] text-[13px] font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                              >
                                <span>{project.liveLabel || 'Live Demo'}</span>
                                <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                              </a>
                            )}
                          </div>

                        </div>
                      </article>
                    );
                  })}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 3. FINAL CONVERSION CTA SECTION                            */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-18 bg-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-[22px] bg-[#0F172A] p-7 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Background subtle technical grid */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #60A5FA 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 max-w-xl text-left">
              <span className="text-[11px] font-semibold text-[#60A5FA] tracking-[0.14em] uppercase block mb-2">
                HAVE A PROJECT IN MIND?
              </span>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold tracking-tight leading-tight text-white mb-2">
                Let's Build Something Great <span className="text-[#60A5FA]">Together</span>
              </h2>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                Have a project in mind? Let's discuss your goals and find the right technology and design approach.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenConsultation('New Project')}
                className="px-6 py-3.5 rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#2563EB]/30 hover:scale-[1.02]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onNavigateServices}
                className="px-5 py-3.5 rounded-[12px] bg-white/10 hover:bg-white/15 text-white border border-white/20 text-[14px] font-semibold inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>View Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. TRUST & CREDIBILITY METRICS STRIP                       */}
      {/* ========================================================= */}
      <section className="py-10 sm:py-14 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#2563EB] flex items-center justify-center mb-2.5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-[24px] sm:text-[28px] font-bold text-[#0F172A] leading-none mb-1 font-mono">
                    {m.value}
                  </div>
                  <div className="text-[12px] font-medium text-[#64748B]">
                    {m.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
