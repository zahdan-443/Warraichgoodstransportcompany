import React from 'react';
import { FleetSection } from '../components/FleetSection';
import { CargoCategoriesSection } from '../components/CargoCategoriesSection';

export const FleetPage: React.FC = () => {
  return (
    <>
      {/* Full Fleet Section */}
      <FleetSection preview={false} />

      {/* Cargo Categories & Industry Specializations */}
      <CargoCategoriesSection />
    </>
  );
};
