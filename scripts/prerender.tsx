import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import App, { SsrPagesMap } from '../src/App';
import { LanguageProvider } from '../src/context/LanguageContext';
import { MASTER_CITIES } from '../src/data/companyData';
import { CORRIDOR_SEO_PAGES } from '../src/data/corridorsData';
import { FleetPage } from '../src/pages/FleetPage';
import { ServicesPage } from '../src/pages/ServicesPage';
import { BookingPage } from '../src/pages/BookingPage';
import { ServiceAreasPage } from '../src/pages/ServiceAreasPage';
import { FaqPage } from '../src/pages/FaqPage';
import { AboutPage } from '../src/pages/AboutPage';
import { BiltyVerificationPage } from '../src/pages/BiltyVerificationPage';
import { CorridorSeoPage } from '../src/pages/CorridorSeoPage';

const SSR_PAGES: SsrPagesMap = {
  '/fleet': FleetPage,
  '/services': ServicesPage,
  '/booking': BookingPage,
  '/service-areas': ServiceAreasPage,
  '/faq': FaqPage,
  '/about': AboutPage,
  '/verify': BiltyVerificationPage,
  corridor: CorridorSeoPage,
};

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
  ogImage: string;
  ogImageType: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogImageAlt: string;
  breadcrumbList: {
    name: string;
    item: string;
  }[];
  faqs?: { q: string; a: string }[];
  expectedText: string;
}

const SITE_BASENAME = '';
const BASE_SITE_URL = 'https://warraichgoods.eu.cc';

const IMAGE_METADATA_MAP: Record<string, { type: string; width: number; height: number }> = {
  'images/cargo-textile-industrial-supplies.webp': { type: 'image/webp', width: 720, height: 402 },
  'images/why-dedicated-trucks-only.webp': { type: 'image/webp', width: 640, height: 357 },
  'images/fleet-shahzore-pickup.webp': { type: 'image/webp', width: 560, height: 312 },
  'images/fleet-bedford-heavy.webp': { type: 'image/webp', width: 560, height: 312 },
  'images/cargo-home-shifting-relocation.webp': { type: 'image/webp', width: 720, height: 402 },
  'images/cargo-agricultural-produce-grains.webp': { type: 'image/webp', width: 720, height: 402 },
  'images/fleet-sample-extended.webp': { type: 'image/webp', width: 560, height: 312 },
  'images/cargo-heavy-machinery-steel.webp': { type: 'image/webp', width: 600, height: 450 },
};

const MAIN_FAQS: { q: string; a: string }[] = [
  {
    q: 'Do you handle small parcels or loose packages?',
    a: 'No, we only book full dedicated trucks. The entire vehicle is reserved for your goods, so nothing is mixed with other shipments.',
  },
  {
    q: 'How are freight rates calculated?',
    a: 'Rates depend on the travel distance between cities, the truck size you need, and your cargo type. We provide clear rates with no hidden costs.',
  },
  {
    q: 'Do you protect cargo from rain and dust?',
    a: 'Yes. All our trucks carry heavy waterproof tarpaulins and strong ropes to protect your goods in all weather conditions.',
  },
  {
    q: 'How can I book a truck for house shifting or commercial delivery?',
    a: 'Use the Call or WhatsApp buttons in our homepage hero, the floating WhatsApp button, or our Rates & Booking page anytime to share your route and load details for a quick quote.',
  },
  {
    q: 'What types of trucks are in your fleet?',
    a: 'We have Shahzore pickups (1 to 3.5 tons), Mazda 6-wheeler trucks (4 to 10 tons), Sample trucks (8 to 16 tons), and heavy Bedford haulers (15 to 28+ tons).',
  },
  {
    q: 'Do you provide bilty receipts and weighbridge slips?',
    a: 'Yes. Every shipment includes a bilty receipt with consignment details and computerized weighbridge scale slips.',
  },
];

