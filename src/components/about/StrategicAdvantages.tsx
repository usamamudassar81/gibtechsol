import React from 'react';
import {
  Briefcase,
  Award,
  Layers,
  Building2,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

interface AdvantageItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const StrategicAdvantages: React.FC = () => {
  const advantages: AdvantageItem[] = [
    { title: 'Focused Business Approach', icon: Briefcase },
    { title: 'Skills & Expertise', icon: Award },
    { title: 'Vast Experience', icon: Layers },
    { title: 'One-Window Solution', icon: Building2 },
    { title: 'No 3rd Party Involvement', icon: ShieldCheck },
    { title: 'Flexible Payment Terms', icon: CreditCard },
    { title: 'Lifetime Bug-Free Warranty', icon: CheckCircle2 },
    { title: 'One-Year Maintenance Coverage', icon: Clock },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DBEAFE] text-[#2563EB] text-[12px] font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR ADVANTAGE</span>
          </div>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-[#0F172A] tracking-tight mb-4">
            Why Choose Gibtechsol?
          </h2>
          <p className="text-[16px] text-[#475569]">
            We combine excellence, people, and technology to deliver results that matter. Our strategic approach helps businesses stay ahead in a competitive market.
          </p>
        </div>

        {/* 4 columns × 2 rows grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0F172A] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>
                <div className="pt-4 mt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-mono">Advantage 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
