import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

const rootElement = document.getElementById('root')!;

// Determine basename for GitHub Pages deployment (/Warraichgoodstransportcompany)
// or root fallback in local dev / AI Studio preview environments.
const getRouterBasename = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.startsWith('/Warraichgoodstransportcompany')
      ? '/Warraichgoodstransportcompany'
      : '';
  }
  return '/Warraichgoodstransportcompany';
};

const app = (
  <StrictMode>
    <BrowserRouter basename={getRouterBasename()}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);

// If pre-rendered content exists inside #root, hydrate it to preserve HTML and attach event listeners;
// otherwise fall back to standard createRoot rendering (e.g. during development).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
