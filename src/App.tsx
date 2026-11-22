import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollReveal, useScrollPause } from './hooks/useMotion';
import { useLanguage, type Language } from './context/LanguageContext';
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

interface RouteErrorBoundaryProps {
  resetKey: string;
  language: Language;
  children: React.ReactNode;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
  retryCount: number;
}

class RouteErrorBoundary extends React.Component<
  RouteErrorBoundaryProps,
  RouteErrorBoundaryState
> {
  declare readonly props: Readonly<RouteErrorBoundaryProps>;
  declare setState: (
    updater:
      | Partial<RouteErrorBoundaryState>
      | ((prevState: RouteErrorBoundaryState) => Partial<RouteErrorBoundaryState>)
  ) => void;

  state: RouteErrorBoundaryState = { hasError: false, retryCount: 0 };

  static getDerivedStateFromError(): Partial<RouteErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: RouteErrorBoundaryProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  handleRetry = () => {
    this.setState((prev) => ({ hasError: false, retryCount: prev.retryCount + 1 }));
  };

  render() {
    if (this.state.hasError) {
      const isUr = this.props.language === 'ur';
      return (
        <div
          dir={isUr ? 'rtl' : 'ltr'}
          className="min-h-[60vh] flex items-center justify-center px-4 py-16 bg-slate-50"
        >
          <div className="max-w-md w-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-center shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              {isUr ? 'صفحہ لوڈ نہیں ہو سکا' : 'Unable to Load Page'}
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              {isUr
                ? 'انٹرنیٹ یا کنکشن میں عارضی مسئلہ پیش آ گیا ہے۔ براہِ کرم دوبارہ کوشش کریں۔'
                : 'A temporary connection issue prevented this page from loading. Please try again.'}
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-5 py-2.5 text-sm transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{isUr ? 'دوبارہ کوشش کریں' : 'Try Again'}</span>
            </button>
          </div>
        </div>
      );
    }

    return <React.Fragment key={this.state.retryCount}>{this.props.children}</React.Fragment>;
  }
}

export default function App({ ssrPages }: AppProps) {
  // Inspect query parameter page=verify to route directly to Bilty Verification Page
  const isVerifyPage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('page') === 'verify';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { language } = useLanguage();
  const location = useLocation();
  const prevPathRef = useRef<string>(location.pathname);
  const [animateRoute, setAnimateRoute] = useState<boolean>(false);

  // Enable scroll reveal for below-the-fold sections after hydration
  useScrollReveal(location.pathname);
  // Pause infinite animations while actively scrolling to eliminate frame drops
  useScrollPause(150);

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
          <RouteErrorBoundary resetKey={location.pathname} language={language}>
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
          </RouteErrorBoundary>
        </div>
      </main>

      {/* 3. Shared Commercial Footer */}
      <Footer />

      {/* 4. Shared Floating Quick Actions */}
      <FloatingActions />
    </div>
  );
}
