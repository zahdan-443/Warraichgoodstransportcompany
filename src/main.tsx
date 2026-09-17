import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

const rootElement = document.getElementById('root')!;

const app = (
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

// If pre-rendered content exists inside #root, hydrate it to preserve HTML and attach event listeners;
// otherwise fall back to standard createRoot rendering (e.g. during development).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

