import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'GitTechSols rebuilt our core B2B portal in Next.js and Node.js with precision. We shaved over a second off every interactive page load and onboarded enterprise customers without a single deployment hitch.',
      name: 'Marcus Sterling',
      role: 'Chief Technology Officer',
      company: 'OmniTrade Logistics (London, UK)',
      projectType: 'Web Portal & Cloud Architecture',
    },
    {
      id: 2,
      quote:
        'Their mastery of Shopify Plus and custom Liquid templating transformed our direct-to-consumer store. Checkout conversion surged by 41% in our first quarter post-launch, paying for the entire engagement in 6 weeks.',
      name: 'Elena Rostova',
      role: 'VP of Digital Commerce',
      company: 'Vellum Atelier (New York, US)',
      projectType: 'Headless E-commerce & UI/UX',
    },
    {
      id: 3,
      quote:
        'Finding an engineering partner that understands both Figma design systems and robust backend microservices is rare. GitTechSols delivered our cross-platform mobile app on time, with flawless offline data sync.',
      name: 'Dr. Julian Vane',
      role: 'Head of Product Engineering',
      company: 'PulseHealth Labs (Zurich, CH)',
      projectType: 'Mobile App & Healthtech APIs',
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase block mb-2.5">
            CLIENT PERSPECTIVES
          </span>
          <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] mb-3 text-balance">
            Trusted by Leaders in the UK, US &amp; Global Markets
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
            Direct feedback from product heads, CTOs, and founders who trust GitTechSols to engineer mission-critical systems.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-[18px] bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04)] group"
            >
              <div>
                <div className="text-[#2563EB] mb-4">
                  <Quote className="w-6 h-6" />
                </div>
                <blockquote className="text-[14px] sm:text-[15px] text-[#334155] leading-[1.6] mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="text-[14px] sm:text-[15px] font-semibold text-[#0F172A] mb-0.5">
                  {item.name}
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#475569] mb-1.5">
                  {item.role} · {item.company}
                </div>
                <div className="text-[11px] font-mono text-[#64748B]">
                  Scope: {item.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
