import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import App from '../src/App';
import { LanguageProvider } from '../src/context/LanguageContext';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface RouteConfig {
  path: string;
  outputFile: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumbList: {
    name: string;
    item: string;
  }[];
  expectedText: string;
}

const GITHUB_PAGES_BASENAME = '/Warraichgoodstransportcompany';
const BASE_SITE_URL = 'https://zahdan-443.github.io/Warraichgoodstransportcompany';

const ROUTES: RouteConfig[] = [
  {
    path: '/',
    outputFile: 'index.html',
    title: 'Warraich Goods Transport Company | Nationwide Goods Transport & Shifting',
    description: 'Warraich Goods Transport Company offers trusted home shifting, office relocation, and local/inter-city goods transport services across Pakistan. 24/7 Booking: 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/`,
    ogTitle: 'Warraich Goods Transport Company | Nationwide Goods Transport & Shifting',
    ogDescription: 'Warraich Goods Transport Company offers trusted home shifting, office relocation, and local/inter-city goods transport services across Pakistan. 24/7 Booking: 0300-5370443.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Commercial Truck Fleet (گاڑیوں کا فلیٹ)', item: `${BASE_SITE_URL}/fleet/` },
      { name: 'Services & Safety (سروسز و قانونی ساکھ)', item: `${BASE_SITE_URL}/services/` },
      { name: 'Freight Calculator & Tracking (کرایہ و ٹریکنگ)', item: `${BASE_SITE_URL}/booking/` },
      { name: 'FAQs & Reviews (عام سوالات و جائزے)', item: `${BASE_SITE_URL}/faq/` },
      { name: 'About Us & Profile Card (کاروباری تعارف)', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Warraich',
  },
  {
    path: '/fleet',
    outputFile: 'fleet/index.html',
    title: 'Commercial Fleet: Mazda, Shehzore & Heavy Haulers | Warraich Goods',
    description: 'Versatile fleet for home shifting, office relocation, and commercial load delivery across Pakistan. Careful handling and affordable rates.',
    canonicalUrl: `${BASE_SITE_URL}/fleet/`,
    ogTitle: 'Commercial Fleet: Mazda, Shehzore & Heavy Haulers | Warraich Goods',
    ogDescription: 'Versatile fleet for home shifting, office relocation, and commercial load delivery across Pakistan. Careful handling and affordable rates.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Commercial Truck Fleet (گاڑیوں کا فلیٹ)', item: `${BASE_SITE_URL}/fleet/` },
    ],
    expectedText: 'Shehzore',
  },
  {
    path: '/services',
    outputFile: 'services/index.html',
    title: 'Transport Services, Cargo Safety & Corporate Credentials | Warraich Goods',
    description: 'Warraich Goods nationwide transport, waterproof tarpaulin safety, FBR NTN credentials (7779394-1), & corporate freight solutions.',
    canonicalUrl: `${BASE_SITE_URL}/services/`,
    ogTitle: 'Transport Services, Cargo Safety & Corporate Credentials | Warraich Goods',
    ogDescription: 'Warraich Goods nationwide transport, waterproof tarpaulin safety, FBR NTN credentials (7779394-1), & corporate freight solutions.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Services & Safety (سروسز و قانونی ساکھ)', item: `${BASE_SITE_URL}/services/` },
    ],
    expectedText: '7779394-1',
  },
  {
    path: '/booking',
    outputFile: 'booking/index.html',
    title: 'Freight Rate Calculator & Vehicle Booking | Warraich Goods',
    description: 'Calculate instant freight rates for home shifting, office relocation, and commercial goods delivery across Pakistan. WhatsApp booking 24/7.',
    canonicalUrl: `${BASE_SITE_URL}/booking/`,
    ogTitle: 'Freight Rate Calculator & Vehicle Booking | Warraich Goods',
    ogDescription: 'Calculate instant freight rates for home shifting, office relocation, and commercial goods delivery across Pakistan. WhatsApp booking 24/7.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Freight Calculator & Tracking (کرایہ و ٹریکنگ)', item: `${BASE_SITE_URL}/booking/` },
    ],
    expectedText: '0300-5370443',
  },
  {
    path: '/faq',
    outputFile: 'faq/index.html',
    title: 'FAQs & Client Information | Warraich Goods Transport Company',
    description: 'Frequently asked questions on truck booking, home shifting, office relocation, weighbridge slips, and payment terms.',
    canonicalUrl: `${BASE_SITE_URL}/faq/`,
    ogTitle: 'Frequently Asked Questions (FAQs) | Warraich Goods Transport',
    ogDescription: 'Frequently asked questions on truck booking, home shifting, office relocation, weighbridge slips, and payment terms.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'FAQs & Reviews (عام سوالات و جائزے)', item: `${BASE_SITE_URL}/faq/` },
    ],
    expectedText: '0300-5370443',
  },
  {
    path: '/about',
    outputFile: 'about/index.html',
    title: 'About Us & Verified Business Profile | Warraich Goods Transport',
    description: 'Official profile of Warraich Goods Transport Company. Proprietor Zahdan Nasar Warraich. FBR NTN registered 24/7 freight logistics.',
    canonicalUrl: `${BASE_SITE_URL}/about/`,
    ogTitle: 'About Us & Verified Business Profile | Warraich Goods Transport',
    ogDescription: 'Official profile of Warraich Goods Transport Company. Proprietor Zahdan Nasar Warraich. FBR NTN registered 24/7 freight logistics.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'About Us & Profile Card (کاروباری تعارف)', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Zahdan Nasar Warraich',
  },
  {
    path: '/verify',
    outputFile: 'verify/index.html',
    title: 'Online Bilty Verification & Tracking | Warraich Goods Transport',
    description: 'Verify official Warraich Goods Transport bilty records online. Scan QR code or enter bilty number for instant read-only verification.',
    canonicalUrl: `${BASE_SITE_URL}/verify/`,
    ogTitle: 'Online Bilty Verification & Tracking | Warraich Goods Transport',
    ogDescription: 'Verify official Warraich Goods Transport bilty records online. Scan QR code or enter bilty number for instant read-only verification.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Bilty Verification (تصدیق بلٹی)', item: `${BASE_SITE_URL}/verify/` },
    ],
    expectedText: '0300-5370443',
  },
];

