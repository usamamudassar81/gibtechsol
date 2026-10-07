import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Users,
  CreditCard,
  CheckCircle2,
  Search,
  Smartphone,
  Globe,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenStrategyModal: () => void;
  onOpenProjectModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenStrategyModal,
  onOpenProjectModal,
  onExploreServices,
}) => {
  const [activeRange, setActiveRange] = useState<'7D' | '30D' | '90D'>('30D');

  const servicesList = [
    { name: 'Web Apps', icon: Globe },
    { name: 'Mobile Apps', icon: Smartphone },
    { name: 'E-commerce', icon: CreditCard },
    { name: 'UI/UX Design', icon: Layers },
  ];

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 pb-14 sm:pb-18 flex items-center bg-[#FFFFFF] tech-grid-light overflow-hidden border-b border-[#E2E8F0]"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: 45-50% */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-20">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase">
                DIGITAL PRODUCT ENGINEERING STUDIO
              </span>
            </div>

            {/* Headline with fluid scaling */}
            <h1 className="text-fluid-hero font-bold text-[#0F172A] tracking-[-0.03em] mb-4 text-balance">
              We Build Modern{' '}
              <span className="text-[#2563EB]">
                Web &amp; Mobile Apps
              </span>{' '}
              That Drive Real Growth
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-[#475569] leading-[1.6] mb-6 max-w-[500px]">
              From pixel-perfect Figma designs to scalable production code, we turn ambitious ideas into powerful digital products for UK, US, and global innovators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-7">
              <button
                onClick={onOpenStrategyModal}
                className="h-[44px] px-6 rounded-full text-[14px] sm:text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.18)] active:translate-y-0 transition-all duration-180 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="h-[44px] px-5 rounded-full text-[14px] sm:text-[15px] font-medium text-[#0F172A] bg-[#FFFFFF] hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-180 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Compact Service Indicators */}
            <div className="pt-4 border-t border-[#E2E8F0] w-full">
              <div className="text-[11px] font-semibold tracking-wider text-[#64748B] uppercase mb-2.5">
                Core Specializations
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.name}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-[12px] sm:text-[13px] font-medium hover:border-[#CBD5E1] transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span className="truncate">{service.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Device Visualization on Crisp Light Surface */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[580px]">

              {/* 1. Large Laptop Mockup */}
              <div className="animate-float-laptop transition-transform duration-700 ease-out">
                {/* Laptop Display Shell */}
                <div className="relative mx-auto rounded-t-[20px] bg-[#0F172A] p-2.5 pb-0 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-[#CBD5E1]">
                  {/* Laptop Camera */}
                  <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  </div>

                  {/* Laptop Screen Content: Modern Clean Dashboard */}
                  <div className="relative rounded-t-[12px] bg-[#FFFFFF] border border-[#E2E8F0] overflow-hidden text-[#0F172A]">
                    
                    {/* Top Dashboard Nav */}
                    <div className="h-9 px-3 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5 mr-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                        </div>
                        <span className="font-semibold text-[#0F172A] text-[11px] sm:text-xs">
                          Enterprise Analytics
                        </span>
                        <span className="text-[10px] text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded font-mono hidden sm:inline border border-[#DBEAFE]">
                          PRODUCTION 99.98%
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center bg-[#FFFFFF] px-2 py-1 rounded text-[11px] text-[#64748B] border border-[#E2E8F0]">
                          <Search className="w-3 h-3 mr-1.5 text-[#94A3B8]" />
                          <span>Search metrics...</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold">
                          GS
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Workspace */}
                    <div className="p-3 sm:p-4 bg-[#FFFFFF]">
                      {/* Metric Ribbon */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
                        {/* Metric 1 */}
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <div className="text-[10px] sm:text-[11px] text-[#64748B] flex items-center justify-between">
                            <span>ARR Revenue</span>
                            <TrendingUp className="w-3 h-3 text-[#10B981]" />
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-[#0F172A] font-mono tabular-nums mt-0.5">
                            $148,920
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-[#10B981] font-semibold">
                            +28.4% MoM
                          </span>
                        </div>

                        {/* Metric 2 */}
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <div className="text-[10px] sm:text-[11px] text-[#64748B] flex items-center justify-between">
                            <span>Active Users</span>
                            <Users className="w-3 h-3 text-[#2563EB]" />
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-[#0F172A] font-mono tabular-nums mt-0.5">
                            42,850
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-[#2563EB] font-semibold">
                            +19.2% Growth
                          </span>
                        </div>

                        {/* Metric 3 */}
                        <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                          <div className="text-[10px] sm:text-[11px] text-[#64748B] flex items-center justify-between">
                            <span>Conversion</span>
                            <Sparkles className="w-3 h-3 text-[#2563EB]" />
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-[#0F172A] font-mono tabular-nums mt-0.5">
                            4.82%
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-[#2563EB] font-semibold">
                            Target Met
                          </span>
                        </div>
                      </div>

                      {/* Interactive SVG Chart */}
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-2.5">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <span className="text-[11px] sm:text-xs font-semibold text-[#0F172A] block">
                              Revenue Velocity &amp; Throughput
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-[#64748B]">
                              Continuous delivery telemetry
                            </span>
                          </div>
                          <div className="flex gap-1 bg-[#FFFFFF] p-0.5 rounded-md border border-[#E2E8F0] text-[10px]">
                            {(['7D', '30D', '90D'] as const).map((r) => (
                              <button
                                key={r}
                                onClick={() => setActiveRange(r)}
                                className={`px-2 py-0.5 rounded font-medium transition-colors ${
                                  activeRange === r
                                    ? 'bg-[#2563EB] text-white shadow-xs'
                                    : 'text-[#64748B] hover:text-[#0F172A]'
                                }`}
                              >
                                {r}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* SVG Area Chart */}
                        <div className="h-22 sm:h-26 w-full relative">
                          <svg
                            className="w-full h-full overflow-visible"
                            viewBox="0 0 400 95"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient id="heroBlueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d={
                                activeRange === '7D'
                                  ? 'M0,75 Q60,55 120,62 T220,38 T310,22 T400,12 L400,95 L0,95 Z'
                                  : activeRange === '30D'
                                  ? 'M0,70 Q70,50 140,55 T240,32 T320,18 T400,8 L400,95 L0,95 Z'
                                  : 'M0,80 Q75,65 150,45 T250,30 T330,12 T400,5 L400,95 L0,95 Z'
                              }
                              fill="url(#heroBlueGrad)"
                            />
                            <path
                              d={
                                activeRange === '7D'
                                  ? 'M0,75 Q60,55 120,62 T220,38 T310,22 T400,12'
                                  : activeRange === '30D'
                                  ? 'M0,70 Q70,50 140,55 T240,32 T320,18 T400,8'
                                  : 'M0,80 Q75,65 150,45 T250,30 T330,12 T400,5'
                              }
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="2.5"
                            />
                            <circle cx="240" cy="32" r="3.5" fill="#2563EB" />
                            <circle cx="400" cy="8" r="4" fill="#0F172A" />
                          </svg>
                        </div>
                      </div>

                      {/* Small Live Logs */}
                      <div className="hidden sm:grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                          <span className="text-[#475569] truncate">Shopify Store Sync #4812</span>
                          <span className="text-[#10B981] font-mono font-semibold">SYNCED</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
                          <span className="text-[#475569] truncate">Mobile App Build (iOS)</span>
                          <span className="text-[#2563EB] font-mono font-semibold">DEPLOYED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative mx-auto h-[12px] bg-[#E2E8F0] rounded-b-[12px] shadow-md border-t border-[#CBD5E1] flex justify-center">
                  <div className="w-16 h-1 bg-[#94A3B8] rounded-b" />
                </div>
              </div>

              {/* 2. Mobile Phone in Foreground */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 w-[155px] sm:w-[190px] animate-float-phone z-30">
                <div className="rounded-[26px] bg-[#0F172A] p-1.5 shadow-[0_16px_36px_rgba(15,23,42,0.14)] border border-[#CBD5E1]">
                  <div className="relative rounded-[20px] bg-[#FFFFFF] p-2.5 text-[#0F172A] overflow-hidden border border-[#E2E8F0]">
                    <div className="w-12 h-3 mx-auto bg-slate-900 rounded-full mb-2.5 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[#64748B]">Customer App</span>
                        <span className="text-[9px] font-mono text-[#2563EB] bg-[#EFF6FF] px-1 rounded font-semibold">
                          LIVE
                        </span>
                      </div>

                      <div className="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <span className="text-[9px] text-[#64748B] block">Order Volume</span>
                        <span className="text-sm font-bold font-mono text-[#0F172A]">
                          $18,450.00
                        </span>
                        <div className="w-full bg-[#E2E8F0] h-1 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-[#2563EB] h-full w-[78%]" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[9px] p-1.5 rounded bg-[#F8FAFC] border border-[#E2E8F0]">
                        <span className="text-[#475569]">React Native Core</span>
                        <span className="text-[#10B981] font-semibold">60 FPS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Floating Project Discussion Card */}
              <div
                onClick={onOpenProjectModal}
                className="absolute -top-5 -left-3 sm:-left-6 max-w-[230px] sm:max-w-[260px] p-3.5 sm:p-4 rounded-[16px] bg-[#FFFFFF] border border-[#E2E8F0] animate-float-card shadow-[0_10px_25px_rgba(15,23,42,0.08)] z-40 cursor-pointer group hover:border-[#2563EB] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[12px] font-bold text-[#0F172A]">
                      Let's discuss your
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#EFF6FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="text-[13px] font-bold text-[#0F172A] leading-tight mb-1">
                  business project
                </div>

                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  We're here to turn your ideas into successful digital products.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
