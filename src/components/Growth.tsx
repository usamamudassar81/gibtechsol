import React, { useState } from 'react';
import { Search, Zap, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';

export const Growth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'vitals'>('funnel');

  const growthServices = [
    {
      title: 'Technical & Semantic SEO',
      icon: Search,
      description:
        'Structured schema graphs, dynamic server-side rendering, sub-second indexing, and metadata automation that maximize search rankings.',
      metric: '3.4x Faster Indexing Rate',
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      icon: Zap,
      description:
        'Eliminating layout shifts, simplifying checkout funnels, and optimizing critical user flows to maximize transaction completions.',
      metric: 'Zero Shift (CLS 0.00)',
    },
    {
      title: 'Analytics & Telemetry Infrastructure',
      icon: BarChart3,
      description:
        'Server-side event streaming, privacy-compliant tracking (GDPR/CCPA), and real-time behavioral data pipelines without page bloat.',
      metric: 'Real-time Telemetry',
    },
    {
      title: 'Performance Marketing Architecture',
      icon: TrendingUp,
      description:
        'High-velocity landing page frameworks, lightweight asset delivery, and instant campaign variations built for optimal ad spend ROI.',
      metric: '< 800ms First Contentful Paint',
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase block mb-2.5">
              BUSINESS IMPACT &amp; GROWTH
            </span>
            <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] mb-4 text-balance">
              Engineering Built for Real Commercial Velocity
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed mb-6">
              A technically brilliant app is useless if it doesn't acquire users and convert transactions. We align full-stack engineering with fundamental growth mechanics from day one.
            </p>

            <div className="space-y-2.5">
              {growthServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-3.5 sm:p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all duration-150 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#0F172A]">
                          {service.title}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-mono text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded font-medium border border-[#DBEAFE]">
                          {service.metric}
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-[#475569] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean White Dashboard Container */}
          <div className="lg:col-span-6">
            <div className="rounded-[22px] p-5 sm:p-6 bg-[#FFFFFF] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.05)] relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-5">
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A]">
                    Full-Funnel Performance
                  </h3>
                  <span className="text-[11px] text-[#64748B]">
                    Architecture-driven conversion pipeline
                  </span>
                </div>
                <div className="flex gap-1 bg-[#F8FAFC] p-1 rounded-full border border-[#E2E8F0] text-[11px]">
                  <button
                    onClick={() => setActiveTab('funnel')}
                    className={`px-2.5 py-0.5 rounded-full font-medium transition-colors ${
                      activeTab === 'funnel'
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Funnel
                  </button>
                  <button
                    onClick={() => setActiveTab('vitals')}
                    className={`px-2.5 py-0.5 rounded-full font-medium transition-colors ${
                      activeTab === 'vitals'
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    Vitals
                  </button>
                </div>
              </div>

              {activeTab === 'funnel' ? (
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#0F172A]">1. Discovery &amp; SSR Fast Load</span>
                      <span className="text-[#2563EB] font-mono">100% Inbound</span>
                    </div>
                    <div className="h-6 rounded-md bg-[#F8FAFC] p-0.5 border border-[#E2E8F0] overflow-hidden">
                      <div className="h-full rounded bg-[#2563EB] w-full flex items-center px-2 text-[10px] font-mono text-white">
                        Sub-second initial paint
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#0F172A]">2. Interactive Engagement &amp; UX</span>
                      <span className="text-[#2563EB] font-mono">78% Retention</span>
                    </div>
                    <div className="h-6 rounded-md bg-[#F8FAFC] p-0.5 border border-[#E2E8F0] overflow-hidden">
                      <div className="h-full rounded bg-[#3B82F6] w-[78%] flex items-center px-2 text-[10px] font-mono text-white">
                        Fluid 60fps micro-interactions
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#0F172A]">3. Checkout / Signup Execution</span>
                      <span className="text-[#2563EB] font-mono">54% Completion</span>
                    </div>
                    <div className="h-6 rounded-md bg-[#F8FAFC] p-0.5 border border-[#E2E8F0] overflow-hidden">
                      <div className="h-full rounded bg-[#60A5FA] w-[54%] flex items-center px-2 text-[10px] font-mono text-white">
                        Zero-friction payment API
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[#0F172A]">4. Returning Customers &amp; PWA Sync</span>
                      <span className="text-[#2563EB] font-mono">38% Retention</span>
                    </div>
                    <div className="h-6 rounded-md bg-[#F8FAFC] p-0.5 border border-[#E2E8F0] overflow-hidden">
                      <div className="h-full rounded bg-[#93C5FD] w-[38%] flex items-center px-2 text-[10px] font-mono text-[#0F172A] font-semibold">
                        Push notifications &amp; offline caches
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mt-6 flex items-center justify-between text-xs">
                    <span className="text-[#475569]">
                      Average conversion improvement across our rebuilt stores
                    </span>
                    <span className="text-[#2563EB] font-bold font-mono text-sm ml-2">
                      +32% to +48%
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                      <div className="text-2xl font-bold font-mono text-[#2563EB]">0.7s</div>
                      <div className="text-[11px] font-semibold text-[#0F172A] mt-1">LCP</div>
                      <div className="text-[9px] text-[#64748B]">Target &lt; 2.5s</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                      <div className="text-2xl font-bold font-mono text-[#2563EB]">18ms</div>
                      <div className="text-[11px] font-semibold text-[#0F172A] mt-1">INP</div>
                      <div className="text-[9px] text-[#64748B]">Target &lt; 200ms</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
                      <div className="text-2xl font-bold font-mono text-[#2563EB]">0.00</div>
                      <div className="text-[11px] font-semibold text-[#0F172A] mt-1">CLS</div>
                      <div className="text-[9px] text-[#64748B]">Zero Shift</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    Google ranks fast web experiences significantly higher. Our build systems enforce code splitting, automatic WebP image compression, and minimal third-party payload budgets to guarantee top-tier scores on PageSpeed Insights.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
