import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FleetCardsSection } from '../components/FleetCardsSection';
import { CargoCategoriesPreview } from '../components/CargoCategoriesPreview';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';
import { BusinessIntroCard } from '../components/BusinessIntroCard';
import { WhyUsSection } from '../components/WhyUsSection';
import { DriverAppSection } from '../components/DriverAppSection';
import { DirectContactSection } from '../components/DirectContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (with Real Highway Photo & Overlapping Contact Strip) */}
      <HeroSection />

      {/* 2. Commercial Fleet Overview (Short cards linking to /fleet) */}
      <FleetCardsSection />

      {/* 3. Cargo Specializations Preview (Short cards linking to /fleet) */}
      <CargoCategoriesPreview />

      {/* 4. Online Bilty Tracking & Firebase Verification */}
      <BiltyTrackingSection condensed={true} />

      {/* 5. Official Business Introduction */}
      <BusinessIntroCard />

      {/* 6. Why Choose Us / Guarantees */}
      <WhyUsSection />

      {/* 7. Android Mobile App Download Section */}
      <DriverAppSection />

      {/* 8. Direct Communication Helpline & Instant Booking */}
      <DirectContactSection />
    </>
  );
};
