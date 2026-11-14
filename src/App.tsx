import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useMotion';

import { HomePage } from './pages/HomePage';
import { FleetPage } from './pages/FleetPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { BiltyVerificationPage } from './pages/BiltyVerificationPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';

export default function App() {
  // Inspect query parameter page=verify to route directly to Bilty Verification Page
  const isVerifyPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'verify';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const prevPathRef = useRef<string>(location.pathname);
  const [animateRoute, setAnimateRoute] = useState<boolean>(false);

  // Enable scroll reveal for below-the-fold sections after hydration
  useScrollReveal(location.pathname);

  // Apply 200ms route transition only after initial load
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setAnimateRoute(true);
    }
  }, [location.pathname]);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 w-full pb-24 sm:pb-12">
      {/* Scroll restoration on route transition */}
      <ScrollToTop />

      {/* 1. Shared Sticky/Fixed Navigation Header */}
      <Navbar 
        isMenuOpen={isMobileMenuOpen} 
        onToggleMenu={handleToggleMenu} 
        onCloseMenu={handleCloseMenu} 
      />

      {/* 2. Route-Driven Main Content Area (Offset for fixed header) */}
      <main className="flex-1 pt-14 sm:pt-16">
        <div key={location.pathname} className={animateRoute ? 'route-transition' : undefined}>
          <Routes>
            <Route path="/" element={isVerifyPage ? <BiltyVerificationPage /> : <HomePage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/verify" element={<BiltyVerificationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* 3. Shared Commercial Footer */}
      <Footer />

      {/* 4. Shared Floating Quick Actions */}
      <FloatingActions />
    </div>
  );
}
