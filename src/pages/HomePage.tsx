import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FleetSection } from '../components/FleetSection';
import { FtlWorkflowSection } from '../components/FtlWorkflowSection';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';
import { BookingCtaBanner } from '../components/BookingCtaBanner';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section (FTL Focus & Operations Hub) */}
      <HeroSection />

      {/* 2. Commercial Fleet Showcase (4 Core Trucks) */}
      <FleetSection preview={true} />

      {/* 3. Dedicated FTL Workflow & Operational Process */}
      <FtlWorkflowSection />

      {/* 4. Bilty Consignment Tracking & Highway Transit Times */}
      <BiltyTrackingSection condensed={true} />

      {/* 5. Booking CTA Banner */}
      <BookingCtaBanner />
    </>
  );
};
