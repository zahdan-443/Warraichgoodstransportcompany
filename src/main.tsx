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

// If pre-rendered content exists inside #root, hydrate it safely to preserve HTML and attach event listeners;
// if hydration encounters any unexpected mismatch, cleanly fall back to createRoot.
if (rootElement.hasChildNodes()) {
  try {
    hydrateRoot(rootElement, app, {
      onRecoverableError(error) {
        console.warn('Hydration recoverable warning:', error);
      }
    });
  } catch (err) {
    console.warn('Hydration fallback to client render:', err);
    createRoot(rootElement).render(app);
  }
} else {
  createRoot(rootElement).render(app);
}
