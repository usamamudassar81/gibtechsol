import React from 'react';
import { Code2, ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E2E8F0] pt-16 pb-12 relative z-10 text-[#475569]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-[20px] font-bold text-[#0F172A] tracking-tight mb-4 inline-flex"
            >
              <div className="w-7 h-7 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>GitTechSols</span>
            </a>
            <p className="text-[14px] text-[#475569] leading-relaxed max-w-sm mb-6">
              Premium digital product engineering &amp; IT solutions studio. Delivering production-grade web applications, native mobile experiences, and scalable cloud architectures for international business leaders.
            </p>
            <div className="flex items-center gap-2.5 text-[#64748B]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:text-[#2563EB] hover:border-[#CBD5E1] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:text-[#2563EB] hover:border-[#CBD5E1] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:text-[#2563EB] hover:border-[#CBD5E1] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@gittechsols.com"
                className="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center hover:text-[#2563EB] hover:border-[#CBD5E1] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-semibold text-[#0F172A] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Website &amp; Web App Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Mobile App Development (iOS/Android)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Custom Shopify Plus Stores
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Figma UI/UX &amp; Design Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
                  Cloud Infrastructure &amp; APIs
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Capabilities */}
          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-semibold text-[#0F172A] uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
                  React &amp; Next.js SSR
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
                  Node.js &amp; Express Microservices
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
                  .NET &amp; C# Enterprise Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
                  PostgreSQL, MySQL &amp; Supabase
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
                  Shopify Liquid Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Coverage */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-semibold text-[#0F172A] uppercase tracking-wider mb-4">
              Coverage
            </h4>
            <div className="space-y-3 text-[13px] text-[#475569]">
              <div>
                <strong className="text-[#0F172A] block font-medium">United Kingdom:</strong>
                <span>London &amp; Regional Hubs</span>
              </div>
              <div>
                <strong className="text-[#0F172A] block font-medium">United States:</strong>
                <span>East &amp; West Coast Timezones</span>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} GitTechSols Ltd. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="hover:text-[#0F172A] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
