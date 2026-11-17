import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollReveal, useScrollPause } from './hooks/useMotion';
import { useWarmImages } from './hooks/useWarmImages';
import { MOTION_CONFIG } from './config/motionConfig';

import { HomePage } from './pages/HomePage';
import {
  LazyFleetPage,
  LazyServicesPage,
  LazyBookingPage,
  LazyServiceAreasPage,
  LazyFaqPage,
  LazyAboutPage,
  LazyBiltyVerificationPage,
  preloadAllRoutes,
} from './routes';

const SITE_WARM_IMAGE_URLS = [
  'images/hero-highway-background.webp',
  'images/fleet-shahzore-pickup.png',
  'images/fleet-mazda-6-wheeler.png',
  'images/fleet-sample-extended.png',
  'images/fleet-bedford-heavy.png',
  'images/cargo-agricultural-produce-grains.webp',
  'images/cargo-textile-industrial-supplies.webp',
  'images/cargo-industrial-machinery-supplies.webp',
  'images/cargo-construction-materials-steel.webp',
  'images/cargo-home-shifting-relocation.webp',
  'images/cargo-food-processing-packaging.webp',
  'images/cargo-heavy-machinery-steel.webp',
  'images/safety-waterproof-tarpaulin.webp',
  'images/workflow-motorway-corridor.webp',
  'images/corporate-factory-dispatch.webp',
  'images/trip-1-driver-mobile-number.webp',
  'images/trip-2-whatsapp-live-location.webp',
  'images/trip-3-scale-slip-signed-bilty.webp',
  'images/why-dedicated-trucks-only.webp',
  'images/why-computer-scale-slips.webp',
  'images/why-waterproof-tarpaulins.webp',
  'images/why-24-7-truck-booking.webp',
  'images/proprietor-zahdan-nasar-warraich.png',
  'images/app-driver-dost-preview.webp',
  'images/field-driver-with-vehicle.jpg',
  'images/field-loading-dispatch-bay.jpg',
] as const;

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
  // Pause infinite animations while actively scrolling to eliminate frame drops
  useScrollPause(150);
  // Warm and decode all site images & lazy route chunks once window load + hero LCP finish
  useWarmImages(SITE_WARM_IMAGE_URLS, preloadAllRoutes);

  // Sync CSS-level motion config flags on root <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('no-btn-motion', !MOTION_CONFIG.buttonMicroInteractions);
    root.classList.toggle('no-faq-motion', !MOTION_CONFIG.faqAccordion);
  }, []);

  // Apply 220ms route transition only after initial load
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
        <div key={location.pathname} className={animateRoute && MOTION_CONFIG.pageTransitions ? 'route-transition' : undefined}>
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
