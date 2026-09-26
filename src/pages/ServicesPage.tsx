import React from 'react';
import { CorporateCredibilitySection } from '../components/CorporateCredibilitySection';
import { FtlWorkflowSection } from '../components/FtlWorkflowSection';
import { CargoSafetySection } from '../components/CargoSafetySection';

export const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Corporate Credibility, Tax Compliance (FBR NTN) & Enterprise Vendor Profile */}
      <CorporateCredibilitySection />

      {/* Dedicated FTL Booking Workflow & Non-Stop Transit Advantages */}
      <FtlWorkflowSection />

      {/* 100% Waterproof Tarpaulin & Cargo Safety */}
      <CargoSafetySection />
    </>
  );
};
