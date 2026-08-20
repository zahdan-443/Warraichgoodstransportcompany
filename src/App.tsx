import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FleetSection } from './components/FleetSection';
import { CargoCategoriesSection } from './components/CargoCategoriesSection';
import { FtlWorkflowSection } from './components/FtlWorkflowSection';
import { CargoSafetySection } from './components/CargoSafetySection';
import { RateCalculatorSection } from './components/RateCalculatorSection';
import { BranchesSection } from './components/BranchesSection';
import { DriverAppSection } from './components/DriverAppSection';
import { FaqAndReviewsSection } from './components/FaqAndReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedVehicleForBooking, setSelectedVehicleForBooking] = useState<string>('shehzore');

  const handleSelectVehicleForBooking = (vehicleId: string) => {
    setSelectedVehicleForBooking(vehicleId);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryForBooking = (categoryName: string) => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Top Utility Bar */}
      <TopBar />

      {/* 2. Main Sticky Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        
        {/* 3. Hero Section (FTL Focus) */}
        <HeroSection />

        {/* 4. Fleet & Vehicle Services (Shehzore, Mazda, Sample, Bedford) */}
        <FleetSection onSelectVehicleForBooking={handleSelectVehicleForBooking} />

        {/* 5. Cargo Types & Industry Specializations (Agri, Textile, Industrial - FTL) */}
        <CargoCategoriesSection onSelectCategory={handleSelectCategoryForBooking} />

        {/* 6. Dedicated FTL Booking Workflow & Non-Stop Transit Advantages */}
        <FtlWorkflowSection />

        {/* 7. 100% Waterproof Tarpaulin & Cargo Safety */}
        <CargoSafetySection />

        {/* 8. Interactive FTL Rate Calculator & WhatsApp Booking Form */}
        <RateCalculatorSection selectedVehicleId={selectedVehicleForBooking} />

        {/* 9. About Us & Proprietor (Zahdan Nasar Warraich) */}
        <AboutSection />

        {/* 10. Branches & Google Maps Section (Samundri & Kamalia) */}
        <BranchesSection />

        {/* 11. Driver & Transport Management Web App Integration */}
        <DriverAppSection />

        {/* 12. FAQs & Commercial Client Testimonials (FTL Focus) */}
        <FaqAndReviewsSection />

        {/* 13. Value Pillars, Trust Factors & NTN Registration */}
        <WhyChooseUs />
      </main>

      {/* 14. Comprehensive Clean Commercial Footer */}
      <Footer />

      {/* 15. Floating Actions (Pulsing WhatsApp & Mobile Quick Call) */}
      <FloatingActions />

    </div>
  );
}