const CORE_ROUTES: RouteConfig[] = [
  {
    path: '/',
    outputFile: 'index.html',
    title: 'Warraich Goods | Samundri & Faisalabad Truck Transport',
    description:
      'Reliable Goods Transport Company in Samundri & Faisalabad. Book Shahzore, Mazda, Sample & Bedford trucks across Pakistan. Call 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/`,
    ogTitle: 'Warraich Goods | Samundri & Faisalabad Truck Transport',
    ogDescription:
      'Reliable Goods Transport Company in Samundri & Faisalabad. Book Shahzore, Mazda, Sample & Bedford trucks across Pakistan. Call 0300-5370443.',
    ogImage: `${BASE_SITE_URL}/images/logo.png`,
    ogImageType: 'image/png',
    ogImageWidth: 512,
    ogImageHeight: 512,
    ogImageAlt: 'Warraich Goods Transport Company Official Logo',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Our Trucks', item: `${BASE_SITE_URL}/fleet/` },
      { name: 'Services', item: `${BASE_SITE_URL}/services/` },
      { name: 'Rates & Booking', item: `${BASE_SITE_URL}/booking/` },
      { name: 'Service Areas', item: `${BASE_SITE_URL}/service-areas/` },
      { name: 'FAQs', item: `${BASE_SITE_URL}/faq/` },
      { name: 'About Us', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Warraich Goods',
  },
  {
    path: '/fleet',
    outputFile: 'fleet/index.html',
    title: 'Mazda, Shahzore & Bedford Truck Booking | Warraich Goods',
    description:
      'Shahzore pickups, Mazda trucks, Sample and Bedford heavy haulers for home shifting and commercial transport across Pakistan. Call 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/fleet/`,
    ogTitle: 'Mazda, Shahzore & Bedford Truck Booking | Warraich Goods',
    ogDescription:
      'Shahzore pickups, Mazda trucks, Sample and Bedford heavy haulers for home shifting and commercial transport across Pakistan. Call 0300-5370443.',
    ogImage: `${BASE_SITE_URL}/images/fleet-mazda-6-wheeler.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 560,
    ogImageHeight: 312,
    ogImageAlt: 'Mazda 6-Wheeler Commercial Freight Truck - Warraich Goods',
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
    description:
      'Dedicated truck transport, home shifting, and office moving services from Samundri & Faisalabad to all cities in Pakistan. NTN 7779394-1.',
    canonicalUrl: `${BASE_SITE_URL}/services/`,
    ogTitle: 'Goods Transport & Shifting Services | Warraich Goods',
    ogDescription:
      'Dedicated truck transport, home shifting, and office moving services from Samundri & Faisalabad to all cities in Pakistan. NTN 7779394-1.',
    ogImage: `${BASE_SITE_URL}/images/corporate-factory-dispatch.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 720,
    ogImageHeight: 402,
    ogImageAlt: 'Commercial Factory Dispatch & Corporate Goods Transport',
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
    description:
      'Get freight rates and book a truck for home shifting or goods delivery across Pakistan via WhatsApp or phone at 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/booking/`,
    ogTitle: 'Truck Booking & Rate Inquiry | Warraich Goods',
    ogDescription:
      'Get freight rates and book a truck for home shifting or goods delivery across Pakistan via WhatsApp or phone at 0300-5370443.',
    ogImage: `${BASE_SITE_URL}/images/workflow-motorway-corridor.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 720,
    ogImageHeight: 402,
    ogImageAlt: 'Motorway Route Freight Booking & Rate Calculator',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Rates & Booking', item: `${BASE_SITE_URL}/booking/` },
    ],
    expectedText: 'Booking Summary',
  },
  {
    path: '/service-areas',
    outputFile: 'service-areas/index.html',
    title: 'Service Areas Across Pakistan | Warraich Goods',
    description:
      'Warraich Goods books trucks from Samundri, District Faisalabad to 42+ cities across Punjab and Pakistan, plus backhaul loads to Samundri.',
    canonicalUrl: `${BASE_SITE_URL}/service-areas/`,
    ogTitle: 'Service Areas Across Pakistan | Warraich Goods',
    ogDescription:
      'Warraich Goods books trucks from Samundri, District Faisalabad to 42+ cities across Punjab and Pakistan, plus backhaul loads to Samundri.',
    ogImage: `${BASE_SITE_URL}/images/hero-highway-background.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 1120,
    ogImageHeight: 625,
    ogImageAlt: 'Warraich Goods Transport Nationwide Highway Service Network',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Service Areas', item: `${BASE_SITE_URL}/service-areas/` },
    ],
    expectedText: 'Service Areas',
  },
  {
    path: '/faq',
    outputFile: 'faq/index.html',
    title: 'Frequently Asked Questions | Warraich Goods',
    description:
      'Answers to common questions about truck booking, freight charges, bilty receipts, and goods transport across Pakistan.',
    canonicalUrl: `${BASE_SITE_URL}/faq/`,
    ogTitle: 'Frequently Asked Questions | Warraich Goods',
    ogDescription:
      'Answers to common questions about truck booking, freight charges, bilty receipts, and goods transport across Pakistan.',
    ogImage: `${BASE_SITE_URL}/images/safety-waterproof-tarpaulin.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 720,
    ogImageHeight: 402,
    ogImageAlt: 'Waterproof Tarpaulin Cargo Protection & FAQs',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'FAQs', item: `${BASE_SITE_URL}/faq/` },
    ],
    faqs: MAIN_FAQS,
    expectedText: 'Frequently Asked Questions',
  },
  {
    path: '/about',
    outputFile: 'about/index.html',
    title: 'About Us & Contact Details | Warraich Goods',
    description:
      'Warraich Goods Transport Company, based at Okara Bypass, Near 466 Chowk, Samundri, Faisalabad, serving routes across Pakistan since 2008.',
    canonicalUrl: `${BASE_SITE_URL}/about/`,
    ogTitle: 'About Us & Contact Details | Warraich Goods',
    ogDescription:
      'Warraich Goods Transport Company, based at Okara Bypass, Near 466 Chowk, Samundri, Faisalabad, serving routes across Pakistan since 2008.',
    ogImage: `${BASE_SITE_URL}/images/proprietor-zahdan-nasar-warraich.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 320,
    ogImageHeight: 427,
    ogImageAlt: 'Zahdan Nasar Warraich - Proprietor of Warraich Goods Transport Company',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'About Us', item: `${BASE_SITE_URL}/about/` },
    ],
    expectedText: 'Zahdan Nasar Warraich',
  },
  {
    path: '/verify',
    outputFile: 'verify/index.html',
    title: 'Bilty Verification | Warraich Goods',
    description:
      'Verify your official bilty receipt and consignment details online with Warraich Goods Transport Company. Phone: 0300-5370443.',
    canonicalUrl: `${BASE_SITE_URL}/verify/`,
    ogTitle: 'Bilty Verification | Warraich Goods',
    ogDescription:
      'Verify your official bilty receipt and consignment details online with Warraich Goods Transport Company. Phone: 0300-5370443.',
    ogImage: `${BASE_SITE_URL}/images/trip-3-scale-slip-signed-bilty.webp`,
    ogImageType: 'image/webp',
    ogImageWidth: 600,
    ogImageHeight: 450,
    ogImageAlt: 'Official Written Bilty & Computer Weighbridge Slip Verification',
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Bilty Verification', item: `${BASE_SITE_URL}/verify/` },
    ],
    expectedText: 'Verify Official Bilty Record',
  },
];

