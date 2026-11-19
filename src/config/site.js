// Authoritative Site, NAP, Geo & Schema Config for Scott's Electric
// Designed for Google, Bing, Local SEO, AEO (Answer Engine Optimization) & AX (Agent Experience)

export const siteConfig = {
  name: "Scott's Electric",
  legalName: "Scott's Electric LLC",
  url: "https://scottselectric.pro",
  description: "Top-rated Master Electrician serving all 7 cities of Hampton Roads (757). 24/7 Emergency Electrical Repair, 200A Panel Upgrades, EV Chargers & Standby Generators.",
  phoneDisplay: "(757) 536-0478",
  phoneTel: "tel:7575360478",
  phoneE164: "+1-757-536-0478",
  email: "info@scottselectric.pro",
  license: "Virginia Master Electrician - Licensed & Insured VA Class A Contractor",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Check, Financing",
  foundingDate: "2012",
  logo: "https://scottselectric.pro/assets/images/scotts_electric_logo.png",
  logoTransparent: "https://scottselectric.pro/assets/images/scotts_electric_logo_transparent.png",
  heroImage: "https://scottselectric.pro/assets/images/real/panels/img_4022.webp",
  priceRange: "$$",
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  ],
  hqAddress: {
    streetAddress: "2829 Shore Dr",
    addressLocality: "Virginia Beach",
    addressRegion: "VA",
    postalCode: "23451",
    addressCountry: "US"
  },
  hqGeo: {
    latitude: 36.8529,
    longitude: -75.9780
  },
  serviceAreas: [
    {
      name: "Virginia Beach",
      slug: "/virginia-beach-electrician",
      postalCode: "23451",
      zipCodes: ["23451", "23452", "23454", "23455", "23456", "23457", "23462", "23464"],
      geo: { latitude: 36.8529, longitude: -75.9780 },
      neighborhoods: ["Oceanfront", "Town Center", "Kempsville", "Chic's Beach", "Red Mill", "Great Neck", "Princess Anne", "Sandbridge", "Bayside", "Lynnhaven", "Hilltop", "Alanton", "Shadowlawn"]
    },
    {
      name: "Norfolk",
      slug: "/norfolk-electrician",
      postalCode: "23510",
      zipCodes: ["23502", "23503", "23504", "23505", "23507", "23508", "23509", "23510", "23513", "23517", "23518"],
      geo: { latitude: 36.8508, longitude: -76.2859 },
      neighborhoods: ["Ghent", "Downtown Norfolk", "Ocean View", "Larchmont", "Freemason", "Colonial Place", "Wards Corner", "Naval Base Area", "East Beach", "Park Place", "Lafayette"]
    },
    {
      name: "Chesapeake",
      slug: "/chesapeake-electrician",
      postalCode: "23320",
      zipCodes: ["23320", "23321", "23322", "23323", "23324", "23325"],
      geo: { latitude: 36.7682, longitude: -76.2875 },
      neighborhoods: ["Greenbrier", "Great Bridge", "Western Branch", "Deep Creek", "South Norfolk", "Hickory", "Indian River", "Grassfield", "Edinburgh"]
    },
    {
      name: "Newport News",
      slug: "/newport-news-electrician",
      postalCode: "23601",
      zipCodes: ["23601", "23602", "23603", "23605", "23606", "23607", "23608"],
      geo: { latitude: 37.0871, longitude: -76.4730 },
      neighborhoods: ["City Center", "Port Warwick", "Denbigh", "Hilton Village", "Kiln Creek", "Menchville", "Oyster Point", "Hidenwood", "Beaconsdale"]
    },
    {
      name: "Hampton",
      slug: "/hampton-electrician",
      postalCode: "23666",
      zipCodes: ["23661", "23663", "23664", "23666", "23669"],
      geo: { latitude: 37.0299, longitude: -76.3452 },
      neighborhoods: ["Phoebus", "Buckroe Beach", "Fox Hill", "Coliseum Central", "Downtown Hampton", "Wythe", "Langley Area", "Grandview", "Willow Oaks"]
    },
    {
      name: "Portsmouth",
      slug: "/portsmouth-electrician",
      postalCode: "23701",
      zipCodes: ["23701", "23702", "23703", "23704", "23707"],
      geo: { latitude: 36.8354, longitude: -76.2983 },
      neighborhoods: ["Olde Towne", "Churchland", "Port Norfolk", "Cradock", "Park View", "Truxtun", "Westmorland", "Waterview", "Manor"]
    },
    {
      name: "Suffolk",
      slug: "/suffolk-electrician",
      postalCode: "23434",
      zipCodes: ["23434", "23435", "23436", "23437", "23438"],
      geo: { latitude: 36.7282, longitude: -76.5836 },
      neighborhoods: ["Harbour View", "Downtown Suffolk", "Driver", "North Suffolk", "Chuckatuck", "Holland", "Whaleyville", "Kilby", "Crittenden"]
    }
  ],
  services: [
    {
      id: "electrical-panel-upgrades",
      name: "Electrical Panel Upgrades (200A / 400A)",
      url: "https://scottselectric.pro/services/electrical-panel-upgrades",
      description: "Upgrade outdated 100A panels to modern 200A or 400A smart circuit breaker systems to power EV chargers, heat pumps, and modern home loads safely.",
      priceRange: "$1,800 - $3,800"
    },
    {
      id: "ev-charger-installation",
      name: "Level 2 EV Charger Installation",
      url: "https://scottselectric.pro/services/ev-charger-installation",
      description: "Certified Level 2 home & commercial EV charging station installation for Tesla, Rivian, Ford, Chevy, and universal J1772/NACS connectors in 757.",
      priceRange: "$650 - $1,500"
    },
    {
      id: "whole-home-generators",
      name: "Whole-Home Standby Generator Installation",
      url: "https://scottselectric.pro/services/whole-home-generators",
      description: "Automatic standby natural gas and propane backup generator installations with automatic transfer switches for coastal storm resilience.",
      priceRange: "$5,500 - $14,000"
    },
    {
      id: "custom-lighting-installation",
      name: "Custom Recessed & Architectural Lighting",
      url: "https://scottselectric.pro/services/custom-lighting-installation",
      description: "High-efficiency dimmable LED recessed wafer lights, under-cabinet lighting, exterior architectural security illumination, and modern fixtures.",
      priceRange: "$400 - $2,800"
    },
    {
      id: "smart-home-automation",
      name: "Smart Home Electrical Automation",
      url: "https://scottselectric.pro/services/smart-home-automation",
      description: "Smart switches, whole-home energy monitoring, automated panel relays, Lutron/Leviton smart lighting controls, and IoT integrations.",
      priceRange: "$350 - $2,500"
    },
    {
      id: "commercial-electrical",
      name: "Commercial Electrical Contracting",
      url: "https://scottselectric.pro/services/commercial-electrical",
      description: "Commercial 3-phase power distribution, LED retrofits, tenant buildouts, code violation corrections, and dedicated equipment circuits across Hampton Roads.",
      priceRange: "Custom Quote"
    },
    {
      id: "emergency-repair",
      name: "24/7 Emergency Electrical Repair",
      url: "https://scottselectric.pro/services",
      description: "Immediate master electrician dispatch for power outages, burning wire odors, sparking breakers, panel failures, and storm damage across 757.",
      priceRange: "Immediate Dispatch"
    }
  ]
};

