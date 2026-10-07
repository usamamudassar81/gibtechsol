import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { whatWeDoEngineerImg } from '../../assets/images';

interface WhatWeDoProps {
  onExploreServices: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onExploreServices }) => {
  const capabilities = [
    'Mobile Applications',
    'Desktop Applications',
    'Web Solutions',
    'ERP',
    'Quality Assurance',
    'Remote Staffing',
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-[12px] font-semibold tracking-wider uppercase">
              <span>WHAT WE DO</span>
            </div>

            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#0F172A] tracking-tight leading-[1.18] mb-6">
              More Than Just <br />
              <span className="text-[#2563EB]">IT Solutions</span>
            </h2>

            <p className="text-[16px] sm:text-[17px] text-[#475569] leading-relaxed mb-8">
              Gibtechsol offers a blend of business and technical expertise in Information Technology and also software like Mobile Applications, Desktop Applications, Web solutions, ERP, Quality Assurance and Remote Staffing.
            </p>

            {/* 2-Column Capability Checklist */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[15px] font-semibold text-[#0F172A]">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={onExploreServices}
                className="h-[48px] px-7 rounded-full text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 shadow-[0_6px_16px_rgba(37,99,235,0.2)] transition-all duration-200 flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image (col-span-6) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-[0_15px_40px_rgba(15,23,42,0.08)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent z-10 pointer-events-none" />
              <ImageWithFallback
                src={whatWeDoEngineerImg}
                alt="Gibtechsol professional software engineer workspace"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