const CORRIDOR_ROUTES: RouteConfig[] = CORRIDOR_SEO_PAGES.map((c) => {
  const imgMeta = IMAGE_METADATA_MAP[c.image] || { type: 'image/webp', width: 720, height: 402 };
  const routeUrl = `${BASE_SITE_URL}/${c.slug}/`;
  return {
    path: c.path,
    outputFile: `${c.slug}/index.html`,
    title: c.metaTitle,
    description: c.metaDescription,
    canonicalUrl: routeUrl,
    ogTitle: c.metaTitle,
    ogDescription: c.metaDescription,
    ogImage: `${BASE_SITE_URL}/${c.image}`,
    ogImageType: imgMeta.type,
    ogImageWidth: imgMeta.width,
    ogImageHeight: imgMeta.height,
    ogImageAlt: c.imageAltEn,
    breadcrumbList: [
      { name: 'Home', item: `${BASE_SITE_URL}/` },
      { name: 'Service Areas', item: `${BASE_SITE_URL}/service-areas/` },
      { name: c.shortLinkLabelEn, item: routeUrl },
    ],
    faqs: c.faqs.map((f) => ({ q: f.questionEn, a: f.answerEn })),
    expectedText: c.expectedText,
  };
});

const ROUTES: RouteConfig[] = [...CORE_ROUTES, ...CORRIDOR_ROUTES];

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function prerender() {
  const distDir = path.resolve(__dirname, '../dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Please run vite build first.`);
  }

  // Load the built template HTML and inline compiled CSS to eliminate render-blocking stylesheet requests
  let templateHtml = fs.readFileSync(templatePath, 'utf-8');
  const stylesheetMatch = templateHtml.match(
    /<link\s+rel=["']stylesheet["'][^>]*href=["'](\.\/assets\/[^"']+\.css)["'][^>]*>/i
  );
  if (stylesheetMatch) {
    const cssRelPath = stylesheetMatch[1].replace(/^\.\//, '');
    const cssAbsPath = path.join(distDir, cssRelPath);
    if (fs.existsSync(cssAbsPath)) {
      const cssContent = fs.readFileSync(cssAbsPath, 'utf-8');
      templateHtml = templateHtml.replace(stylesheetMatch[0], `<style>${cssContent}</style>`);
    }
  }

  console.log('🚀 Starting multi-page static pre-rendering for Warraich Goods Transport Company...');

  for (const route of ROUTES) {
    if (route.title.length > 60) {
      throw new Error(
        `Route ${route.path} title exceeds 60 chars (${route.title.length}): "${route.title}"`
      );
    }
    const isSubfolder = route.path !== '/';
    const targetFilePath = path.join(distDir, route.outputFile);
    const targetDir = path.dirname(targetFilePath);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const routerLocation = route.path;

    // Render the React application for this specific route
    const appHtml = renderToString(
      <StaticRouter basename={SITE_BASENAME} location={routerLocation}>
        <LanguageProvider>
          <App ssrPages={SSR_PAGES} />
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
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(route.title)}</title>`);

    // 3. Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="description" content="${escapeAttr(route.description)}" />`
    );

    // 4. Replace Canonical Link & hreflang
    pageHtml = pageHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<link\s+rel=["']alternate["']\s+hreflang=["']en["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="alternate" hreflang="en" href="${route.canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<link\s+rel=["']alternate["']\s+hreflang=["']x-default["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
      `<link rel="alternate" hreflang="x-default" href="${route.canonicalUrl}" />`
    );

    // 5. Replace Open Graph Tags (including per-route dedicated og:image)
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:title" content="${escapeAttr(route.ogTitle)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:description" content="${escapeAttr(route.ogDescription)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:url" content="${route.canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image" content="${route.ogImage}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image:secure_url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image:secure_url" content="${route.ogImage}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image:type["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image:type" content="${route.ogImageType}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image:width["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image:width" content="${route.ogImageWidth}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image:height["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image:height" content="${route.ogImageHeight}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image:alt["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta property="og:image:alt" content="${escapeAttr(route.ogImageAlt)}" />`
    );

    // 6. Replace Twitter Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeAttr(route.ogTitle)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeAttr(route.ogDescription)}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:url" content="${route.canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:image" content="${route.ogImage}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:image:alt["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
      `<meta name="twitter:image:alt" content="${escapeAttr(route.ogImageAlt)}" />`
    );

    // 7. Inject Route-Specific WebPage (+ primaryImageOfPage), BreadcrumbList, and FAQPage JSON-LD
    pageHtml = pageHtml.replace(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      (_match, jsonContent) => {
        const schemaObj = JSON.parse(jsonContent);
        if (Array.isArray(schemaObj['@graph'])) {
          schemaObj['@graph'] = schemaObj['@graph'].filter(
            (node: any) => node['@type'] !== 'FAQPage' && node['@type'] !== 'WebPage'
          );
          const localBusinessNode = schemaObj['@graph'].find(
            (node: any) => node['@type'] === 'LocalBusiness'
          );
          if (localBusinessNode) {
            localBusinessNode.areaServed = [
              ...MASTER_CITIES.map((city) => ({ '@type': 'City', name: city.nameEnglish })),
              { '@type': 'Country', name: 'Pakistan' },
            ];
          }
          const webPageNode = {
            '@type': 'WebPage',
            '@id': `${route.canonicalUrl}#webpage`,
            url: route.canonicalUrl,
            name: route.title,
            description: route.description,
            inLanguage: 'en',
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: route.ogImage,
              width: route.ogImageWidth,
              height: route.ogImageHeight,
              caption: route.ogImageAlt,
            },
            isPartOf: { '@id': `${BASE_SITE_URL}/#website` },
            about: { '@id': `${BASE_SITE_URL}/#business` },
          };
          schemaObj['@graph'].push(webPageNode);
          const breadcrumbIdx = schemaObj['@graph'].findIndex(
            (node: any) => node['@type'] === 'BreadcrumbList'
          );
          const breadcrumbNode = {
            '@type': 'BreadcrumbList',
            itemListElement: route.breadcrumbList.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: item.name,
              item: item.item,
            })),
          };
          if (breadcrumbIdx >= 0) {
            schemaObj['@graph'][breadcrumbIdx] = breadcrumbNode;
          } else {
            schemaObj['@graph'].push(breadcrumbNode);
          }
          if (route.faqs && route.faqs.length > 0) {
            schemaObj['@graph'].push({
              '@type': 'FAQPage',
              mainEntity: route.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            });
          }
        }
        return `<script type="application/ld+json">\n    ${JSON.stringify(schemaObj, null, 2)}\n    </script>`;
      }
    );

    // 8. Fix relative paths for subfolder routes (dist/*/index.html needs ../) and omit Home-only hero preload
    if (isSubfolder) {
      pageHtml = pageHtml.replace(/<link\s+rel=["']preload["']\s+as=["']image["'][^>]*>/i, '');
      pageHtml = pageHtml.replace(/href="\.\/assets\//g, 'href="../assets/');
      pageHtml = pageHtml.replace(/src="\.\/assets\//g, 'src="../assets/');
      pageHtml = pageHtml.replace(/href="\.\/fonts\//g, 'href="../fonts/');
      pageHtml = pageHtml.replace(/src="\.\/fonts\//g, 'src="../fonts/');
      pageHtml = pageHtml.replace(/href="\.\/(favicon[^"]*|apple-touch-icon\.png)/g, 'href="../$1');
      pageHtml = pageHtml.replace(/(^|["',\s])\.\/images\//g, '$1../images/');
    }

    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');

    console.log(`✅ Pre-rendered route [${route.path}] -> ${route.outputFile}`);
    console.log(`   - Title (${route.title.length}/60): "${route.title}"`);
    console.log(`   - OG Image: ${route.ogImage}`);
    console.log(`   - Size: ${(pageHtml.length / 1024).toFixed(2)} KB`);
    console.log(`   - Verified content present: ${pageHtml.includes(route.expectedText)}`);
  }

  // Also create a 404.html fallback for GitHub Pages SPA client-side routing
  const notFoundPath = path.join(distDir, '404.html');
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
  console.log(`   - Created dist/404.html for GitHub Pages SPA fallback`);

  // Ensure images folder is explicitly synced from public/images to dist/images
  const publicImagesDir = path.resolve(__dirname, '../public/images');
  const distImagesDir = path.join(distDir, 'images');

  if (fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(distImagesDir, { recursive: true });
    const imageFiles = fs.readdirSync(publicImagesDir);
    for (const imageFile of imageFiles) {
      const srcImg = path.join(publicImagesDir, imageFile);
      if (fs.statSync(srcImg).isFile()) {
        fs.copyFileSync(srcImg, path.join(distImagesDir, imageFile));
      }
    }
    console.log(`   - Synced ${imageFiles.length} image files to dist/images/`);
  }

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

  // Ensure critical server config, icons, and SEO files are guaranteed present in dist
  const filesToSync = [
    '.htaccess',
    '_headers',
    'CNAME',
    'robots.txt',
    'sitemap.txt',
    'favicon.ico',
    'favicon.png',
    'favicon-48x48.png',
    'favicon-192x192.png',
    'apple-touch-icon.png',
  ];
  for (const file of filesToSync) {
    const srcPath = path.resolve(__dirname, `../public/${file}`);
    const destPath = path.join(distDir, file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`   - Synced ${file} to dist/`);
    }
  }

  // Copy single canonical root sitemap.xml directly to dist/sitemap.xml
  const rootSitemapSrc = path.resolve(__dirname, '../sitemap.xml');
  if (fs.existsSync(rootSitemapSrc)) {
    fs.copyFileSync(rootSitemapSrc, path.join(distDir, 'sitemap.xml'));
    console.log('   - Synced root sitemap.xml to dist/sitemap.xml');
  }

  console.log(`🎉 All ${ROUTES.length} routes successfully prerendered into distinct static HTML pages!`);
}

prerender().catch((err) => {
  console.error('❌ Static pre-rendering error:', err);
  process.exit(1);
});
