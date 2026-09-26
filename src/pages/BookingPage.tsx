import React from 'react';
import { useLocation } from 'react-router-dom';
import { RateCalculatorSection } from '../components/RateCalculatorSection';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';

export const BookingPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as { vehicleId?: string; goodsType?: string } | null;

  return (
    <>
      {/* Full Rate Calculator Section with pre-selected vehicle/goods from route state if present */}
      <RateCalculatorSection 
        selectedVehicleId={state?.vehicleId}
        selectedGoodsType={state?.goodsType}
      />

      {/* Full Bilty & Consignment Tracking with All Highway Corridors */}
      <BiltyTrackingSection condensed={false} />
    </>
  );
};