// Schema.org Generators
export function getBusinessSchema(cityName = "Hampton Roads") {
  const currentArea = siteConfig.serviceAreas.find(a => a.name.toLowerCase() === cityName.toLowerCase());
  const geo = currentArea ? currentArea.geo : siteConfig.hqGeo;
  const postalCode = currentArea ? currentArea.postalCode : siteConfig.hqAddress.postalCode;
  const city = currentArea ? currentArea.name : siteConfig.hqAddress.addressLocality;

  return {
    "@type": "Electrician",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      "url": siteConfig.logo,
      "caption": "Scott's Electric Logo"
    },
    "image": [
      siteConfig.heroImage,
      siteConfig.logo
    ],
    "telephone": siteConfig.phoneE164,
    "email": siteConfig.email,
    "priceRange": siteConfig.priceRange,
    "currenciesAccepted": siteConfig.currenciesAccepted,
    "paymentAccepted": siteConfig.paymentAccepted,
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": siteConfig.license
    },
    "description": `Virginia Master Electrician serving ${cityName} and all 7 cities of Hampton Roads (757). Specializing in 24/7 emergency repairs, 200A panel upgrades, EV chargers, standby generators, and commercial electrical.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.hqAddress.streetAddress,
      "addressLocality": city,
      "addressRegion": "VA",
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "areaServed": siteConfig.serviceAreas.map(area => ({
      "@type": "City",
      "name": area.name,
      "postalCode": area.zipCodes,
      "sameAs": `https://en.wikipedia.org/wiki/${area.name.replace(/ /g, '_')},_Virginia`
    })).concat([
      {
        "@type": "AdministrativeArea",
        "name": "Hampton Roads",
        "sameAs": "https://en.wikipedia.org/wiki/Hampton_Roads"
      }
    ]),
    "openingHoursSpecification": siteConfig.hours.map(h => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.days,
      "opens": h.opens,
      "closes": h.closes
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hampton Roads Master Electrical Services",
      "itemListElement": siteConfig.services.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": `${s.url}#service`,
          "name": s.name,
          "description": s.description,
          "provider": { "@id": `${siteConfig.url}/#organization` }
        }
      }))
    },
    "knowsAbout": [
      "National Electrical Code (NEC)",
      "200A Service Panel Upgrades",
      "400A High-Capacity Main Panels",
      "Level 2 EV Charger Installations (Tesla Wall Connector, NACS, J1772)",
      "Whole-Home Standby Generators (Generac, Kohler)",
      "Automatic Transfer Switches (ATS)",
      "24/7 Emergency Electrical Troubleshooting",
      "Aluminum Wire Remediation (Copalum / AlumiConn)",
      "Surge Protective Devices (Type 1 & Type 2 SPD)",
      "Commercial 3-Phase Electrical Power Distribution",
      "Subpanel Installations for Workshops & Garages",
      "Swimming Pool & Hot Tub Wiring (NEC Article 680)",
      "Dominion Energy Disconnect and Reconnect Coordination",
      "Hampton Roads Electrical Permitting & Inspections"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": siteConfig.description,
    "publisher": { "@id": `${siteConfig.url}/#organization` },
    "inLanguage": "en-US"
  };
}

