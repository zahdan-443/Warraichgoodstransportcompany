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
    title: 'Warraich Goods Transport | Samundri & Kamalia FTL Freight',
    description: 'Warraich Goods Transport Company: Dedicated FTL truck booking & commercial cargo logistics in Samundri (0300-5370443) & Kamalia (0339-5370443). 24/7 nationwide freight service.',
    canonicalUrl: `${BASE_SITE_URL}/`,
    ogTitle: 'Warraich Goods Transport | Samundri & Kamalia FTL Freight',
    ogDescription: 'Warraich Goods Transport Company: Dedicated FTL truck booking & commercial cargo logistics in Samundri (0300-5370443) & Kamalia (0339-5370443). 24/7 nationwide freight service.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Commercial Truck Fleet (گاڑیوں کا فلیٹ)', item: `${BASE_SITE_URL}/fleet/` },
      { name: 'Services & Safety (سروسز و قانونی ساکھ)', item: `${BASE_SITE_URL}/services/` },
      { name: 'Freight Calculator & Tracking (کرایہ و ٹریکنگ)', item: `${BASE_SITE_URL}/booking/` },
      { name: 'FAQs & Reviews (عام سوالات و جائزے)', item: `${BASE_SITE_URL}/faq/` },
      { name: 'About Us & Profile Card (کاروباری تعارف)', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'FTL',
  },
  {
    path: '/fleet',
    outputFile: 'fleet/index.html',
    title: 'Commercial Truck Fleet & Cargo Categories | Warraich Goods Transport',
    description: 'Dedicated commercial trucks in Samundri & Kamalia: Hyundai Shehzore, Mazda 6-wheeler, Sample truck & Bedford heavy trailers for agri, textile & industrial cargo.',
    canonicalUrl: `${BASE_SITE_URL}/fleet/`,
    ogTitle: 'Commercial Truck Fleet & Cargo Specializations | Warraich Goods',
    ogDescription: 'Dedicated commercial trucks in Samundri & Kamalia: Hyundai Shehzore, Mazda 6-wheeler, Sample truck & Bedford heavy trailers for agri, textile & industrial cargo.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Commercial Truck Fleet (گاڑیوں کا فلیٹ)', item: `${BASE_SITE_URL}/fleet/` },
    ],
    expectedText: 'Shehzore',
  },
  {
    path: '/services',
    outputFile: 'services/index.html',
    title: 'FTL Transport Services, Safety & Corporate Credentials | Warraich Goods',
    description: 'Explore Warraich Goods FTL workflow, 100% waterproof tarpaulin protection, FBR NTN tax credentials (7779394-1), and corporate freight solutions from Samundri.',
    canonicalUrl: `${BASE_SITE_URL}/services/`,
    ogTitle: 'FTL Transport Services, Safety & Corporate Credentials | Warraich Goods',
    ogDescription: 'Explore Warraich Goods FTL workflow, 100% waterproof tarpaulin protection, FBR NTN tax credentials (7779394-1), and corporate freight solutions from Samundri.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'Services & Safety (سروسز و قانونی ساکھ)', item: `${BASE_SITE_URL}/services/` },
    ],
    expectedText: '7779394-1',
  },
  {
    path: '/booking',
    outputFile: 'booking/index.html',
    title: 'FTL Freight Rate Calculator & Online Bilty Tracking | Warraich Goods',
    description: 'Calculate transparent FTL freight rates for trucks from Samundri & Kamalia, book via WhatsApp, and track commercial bilty consignments across Pakistan.',
    canonicalUrl: `${BASE_SITE_URL}/booking/`,
    ogTitle: 'FTL Freight Rate Calculator & Online Bilty Tracking | Warraich Goods',
    ogDescription: 'Calculate transparent FTL freight rates for trucks from Samundri & Kamalia, book via WhatsApp, and track commercial bilty consignments across Pakistan.',
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
    description: 'Frequently asked questions about dedicated FTL truck booking, weighbridge scale slips, waterproof tarpaulins, payment terms, and direct driver supervision.',
    canonicalUrl: `${BASE_SITE_URL}/faq/`,
    ogTitle: 'Frequently Asked Questions (FAQs) | Warraich Goods Transport',
    ogDescription: 'Frequently asked questions about dedicated FTL truck booking, weighbridge scale slips, waterproof tarpaulins, payment terms, and direct driver supervision.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'FAQs & Reviews (عام سوالات و جائزے)', item: `${BASE_SITE_URL}/faq/` },
    ],
    expectedText: 'FTL',
  },
  {
    path: '/about',
    outputFile: 'about/index.html',
    title: 'About Us & Verified Business Profile | Warraich Goods Transport',
    description: 'Official profile of Warraich Goods Transport Company. Proprietor Zahdan Nasar Warraich. FBR NTN registered, 24/7 dedicated commercial freight logistics in Pakistan.',
    canonicalUrl: `${BASE_SITE_URL}/about/`,
    ogTitle: 'About Us & Verified Business Profile | Warraich Goods Transport',
    ogDescription: 'Official profile of Warraich Goods Transport Company. Proprietor Zahdan Nasar Warraich. FBR NTN registered, 24/7 dedicated commercial freight logistics in Pakistan.',
    breadcrumbList: [
      { name: 'Home (مرکزی صفحہ)', item: `${BASE_SITE_URL}/` },
      { name: 'About Us & Profile Card (کاروباری تعارف)', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Zahdan Nasar Warraich',
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

  console.log('🎉 All 6 routes successfully prerendered into distinct static HTML pages!');
}

prerender().catch((err) => {
  console.error('❌ Static pre-rendering error:', err);
  process.exit(1);
});
