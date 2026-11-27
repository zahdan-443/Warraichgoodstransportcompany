import {
  COMPANY_INFO,
  FLEET_DATA,
  GOOGLE_MAPS_URL,
  GOOGLE_REVIEW_URL,
  MASTER_CITIES,
  OFFICIAL_SAME_AS_URLS,
} from './companyData';
import { CORRIDOR_BY_PATH } from './corridorsData';
import { MAIN_FAQS } from './faqData';
import { VERIFIED_BUSINESS_RATING, VERIFIED_CUSTOMER_REVIEWS } from './reviewsData';
import { BASE_SITE_URL, RouteSeoEntry, SEO_METADATA_MAP } from './seoMetadata';

export interface SchemaFaqInput {
  q: string;
  a: string;
}

export interface SchemaBreadcrumbInput {
  name: string;
  item: string;
}

export interface BuildSchemaOptions {
  path: string;
  language?: 'en' | 'ur';
  seo?: RouteSeoEntry;
  breadcrumbs?: SchemaBreadcrumbInput[];
  faqs?: SchemaFaqInput[];
}

export function getDefaultBreadcrumbs(
  normalizedPath: string,
  language: 'en' | 'ur' = 'en'
): SchemaBreadcrumbInput[] {
  const isUr = language === 'ur';
  const homeCrumb: SchemaBreadcrumbInput = {
    name: isUr ? 'مرکزی صفحہ' : 'Home',
    item: `${BASE_SITE_URL}/`,
  };

  if (normalizedPath === '/') {
    return [
      homeCrumb,
      { name: isUr ? 'ہماری گاڑیاں' : 'Our Trucks', item: `${BASE_SITE_URL}/fleet/` },
      { name: isUr ? 'سروسز' : 'Services', item: `${BASE_SITE_URL}/services/` },
      { name: isUr ? 'کرایہ و بکنگ' : 'Rates & Booking', item: `${BASE_SITE_URL}/booking/` },
      { name: isUr ? 'سروس کے علاقے' : 'Service Areas', item: `${BASE_SITE_URL}/service-areas/` },
      { name: isUr ? 'عام سوالات' : 'FAQs', item: `${BASE_SITE_URL}/faq/` },
      { name: isUr ? 'کاروباری تعارف' : 'About Us', item: `${BASE_SITE_URL}/about/` },
    ];
  }

  const corridor = CORRIDOR_BY_PATH[normalizedPath];
  if (corridor) {
    return [
      homeCrumb,
      { name: isUr ? 'سروس کے علاقے' : 'Service Areas', item: `${BASE_SITE_URL}/service-areas/` },
      {
        name: isUr ? corridor.shortLinkLabelUr : corridor.shortLinkLabelEn,
        item: `${BASE_SITE_URL}/${corridor.slug}/`,
      },
    ];
  }

  const labelMap: Record<string, { en: string; ur: string }> = {
    '/fleet': { en: 'Our Trucks', ur: 'ہماری گاڑیاں' },
    '/services': { en: 'Services', ur: 'سروسز' },
    '/booking': { en: 'Rates & Booking', ur: 'کرایہ و بکنگ' },
    '/service-areas': { en: 'Service Areas', ur: 'سروس کے علاقے' },
    '/faq': { en: 'FAQs', ur: 'عام سوالات' },
    '/about': { en: 'About Us', ur: 'کاروباری تعارف' },
    '/verify': { en: 'Bilty Verification', ur: 'بلٹی تصدیق' },
  };

  const entry = labelMap[normalizedPath];
  if (!entry) return [homeCrumb];

  return [
    homeCrumb,
    {
      name: isUr ? entry.ur : entry.en,
      item: `${BASE_SITE_URL}${normalizedPath}/`,
    },
  ];
}

export function getRouteFaqs(
  normalizedPath: string,
  language: 'en' | 'ur' = 'en'
): SchemaFaqInput[] {
  const isUr = language === 'ur';
  if (normalizedPath === '/' || normalizedPath === '/faq') {
    return MAIN_FAQS.map((f) => ({
      q: isUr ? f.questionUr : f.questionEn,
      a: isUr ? f.answerUr : f.answerEn,
    }));
  }

  const corridor = CORRIDOR_BY_PATH[normalizedPath];
  if (corridor) {
    return corridor.faqs.map((f) => ({
      q: isUr ? f.questionUr : f.questionEn,
      a: isUr ? f.answerUr : f.answerEn,
    }));
  }

  return [];
}

