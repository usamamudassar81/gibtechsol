import React from 'react';
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, Building2, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { aboutHeroImg, whoWeAreOfficeImg, missionVisionWorldImg, whatWeDoEngineerImg } from '../../assets/images';

interface AboutHeroProps {
  onExploreServices: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onExploreServices }) => {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28 bg-[#020617] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content (approx 45% -> col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#60A5FA] text-[12px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT US</span>
            </div>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[52px] font-bold tracking-tight text-white leading-[1.12] mb-6">
              Gibtechsol <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">
                Technologies &amp; Solutions
              </span>
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#94A3B8] leading-relaxed mb-8">
              We are a team of passionate professionals dedicated to delivering innovative and reliable technology solutions that help businesses grow and succeed in the digital era.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                className="h-[48px] px-7 rounded-full text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all duration-200 flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image (approx 55% -> col-span-7) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[16px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent z-10 pointer-events-none" />
              <ImageWithFallback
                src={aboutHeroImg}
                alt="Gibtechsol software development workspace"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between text-xs text-[#94A3B8] border-t border-white/10 pt-3">
                <span className="flex items-center gap-2 font-mono text-[#60A5FA]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Enterprise Engineering Environment
                </span>
                <span className="font-mono">Secure &amp; Scalable</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
