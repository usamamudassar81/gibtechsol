import React from 'react';
import {
  Code2,
  Smartphone,
  Globe,
  Gamepad2,
  Cloud,
  Megaphone,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Cpu,
  MessageSquare,
  ExternalLink,
  Layers,
  FolderKanban,
  HeartHandshake,
  Award,
  Check
} from 'lucide-react';
import { Process } from '../components/Process';
import { servicesHeroMockupImg } from '../assets/images';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

interface ServicesPageProps {
  onOpenConsultation: (service?: string) => void;
  onNavigateHome: (sectionAnchor?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenConsultation,
  onNavigateHome,
}) => {
  const coreServices = [
    {
      id: 'web-development',
      number: '01',
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies for speed, security and scalability.',
      icon: Code2,
      category: 'Full-Stack & Cloud',
    },
    {
      id: 'mobile-app-development',
      number: '02',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile apps that deliver smooth user experiences and real business value.',
      icon: Smartphone,
      category: 'iOS & Android',
    },
    {
      id: 'wordpress-development',
      number: '03',
      title: 'WordPress Development',
      description:
        'Custom WordPress websites, themes and plugins with easy management and full flexibility.',
      icon: Globe,
      category: 'CMS & Themes',
    },
    {
      id: 'game-development',
      number: '04',
      title: 'Game Development',
      description:
        'Engaging web and mobile games built with creativity, performance and modern game engines.',
      icon: Gamepad2,
      category: 'Interactive 2D/3D',
    },
    {
      id: 'cloud-devops',
      number: '05',
      title: 'Cloud & DevOps',
      description:
        'Secure, scalable and cost-effective cloud solutions with automated deployment and monitoring.',
      icon: Cloud,
      category: 'CI/CD & Architecture',
    },
    {
      id: 'digital-marketing',
      number: '06',
      title: 'Digital Marketing',
      description:
        'Data-driven marketing strategies to increase your online visibility and bring real results.',
      icon: Megaphone,
      category: 'SEO & Performance',
    },
  ];

  const trustAdvantages = [
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Built for your goals',
    },
    {
      icon: Cpu,
      title: 'Modern Tech Stack',
      description: 'Scalable & future-ready',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Process',
      description: 'No hidden costs',
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: "We're with you",
    },
  ];

  const wpChecklist = [
    'Custom theme development',
    'Plugin integration & customization',
    'Speed & security optimization',
    'Responsive design',
    'SEO-friendly structure',
    'Ongoing support & maintenance',
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
      {/* 1. SERVICES HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative pb-14 sm:pb-18 lg:pb-20 border-b border-[#E2E8F0] overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column (55%) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="text-[11px] font-bold text-[#2563EB] tracking-[0.14em] uppercase">
                  OUR SERVICES
                </span>
              </div>

              {/* Primary H1 */}
              <h1 className="text-fluid-hero font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.08] mb-4 text-balance">
                Smart Solutions for Your{' '}
                <span className="text-[#2563EB]">Digital Growth</span>
              </h1>

              {/* Description */}
              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed max-w-[560px] mb-8">
                We build modern, scalable and high-performing digital products, websites and
                applications tailored to your business needs. From idea to launch, we bring your vision
                to life with clean code, great design and long-term support.
              </p>

              {/* Trust & Advantage Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-[#E2E8F0]">
                {trustAdvantages.map((adv) => {
                  const Icon = adv.icon;
                  return (
                    <div key={adv.title} className="flex flex-col items-start">
                      <div className="w-7 h-7 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-2">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[12px] font-bold text-[#0F172A] leading-tight">
                        {adv.title}
                      </span>
                      <span className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                        {adv.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Product Mockup Visual (45%) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-[24px] overflow-hidden border border-[#E2E8F0] shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12)] bg-[#0B1528] group">
                {/* Background high-tech visual */}
                <ImageWithFallback
                  src={servicesHeroMockupImg}
                  alt="GitTechSols Digital Product Engineering devices mockup"
                  aspectRatioClass="aspect-[16/9]"
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Ambient glow & glass highlights */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Micro Status Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-[14px] p-3 border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <div>
                      <div className="text-[12px] font-bold text-[#0F172A] leading-none">
                        Active Engineering Sprints
                      </div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">
                        Enterprise Web &amp; Mobile Ecosystems
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenConsultation('General Services Inquiry')}
                    className="text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Brief Studio</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CORE SERVICES SECTION (3 x 2 Grid)                      */}
      {/* ========================================================= */}
      <section id="core-services" className="py-14 sm:py-18 lg:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Header & Custom Solution Micro-CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-[0.14em] uppercase block mb-2.5">
                OUR CORE SERVICES
              </span>
              <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] text-balance mb-3">
                What We Do <span className="text-[#2563EB]">Best</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                We offer a full range of digital services to help businesses build, grow and stay ahead in the digital world.
              </p>
            </div>

            {/* Custom Solution Micro-CTA card */}
            <div className="bg-white rounded-[16px] p-4 border border-[#E2E8F0] shadow-2xs flex items-center gap-3.5 max-w-sm shrink-0">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#0F172A]">Need a custom solution?</div>
                <div className="text-[11px] text-[#64748B]">Let's discuss your project and find the right approach.</div>
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Custom Solution')}
                  className="text-[11px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 mt-1 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* 3-Column Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => onOpenConsultation(service.title)}
                  className="bg-white rounded-[18px] p-6 border border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    {/* Top row: Icon + Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] text-[#2563EB] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#94A3B8] group-hover:text-[#2563EB] transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] text-[#475569] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] flex items-center gap-1.5 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-[#94A3B8] uppercase font-mono">
                      {service.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURED WORDPRESS SERVICE                              */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-18 lg:py-20 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0] p-7 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column (50%) */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-[0.14em] uppercase block mb-2.5">
                  FEATURED SERVICE
                </span>

                <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] mb-3 text-balance">
                  WordPress Website <br />
                  <span className="text-[#2563EB]">Development</span>
                </h2>

                <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed mb-6 max-w-lg">
                  Get a powerful, flexible and easy-to-manage WordPress website that grows with your business.
                  From custom themes to plugin integration, we handle everything.
                </p>

                {/* 6-point checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
                  {wpChecklist.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="text-[13px] text-[#1E293B] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation('WordPress Website Development')}
                    className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm shadow-[#2563EB]/25"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigateHome('#projects')}
                    className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-white hover:bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] text-[13px] font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>View Portfolio</span>
                  </button>
                </div>
              </div>

              {/* Right Column: WordPress Product Mockup & Admin Panel (50%) */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="w-full max-w-[500px] flex flex-col gap-3">
                  
                  {/* Browser Window Mockup */}
                  <div className="rounded-[16px] bg-white border border-[#CBD5E1] shadow-md overflow-hidden">
                    {/* Browser Chrome Header */}
                    <div className="bg-[#F1F5F9] px-4 py-2.5 border-b border-[#E2E8F0] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <div className="text-[11px] font-mono text-[#64748B] bg-white px-3 py-0.5 rounded-md border border-[#E2E8F0]">
                        https://client-corp.com
                      </div>
                      <div className="w-4 h-4" />
                    </div>

                    {/* Website Content Preview */}
                    <div className="p-5 bg-gradient-to-br from-white to-[#F8FAFC]">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F1F5F9]">
                        <div className="text-[13px] font-bold text-[#0F172A] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                          <span>BrandStudio WP</span>
                        </div>
                        <div className="flex gap-3 text-[11px] text-[#64748B]">
                          <span>Work</span>
                          <span>About</span>
                          <span>Services</span>
                        </div>
                      </div>

                      {/* Hero banner inside mock */}
                      <div className="rounded-[12px] bg-[#0F172A] text-white p-5 mb-3 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-[#60A5FA] font-mono mb-1">
                            Bespoke WordPress
                          </div>
                          <div className="text-[16px] font-bold leading-tight">
                            Your Vision, <br />Our Creation
                          </div>
                          <div className="text-[10px] text-[#94A3B8] mt-1.5">
                            Sub-second load times &amp; Headless scale
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/80">
                          <Globe className="w-8 h-8" />
                        </div>
                      </div>

                      {/* Feature Blocks inside mock */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] text-center">
                          <div className="text-[10px] font-bold text-[#0F172A]">Modern Design</div>
                          <div className="text-[9px] text-[#64748B]">Pixel Perfect</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] text-center">
                          <div className="text-[10px] font-bold text-[#0F172A]">Fast Speed</div>
                          <div className="text-[9px] text-[#64748B]">Core Vitals 99</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] text-center">
                          <div className="text-[10px] font-bold text-[#0F172A]">SEO Friendly</div>
                          <div className="text-[9px] text-[#64748B]">Rank Ready</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WordPress Admin Panel Overlay */}
                  <div className="rounded-[14px] bg-[#1E293B] text-white p-3.5 border border-[#334155] shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center font-bold text-white text-sm">
                        W
                      </div>
                      <div>
                        <div className="text-[12px] font-bold leading-none">WordPress 6.7 Admin Suite</div>
                        <div className="text-[10px] text-[#94A3B8] mt-0.5">ACF Pro, Gutenberg Blocks &amp; WooCommerce</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#60A5FA] bg-white/10 px-2 py-0.5 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>Production Active</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. REUSED HOW WE WORK / PROCESS SECTION                    */}
      {/* ========================================================= */}
      <Process
        eyebrow="OUR PROCESS"
        headingPrefix="From Idea to"
        headingHighlight="Impact"
        subtitle="A simple, transparent process to ensure your project is delivered on time, on budget and beyond expectations."
      />

      {/* ========================================================= */}
      {/* 5. CONVERSION CTA SECTION                                  */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
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
                LET'S BUILD SOMETHING GREAT
              </span>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold tracking-tight leading-tight text-white mb-2">
                Ready to start <span className="text-[#60A5FA]">your project?</span>
              </h2>
              <p className="text-[14px] text-[#94A3B8] leading-relaxed">
                Get in touch with our team and let's turn your ideas into reality with predictable delivery.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button
                type="button"
                onClick={() => onOpenConsultation('New Project')}
                className="px-6 py-3.5 rounded-[12px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#2563EB]/30 hover:scale-[1.02]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. TRUST & METRICS SECTION                                 */}
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
