import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BiltyTrackingSection } from './components/BiltyTrackingSection';
import { FleetSection } from './components/FleetSection';
import { CargoCategoriesSection } from './components/CargoCategoriesSection';
import { CorporateCredibilitySection } from './components/CorporateCredibilitySection';
import { FtlWorkflowSection } from './components/FtlWorkflowSection';
import { CargoSafetySection } from './components/CargoSafetySection';
import { RateCalculatorSection } from './components/RateCalculatorSection';
import { DriverAppSection } from './components/DriverAppSection';
import { FaqAndReviewsSection } from './components/FaqAndReviewsSection';
import { BusinessIntroCard } from './components/BusinessIntroCard';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<string>('shehzore');
  const [selectedGoodsTypeForBooking, setSelectedGoodsTypeForBooking] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSelectVehicleForBooking = (vehicleId: string) => {
    setSelectedVehicleForBooking(vehicleId);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryForBooking = (categoryName: string) => {
    setSelectedGoodsTypeForBooking(categoryName);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden w-full pb-16 sm:pb-0">
      
      {/* 1. Single Unified Sticky Header (Logo, Single-Line Business Name & Integrated Controls) */}
      <Navbar 
        isMenuOpen={isMobileMenuOpen} 
        onToggleMenu={handleToggleMenu} 
        onCloseMenu={handleCloseMenu} 
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        
        {/* 2. Hero Section (FTL Focus & Operations Hub) */}
        <HeroSection />

        {/* 3. Online Bilty & Freight Tracking + National Corridors */}
        <BiltyTrackingSection />

        {/* 4. Fleet & Vehicle Services (Shehzore, Mazda, Sample, Bedford) */}
        <FleetSection onSelectVehicleForBooking={handleSelectVehicleForBooking} />

        {/* 5. Cargo Types & Industry Specializations (Agri, Textile, Industrial - FTL) */}
        <CargoCategoriesSection onSelectCategory={handleSelectCategoryForBooking} />

        {/* 6. Corporate Credibility, Tax Compliance (FBR NTN) & Enterprise Vendor Profile */}
        <CorporateCredibilitySection />

        {/* 7. Dedicated FTL Booking Workflow & Non-Stop Transit Advantages */}
        <FtlWorkflowSection />

        {/* 8. 100% Waterproof Tarpaulin & Cargo Safety */}
        <CargoSafetySection />

        {/* 9. Interactive FTL Rate Calculator & WhatsApp Booking Form */}
        <RateCalculatorSection 
          selectedVehicleId={selectedVehicleForBooking} 
          selectedGoodsType={selectedGoodsTypeForBooking}
        />

        {/* 10. Driver & Transport Management Web App Integration */}
        <DriverAppSection />

        {/* 11. FAQs & Commercial Client Information */}
        <FaqAndReviewsSection />

        {/* 12. Official Business Introduction & Verification Directory Card (Single Master Card) */}
        <BusinessIntroCard />
      </main>

      {/* 13. Comprehensive Clean Commercial Footer */}
      <Footer />

      {/* 14. Floating Actions (WhatsApp & Quick Call) */}
      <FloatingActions />

    </div>
  );
}
