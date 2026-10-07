import React from 'react';
import { Globe, Smartphone, ShoppingBag, Figma, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services: ServiceItem[] = [
    {
      id: 'web-dev',
      title: 'Website & Web App Development',
      eyebrow: '01. FULL-STACK ENGINEERING',
      description:
        'Enterprise-grade responsive web applications built with modern frontend frameworks, scalable API backends, and performance-tuned cloud architecture.',
      icon: 'Globe',
      featured: true,
      highlightPoints: [
        'Single Page & Multi-Tenant SaaS Platforms',
        'Headless Architecture with Next.js & React',
        'SEO-optimized, sub-second Core Web Vitals',
        'Resilient REST & GraphQL APIs with Node.js & .NET',
      ],
      deliverables: ['Custom Web Portals', 'Enterprise Dashboards', 'Headless CMS', 'API Gateways'],
      techStack: ['React', 'Next.js', 'Node.js', 'Express', '.NET', 'TypeScript'],
    },
    {
      id: 'app-dev',
      title: 'Mobile App Development',
      eyebrow: '02. NATIVE & CROSS-PLATFORM',
      description:
        'Fast, responsive iOS and Android mobile experiences engineered with native performance, offline persistence, and seamless push notifications.',
      icon: 'Smartphone',
      highlightPoints: [
        'Cross-platform React Native & Flutter builds',
        'Offline-first synchronization with SQLite & Firebase',
        'Biometric authentication & Apple/Google Pay',
      ],
      deliverables: ['iOS & Android Apps', 'App Store Deployment', 'SDK Integrations'],
      techStack: ['React Native', 'Flutter', 'Firebase', 'Swift'],
    },
    {
      id: 'shopify',
      title: 'Shopify Store Creation',
      eyebrow: '03. E-COMMERCE ARCHITECTURE',
      description:
        'High-converting Shopify Plus stores and custom Liquid theme development designed for international checkout velocity and zero checkout friction.',
      icon: 'ShoppingBag',
      highlightPoints: [
        'Bespoke Liquid themes with pixel-perfect design',
        'Custom private apps, webhooks & ERP integrations',
        'Optimized cart drawers and checkout conversions',
      ],
      deliverables: ['Shopify Plus Themes', 'Custom Apps', 'Store Migration'],
      techStack: ['Liquid', 'Shopify Plus', 'Storefront API', 'Tailwind'],
    },
    {
      id: 'figma-design',
      title: 'Figma UI/UX Designing',
      eyebrow: '04. PRODUCT DESIGN & SYSTEMS',
      description:
        'User research, high-fidelity wireframing, interactive Figma prototypes, and comprehensive token-based design systems ready for engineering handoff.',
      icon: 'Figma',
      highlightPoints: [
        'Atomic design systems with reusable components',
        'Clickable interactive micro-prototypes',
        'WCAG AA accessible contrast & responsive viewports',
      ],
      deliverables: ['Design Systems', 'Interactive Prototypes', 'Information Architecture'],
      techStack: ['Figma', 'Tokens Studio', 'Design Tokens'],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Globe':
        return Globe;
      case 'Smartphone':
        return Smartphone;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Figma':
        return Figma;
      default:
        return Globe;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase block mb-2.5">
              WHAT WE DO
            </span>
            <h2 className="text-fluid-h2 font-bold text-[#0F172A] text-balance">
              Specialized Engineering &amp; Design Services
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#475569] max-w-md leading-relaxed">
            Every service is executed with deep technical rigor, strict quality benchmarks, and complete ownership of your project success.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Featured Service Card (24px radius, #FFFFFF, border #E2E8F0) */}
          {services.filter((s) => s.featured).map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="lg:col-span-12 xl:col-span-7 rounded-[22px] p-6 sm:p-8 bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-220 cursor-pointer group flex flex-col justify-between shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors flex items-center justify-center text-[#2563EB] group-hover:text-white">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-[#2563EB] uppercase font-semibold bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#DBEAFE]">
                      FLAGSHIP CAPABILITY
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#64748B] tracking-wider uppercase block mb-1.5">
                    {service.eyebrow}
                  </span>

                  <h3 className="text-fluid-h3 font-bold text-[#0F172A] mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed mb-6 max-w-xl">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.highlightPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-[13px] text-[#334155]">
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-[#475569] bg-[#F8FAFC] px-2 py-0.5 rounded-md border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors shrink-0">
                    <span>Discuss Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-180" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Supporting Cards Container (Right column) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4">
            {services.filter((s) => !s.featured).map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service.title)}
                  className="rounded-[18px] p-5 sm:p-5.5 bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-220 cursor-pointer group flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors flex items-center justify-center text-[#2563EB] group-hover:text-white">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">
                        {service.eyebrow}
                      </span>
                    </div>

                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0F172A] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[13px] text-[#475569] leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {service.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-[#64748B] bg-[#F8FAFC] px-1.5 py-0.5 rounded border border-[#E2E8F0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[12px] font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-180" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
