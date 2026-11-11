/**
 * Universal Asset URL Resolver for Warraich Goods Transport Company
 * Ensures images and static assets load with 100% reliability across:
 * - Root home route (/)
 * - Deep sub-routes (/fleet, /services, /booking, /faq, /about, /verify)
 * - GitHub Pages repository sub-path (/Warraichgoodstransportcompany/)
 * - AI Studio preview sandbox environment
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

  // Detect base URL from Vite import.meta.env
  let base = '/';
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) {
      base = import.meta.env.BASE_URL;
    }
  } catch {
    base = '/';
  }

  // In standard browser environment when base is relative './', resolve from root or pathname
  if (base === './' || base === '.') {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.includes('/Warraichgoodstransportcompany/')) {
        base = '/Warraichgoodstransportcompany/';
      } else {
        base = '/';
      }
    } else {
      base = '/';
    }
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
};
