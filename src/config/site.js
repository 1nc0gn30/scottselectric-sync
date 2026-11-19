// Authoritative Site, NAP, Geo & 2026–2027 Entity Knowledge Graph Config for Scott's Electric LLC
// Engineered for Local SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization) & Voice Search

export const siteConfig = {
  name: "Scott's Electric",
  legalName: "Scott's Electric LLC",
  url: "https://scottselectric.pro",
  description: "Licensed Virginia Master Electrician serving all 7 cities of Hampton Roads (757). 24/7 Emergency Electrical Repair, 200A/400A Panel Upgrades, Level 2 EV Chargers, NEC 680 Pool Wiring, Historic Rewiring & Standby Generators.",
  phoneDisplay: "(757) 536-0478",
  phoneTel: "tel:7575360478",
  phoneE164: "+1-757-536-0478",
  license: "Virginia Master Electrician - Licensed & Insured VA Class A Contractor",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Check, Financing",
  foundingDate: "2012",
  lastUpdated: "2026-11-18",
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
      slug: "/virginia-beach-electrician/",
      postalCode: "23451",
      permitOffice: "City of Virginia Beach Department of Planning & Community Development (Permits & Inspections)",
      zipCodes: ["23451", "23452", "23454", "23455", "23456", "23457", "23462", "23464"],
      geo: { latitude: 36.8529, longitude: -75.9780 },
      neighborhoods: ["Shore Drive", "Oceanfront", "Town Center", "Kempsville", "Chic's Beach", "Red Mill", "Great Neck", "Princess Anne", "Sandbridge", "Bayside", "Lynnhaven", "Hilltop", "Alanton", "Shadowlawn", "Thoroughgood"]
    },
    {
      name: "Norfolk",
      slug: "/norfolk-electrician/",
      postalCode: "23510",
      permitOffice: "City of Norfolk Department of City Planning — Division of Building Safety",
      zipCodes: ["23502", "23503", "23504", "23505", "23507", "23508", "23509", "23510", "23513", "23517", "23518"],
      geo: { latitude: 36.8508, longitude: -76.2859 },
      neighborhoods: ["Ghent", "Downtown Norfolk", "Ocean View", "Larchmont", "Freemason", "Colonial Place", "Wards Corner", "Naval Base Corridor", "East Beach", "Park Place", "Lafayette"]
    },
    {
      name: "Chesapeake",
      slug: "/chesapeake-electrician/",
      postalCode: "23320",
      permitOffice: "City of Chesapeake Department of Development & Permits",
      zipCodes: ["23320", "23321", "23322", "23323", "23324", "23325"],
      geo: { latitude: 36.7682, longitude: -76.2875 },
      neighborhoods: ["Greenbrier", "Great Bridge", "Western Branch", "Deep Creek", "South Norfolk", "Hickory", "Indian River", "Grassfield", "Edinburgh"]
    },
    {
      name: "Newport News",
      slug: "/newport-news-electrician/",
      postalCode: "23601",
      permitOffice: "City of Newport News Department of Codes Compliance",
      zipCodes: ["23601", "23602", "23603", "23605", "23606", "23607", "23608"],
      geo: { latitude: 37.0871, longitude: -76.4730 },
      neighborhoods: ["City Center at Oyster Point", "Port Warwick", "Denbigh", "Hilton Village", "Kiln Creek", "Menchville", "Oyster Point", "Hidenwood", "Beaconsdale"]
    },
    {
      name: "Hampton",
      slug: "/hampton-electrician/",
      postalCode: "23666",
      permitOffice: "City of Hampton Community Development — Building Inspection Division",
      zipCodes: ["23661", "23663", "23664", "23666", "23669"],
      geo: { latitude: 37.0299, longitude: -76.3452 },
      neighborhoods: ["Phoebus", "Buckroe Beach", "Fox Hill", "Coliseum Central", "Downtown Hampton", "Wythe", "Langley Area", "Grandview", "Willow Oaks"]
    },
    {
      name: "Portsmouth",
      slug: "/portsmouth-electrician/",
      postalCode: "23701",
      permitOffice: "City of Portsmouth Department of Permits & Inspections",
      zipCodes: ["23701", "23702", "23703", "23704", "23707"],
      geo: { latitude: 36.8354, longitude: -76.2983 },
      neighborhoods: ["Olde Towne", "Churchland", "Port Norfolk", "Cradock", "Park View", "Truxtun", "Westmorland", "Waterview", "Manor"]
    },
    {
      name: "Suffolk",
      slug: "/suffolk-electrician/",
      postalCode: "23434",
      permitOffice: "City of Suffolk Division of Community Development & Inspections",
      zipCodes: ["23434", "23435", "23436", "23437", "23438"],
      geo: { latitude: 36.7282, longitude: -76.5836 },
      neighborhoods: ["Harbour View", "Downtown Suffolk", "Driver", "North Suffolk", "Chuckatuck", "Holland", "Whaleyville", "Kilby", "Crittenden"]
    }
  ],
  services: [
    {
      id: "emergency-electrician-757",
      name: "24/7 Emergency Electrician & Troubleshooting",
      url: "https://scottselectric.pro/services/emergency-electrician-757/",
      description: "Immediate 24/7 Master Electrician dispatch (<45 min avg) across all 7 cities of 757 for burning odors, arcing breakers, partial power loss, storm-damaged masts, and main breaker failures.",
      priceRange: "24/7 Immediate Dispatch"
    },
    {
      id: "electrical-panel-upgrades",
      name: "200A & 400A Electrical Panel Upgrades",
      url: "https://scottselectric.pro/services/electrical-panel-upgrades/",
      description: "Same-day replacement of overloaded 100A boxes, split-bus panels, and hazardous Federal Pacific/Zinsco panels with modern 200A or 400A solid-copper-busbar load centers and Dominion Energy coordination.",
      priceRange: "$1,800 - $3,800"
    },
    {
      id: "ev-charger-installation",
      name: "Level 2 EV Charger Installation (240V)",
      url: "https://scottselectric.pro/services/ev-charger-installation/",
      description: "NEC Article 625 certified 40A–60A dedicated 240V circuits for Tesla Wall Connector (NACS), Rivian, Ford, ChargePoint, and universal J1772 charging stations.",
      priceRange: "$650 - $1,500"
    },
    {
      id: "whole-home-generators",
      name: "Whole-Home Standby Generators & Interlocks",
      url: "https://scottselectric.pro/services/whole-home-generators/",
      description: "Automatic natural gas and propane standby backup generators (Generac, Kohler) with 200A Automatic Transfer Switches (ATS) and UL-listed brass mechanical breaker interlocks.",
      priceRange: "$5,500 - $14,000"
    },
    {
      id: "pool-hot-tub-wiring",
      name: "Swimming Pool, Hot Tub & Saltwater Pad Wiring (NEC 680)",
      url: "https://scottselectric.pro/services/pool-hot-tub-wiring/",
      description: "NEC Article 680 Hayward/Pentair pool automation subpanels, 8-relay load centers, salt-chlorinator transformers, 50A/60A GFCI spa disconnects, and 8-AWG solid copper equipotential bonding grids.",
      priceRange: "$850 - $2,900"
    },
    {
      id: "historic-home-rewiring",
      name: "Historic Home Rewiring, Aluminum Remediation & Crawlspace Wiring",
      url: "https://scottselectric.pro/services/historic-home-rewiring/",
      description: "Code-compliant rewiring of knob-and-tube and ungrounded 2-wire homes, 1960s/70s aluminum branch-wire AlumiConn/Copalum remediation, and encapsulated crawlspace NEC 334.30 joist raceways.",
      priceRange: "$1,200 - $12,500+"
    },
    {
      id: "meter-base-weatherhead-repair",
      name: "Electric Meter Base, Service Mast & Weatherhead Replacement",
      url: "https://scottselectric.pro/services/meter-base-weatherhead-repair/",
      description: "Replacement of salt-corroded coastal 200A/400A ringless meter sockets, multi-gang horizontal meter troughs, storm-pulled service masts, and same-day Dominion Energy white-card reconnects.",
      priceRange: "$950 - $3,200"
    },
    {
      id: "ceiling-fan-chandelier-installation",
      name: "2-Story Chandeliers, Vaulted Ceiling Fans & Exhaust Fans",
      url: "https://scottselectric.pro/services/ceiling-fan-chandelier-installation/",
      description: "High-reach scaffolding and structural fan/fixture-rated ceiling boxes for 2-story foyer chandeliers, sloped vaulted downrod fans, ceiling medallions, and bathroom exhaust luminaires.",
      priceRange: "$250 - $1,800"
    },
    {
      id: "subpanel-workshop-wiring",
      name: "Detached Garage, Workshop & Exterior Subpanels + Trenching",
      url: "https://scottselectric.pro/services/subpanel-workshop-wiring/",
      description: "60A–125A detached shop, garage, and barn subpanels with underground Schedule 40/80 PVC feeder trenching, NEC 250.32 ground rods, and 240V welder, compressor, and RV 50A outlets.",
      priceRange: "$950 - $3,600"
    },
    {
      id: "whole-home-surge-protection",
      name: "Whole-Home Surge Protection (Type 1 & Type 2 SPD)",
      url: "https://scottselectric.pro/services/whole-home-surge-protection/",
      description: "NEC 230.67 panel-integrated and meter-mounted Surge Protective Devices shielding variable-speed HVAC inverters, EV chargers, refrigerators, and electronics from coastal lightning and grid spikes.",
      priceRange: "$395 - $850"
    },
    {
      id: "electrical-code-inspections",
      name: "Electrical Safety Inspections, Home-Sale Repairs & FPE Audits",
      url: "https://scottselectric.pro/services/electrical-code-inspections/",
      description: "Master Electrician diagnostic audits, real-estate closing PICRA repair sign-offs, 4-point insurance electrical inspections, and Federal Pacific/Zinsco/split-bus hazard remediation.",
      priceRange: "$199 - $1,500"
    },
    {
      id: "custom-lighting-installation",
      name: "Recessed LED Wafer, Landscape & Dusk Security Lighting",
      url: "https://scottselectric.pro/services/custom-lighting-installation/",
      description: "Canless IC-rated LED recessed ceiling grids, dusk-to-dawn photocell PAR38 security floodlights, craftsman exterior lanterns, and coastal palm/architectural landscape uplighting.",
      priceRange: "$400 - $2,800"
    },
    {
      id: "smart-home-automation",
      name: "Smart Switches, Multi-Gang Dimmers & Energy Monitoring",
      url: "https://scottselectric.pro/services/smart-home-automation/",
      description: "Lutron Caséta and Decora Smart multi-gang dimmer banks, NEC 404.2(C) neutral retrofits, and Span/Emporia CT-clamp circuit energy monitoring.",
      priceRange: "$350 - $2,500"
    },
    {
      id: "commercial-electrical",
      name: "3-Phase Commercial Electrical, Switchgear & Tenant Buildouts",
      url: "https://scottselectric.pro/services/commercial-electrical/",
      description: "120/208V and 277/480V 3-phase Square D I-Line & NQ bolt-on panelboards, NEMA 3R fusible disconnects, parallel EMT offsets, multi-family meter banks, and commercial buildouts.",
      priceRange: "$750 - $15,000+"
    }
  ],
  guides: [
    {
      title: "2026–2027 Hampton Roads Electrical Cost & Pricing Guide",
      url: "https://scottselectric.pro/guides/757-electrical-cost-guide/",
      slug: "/guides/757-electrical-cost-guide/"
    },
    {
      title: "757 Municipal Electrical Permits & Dominion Energy Disconnect Guide",
      url: "https://scottselectric.pro/guides/757-electrical-permits-dominion-energy/",
      slug: "/guides/757-electrical-permits-dominion-energy/"
    }
  ]
};

