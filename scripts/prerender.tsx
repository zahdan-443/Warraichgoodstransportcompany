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
    title: 'Warraich Goods Transport Company | Goods Transport & Shifting in Pakistan',
    description: 'Warraich Goods Transport Company offers home shifting, office relocation, and goods transport across Pakistan. Call 0300-5370443 for truck booking.',
    canonicalUrl: `${BASE_SITE_URL}/`,
    ogTitle: 'Warraich Goods Transport Company | Goods Transport & Shifting in Pakistan',
    ogDescription: 'Warraich Goods Transport Company offers home shifting, office relocation, and goods transport across Pakistan. Call 0300-5370443 for truck booking.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Our Trucks', item: `${BASE_SITE_URL}/fleet/` },
      { name: 'Services', item: `${BASE_SITE_URL}/services/` },
      { name: 'Rates & Booking', item: `${BASE_SITE_URL}/booking/` },
      { name: 'FAQs', item: `${BASE_SITE_URL}/faq/` },
      { name: 'About Us', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Warraich Goods',
  },
  {
    path: '/fleet',
    outputFile: 'fleet/index.html',
    title: 'Our Trucks - Mazda, Shahzore & Heavy Haulers | Warraich Goods',
    description: 'Shahzore pickups, Mazda trucks, and heavy haulers for home shifting and commercial transport across Pakistan. Call 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/fleet/`,
    ogTitle: 'Our Trucks - Mazda, Shahzore & Heavy Haulers | Warraich Goods',
    ogDescription: 'Shahzore pickups, Mazda trucks, and heavy haulers for home shifting and commercial transport across Pakistan. Call 0300-5370443.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Our Trucks', item: `${BASE_SITE_URL}/fleet/` },
    ],
    expectedText: 'Shahzore',
  },
  {
    path: '/services',
    outputFile: 'services/index.html',
    title: 'Goods Transport & Shifting Services | Warraich Goods',
    description: 'Dedicated truck transport, home shifting, and office moving services from Samundri to all cities in Pakistan. NTN 7779394-1.',
    canonicalUrl: `${BASE_SITE_URL}/services/`,
    ogTitle: 'Goods Transport & Shifting Services | Warraich Goods',
    ogDescription: 'Dedicated truck transport, home shifting, and office moving services from Samundri to all cities in Pakistan. NTN 7779394-1.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Services', item: `${BASE_SITE_URL}/services/` },
    ],
    expectedText: '7779394-1',
  },
  {
    path: '/booking',
    outputFile: 'booking/index.html',
    title: 'Truck Booking & Rate Inquiry | Warraich Goods',
    description: 'Get freight rates and book a truck for home shifting or goods delivery across Pakistan via WhatsApp or phone at 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/booking/`,
    ogTitle: 'Truck Booking & Rate Inquiry | Warraich Goods',
    ogDescription: 'Get freight rates and book a truck for home shifting or goods delivery across Pakistan via WhatsApp or phone at 0300-5370443.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Rates & Booking', item: `${BASE_SITE_URL}/booking/` },
    ],
    expectedText: '0300-5370443',
  },
  {
    path: '/faq',
    outputFile: 'faq/index.html',
    title: 'Frequently Asked Questions | Warraich Goods Transport',
    description: 'Answers to common questions about truck booking, freight charges, bilty receipts, and goods transport across Pakistan.',
    canonicalUrl: `${BASE_SITE_URL}/faq/`,
    ogTitle: 'Frequently Asked Questions | Warraich Goods Transport',
    ogDescription: 'Answers to common questions about truck booking, freight charges, bilty receipts, and goods transport across Pakistan.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'FAQs', item: `${BASE_SITE_URL}/faq/` },
    ],
    expectedText: '0300-5370443',
  },
  {
    path: '/about',
    outputFile: 'about/index.html',
    title: 'About Us & Contact Details | Warraich Goods Transport',
    description: 'Warraich Goods Transport Company is a local transport business based in Samundri, Faisalabad, serving routes across Pakistan since 2020.',
    canonicalUrl: `${BASE_SITE_URL}/about/`,
    ogTitle: 'About Us & Contact Details | Warraich Goods Transport',
    ogDescription: 'Warraich Goods Transport Company is a local transport business based in Samundri, Faisalabad, serving routes across Pakistan since 2020.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'About Us', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Zahdan Nasar Warraich',
  },
  {
    path: '/verify',
    outputFile: 'verify/index.html',
    title: 'Bilty Verification | Warraich Goods Transport',
    description: 'Verify your bilty receipt and consignment details online with Warraich Goods Transport Company. Phone: 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/verify/`,
    ogTitle: 'Bilty Verification | Warraich Goods Transport',
    ogDescription: 'Verify your bilty receipt and consignment details online with Warraich Goods Transport Company. Phone: 0300-5370443.',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Bilty Verification', item: `${BASE_SITE_URL}/verify/` },
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
