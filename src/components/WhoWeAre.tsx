import React from 'react';
import { ShieldCheck, Cpu, Gauge } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  const pillars = [
    {
      icon: Gauge,
      value: '< 100ms',
      label: 'Performance Target',
      description: 'Ultra-low latency architecture engineered for high concurrency and conversion speed.',
    },
    {
      icon: Cpu,
      value: '99.8%',
      label: 'Delivery Milestone Rate',
      description: 'Agile sprints with strict pull request reviews, test coverage, and contractual timelines.',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Production-Grade Security',
      description: 'Zero technical debt with industry-standard authentication, encryption, and audit trails.',
    },
  ];

  return (
    <section id="who-we-are" className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase block mb-2.5">
              WHO WE ARE
            </span>
            <h2 className="text-fluid-h2 font-bold text-[#0F172A] text-balance">
              We turn ambitious ideas into scalable digital products.
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 lg:pt-1">
            <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.6] mb-4">
              GibTechSol is a dedicated digital product engineering and IT solutions studio. We partner with founders, scale-ups, and international enterprises across the UK, US, and Europe to design, engineer, and deploy high-performing digital systems.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#64748B] leading-[1.6]">
              Unlike traditional agencies that pass tickets through layers of account managers, our senior engineers and product designers work directly with your stakeholders from Figma canvas to production cloud infrastructure.
            </p>
          </div>
        </div>

        {/* Technical Rigor & Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#E2E8F0]">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="p-5 sm:p-6 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-200 shadow-xs"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] shadow-xs">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-mono tabular-nums">
                    {pillar.value}
                  </span>
                </div>
                <h3 className="text-[16px] font-semibold text-[#0F172A] mb-1.5">
                  {pillar.label}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
