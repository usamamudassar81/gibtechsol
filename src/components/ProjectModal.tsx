import React from 'react';
import { Project } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './common/ImageWithFallback';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (service: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[24px] bg-[#FFFFFF] border border-[#E2E8F0] p-6 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.18)] text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Close Case Study Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Details */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] mb-2">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#64748B]">{project.client}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-[-0.03em] leading-snug">
            {project.title}
          </h2>
        </div>

        {/* Image Preview Banner */}
        <div className="relative rounded-[16px] overflow-hidden mb-8 h-64 sm:h-80 bg-[#0F172A] border border-[#E2E8F0]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            aspectRatioClass="h-full w-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] mb-8">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center sm:text-left">
              <div className="text-lg sm:text-2xl font-bold text-[#0F172A] font-mono tabular-nums">
                {m.value}
              </div>
              <div className="text-[11px] text-[#64748B] uppercase tracking-wider font-semibold mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B] mb-3">
              Strategic Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0F172A] p-3 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0]"
                >
                  <div className="w-4 h-4 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0 text-[#2563EB]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Narrative Sections */}
        <div className="space-y-6 mb-8 text-[15px] leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              The Architectural Challenge
            </h3>
            <p className="text-[#475569] bg-[#F8FAFC] p-4 rounded-[14px] border border-[#E2E8F0]">
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Engineering Solution
            </h3>
            <p className="text-[#475569] bg-[#F8FAFC] p-4 rounded-[14px] border border-[#E2E8F0]">
              {project.solution}
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              Production Outcome
            </h3>
            <p className="text-[#334155] bg-[#F8FAFC] p-4 rounded-[14px] border border-[#E2E8F0]">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Shipped Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B] mb-3">
            Key Shipped Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0F172A] p-2.5 rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0]"
              >
                <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Deployed */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#64748B] mb-3">
            Technology Stack Deployed
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-[#2563EB] bg-[#EFF6FF] border border-[#DBEAFE] px-3 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#64748B]">
            Need a similar production-grade system built?
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact(project.category);
            }}
            className="w-full sm:w-auto h-[44px] px-6 rounded-full font-semibold text-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_6px_16px_rgba(37,99,235,0.18)]"
          >
            <span>Discuss This Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
