const GITHUB_PAGES_BASE = '/Warraichgoodstransportcompany';

/**
 * Universal Asset URL Resolver for Warraich Goods Transport Company
 * Ensures images and static assets load reliably across:
 * - Static SSR pre-rendering (./images/... rewritten to ../images/... on sub-routes)
 * - GitHub Pages repository sub-path (/Warraichgoodstransportcompany/...)
 * - Root hosting / Vite preview / Vite dev server (/images/...)
 */
export const getAssetUrl = (rawPath: string): string => {
  if (!rawPath) return '';
  if (
    rawPath.startsWith('http://') ||
    rawPath.startsWith('https://') ||
    rawPath.startsWith('data:')
  ) {
    return rawPath;
  }

  // Strip leading './' or '/'
  const cleanPath = rawPath.replace(/^(\.\/|\/)/, '');

  // 1. Static SSR / pre-rendering (Node.js): import.meta.env is undefined under tsx,
  //    so always emit './...' which scripts/prerender.tsx rewrites to '../...' on sub-routes.
  if (typeof window === 'undefined') {
    return `./${cleanPath}`;
  }

  // Detect base URL from Vite import.meta.env in browser runtime
  let base = '/';
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
      base = import.meta.env.BASE_URL;
    }
  } catch {
    base = '/';
  }

  // 2. Production browser runtime when Vite base is relative './':
  //    resolve reliably regardless of route depth or trailing slash
  if (base === './' || base === '.') {
    const pathname = window.location.pathname;
    if (pathname.startsWith(GITHUB_PAGES_BASE)) {
      return `${GITHUB_PAGES_BASE}/${cleanPath}`;
    }
    return `/${cleanPath}`;
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
};
