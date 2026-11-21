import React from 'react';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function lazyWithPreload<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  let Loaded: T | null = null;
  let pending: Promise<{ default: T }> | null = null;

  const loadWithRetry = async (retries = 2): Promise<{ default: T }> => {
    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const mod = await factory();
        Loaded = mod.default;
        return mod;
      } catch (err) {
        lastError = err;
        if (attempt < retries) {
          await wait(250 * (attempt + 1));
        }
      }
    }
    throw lastError;
  };

  const preload = () => {
    if (Loaded) {
      return Promise.resolve({ default: Loaded });
    }
    if (!pending) {
      pending = loadWithRetry().catch((err) => {
        pending = null;
        throw err;
      });
    }
    return pending;
  };

  const Lazy = React.lazy(preload);

  const Component: React.FC<React.ComponentProps<T>> = (props) =>
    Loaded ? React.createElement(Loaded, props) : React.createElement(Lazy, props);

  return { Component, preload };
}

export const LazyFleetPage = lazyWithPreload(() =>
  import('./pages/FleetPage').then((m) => ({ default: m.FleetPage }))
);
export const LazyServicesPage = lazyWithPreload(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
export const LazyBookingPage = lazyWithPreload(() =>
  import('./pages/BookingPage').then((m) => ({ default: m.BookingPage }))
);
export const LazyServiceAreasPage = lazyWithPreload(() =>
  import('./pages/ServiceAreasPage').then((m) => ({ default: m.ServiceAreasPage }))
);
export const LazyFaqPage = lazyWithPreload(() =>
  import('./pages/FaqPage').then((m) => ({ default: m.FaqPage }))
);
export const LazyAboutPage = lazyWithPreload(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
export const LazyBiltyVerificationPage = lazyWithPreload(() =>
  import('./pages/BiltyVerificationPage').then((m) => ({ default: m.BiltyVerificationPage }))
);

export async function preloadRouteForLocation(pathname: string, search = ''): Promise<void> {
  try {
    const isVerifyQuery = new URLSearchParams(search).get('page') === 'verify';
    if (isVerifyQuery) {
      await LazyBiltyVerificationPage.preload();
      return;
    }

    const normalized =
      pathname.replace(/^\/Warraichgoodstransportcompany/i, '').replace(/\/+$/, '') || '/';

    switch (normalized) {
      case '/fleet':
        await LazyFleetPage.preload();
        break;
      case '/services':
        await LazyServicesPage.preload();
        break;
      case '/booking':
        await LazyBookingPage.preload();
        break;
      case '/service-areas':
        await LazyServiceAreasPage.preload();
        break;
      case '/faq':
        await LazyFaqPage.preload();
        break;
      case '/about':
        await LazyAboutPage.preload();
        break;
      case '/verify':
        await LazyBiltyVerificationPage.preload();
        break;
      default:
        break;
    }
  } catch {
    // Allow React Suspense + RouteErrorBoundary to handle recovery during navigation
  }
}

let isPreloadingAll = false;

export async function preloadAllRoutes(): Promise<void> {
  if (isPreloadingAll) return;
  isPreloadingAll = true;

  const routes = [
    LazyFleetPage,
    LazyServicesPage,
    LazyBookingPage,
    LazyServiceAreasPage,
    LazyFaqPage,
    LazyAboutPage,
    LazyBiltyVerificationPage,
  ];

  try {
    for (const route of routes) {
      await route.preload().catch(() => {});
      await wait(120);
    }
  } finally {
    isPreloadingAll = false;
  }
}