export function buildSchemaGraph(options: BuildSchemaOptions): Record<string, unknown> {
  const language = options.language ?? 'en';
  const isUr = language === 'ur';
  const normalizedPath = options.path.replace(/\/+$/, '') || '/';
  const seo = options.seo || SEO_METADATA_MAP[normalizedPath] || SEO_METADATA_MAP['/'];
  const title = isUr ? seo.titleUr : seo.titleEn;
  const description = isUr ? seo.descriptionUr : seo.descriptionEn;
  const breadcrumbs = options.breadcrumbs ?? getDefaultBreadcrumbs(normalizedPath, language);
  const faqs = options.faqs ?? getRouteFaqs(normalizedPath, language);

  const logoId = `${BASE_SITE_URL}/#logo`;
  const websiteId = `${BASE_SITE_URL}/#website`;
  const orgId = `${BASE_SITE_URL}/#organization`;
  const personId = `${BASE_SITE_URL}/#person`;
  const businessId = `${BASE_SITE_URL}/#business`;
  const webPageId = `${seo.canonicalUrl}#webpage`;
  const faqId = `${seo.canonicalUrl}#faq`;
  const fleetListId = `${BASE_SITE_URL}/fleet/#fleet-list`;

  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: COMPANY_INFO.addressEnglish,
    addressLocality: COMPANY_INFO.cityEnglish,
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  };

  const contactPoint = {
    '@type': 'ContactPoint',
    telephone: '+92-300-5370443',
    url: `https://wa.me/${COMPANY_INFO.whatsappNumber}`,
    email: COMPANY_INFO.email,
    contactType: 'customer service',
    areaServed: 'PK',
    availableLanguage: ['Urdu', 'Punjabi', 'English'],
  };

  const areaServed = [
    ...MASTER_CITIES.map((city) => ({ '@type': 'City', name: city.nameEnglish })),
    { '@type': 'Country', name: 'Pakistan' },
  ];

  const sameAs = OFFICIAL_SAME_AS_URLS;

  const logoObject = {
    '@type': 'ImageObject',
    '@id': logoId,
    url: `${BASE_SITE_URL}/images/logo.png`,
    contentUrl: `${BASE_SITE_URL}/images/logo.png`,
    width: 503,
    height: 496,
    caption: 'Warraich Goods Transport Company Official Logo',
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: COMPANY_INFO.nameEnglish,
    alternateName: [
      COMPANY_INFO.nameUrdu,
      'Warraich Goods',
      'Warraich Goods Transport',
      'Warraich Transport',
    ],
    url: `${BASE_SITE_URL}/`,
    publisher: { '@id': orgId },
    about: { '@id': businessId },
    sameAs: [
      COMPANY_INFO.youtubeUrl,
      COMPANY_INFO.facebookUrl,
      COMPANY_INFO.linkedinUrl,
      COMPANY_INFO.trustpilotUrl,
    ],
    inLanguage: ['en', 'ur'],
  };

  const personNode = {
    '@type': 'Person',
    '@id': personId,
    name: COMPANY_INFO.proprietorEnglish,
    alternateName: COMPANY_INFO.proprietorUrdu,
    jobTitle: COMPANY_INFO.proprietorRoleEnglish,
    description:
      'Proprietor and Managing Director of Warraich Goods Transport Company, overseeing nationwide full-truckload freight dispatch, home shifting, and commercial cargo operations from Samundri, Faisalabad since 2008.',
    url: `${BASE_SITE_URL}/about/`,
    image: {
      '@type': 'ImageObject',
      url: `${BASE_SITE_URL}/images/proprietor-zahdan-nasar-warraich.webp`,
      width: 320,
      height: 427,
      caption: 'Zahdan Nasar Warraich - Proprietor & Managing Director',
    },
    telephone: '+92-300-5370443',
    email: COMPANY_INFO.email,
    worksFor: { '@id': orgId },
    affiliation: { '@id': businessId },
    nationality: { '@type': 'Country', name: 'Pakistan' },
    workLocation: {
      '@type': 'Place',
      name: 'Okara Bypass, Near 466 Chowk, Samundri, District Faisalabad, Punjab, Pakistan',
    },
    knowsLanguage: ['Urdu', 'Punjabi', 'English'],
    sameAs: [COMPANY_INFO.youtubeUrl, COMPANY_INFO.facebookUrl],
  };

  const organizationNode = {
    '@type': 'Organization',
    '@id': orgId,
    name: COMPANY_INFO.nameEnglish,
    legalName: COMPANY_INFO.nameEnglish,
    alternateName: [
      COMPANY_INFO.nameUrdu,
      'Warraich Goods',
      'Warraich Goods Transport',
      'Warraich Transport',
    ],
    url: `${BASE_SITE_URL}/`,
    logo: { '@id': logoId },
    image: [
      { '@id': logoId },
      `${BASE_SITE_URL}/images/proprietor-zahdan-nasar-warraich.webp`,
      `${BASE_SITE_URL}/images/corporate-factory-dispatch.webp`,
    ],
    description:
      'Registered Pakistani commercial goods carrier and household shifting company operating nationwide full-truckload (FTL) freight dispatch from Samundri, District Faisalabad since 2008.',
    foundingDate: '2008',
    foundingLocation: {
      '@type': 'Place',
      name: 'Samundri, District Faisalabad, Punjab, Pakistan',
    },
    founder: { '@id': personId },
    taxID: COMPANY_INFO.ntn,
    telephone: '+92-300-5370443',
    email: COMPANY_INFO.email,
    address: postalAddress,
    contactPoint,
    areaServed,
    knowsAbout: [
      'Full Truckload (FTL) Freight Transport',
      'Home Shifting & Household Furniture Relocation',
      'Office Relocation',
      'Agricultural & Mandi Grain Transport',
      'Textile & Industrial Mill Cargo',
      'Computerized Weighbridge & Bilty Documentation',
    ],
    sameAs,
  };

  const businessNode: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'MovingCompany'],
    '@id': businessId,
    additionalType: 'https://en.wikipedia.org/wiki/Freight_transport',
    name: COMPANY_INFO.nameEnglish,
    alternateName: [
      'Warraich Goods',
      COMPANY_INFO.nameUrdu,
      'Warraich Goods Transport Samundri',
    ],
    disambiguatingDescription:
      'Commercial Goods Transport, Full Truckload (FTL) Freight, Home Shifting & Office Relocation Company',
    url: `${BASE_SITE_URL}/`,
    logo: { '@id': logoId },
    image: [
      { '@id': logoId },
      `${BASE_SITE_URL}/images/proprietor-zahdan-nasar-warraich.webp`,
      `${BASE_SITE_URL}/images/fleet-shahzore-pickup.webp`,
      `${BASE_SITE_URL}/images/fleet-mazda-6-wheeler.webp`,
      `${BASE_SITE_URL}/images/fleet-sample-extended.webp`,
      `${BASE_SITE_URL}/images/fleet-bedford-heavy.webp`,
    ],
    sameAs,
    parentOrganization: { '@id': orgId },
    founder: { '@id': personId },
    employee: { '@id': personId },
    description:
      'Warraich Goods Transport Company provides home shifting, office relocation, and inter-city goods transport across Pakistan, serving since 2008. Office at Okara Bypass, Near 466 Chowk, Samundri, District Faisalabad.',
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.0638,
      longitude: 72.9522,
    },
    hasMap: GOOGLE_MAPS_URL,
    telephone: '+92-300-5370443',
    contactPoint,
    email: COMPANY_INFO.email,
    taxID: COMPANY_INFO.ntn,
    priceRange: 'PKR',
    currenciesAccepted: 'PKR',
    paymentAccepted: 'Cash, Bank Transfer',
    openingHours: 'Mo-Su 00:00-23:59',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed,
    potentialAction: [
      {
        '@type': 'ReserveAction',
        name: 'Book a Truck or Request Freight Quote',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_SITE_URL}/booking/`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
      {
        '@type': 'ReviewAction',
        name: 'Leave a Verified Google Review',
        target: GOOGLE_REVIEW_URL,
      },
      {
        '@type': 'ReviewAction',
        name: 'Review on Trustpilot',
        target: COMPANY_INFO.trustpilotUrl,
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Transport & Shifting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shahzore Pickup Transport',
            serviceType: 'Commercial Goods Transport & Light Freight',
            description:
              'Dedicated 1 to 3.5 ton Shahzore pickups for local and inter-city goods transport.',
            provider: { '@id': businessId },
            areaServed: 'Pakistan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mazda 6-Wheeler Truck Transport',
            serviceType: 'Full Truckload (FTL) Freight Transport',
            description:
              '4 to 10 ton Mazda 6-wheeler trucks for factory materials, grains, and commercial cargo.',
            provider: { '@id': businessId },
            areaServed: 'Pakistan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sample Extended Truck Transport',
            serviceType: 'High-Volume Commercial Goods Transport',
            description:
              '8 to 16 ton Sample extended trucks for high-volume freight across Pakistan.',
            provider: { '@id': businessId },
            areaServed: 'Pakistan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bedford Heavy Truck Transport',
            serviceType: 'Heavy Haulage & Long-Distance Freight Transport',
            description:
              '15 to 28+ ton Bedford heavy haulers for industrial machinery, steel, and long-distance cargo.',
            provider: { '@id': businessId },
            areaServed: 'Pakistan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Shifting',
            serviceType: 'Household Moving & Shifting',
            description:
              'Dedicated trucks for local and inter-city household furniture and goods shifting across Pakistan.',
            provider: { '@id': businessId },
            areaServed: 'Pakistan',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office Relocation',
            serviceType: 'Commercial Office Moving',
            description:
              'Dedicated vehicles for office equipment, furniture, and file relocation anywhere in Pakistan.',
            provider: { '@id': businessId },
            areaServed: 'Pakistan',
          },
        },
      ],
    },
  };

  if (VERIFIED_BUSINESS_RATING && VERIFIED_BUSINESS_RATING.reviewCount > 0) {
    businessNode.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: VERIFIED_BUSINESS_RATING.ratingValue,
      reviewCount: VERIFIED_BUSINESS_RATING.reviewCount,
      bestRating: VERIFIED_BUSINESS_RATING.bestRating ?? 5,
      worstRating: VERIFIED_BUSINESS_RATING.worstRating ?? 1,
    };
  }

  if (VERIFIED_CUSTOMER_REVIEWS.length > 0) {
    businessNode.review = VERIFIED_CUSTOMER_REVIEWS.map((rev) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: rev.authorName,
      },
      datePublished: rev.datePublished,
      reviewBody: rev.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rev.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      ...(rev.sourceName
        ? {
            publisher: {
              '@type': 'Organization',
              name: rev.sourceName,
            },
          }
        : {}),
    }));
  }

  const webPageType =
    normalizedPath === '/about'
      ? ['WebPage', 'AboutPage']
      : normalizedPath === '/booking'
      ? ['WebPage', 'ContactPage']
      : normalizedPath === '/fleet' || normalizedPath === '/service-areas'
      ? ['WebPage', 'CollectionPage']
      : 'WebPage';

  const webPageNode: Record<string, unknown> = {
    '@type': webPageType,
    '@id': webPageId,
    url: seo.canonicalUrl,
    name: title,
    description,
    inLanguage: language,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: seo.ogImage,
      width: seo.ogImageWidth,
      height: seo.ogImageHeight,
      caption: seo.ogImageAlt,
    },
    isPartOf: { '@id': websiteId },
    about: { '@id': businessId },
  };

  if (faqs.length > 0) {
    webPageNode.mainEntity = { '@id': faqId };
  } else if (normalizedPath === '/about') {
    webPageNode.mainEntity = { '@id': businessId };
    webPageNode.mentions = [{ '@id': personId }];
  } else if (normalizedPath === '/fleet') {
    webPageNode.mainEntity = { '@id': fleetListId };
  }

  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': `${seo.canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbs.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.item,
    })),
  };

  const graph: Record<string, unknown>[] = [
    logoObject,
    websiteNode,
    personNode,
    organizationNode,
    businessNode,
    webPageNode,
    breadcrumbNode,
  ];

  if (normalizedPath === '/fleet') {
    graph.push({
      '@type': 'ItemList',
      '@id': fleetListId,
      name: isUr ? 'وڑائچ گڈز کمرشل فلیٹ' : 'Warraich Goods Commercial Truck Fleet',
      numberOfItems: FLEET_DATA.length,
      itemListElement: FLEET_DATA.map((truck, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Service',
          name: isUr ? truck.nameUrdu : truck.nameEnglish,
          description: `${isUr ? truck.subtitleUrdu : truck.subtitleEnglish} (${
            isUr ? truck.capacityUrdu : truck.capacity
          }, ${truck.dimensions})`,
          image: `${BASE_SITE_URL}/${truck.image.replace(/^\.\//, '')}`,
          provider: { '@id': businessId },
          areaServed: 'Pakistan',
        },
      })),
    });
  }

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': faqId,
      url: seo.canonicalUrl,
      inLanguage: language,
      isPartOf: { '@id': websiteId },
      about: { '@id': businessId },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
