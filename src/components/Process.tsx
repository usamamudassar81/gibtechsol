import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  Map,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
  Check,
  CheckCircle2,
  Pause,
  Play
} from 'lucide-react';
import { ProcessStage } from '../types';

export interface ProcessProps {
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  subtitle?: string;
}

export const Process: React.FC<ProcessProps> = ({
  eyebrow = 'HOW WE WORK',
  headingPrefix = 'A process built to',
  headingHighlight = 'move work forward',
  subtitle = 'Six practical stages that keep strategy, design and engineering aligned from the first conversation to launch and beyond.',
}) => {
  // Single authoritative state: activeIndex (0 to 5)
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to Strategy (02)
  const [progress, setProgress] = useState<number>(0); // 0 to 100%
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // High precision timer references
  const STAGE_DURATION_MS = 5000;
  const startTimeRef = useRef<number>(Date.now());
  const elapsedPausedRef = useRef<number>(0);
  const requestRef = useRef<number | null>(null);

  // The 6 authoritative stages (single source of truth)
  const stages: ProcessStage[] = [
    {
      id: 'discover',
      stepNumber: '01',
      kicker: 'UNDERSTAND',
      title: 'Discover',
      description:
        'We dig into your goals, users and constraints to understand the real problem before anything gets built.',
      summaryHeader: 'What we learn',
      summarySubtitle: 'Goals, users and real constraints',
    },
    {
      id: 'strategy',
      stepNumber: '02',
      kicker: 'PLAN THE PATH',
      title: 'Strategy',
      description:
        'We turn the brief into a clear plan for scope, priorities, architecture and delivery.',
      summaryHeader: 'What we define',
      summarySubtitle: 'Scope, priorities and architecture',
    },
    {
      id: 'design',
      stepNumber: '03',
      kicker: 'DESIGN THE EXPERIENCE',
      title: 'Design',
      description:
        'We turn requirements into flows, screens and reusable design patterns that are easy to understand and use.',
      summaryHeader: 'What we design',
      summarySubtitle: 'Flows, screens and reusable UI',
    },
    {
      id: 'development',
      stepNumber: '04',
      kicker: 'BUILD AND TEST',
      title: 'Development',
      description:
        'We build in focused iterations with clean, tested code so progress stays visible and changes remain manageable.',
      summaryHeader: 'What we deliver',
      summarySubtitle: 'Clean code and visible iterations',
    },
    {
      id: 'launch',
      stepNumber: '05',
      kicker: 'PREPARE AND SHIP',
      title: 'Launch',
      description:
        'We prepare the release, monitor the launch and keep a rollback path ready if anything needs attention.',
      summaryHeader: 'How we launch',
      summarySubtitle: 'Safe deployment and monitoring',
    },
    {
      id: 'scale',
      stepNumber: '06',
      kicker: 'KEEP IMPROVING',
      title: 'Scale',
      description:
        'After launch, we improve performance, features and infrastructure based on what the product actually needs.',
      summaryHeader: 'What we improve',
      summarySubtitle: 'Performance, features and infrastructure',
    },
  ];

  // Helper for corresponding icons
  const getStageIcon = (id: string, className = 'w-4 h-4') => {
    switch (id) {
      case 'discover':
        return <Search className={className} />;
      case 'strategy':
        return <Map className={className} />;
      case 'design':
        return <Palette className={className} />;
      case 'development':
        return <Code2 className={className} />;
      case 'launch':
        return <Rocket className={className} />;
      case 'scale':
        return <TrendingUp className={className} />;
      default:
        return <Search className={className} />;
    }
  };

  // Reset progress and timer on manual selection or stage advance
  const handleSelectStage = useCallback((newIndex: number) => {
    setActiveIndex(newIndex);
    setProgress(0);
    elapsedPausedRef.current = 0;
    startTimeRef.current = Date.now();
  }, []);

  const handleNextStage = useCallback(() => {
    handleSelectStage((activeIndex + 1) % stages.length);
  }, [activeIndex, handleSelectStage, stages.length]);

  // Synchronized requestAnimationFrame Timer Engine
  useEffect(() => {
    // If paused via toggle or hover, remember elapsed time
    if (!isAutoPlaying || isHovered) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
      return;
    }

    // Reset reference start time
    startTimeRef.current = Date.now();

    const tick = () => {
      const now = Date.now();
      const currentElapsed = elapsedPausedRef.current + (now - startTimeRef.current);

      if (currentElapsed >= STAGE_DURATION_MS) {
        // Interval complete: advance to next stage and reset
        setActiveIndex((prev) => (prev + 1) % stages.length);
        setProgress(0);
        elapsedPausedRef.current = 0;
        startTimeRef.current = Date.now();
      } else {
        const pct = Math.min(100, (currentElapsed / STAGE_DURATION_MS) * 100);
        setProgress(pct);
      }

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isAutoPlaying, isHovered, activeIndex, stages.length]);

  // Handle pause & resume with elapsed accumulation
  const handleMouseEnter = () => {
    if (isAutoPlaying) {
      const now = Date.now();
      elapsedPausedRef.current += now - startTimeRef.current;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    startTimeRef.current = Date.now();
    setIsHovered(false);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextStage();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        handleSelectStage((activeIndex - 1 + stages.length) % stages.length);
      }
    },
    [activeIndex, handleNextStage, handleSelectStage, stages.length]
  );

  // Single source of truth: activeStage
  const activeStage = stages[activeIndex];

  return (
    <section
      id="process"
      className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-t border-[#E2E8F0] relative overflow-hidden text-[#0F172A]"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="How We Work Process Section"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          {/* Eyebrow */}
          <span className="text-[11px] sm:text-[12px] font-semibold text-[#2563EB] tracking-[0.14em] uppercase block mb-2.5">
            {eyebrow}
          </span>

          {/* Main Headline with Highlight */}
          <h2 className="text-fluid-h2 font-bold text-[#0F172A] tracking-[-0.03em] mb-3 text-balance">
            {headingPrefix} <span className="text-[#2563EB]">{headingHighlight}</span>
          </h2>

          {/* Supporting Description */}
          <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed max-w-[580px]">
            {subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Timeline (Left 56-60%) vs. Workflow Preview (Right 40-44%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT: Interactive Vertical Process Timeline               */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-7 relative flex flex-col space-y-3 sm:space-y-3.5"
            role="tablist"
            aria-label="Process stages timeline"
          >
            {/* Continuous Vertical Connecting Line */}
            <div
              className="absolute left-[19px] sm:left-[21px] top-5 bottom-6 w-[1.5px] bg-[#E2E8F0] z-0 pointer-events-none"
              aria-hidden="true"
            />

            {stages.map((stage, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={stage.id}
                  className="relative flex items-center group z-10"
                >
                  {/* Timeline Node Icon */}
                  <button
                    type="button"
                    onClick={() => handleSelectStage(index)}
                    aria-label={`Select stage ${stage.stepNumber}: ${stage.title}`}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isActive
                        ? 'bg-[#EFF6FF] border-2 border-[#2563EB] text-[#2563EB] shadow-[0_0_0_4px_rgba(37,99,235,0.12)] scale-105'
                        : 'bg-[#FFFFFF] border border-[#CBD5E1] text-[#64748B] group-hover:border-[#94A3B8] group-hover:text-[#0F172A]'
                    }`}
                  >
                    {getStageIcon(stage.id, 'w-4 h-4 sm:w-4.5 sm:h-4.5')}
                  </button>

                  {/* Horizontal Gap & Process Content Card */}
                  <div className="ml-3.5 sm:ml-4 flex-1">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      id={`process-tab-${stage.id}`}
                      aria-controls={`process-panel-${stage.id}`}
                      onClick={() => handleSelectStage(index)}
                      className={`w-full text-left rounded-[14px] p-3.5 sm:p-4 transition-all duration-200 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                        isActive
                          ? 'bg-[#FFFFFF] border-[#2563EB]/45 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.08)] ring-1 ring-[#2563EB]/25 translate-x-1'
                          : 'bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#CBD5E1] shadow-2xs hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs font-semibold ${
                              isActive ? 'text-[#2563EB]' : 'text-[#64748B]'
                            }`}
                          >
                            {stage.stepNumber}
                          </span>
                          <h3
                            className={`text-[14px] sm:text-[15px] font-bold ${
                              isActive ? 'text-[#0F172A]' : 'text-[#1E293B] group-hover:text-[#0F172A]'
                            }`}
                          >
                            {stage.title}
                          </h3>
                        </div>

                        {isActive && (
                          <span className="text-[9px] font-bold tracking-wider uppercase text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#DBEAFE]">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <p className="text-[12px] sm:text-[13px] text-[#475569] leading-relaxed">
                        {stage.description}
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* RIGHT: Live Workflow / Product Interface Preview          */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-5 lg:sticky lg:top-28"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="rounded-[20px] bg-[#FFFFFF] border border-[#E2E8F0] p-5 sm:p-6 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.07)] relative overflow-hidden"
              role="tabpanel"
              id={`process-panel-${activeStage.id}`}
              aria-labelledby={`process-tab-${activeStage.id}`}
            >
              {/* Header: Label + Auto Status Badge */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F5F9]">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#2563EB] block">
                    LIVE WORKFLOW
                  </span>
                  <span className="text-xs text-[#64748B]">Explore each stage</span>
                </div>

                {/* Auto Badge Pill */}
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isAutoPlaying
                      ? 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]'
                      : 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0] hover:text-[#0F172A]'
                  }`}
                  title={isAutoPlaying ? 'Pause automatic stage progress' : 'Resume automatic stage progress'}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isAutoPlaying && !isHovered
                        ? 'bg-[#2563EB] animate-pulse'
                        : 'bg-[#94A3B8]'
                    }`}
                  />
                  <span>{isAutoPlaying && !isHovered ? 'AUTO' : isHovered ? 'PAUSED' : 'MANUAL'}</span>
                  {isAutoPlaying && !isHovered ? (
                    <Pause className="w-2.5 h-2.5 ml-0.5 opacity-60" />
                  ) : (
                    <Play className="w-2.5 h-2.5 ml-0.5 opacity-60" />
                  )}
                </button>
              </div>

              {/* Active Stage Card Body */}
              <div
                key={activeStage.id}
                className="transition-all duration-200 ease-out"
              >
                {/* Stage Hero Row: Icon + Large Stage Watermark */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] shadow-xs">
                    {getStageIcon(activeStage.id, 'w-6 h-6')}
                  </div>
                  <span className="font-mono font-bold text-[38px] sm:text-[42px] text-[#2563EB]/15 leading-none select-none tracking-tight">
                    {activeStage.stepNumber}
                  </span>
                </div>

                {/* Kicker */}
                <span className="text-[11px] font-bold text-[#2563EB] tracking-wider uppercase block mb-1">
                  {activeStage.kicker}
                </span>

                {/* Stage Title */}
                <h3 className="text-2xl sm:text-[26px] font-bold text-[#0F172A] tracking-tight mb-2">
                  {activeStage.title}
                </h3>

                {/* Stage Description */}
                <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed mb-4">
                  {activeStage.description}
                </p>

                {/* Summary Feature Panel */}
                <div className="rounded-[12px] bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 sm:p-4 mb-3.5">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#0F172A]">
                        {activeStage.summaryHeader}
                      </div>
                      <div className="text-[12px] text-[#475569] mt-0.5 leading-snug">
                        {activeStage.summarySubtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Synchronized Linear Progress Bar */}
                <div
                  className="w-full h-1 bg-[#E2E8F0] rounded-full overflow-hidden mb-4"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Stage auto-play timer progress"
                >
                  <div
                    className="h-full bg-[#2563EB] transition-all duration-75 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Bottom 2 × 3 Stage Navigation Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {stages.map((stg, i) => {
                    const isCurrent = i === activeIndex;
                    return (
                      <button
                        key={stg.id}
                        type="button"
                        onClick={() => handleSelectStage(i)}
                        className={`p-2.5 rounded-[12px] text-left border transition-all duration-150 cursor-pointer flex flex-col justify-between h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                          isCurrent
                            ? 'bg-[#EFF6FF] border-[#2563EB] text-[#2563EB] shadow-2xs ring-1 ring-[#2563EB]/25'
                            : 'bg-white hover:bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B] hover:text-[#0F172A]'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span
                            className={`font-mono text-[10px] font-semibold ${
                              isCurrent ? 'text-[#2563EB]' : 'text-[#94A3B8]'
                            }`}
                          >
                            {stg.stepNumber}
                          </span>
                          <span className={isCurrent ? 'text-[#2563EB]' : 'text-[#94A3B8]'}>
                            {getStageIcon(stg.id, 'w-3 h-3')}
                          </span>
                        </div>
                        <span
                          className={`text-[11px] font-bold truncate ${
                            isCurrent ? 'text-[#0F172A]' : 'text-[#334155]'
                          }`}
                        >
                          {stg.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Action Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9] text-xs">
                  <div className="flex items-center gap-1.5 text-[#64748B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span className="text-[11px]">Built for clarity and speed</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStage}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
                  >
                    <span>Next stage</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
