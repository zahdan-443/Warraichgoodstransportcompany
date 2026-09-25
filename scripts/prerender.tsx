import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import App from '../src/App';
import { LanguageProvider } from '../src/context/LanguageContext';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  const distDir = path.resolve(__dirname, '../dist');
  const indexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`dist/index.html not found at ${indexPath}. Please run vite build first.`);
  }

  console.log('🚀 Starting static pre-rendering for Warraich Goods Transport Company...');

  // Render the full React application to static HTML string
  const appHtml = renderToString(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

  let html = fs.readFileSync(indexPath, 'utf-8');

  // Inject pre-rendered markup into the root div container
  if (html.includes('<div id="root"></div>')) {
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  } else if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);
  } else {
    throw new Error('Target container <div id="root"> not found in dist/index.html');
  }

  fs.writeFileSync(indexPath, html, 'utf-8');

  // Ensure critical server config and SEO files are guaranteed present in dist
  const filesToSync = ['.htaccess', '_headers', 'robots.txt', 'sitemap.xml', 'favicon.ico', 'favicon.png'];
  for (const file of filesToSync) {
    const srcPath = path.resolve(__dirname, `../public/${file}`);
    const destPath = path.join(distDir, file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`   - Synced ${file} to dist/`);
    }
  }

  console.log(`✅ Pre-rendered static HTML successfully written to dist/index.html`);
  console.log(`   - Output size: ${(html.length / 1024).toFixed(2)} KB`);
  console.log(`   - Verified <h1> tag present: ${html.includes('<h1')}`);
  console.log(`   - Verified <h2> tags present: ${html.includes('<h2')}`);
  console.log(`   - Verified internal navigation links: ${html.includes('href="#fleet"')}`);
  console.log(`   - Verified NTN present: ${html.includes('7779394-1')}`);
  console.log(`   - Verified phone present: ${html.includes('0300-5370443')}`);
}

prerender().catch((err) => {
  console.error('❌ Static pre-rendering error:', err);
  process.exit(1);
});
