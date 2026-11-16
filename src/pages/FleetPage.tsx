import React from 'react';
import { FleetSection } from '../components/FleetSection';
import { CargoCategoriesSection } from '../components/CargoCategoriesSection';
import { BookingTrustGuides } from '../components/BookingTrustGuides';

export const FleetPage: React.FC = () => {
  return (
    <>
      {/* Full Fleet Section */}
      <FleetSection preview={false} />

      {/* Cargo Categories & Industry Specializations */}
      <CargoCategoriesSection />

      {/* Load Fit Guide & Rate Transparency */}
      <BookingTrustGuides bgClass="bg-white" />
    </>
  );
};
