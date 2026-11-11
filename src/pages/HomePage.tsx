import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FleetCardsSection } from '../components/FleetCardsSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { CargoCategoriesPreview } from '../components/CargoCategoriesPreview';
import { DriverAppSection } from '../components/DriverAppSection';
import { DirectContactSection } from '../components/DirectContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (with Overlapping Quick Quote Card) */}
      <HeroSection />

      {/* 2. Commercial Fleet Services Cards (white background) */}
      <FleetCardsSection />

      {/* 3. Why Us / Core Guarantees Cards (slate-50 background) */}
      <WhyUsSection />

      {/* 4. Commercial Cargo Specializations Cards (white background) */}
      <CargoCategoriesPreview />

      {/* 5. Android Mobile App Download Section (slate-50 background) */}
      <DriverAppSection />

      {/* 6. Direct Communication Contact Card (white background) */}
      <DirectContactSection />
    </>
  );
};
