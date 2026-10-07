import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  initialService?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Website Development');
  const [budget, setBudget] = useState('$5k - $15k');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refId, setRefId] = useState('');

  const trustPoints = [
    { label: 'Free Consultation', desc: '30-minute technical scope review' },
    { label: 'Custom Solution', desc: 'No cookie-cutter templates' },
    { label: 'Clear Communication', desc: 'Direct senior developer channel' },
    { label: 'On-Time Delivery', desc: 'Contractual milestone commitments' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !brief.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = 'GTS-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 550);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-t border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* High-contrast container: Background #0F172A, Text #FFFFFF */}
        <div className="rounded-[24px] bg-[#0F172A] p-7 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.15)] relative overflow-hidden text-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6">
              <span className="text-[12px] font-semibold text-[#60A5FA] tracking-wider uppercase block mb-2.5">
                LET'S TALK
              </span>
              <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-[1.15] mb-4">
                Let's Build Together
              </h2>
              <p className="text-[15px] lg:text-[16px] text-[#94A3B8] leading-[1.6] mb-6 max-w-lg">
                Have a digital product idea? Let's turn it into something exceptional. Tell us about your goals, and our engineering team will reply within 24 hours with an actionable roadmap.
              </p>

              {/* Supporting Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {trustPoints.map((point) => (
                  <div key={point.label} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-1" />
                    <div>
                      <div className="text-[14px] font-semibold text-white leading-tight">
                        {point.label}
                      </div>
                      <div className="text-[12px] text-[#94A3B8] mt-0.5">
                        {point.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3 text-xs text-[#94A3B8]">
                <ShieldCheck className="w-5 h-5 text-[#60A5FA] shrink-0" />
                <span>
                  Strict Non-Disclosure Guarantee (NDA) signed upfront upon request. Your IP and source code remain 100% yours.
                </span>
              </div>
            </div>

            {/* Right Column: Clean Frictionless Form on White Card */}
            <div className="lg:col-span-6">
              <div className="rounded-[20px] p-6 sm:p-8 bg-[#FFFFFF] text-[#0F172A] shadow-lg">
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in duration-250">
                    <div className="w-13 h-13 rounded-full bg-[#EFF6FF] text-[#2563EB] mx-auto flex items-center justify-center border border-[#DBEAFE]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      Brief Received!
                    </h3>
                    <p className="text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#0F172A]">{name}</strong>. Our lead engineer has received your project request (Ref: <span className="font-mono text-[#2563EB] font-bold">{refId}</span>) and will reach out to <strong className="text-[#0F172A]">{email}</strong> within 24 hours.
                    </p>
                    <div className="pt-3">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setName('');
                          setEmail('');
                          setBrief('');
                        }}
                        className="text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer"
                      >
                        Submit another brief →
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Harrison"
                        className="w-full h-[48px] px-4 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/10 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5"
                      >
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@company.com"
                        className="w-full h-[48px] px-4 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/10 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5"
                        >
                          Primary Service
                        </label>
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full h-[48px] px-3.5 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                        >
                          <option value="Website Development">Website Development</option>
                          <option value="App Development">App Development</option>
                          <option value="Shopify Store Creation">Shopify Store Creation</option>
                          <option value="Figma UI/UX Designing">Figma UI/UX Designing</option>
                          <option value="Full Digital Transformation">Full Digital Suite</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5"
                        >
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full h-[48px] px-3.5 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                        >
                          <option value="Under $5k">Under $5k (MVP / Audit)</option>
                          <option value="$5k - $15k">$5k - $15k</option>
                          <option value="$15k - $30k">$15k - $30k</option>
                          <option value="$30k+">$30k+ (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="brief"
                        className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1.5"
                      >
                        Project Brief <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="brief"
                        required
                        rows={3}
                        value={brief}
                        onChange={(e) => setBrief(e.target.value)}
                        placeholder="Tell us about the project goals, target timelines, or existing systems..."
                        className="w-full p-4 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/10 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-[48px] rounded-full text-[15px] font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(37,99,235,0.22)] active:translate-y-0 transition-all duration-180 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                    >
                      <span>{isSubmitting ? 'Submitting Brief...' : 'Start Your Project'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-center text-[#64748B]">
                      100% confidential · Direct developer review · We reply in 24h
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