export function getWebPageSchema(url, title, description, speakableSelectors = ["h1", "h2", ".speakable", "p"]) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "isPartOf": { "@id": `${siteConfig.url}/#website` },
    "about": { "@id": `${siteConfig.url}/#organization` },
    "inLanguage": "en-US",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableSelectors
    }
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1]?.url || siteConfig.url}#breadcrumb`,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getHowToQuoteSchema() {
  return {
    "@type": "HowTo",
    "@id": `${siteConfig.url}/#howto-quote`,
    "name": "How to Get a Fast Electrical Estimate from Scott's Electric in Hampton Roads",
    "description": "Step-by-step process for homeowners and businesses in Virginia Beach, Norfolk, Chesapeake and 757 to receive a guaranteed electrical quote.",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Select Your Service & City",
        "text": "Choose your electrical service requirement (panel upgrade, EV charger, generator, or emergency repair) and select your city in Hampton Roads.",
        "url": `${siteConfig.url}/#instant-calculator`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Calculate Instant Estimate",
        "text": "Use our interactive electrical estimate calculator for preliminary transparent price guidance.",
        "url": `${siteConfig.url}/#instant-calculator`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Confirm with Master Electrician",
        "text": "Submit your request or call (757) 536-0478 for immediate 24/7 dispatch confirmation and on-site scheduling.",
        "url": `${siteConfig.url}/contact`
      }
    ]
  };
}
