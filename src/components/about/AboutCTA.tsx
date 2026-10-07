import React from 'react';
import { ArrowRight, Mail, Phone, Globe, Code2 } from 'lucide-react';

interface AboutCTAProps {
  onExploreProcess: () => void;
  onGetStarted: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({
  onGetStarted,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#020617] text-white relative overflow-hidden border-t border-[#1E293B]">
      {/* Background network glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* 3-Column Layout matching the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Column 1: Logo & Tagline (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-[#2563EB]/30">
                <Code2 className="w-5 h-5 font-bold" />
              </div>
              <span className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight uppercase">
                GIBTECHSOL
              </span>
            </div>
            <p className="text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed max-w-md">
              Let&apos;s build something great together. Get in touch with us and discover how our technology solutions can help your business grow.
            </p>
          </div>

          {/* Column 2: Contact Details with vertical separator (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:border-l lg:border-[#1E293B] lg:pl-8 space-y-3.5">
            <div className="flex items-center gap-3 text-[14px] text-[#CBD5E1]">
              <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">gibtechsol@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-[14px] text-[#CBD5E1]">
              <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">(+92)3335238688</span>
            </div>

            <div className="flex items-center gap-3 text-[14px] text-[#CBD5E1]">
              <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-medium">gibtechsol.com</span>
            </div>
          </div>

          {/* Column 3: Get Started CTA Button (col-span-3) */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-end">
            <button
              onClick={onGetStarted}
              className="h-[52px] px-8 rounded-full text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 shadow-[0_8px_25px_rgba(37,99,235,0.35)] transition-all duration-200 flex items-center gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
