import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RateCalculatorSection } from '../components/RateCalculatorSection';
import { BookingTrustGuides } from '../components/BookingTrustGuides';
import { BiltyTrackingSection } from '../components/BiltyTrackingSection';

export const BookingPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as {
    originId?: string;
    destinationId?: string;
    vehicleId?: string;
    goodsType?: string;
  } | null;

  const [vehicleOverride, setVehicleOverride] = useState<string | undefined>(state?.vehicleId);

  useEffect(() => {
    if (state?.vehicleId) {
      setVehicleOverride(state.vehicleId);
    }
  }, [state?.vehicleId]);

  const handleSelectVehicle = (vehicleId: string) => {
    setVehicleOverride(vehicleId);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Full Rate Calculator Section with pre-selected route/vehicle/goods from route state */}
      <RateCalculatorSection 
        selectedOriginId={state?.originId}
        selectedDestinationId={state?.destinationId}
        selectedVehicleId={vehicleOverride}
        selectedGoodsType={state?.goodsType}
      />

      {/* Load Fit Selector & Toll/Labor/Payment Transparency */}
      <BookingTrustGuides onSelectVehicle={handleSelectVehicle} bgClass="bg-white" />

      {/* Full Bilty & Consignment Tracking with All Highway Corridors */}
      <BiltyTrackingSection condensed={false} />
    </>
  );
};