async function prerender() {
  const distDir = path.resolve(__dirname, '../dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Please run vite build first.`);
  }

  // Load the built template HTML
  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  console.log('🚀 Starting multi-page static pre-rendering for Warraich Goods Transport Company...');

  for (const route of ROUTES) {
    const isSubfolder = route.path !== '/';
    const targetFilePath = path.join(distDir, route.outputFile);
    const targetDir = path.dirname(targetFilePath);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Full location inside StaticRouter with GitHub Pages basename
    const routerLocation = `${GITHUB_PAGES_BASENAME}${route.path === '/' ? '' : route.path}`;

    // Render the React application for this specific route
    const appHtml = renderToString(
      <StaticRouter basename={GITHUB_PAGES_BASENAME} location={routerLocation}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StaticRouter>
    );

    let pageHtml = templateHtml;

    // 1. Inject rendered component markup into the root div
    if (pageHtml.includes('<div id="root"></div>')) {
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    } else if (pageHtml.includes('<div id="root">')) {
      pageHtml = pageHtml.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);
    } else {
      throw new Error(`Target container <div id="root"> not found for route ${route.path}`);
    }

    // 2. Replace Page Title
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);

    // 3. Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 4. Replace Canonical Link
    pageHtml = pageHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonicalUrl}" />`
    );

    // 5. Replace Open Graph Tags
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:title" content="${route.ogTitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:description" content="${route.ogDescription}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonicalUrl}" />`
    );

    // 6. Replace Twitter Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${route.ogTitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${route.ogDescription}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:url" content="${route.canonicalUrl}" />`
    );

    // 7. Inject Route-Specific BreadcrumbList JSON-LD
    const breadcrumbJson = JSON.stringify(
      {
        '@type': 'BreadcrumbList',
        itemListElement: route.breadcrumbList.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: item.item,
        })),
      },
      null,
      2
    );

    pageHtml = pageHtml.replace(
      /\{\s*"@type":\s*"BreadcrumbList"[\s\S]*?itemListElement":\s*\[[\s\S]*?\]\s*\}/,
      breadcrumbJson
    );

    // 8. Fix relative paths for subfolder routes (e.g. dist/fleet/index.html needs ../assets/)
    if (isSubfolder) {
      pageHtml = pageHtml.replace(/href="\.\/assets\//g, 'href="../assets/');
      pageHtml = pageHtml.replace(/src="\.\/assets\//g, 'src="../assets/');
      pageHtml = pageHtml.replace(/href="\.\/fonts\//g, 'href="../fonts/');
      pageHtml = pageHtml.replace(/src="\.\/fonts\//g, 'src="../fonts/');
      pageHtml = pageHtml.replace(/href="\.\/favicon/g, 'href="../favicon');
      pageHtml = pageHtml.replace(/href="\.\/images\//g, 'href="../images/');
      pageHtml = pageHtml.replace(/src="\.\/images\//g, 'src="../images/');
    }

    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');

    console.log(`✅ Pre-rendered route [${route.path}] -> ${route.outputFile}`);
    console.log(`   - Title: "${route.title}"`);
    console.log(`   - Size: ${(pageHtml.length / 1024).toFixed(2)} KB`);
    console.log(`   - Verified content present: ${pageHtml.includes(route.expectedText)}`);
  }

  // Also create a 404.html fallback for GitHub Pages SPA client-side routing
  const notFoundPath = path.join(distDir, '404.html');
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
  console.log(`   - Created dist/404.html for GitHub Pages SPA fallback`);

  // Ensure fonts folder is synced to dist/fonts and dist/assets/fonts
  const publicFontsDir = path.resolve(__dirname, '../public/fonts');
  const distFontsDir = path.join(distDir, 'fonts');
  const distAssetsFontsDir = path.join(distDir, 'assets', 'fonts');

  if (fs.existsSync(publicFontsDir)) {
    fs.mkdirSync(distFontsDir, { recursive: true });
    fs.mkdirSync(distAssetsFontsDir, { recursive: true });
    const fontFiles = fs.readdirSync(publicFontsDir);
    for (const fontFile of fontFiles) {
      const srcFont = path.join(publicFontsDir, fontFile);
      fs.copyFileSync(srcFont, path.join(distFontsDir, fontFile));
      fs.copyFileSync(srcFont, path.join(distAssetsFontsDir, fontFile));
      console.log(`   - Synced font ${fontFile} to dist/fonts/ and dist/assets/fonts/`);
    }
  }

  // Ensure critical server config and SEO files are guaranteed present in dist
  const filesToSync = ['.htaccess', '_headers', 'robots.txt', 'sitemap.xml', 'sitemap.txt', 'favicon.ico', 'favicon.png'];
  for (const file of filesToSync) {
    const srcPath = path.resolve(__dirname, `../public/${file}`);
    const destPath = path.join(distDir, file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`   - Synced ${file} to dist/`);
    }
  }

  console.log('🎉 All 6 routes successfully prerendered into distinct static HTML pages!');
}

prerender().catch((err) => {
  console.error('❌ Static pre-rendering error:', err);
  process.exit(1);
});
