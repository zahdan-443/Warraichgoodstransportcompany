import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';
import { FleetSection } from '../components/FleetSection';
import { BookingCtaBanner } from '../components/BookingCtaBanner';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (FTL Focus & Operations Hub) */}
      <HeroSection />

      {/* 2. Condensed Bilty Tracking Section Summary / CTA */}
      <BiltyTrackingSection condensed={true} />

      {/* 3. Condensed Fleet Section Preview */}
      <FleetSection preview={true} />

      {/* 4. Booking CTA Banner */}
      <BookingCtaBanner />
    </>
  );
};
