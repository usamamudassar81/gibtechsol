import React from 'react';

export const TrustBar: React.FC = () => {
  const platforms = [
    { name: 'Google Cloud', tag: 'Infrastructure' },
    { name: 'AWS', tag: 'Cloud Architecture' },
    { name: 'Microsoft Azure', tag: 'Enterprise' },
    { name: 'Shopify Plus', tag: 'E-commerce' },
    { name: 'Figma', tag: 'Design Systems' },
    { name: 'Meta Ecosystem', tag: 'React Core' },
    { name: 'WordPress VIP', tag: 'Headless CMS' },
  ];

  return (
    <section className="w-full py-5 sm:py-6 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-[12px] font-semibold tracking-wider text-[#64748B] uppercase whitespace-nowrap">
              TECHNOLOGIES &amp; PLATFORMS
            </span>
          </div>

          {/* Clean Muted Logos/Badges */}
          <div className="w-full flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
            {platforms.map((item) => (
              <div
                key={item.name}
                className="group flex items-center gap-2 text-[#64748B] hover:text-[#0F172A] transition-colors duration-150"
              >
                <span className="text-[14px] font-semibold text-[#334155] group-hover:text-[#0F172A] transition-colors">
                  {item.name}
                </span>
                <span className="text-[12px] text-[#94A3B8] hidden sm:inline">
                  · {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
