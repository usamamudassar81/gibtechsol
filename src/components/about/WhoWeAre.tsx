import React from 'react';
import { Calendar, Users, Cpu, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { whoWeAreOfficeImg } from '../../assets/images';

export const WhoWeAre: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      title: 'Founded',
      value: 'in 2005',
    },
    {
      icon: Users,
      title: 'Expert Team',
      value: 'of Professionals',
    },
    {
      icon: Cpu,
      title: 'Innovative',
      value: 'Solutions',
    },
  ];

  return (
    <section id="who-we-are" className="py-20 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-[12px] font-semibold tracking-wider uppercase">
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-[32px] sm:text-[38px] font-bold text-[#0F172A] tracking-tight leading-[1.18] mb-6">
              Your Trusted Partner <br />
              <span className="text-[#2563EB]">in Technology</span>
            </h2>

            <p className="text-[16px] sm:text-[17px] text-[#475569] leading-relaxed mb-6">
              Gibtechsol was founded with a vision to provide cutting-edge and innovative technological solutions for businesses and organizations. Since our inception, we have been committed to delivering high-quality IT services and software solutions that drive success and create lasting value for our clients.
            </p>

            <p className="text-[15px] text-[#475569] leading-relaxed mb-8">
              We bridge the gap between complex technical execution and clear business objectives, partnering with companies across the UK, US, and international markets to build resilient digital infrastructure.
            </p>

            {/* Highlights Horizontal Row */}
            <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[14px] font-bold text-[#0F172A]">{item.title}</span>
                    <span className="text-[13px] text-[#475569]">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-[0_15px_40px_rgba(15,23,42,0.08)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent z-10 pointer-events-none" />
              <ImageWithFallback
                src={whoWeAreOfficeImg}
                alt="Gibtechsol modern enterprise software development office"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
