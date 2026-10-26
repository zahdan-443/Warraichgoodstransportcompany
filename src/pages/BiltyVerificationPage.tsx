import React from 'react';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';

export const BiltyVerificationPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] py-6 sm:py-10 bg-slate-50">
      <BiltyTrackingSection condensed={false} />
    </div>
  );
};
