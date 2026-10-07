import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { WhoWeAre } from '../components/about/WhoWeAre';
import { MissionVision } from '../components/about/MissionVision';
import { WhatWeDo } from '../components/about/WhatWeDo';
import { StrategicAdvantages } from '../components/about/StrategicAdvantages';
import { AboutCTA } from '../components/about/AboutCTA';

interface AboutPageProps {
  onExploreServices: () => void;
  onExploreProcess: () => void;
  onGetStarted: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onExploreServices,
  onExploreProcess,
  onGetStarted,
}) => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#0F172A] flex flex-col">
      {/* 1. About Hero */}
      <AboutHero onExploreServices={onExploreServices} />

      {/* 2. Who We Are */}
      <WhoWeAre />

      {/* 3. Mission & Vision */}
      <MissionVision />

      {/* 4. What We Do */}
      <WhatWeDo onExploreServices={onExploreServices} />

      {/* 5. Strategic Advantages */}
      <StrategicAdvantages />

      {/* 6. About-to-Process CTA */}
      <AboutCTA
        onExploreProcess={onExploreProcess}
        onGetStarted={onGetStarted}
      />
    </div>
  );
};
