import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { missionVisionWorldImg } from '../../assets/images';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#EFF6FF] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle tech grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DBEAFE] text-[#2563EB] text-[12px] font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR MISSION &amp; VISION</span>
          </div>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-[#0F172A] tracking-tight">
            Driven by Purpose, Guided by Vision
          </h2>
        </div>

        {/* Content Grid: 2 Cards + Right Global Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Cards (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1: Mission */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] mb-3">
                  Our Mission
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  To gain a competitive advantage in the global IT and business process outsourcing sector while making loyal employees, satisfied customers, and an ever growing brand.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                <span>Corporate Core</span>
              </div>
            </div>

            {/* Card 2: Vision */}
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-6 shadow-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F172A] mb-3">
                  Our Vision
                </h3>
                <p className="text-[15px] text-[#475569] leading-relaxed">
                  To be a world leader in providing cutting edge and innovative business solutions to our valued clients.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                <span>Global Excellence</span>
              </div>
            </div>

          </div>

          {/* Right Global Tech Visualization (col-span-5) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-[0_15px_40px_rgba(15,23,42,0.08)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent z-10 pointer-events-none" />
              <ImageWithFallback
                src={missionVisionWorldImg}
                alt="Gibtechsol global technology visualization"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#020617]/80 backdrop-blur-md border border-white/10 rounded-xl p-3.5 text-white flex items-center justify-between">
                <div>
                  <span className="block text-xs font-mono text-[#60A5FA]">GLOBAL REACH</span>
                  <strong className="text-sm">International Standards &amp; Delivery</strong>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
