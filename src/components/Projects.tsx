import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowRight, Check, ChevronRight } from 'lucide-react';
import {
  fintechDashboardImg,
  ecommerceShopifyImg,
  mobileHealthImg,
  horizonMobilityImg,
} from '../assets/images';
import { ImageWithFallback } from './common/ImageWithFallback';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'fintech-apex',
      title: 'AuraPay Global Banking & Settlement Engine',
      client: 'AuraPay Financial Corp (London, UK)',
      category: 'FINTECH SAAS',
      type: 'WEB PLATFORM',
      mockupType: 'dashboard',
      image: fintechDashboardImg,
      overview:
        'A high-concurrency cross-currency treasury platform engineered to automate multi-asset FX liquidity, real-time desk settlement, and compliance reporting.',
      technologies: ['Next.js', 'React', 'Node.js', '.NET', 'PostgreSQL'],
      highlights: [
        'Real-time FX streaming ledger under 85ms quote latency',
        'Multi-tenant institutional permissioning with row-level security',
        'Scalable cloud architecture handling $45M+ monthly volume',
      ],
      metrics: [
        { label: 'Latency Reduction', value: '72% faster' },
        { label: 'Monthly Settlement', value: '$45M+' },
        { label: 'Uptime Reliability', value: '99.99%' },
      ],
      challenge:
        'The client had legacy ASP infrastructure struggling with websocket concurrency, slow foreign exchange calculations, and a fragmented user experience across desk operators.',
      solution:
        'We designed a high-throughput microservices layer on .NET with a reactive Next.js dashboard, implementing streaming financial data with strict row-level security.',
      outcome:
        'Average quote execution dropped from 1.8s to 85ms, while user retention among institutional desk traders climbed by 34% within the first two quarters.',
      deliverables: [
        'Responsive Treasury Dashboard',
        'High-speed Currency Exchange Engine',
        'Audit Logging & Compliance Suite',
        'Design System in Figma',
      ],
    },
    {
      id: 'shopify-vellum',
      title: 'Vellum Atelier Headless Shopify Flagship',
      client: 'Vellum Luxury Goods (New York, US)',
      category: 'E-COMMERCE',
      type: 'SHOPIFY PLUS',
      mockupType: 'ecommerce',
      image: ecommerceShopifyImg,
      overview:
        'A bespoke luxury direct-to-consumer flagship storefront engineered with custom Liquid templating, instant AJAX cart drawer flows, and international checkout speed.',
      technologies: ['Shopify Plus', 'Liquid', 'React', 'Tailwind', 'Storefront API'],
      highlights: [
        'Sub-second page transitions with zero third-party script bloat',
        'Frictionless slide-out cart drawer with dynamic bundle builder',
        '41.8% lift in checkout completions across mobile devices',
      ],
      metrics: [
        { label: 'Conversion Lift', value: '+41.8%' },
        { label: 'Mobile Bounce Rate', value: '-29%' },
        { label: 'Page Load Speed', value: '0.8s avg' },
      ],
      challenge:
        'Standard off-the-shelf Shopify themes were bloated with third-party app scripts, causing poor mobile Core Web Vitals and lower checkout conversion rates.',
      solution:
        'Built a custom Liquid theme with zero redundant scripts, native instant AJAX cart drawers, dynamic currency switching, and custom bundle builder.',
      outcome:
        'Achieved a 98 Mobile Google PageSpeed score and a 41.8% lift in checkout completions during peak Black Friday promotions.',
      deliverables: [
        'Bespoke Shopify Plus Theme',
        'Custom Cart & Drawer Experience',
        'Mobile-first Checkout Tuning',
        'Figma UI Design System',
      ],
    },
    {
      id: 'health-synapse',
      title: 'Synapse Pulse Telemetry & Patient iOS App',
      client: 'PulseHealth Labs (Zurich, Switzerland)',
      category: 'HEALTHCARE',
      type: 'MOBILE APP',
      mockupType: 'mobile',
      image: mobileHealthImg,
      overview:
        'A medical-grade cross-platform patient telemetry application delivering offline sensor data persistence, real-time vital analysis, and biometric authentication.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'SQLite'],
      highlights: [
        'Offline-first SQLite synchronization with zero sensor data loss',
        'HIPAA-compliant encrypted transit and biometric FaceID auth',
        'Buttery 60 FPS charts tracking cardiovascular waveforms',
      ],
      metrics: [
        { label: 'Daily Active Users', value: '120k+' },
        { label: 'Sync Latency', value: '< 200ms' },
        { label: 'App Store Rating', value: '4.9 ★' },
      ],
      challenge:
        'Patients frequently lost network connectivity in transit, requiring resilient local data storage and zero battery drain for constant sensor background polling.',
      solution:
        'Implemented an offline-first SQLite state machine with Firebase Cloud Functions and background Bluetooth LE queueing tuned for 60fps React Native performance.',
      outcome:
        'Received Apple App Store feature recognition, with zero critical sync dropouts recorded over 2.4 million health telemetry records.',
      deliverables: [
        'iOS & Android Production Apps',
        'HIPAA-compliant API Gateway',
        'Custom Biometric Visualization Charts',
        'End-to-End Test Suite',
      ],
    },
    {
      id: 'horizon-mobility',
      title: 'Horizon Fleet Dispatch & Booking Platform',
      client: 'Horizon Mobility Network (London, UK)',
      category: 'TRANSPORTATION',
      type: 'FULL-STACK SUITE',
      mockupType: 'web',
      image: horizonMobilityImg,
      overview:
        'An enterprise passenger dispatch and corporate fleet management system engineered to orchestrate real-time ride routing, booking dispatch, and automated accounting.',
      technologies: ['React', 'Next.js', 'Node.js', 'MySQL', 'WebSockets'],
      highlights: [
        'Automated geospatial vehicle matching and live map telemetry',
        'Instant corporate account invoicing and passenger booking portal',
        'High-density dispatcher console handling 1,200+ daily rides',
      ],
      metrics: [
        { label: 'Dispatch Velocity', value: '< 3.2s' },
        { label: 'Daily Bookings', value: '1,200+' },
        { label: 'Driver Efficiency', value: '+31%' },
      ],
      challenge:
        'Manual phone dispatching and disjointed third-party software were causing double-bookings and delayed pick-ups for corporate airport transfer accounts.',
      solution:
        'Engineered an integrated web booking engine, real-time WebSocket vehicle tracking board, and driver dispatch console on Next.js and MySQL.',
      outcome:
        'Dispatch scheduling time dropped by 84% while driver utilization climbed by 31%, resulting in zero missed reservations over a 12-month period.',
      deliverables: [
        'Passenger Web Booking Portal',
        'Real-time Fleet Dispatch Board',
        'Driver Assignment Engine',
        'Automated Invoicing System',
      ],
    },
  ];

  const total = projects.length;
  const currentProject = projects[currentIndex];

  const goToSlide = useCallback((index: number, newDirection?: 'next' | 'prev') => {
    if (isTransitioning || index === currentIndex) return;
    const determinedDirection = newDirection || (index > currentIndex ? 'next' : 'prev');
    setDirection(determinedDirection);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
  }, [isTransitioning, currentIndex]);

  const nextSlide = useCallback(() => {
    const nextIdx = (currentIndex + 1) % total;
    goToSlide(nextIdx, 'next');
  }, [currentIndex, total, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIdx = (currentIndex - 1 + total) % total;
    goToSlide(prevIdx, 'prev');
  }, [currentIndex, total, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Autoplay (7000ms, paused when hovered/focused)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    touchEndX.current = clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="projects"
      className="relative bg-[#F8FAFC] text-[#0F172A] py-14 sm:py-16 lg:py-20 border-t border-[#E2E8F0] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      aria-label="Selected Projects Carousel"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase block mb-2">
            SELECTED WORK
          </span>

          <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] mb-2.5 text-balance">
            Selected <span className="text-[#2563EB]">Projects</span>
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed max-w-[500px]">
            Digital products designed, engineered and optimized to solve real business problems.
          </p>
        </div>

        {/* Case Study Slider Main Stage */}
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          className="select-none cursor-grab active:cursor-grabbing"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column (~57%): Large Project Visual */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div
                className={`transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isTransitioning
                    ? direction === 'next'
                      ? 'opacity-0 translate-x-5'
                      : 'opacity-0 -translate-x-5'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <div
                  onClick={() => onSelectProject(currentProject)}
                  className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[22px] p-3.5 sm:p-4.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {/* Browser Bar */}
                  <div className="h-7 bg-[#F8FAFC] border-b border-[#E2E8F0] rounded-t-[14px] px-3 mb-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#EF4444] transition-colors inline-block" />
                      <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#F59E0B] transition-colors inline-block" />
                      <span className="w-2 h-2 rounded-full bg-[#E2E8F0] group-hover:bg-[#10B981] transition-colors inline-block" />
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] text-[10px] font-mono text-[#64748B] max-w-[240px] truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>https://app.gibtechsols.com/{currentProject.id}</span>
                    </div>

                    <div className="text-[9px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      VERIFIED SYSTEM
                    </div>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative rounded-[12px] overflow-hidden bg-[#0F172A]">
                    <ImageWithFallback
                      src={currentProject.image}
                      alt={currentProject.title}
                      aspectRatioClass="aspect-[16/10] sm:aspect-[16/9]"
                      loading="lazy"
                      className="w-full h-full object-cover object-top rounded-[12px] transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                    />

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-[#0F172A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-md flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                        <span>Inspect Full Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#2563EB]" />
                      </div>
                    </div>

                    {/* Client Location Stamp */}
                    <div className="absolute bottom-2.5 left-2.5 bg-[#0F172A]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] sm:text-[11px] font-medium text-white shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{currentProject.client}</span>
                    </div>
                  </div>

                  {/* Overlapping Mobile Screen Preview */}
                  <div className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-32 sm:w-40 rounded-2xl bg-[#FFFFFF] p-1 shadow-[0_16px_36px_rgba(15,23,42,0.12)] border border-[#E2E8F0] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                    <div className="rounded-xl overflow-hidden aspect-[9/16] bg-[#0F172A] relative border border-[#E2E8F0]">
                      <img
                        src={currentProject.image}
                        alt="Mobile preview"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-bottom"
                      />
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-1 bg-black rounded-full" />
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white/95 p-0.5 rounded text-[7.5px] font-semibold text-[#0F172A] text-center shadow-xs">
                        Mobile Responsive
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (~43%): Clean White Info Panel */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div
                className={`transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isTransitioning
                    ? direction === 'next'
                      ? 'opacity-0 translate-x-4'
                      : 'opacity-0 -translate-x-4'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[20px] p-5 sm:p-6.5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] relative flex flex-col justify-between">
                  
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-md bg-[#EFF6FF] text-[#2563EB] uppercase">
                        {currentProject.category}
                      </span>
                      {currentProject.type && (
                        <span className="text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] uppercase">
                          {currentProject.type}
                        </span>
                      )}
                    </div>

                    <div className="text-[11px] font-medium text-[#64748B] font-mono">
                      <span className="text-[#0F172A] font-bold text-[12px]">
                        0{currentIndex + 1}
                      </span>{' '}
                      / 0{total}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-fluid-h3 font-bold text-[#0F172A] tracking-[-0.03em] mb-2">
                    {currentProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.6] mb-4">
                    {currentProject.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5 pt-3.5 border-t border-[#E2E8F0]">
                    {currentProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#0F172A] font-medium leading-snug">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 mt-0.5 text-[#2563EB]">
                          <Check className="w-2 h-2 stroke-[3]" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Area */}
                  <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(currentProject)}
                      className="h-[40px] px-5 rounded-full text-[13px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.18)] active:translate-y-0 transition-all duration-180 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-180" />
                    </button>

                    <div className="flex flex-wrap items-center gap-1 justify-start sm:justify-end">
                      {currentProject.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-1.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Horizontal Slider Controls & Indicators */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4.5 border-t border-[#E2E8F0]">
          
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#64748B]">
            <span>Active Project:</span>
            <span className="text-[#0F172A] font-semibold truncate max-w-[220px]">
              {currentProject.title}
            </span>
          </div>

          {/* Indicator Bar */}
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Slider navigation indicators"
          >
            {projects.map((proj, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => goToSlide(idx)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}: ${proj.title}`}
                  className="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-full cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? 'w-[50px] h-[3px] bg-[#2563EB]'
                        : 'w-[48px] h-[2px] bg-[#E2E8F0] hover:bg-[#CBD5E1]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Circular Arrow Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-180 flex items-center justify-center shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-180 flex items-center justify-center shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
