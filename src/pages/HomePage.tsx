import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FleetSection } from '../components/FleetSection';
import { RateCalculatorSection } from '../components/RateCalculatorSection';
import { CargoCategoriesSection } from '../components/CargoCategoriesSection';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';
import { BusinessIntroCard } from '../components/BusinessIntroCard';
import { WhyUsSection } from '../components/WhyUsSection';
import { DriverAppSection } from '../components/DriverAppSection';
import { DirectContactSection } from '../components/DirectContactSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (with Real Highway Photo & Overlapping Quick Quote Card) */}
      <HeroSection />

      {/* 2. Real Commercial Fleet Vehicles (Real Truck Photos: Shehzore, Mazda, Sample, Bedford, Tonnages & Specs) */}
      <FleetSection preview={true} />

      {/* 3. Real Freight Rate Calculator (Distances, Motorways, Live WhatsApp Booking Summary) */}
      <RateCalculatorSection />

      {/* 4. Real Cargo Specializations (Agriculture, Textiles, Industrial, Heavy Haulers Photos) */}
      <CargoCategoriesSection />

      {/* 5. Online Bilty Tracking & Firebase QR Verification */}
      <BiltyTrackingSection condensed={true} />

      {/* 6. Official Business Introduction (Proprietor Portrait Face, NTN: 7779394-1, Nationwide Service Areas) */}
      <BusinessIntroCard />

      {/* 7. Why Choose Us / Legal Guarantees */}
      <WhyUsSection />

      {/* 8. Android Mobile App Download Section (Smartphone Frame Mockup) */}
      <DriverAppSection />

      {/* 9. Direct Communication Helpline & Instant Booking */}
      <DirectContactSection />
    </>
  );
};
