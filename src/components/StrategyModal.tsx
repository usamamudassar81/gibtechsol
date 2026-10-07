import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timezone, setTimezone] = useState('GMT (London, UK)');
  const [preferredDate, setPreferredDate] = useState('This Week');
  const [projectType, setProjectType] = useState('Web & Mobile Engineering');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg rounded-[24px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)] text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Close Strategy Session Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[12px] font-semibold text-[#2563EB] tracking-wider uppercase block mb-1.5">
            EXECUTIVE DISCOVERY SESSION
          </span>
          <h3 className="text-2xl font-bold text-[#0F172A]">
            Book a Strategy Call
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] mt-1">
            30 minutes directly with our Lead Solutions Architect. No sales pitches, strictly architectural feasibility and timeline planning.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-13 h-13 rounded-full bg-[#EFF6FF] text-[#2563EB] mx-auto flex items-center justify-center border border-[#DBEAFE]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-[#0F172A]">Call Reserved</h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We’ve sent calendar invites and preparation notes to <strong className="text-[#0F172A]">{email}</strong>. Looking forward to speaking with you, {name}!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marcus Sterling"
                className="w-full h-[46px] px-4 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/10"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marcus@company.com"
                className="w-full h-[46px] px-4 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-3 focus:ring-[#2563EB]/10"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                  Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full h-[46px] px-3 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-xs sm:text-sm focus:outline-none focus:border-[#2563EB]"
                >
                  <option value="GMT (London, UK)">GMT (London, UK)</option>
                  <option value="EST (New York, US)">EST (New York, US)</option>
                  <option value="PST (San Francisco, US)">PST (San Francisco, US)</option>
                  <option value="CET (Berlin / Paris)">CET (Europe)</option>
                  <option value="Other">Other Global Timezone</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                  Timeline
                </label>
                <select
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full h-[46px] px-3 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-xs sm:text-sm focus:outline-none focus:border-[#2563EB]"
                >
                  <option value="This Week">Within 48 Hours</option>
                  <option value="Next Week">Next Week</option>
                  <option value="Exploring for Q3/Q4">Exploring Next Quarter</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                Discussion Topic
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full h-[46px] px-3.5 rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB]"
              >
                <option value="Web & Mobile Engineering">New Web &amp; Mobile App Development</option>
                <option value="Shopify Plus Architecture">Shopify Store Architecture / Replatforming</option>
                <option value="Figma UI/UX Design System">Figma UI/UX &amp; Design System</option>
                <option value="Performance & Infrastructure Audit">Cloud Performance &amp; Latency Audit</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[46px] rounded-full text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_6px_16px_rgba(37,99,235,0.18)]"
              >
                <span>{isSubmitting ? 'Reserving Slot...' : 'Confirm Call Request'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Direct engineer contact · No spam · Strict NDA</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