export function getBusinessSchema(cityName = "Hampton Roads") {
  const currentArea = siteConfig.serviceAreas.find(a => a.name.toLowerCase() === cityName.toLowerCase());
  const geo = currentArea ? currentArea.geo : siteConfig.hqGeo;
  const postalCode = currentArea ? currentArea.postalCode : siteConfig.hqAddress.postalCode;
  const city = currentArea ? currentArea.name : siteConfig.hqAddress.addressLocality;

  return {
    "@type": ["Electrician", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": `${siteConfig.url}/`,
    "foundingDate": siteConfig.foundingDate,
    "logo": {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      "url": siteConfig.logoTransparent,
      "width": 512,
      "height": 512,
      "caption": "Scott's Electric LLC — Hampton Roads Master Electrician Emblem"
    },
    "image": [
      siteConfig.heroImage,
      siteConfig.logoTransparent
    ],
    "telephone": siteConfig.phoneE164,
    "priceRange": siteConfig.priceRange,
    "currenciesAccepted": siteConfig.currenciesAccepted,
    "paymentAccepted": siteConfig.paymentAccepted,
    "slogan": "24/7 Licensed Virginia Master Electricians Serving All 7 Cities of 757",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": siteConfig.license
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.phoneE164,
        "contactType": "emergency",
        "areaServed": "US-VA",
        "availableLanguage": ["English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.phoneE164,
        "contactType": "customer service",
        "areaServed": "US-VA",
        "availableLanguage": ["English"]
      }
    ],
    "description": `Licensed & insured Virginia Master Electrician serving ${cityName} and all 7 cities of Hampton Roads (757). Specializing in 24/7 emergency repairs, 200A/400A panel upgrades, Level 2 EV chargers, NEC 680 pool subpanels, historic home rewiring, standby generators, and 3-phase commercial electrical.`,
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.hqGeo.latitude,
        "longitude": siteConfig.hqGeo.longitude
      },
      "geoRadius": "85000"
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
      "name": "Hampton Roads Master Electrical Contracting Catalog",
      "itemListElement": siteConfig.services.map(s => ({
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "description": s.priceRange
        },
        "itemOffered": {
          "@type": "Service",
          "@id": `${s.url}#service`,
          "name": s.name,
          "url": s.url,
          "description": s.description,
          "provider": { "@id": `${siteConfig.url}/#organization` }
        }
      }))
    },
    "knowsAbout": [
      "National Electrical Code (NEC 2020 & NEC 2023)",
      "Virginia Uniform Statewide Building Code (USBC)",
      "NEC Article 220.82 Optional Dwelling Unit Load Calculations",
      "200A & 400A Solid-Copper-Busbar Service Panel Upgrades",
      "NEC Article 625 Continuous-Duty Level 2 EV Charging Circuits (NACS & J1772)",
      "NEC Article 702 Whole-Home Standby Generators & Automatic Transfer Switches (ATS)",
      "NEC Article 680 Swimming Pool, Spa & Salt-Chlorinator Automation Subpanels",
      "NEC Article 230.67 Type 1 & Type 2 Surge Protective Devices (SPD)",
      "NEC Article 250.32 Detached Structure Subpanel Grounding & Trenching",
      "NEC Article 334.30 Encapsulated Crawlspace NM-B Raceway Stapling",
      "Aluminum Branch Conductor Remediation (AlumiConn & Copalum)",
      "Historic Home Knob-and-Tube & Ungrounded 2-Wire Rewiring",
      "Federal Pacific Stab-Lok, Zinsco & Split-Bus Panel Replacement",
      "120/208V & 277/480V Commercial 3-Phase Square D I-Line & NQ Panelboards",
      "Multi-Gang Ringless Utility Meter Banks & Dominion Energy Disconnects"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": `${siteConfig.url}/`,
    "name": `${siteConfig.name} — 24/7 Master Electrician in 757`,
    "description": siteConfig.description,
    "publisher": { "@id": `${siteConfig.url}/#organization` },
    "inLanguage": "en-US"
  };
}

