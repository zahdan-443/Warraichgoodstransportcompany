import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { QuickRouteRateBar } from '../components/QuickRouteRateBar';
import { FleetCardsSection } from '../components/FleetCardsSection';
import { CargoCategoriesPreview } from '../components/CargoCategoriesPreview';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';
import { BusinessIntroCard } from '../components/BusinessIntroCard';
import { WhyUsSection } from '../components/WhyUsSection';
import { HomeSeoAuthoritySection } from '../components/HomeSeoAuthoritySection';
import { FaqAndReviewsSection } from '../components/FaqAndReviewsSection';
import { DriverAppSection } from '../components/DriverAppSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 1b. Quick Route & Rate Bar */}
      <QuickRouteRateBar />

      {/* 2. Commercial Fleet Overview (Short cards linking to /fleet) */}
      <FleetCardsSection />

      {/* 3. Cargo Specializations Preview (Short cards linking to /fleet) */}
      <CargoCategoriesPreview />

      {/* 4. Online Bilty Tracking & Firebase Verification */}
      <BiltyTrackingSection condensed={true} />

      {/* 5. Official Company Information & Credentials */}
      <BusinessIntroCard />

      {/* 6. Why Choose Us / Guarantees */}
      <WhyUsSection />

      {/* 7. Regional Freight Editorial Authority & Corridor Guides */}
      <HomeSeoAuthoritySection />

      {/* 8. Visible Frequently Asked Questions (synced with FAQPage JSON-LD) */}
      <FaqAndReviewsSection headingAs="h2" />

      {/* 9. Android Mobile App Download Section */}
      <DriverAppSection />
    </>
  );
};
