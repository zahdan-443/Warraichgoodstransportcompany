import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useMotion';

import { HomePage } from './pages/HomePage';
import {
  LazyFleetPage,
  LazyServicesPage,
  LazyBookingPage,
  LazyServiceAreasPage,
  LazyFaqPage,
  LazyAboutPage,
  LazyBiltyVerificationPage,
} from './routes';

export interface SsrPagesMap {
  '/fleet': React.ComponentType;
  '/services': React.ComponentType;
  '/booking': React.ComponentType;
  '/service-areas': React.ComponentType;
  '/faq': React.ComponentType;
  '/about': React.ComponentType;
  '/verify': React.ComponentType;
}

interface AppProps {
  ssrPages?: SsrPagesMap;
}

export default function App({ ssrPages }: AppProps) {
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

  const FleetComp = ssrPages?.['/fleet'] ?? LazyFleetPage.Component;
  const ServicesComp = ssrPages?.['/services'] ?? LazyServicesPage.Component;
  const BookingComp = ssrPages?.['/booking'] ?? LazyBookingPage.Component;
  const ServiceAreasComp = ssrPages?.['/service-areas'] ?? LazyServiceAreasPage.Component;
  const FaqComp = ssrPages?.['/faq'] ?? LazyFaqPage.Component;
  const AboutComp = ssrPages?.['/about'] ?? LazyAboutPage.Component;
  const VerifyComp = ssrPages?.['/verify'] ?? LazyBiltyVerificationPage.Component;

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
          <Suspense fallback={<div className="min-h-[60vh] bg-slate-50" />}>
            <Routes>
              <Route path="/" element={isVerifyPage ? <VerifyComp /> : <HomePage />} />
              <Route path="/fleet" element={<FleetComp />} />
              <Route path="/services" element={<ServicesComp />} />
              <Route path="/booking" element={<BookingComp />} />
              <Route path="/service-areas" element={<ServiceAreasComp />} />
              <Route path="/faq" element={<FaqComp />} />
              <Route path="/about" element={<AboutComp />} />
              <Route path="/verify" element={<VerifyComp />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </main>

      {/* 3. Shared Commercial Footer */}
      <Footer />

      {/* 4. Shared Floating Quick Actions */}
      <FloatingActions />
    </div>
  );
}