export function getWebPageSchema(url, title, description, primaryImageUrl = siteConfig.heroImage, speakableSelectors = ["h1", "h2", ".speakable"]) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "datePublished": "2026-01-15",
    "dateModified": siteConfig.lastUpdated,
    "isPartOf": { "@id": `${siteConfig.url}/#website` },
    "about": { "@id": `${siteConfig.url}/#organization` },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": primaryImageUrl
    },
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
      "item": item.url.endsWith('/') ? item.url : `${item.url}/`
    }))
  };
}

export function getHowToQuoteSchema() {
  return {
    "@type": "HowTo",
    "@id": `${siteConfig.url}/#howto-quote`,
    "name": "How to Schedule a 24/7 Master Electrician or Calculate NEC Panel Load in Hampton Roads (757)",
    "description": "Three-step process for homeowners and commercial property managers in Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth, and Suffolk.",
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Run Optional NEC 220 Panel Load or Scope Check",
        "text": "Select your home square footage, existing main breaker amperage (100A, 150A, or 200A), and planned 240V equipment (EV charger, heat pump, pool pad, or generator).",
        "url": `${siteConfig.url}/#instant-calculator`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Review Upfront 757 Price Range",
        "text": "Inspect transparent turnkey price ranges covering UL-listed materials, licensed Master Electrician labor, Dominion Energy coordination, and municipal permits.",
        "url": `${siteConfig.url}/guides/757-electrical-cost-guide/`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Call 24/7 Dispatch Directly at (757) 536-0478",
        "text": "Call (757) 536-0478 for immediate <45 minute emergency dispatch or submit the online intake form for a scheduled on-site confirmation.",
        "url": `${siteConfig.url}/contact/`
      }
    ]
  };
}
