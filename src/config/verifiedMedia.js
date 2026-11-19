import realPhotosData from './realPhotos.json';

export const ALL_VERIFIED_PHOTOS = realPhotosData.filter((p) => p.isRealJobsitePhoto);

const photoByBase = new Map(ALL_VERIFIED_PHOTOS.map((p) => [p.cleanBase, p]));
const photoBySrc = new Map(ALL_VERIFIED_PHOTOS.map((p) => [p.src, p]));

export function getPhotoByBase(cleanBase) {
  return photoByBase.get(cleanBase) || ALL_VERIFIED_PHOTOS[0];
}

export function getPhotoBySrc(src) {
  return photoBySrc.get(src) || null;
}

export function getPhotosByBases(bases = []) {
  return bases.map((b) => photoByBase.get(b)).filter(Boolean);
}

export const HERO_REEL_CUTS = [
  {
    ...getPhotoByBase('img_4022'),
    cutCode: 'CUT 01 // PANEL UPGRADE',
    headlineTag: '200A SOLID COPPER BUSBAR',
    serviceLink: '/services/electrical-panel-upgrades',
  },
  {
    ...getPhotoByBase('img_5108'),
    cutCode: 'CUT 02 // SERVICE ENTRANCE',
    headlineTag: '6-GANG METER BANK & GE DISCONNECTS',
    serviceLink: '/services/commercial-electrical',
  },
  {
    ...getPhotoByBase('img_5803'),
    cutCode: 'CUT 03 // HIGH-BAY LIGHTING',
    headlineTag: 'MULTI-TIER CHANDELIER & MC RIGGING',
    serviceLink: '/services/custom-lighting-installation',
  },
  {
    ...getPhotoByBase('img_4525'),
    cutCode: 'CUT 04 // 3-PHASE POWER',
    headlineTag: 'NEMA 3R 3-PHASE FUSIBLE DISCONNECT',
    serviceLink: '/services/commercial-electrical',
  },
  {
    ...getPhotoByBase('img_3691'),
    cutCode: 'CUT 05 // STANDBY INTERLOCK',
    headlineTag: 'SIEMENS PANEL & BRASS INTERLOCKS',
    serviceLink: '/services/whole-home-generators',
  },
  {
    ...getPhotoByBase('img_3559'),
    cutCode: 'CUT 06 // EXTERIOR LIGHTING',
    headlineTag: 'PORCH & PALM LANDSCAPE UPLIGHTS',
    serviceLink: '/services/custom-lighting-installation',
  },
  {
    ...getPhotoByBase('img_4992'),
    cutCode: 'CUT 07 // SPLICE PRECISION',
    headlineTag: 'PRE-TWISTED SOLID COPPER MAKEUP',
    serviceLink: '/services/electrical-panel-upgrades',
  },
];

export const BEFORE_AFTER_PAIRS = [
  {
    id: 'panel-modernization',
    badge: 'PANEL REMEDIATION COMPARISON',
    title: 'Aging Split-Bus Hazard → 200A Solid Copper Busbar Upgrade',
    summary:
      'Left frame shows a legacy oversprayed split-bus panel lacking a single main disconnect. Right frame shows a modern Siemens 200A main-breaker load center with solid copper busbars and printed circuit markers.',
    before: getPhotoByBase('img_3369'),
    beforeLabel: 'PRE-UPGRADE AUDIT // SPLIT-BUS',
    after: getPhotoByBase('img_4022'),
    afterLabel: 'COMPLETED // SIEMENS 200A COPPER BUS',
  },
  {
    id: 'roughin-to-interlock',
    badge: 'SAME-PANEL PROGRESSION',
    title: 'Open-Stud Siemens Rough-In → Drywall Trim & Brass Generator Interlocks',
    summary:
      'Exact same Siemens load center documented during pre-drywall framing rough-in with 90-degree conductor dressing, then after drywall finish outfitted with three brass mechanical breaker interlocks.',
    before: getPhotoByBase('img_0304'),
    beforeLabel: 'STAGE 1 // OPEN-STUD ROUGH-IN',
    after: getPhotoByBase('img_3691'),
    afterLabel: 'STAGE 2 // FINISHED + INTERLOCKS',
  },
];

export const PARALLAX_CHAPTERS = [
  {
    id: 'chapter-panels',
    index: '01',
    eyebrow: '200A & 400A LOAD CENTERS • DOMINION COORDINATED',
    keywordTitle: '200-Amp Electrical Panel Upgrades & Breaker Replacements',
    description:
      'Full replacement of overloaded 100A boxes, legacy split-bus panels, and defective breakers with Siemens, Square D, and Eaton 200A/400A load centers—complete with AFCI/GFCI protection, insulated lug guards, and printed conductor markers.',
    primaryPhoto: getPhotoByBase('img_4022'),
    detailTop: getPhotoByBase('img_3626'),
    detailBottom: getPhotoByBase('img_4523'),
    extraStrip: getPhotosByBases(['img_3805', 'img_5010', 'img_1141']),
    specs: ['200A / 400A Service Capacity', 'Same-Day Utility Reconnect', 'All 7 Cities Permitting'],
    serviceHref: '/services/electrical-panel-upgrades',
  },
  {
    id: 'chapter-commercial',
    index: '02',
    eyebrow: '120/208V & 277/480V 3-PHASE • COMMERCIAL CONTRACTING',
    keywordTitle: 'Commercial 3-Phase Distribution, EMT Risers & Multi-Meter Banks',
    description:
      'Heavy-duty Square D I-Line distribution boards, symmetrical QOB bolt-on subpanels, parallel EMT conduit offsets with numbered THHN phases, brick-mounted NEMA 3R fusible safety switches, and multi-unit meter troughs.',
    primaryPhoto: getPhotoByBase('img_4537'),
    detailTop: getPhotoByBase('img_5108'),
    detailBottom: getPhotoByBase('img_4525'),
    extraStrip: getPhotosByBases(['img_4533', 'img_3246', 'img_4536']),
    specs: ['Square D I-Line & NQ Bolt-On', 'Multi-Gang Meter Troughs', '24/7 Commercial Dispatch'],
    serviceHref: '/services/commercial-electrical',
  },
  {
    id: 'chapter-lighting',
    index: '03',
    eyebrow: 'HIGH-BAY RIGGING • ARCHITECTURAL & LANDSCAPE ILLUMINATION',
    keywordTitle: 'Two-Story Foyer Chandeliers, Recessed LEDs & Dusk Exterior Lighting',
    description:
      'High-reach scaffolding and ladder rigging for vaulted foyer chandeliers, commercial open-truss crystal arrays wired in metal-clad (MC) cable, custom ceiling medallions, and photocell/low-voltage coastal exterior lighting.',
    primaryPhoto: getPhotoByBase('img_5803'),
    detailTop: getPhotoByBase('img_1645'),
    detailBottom: getPhotoByBase('img_3559'),
    extraStrip: getPhotosByBases(['img_5434', 'img_0757', 'img_0949']),
    specs: ['2-Story Vaulted Chandelier Rigging', 'MC-Cable Commercial Fixtures', 'Dusk-to-Dawn Exterior LEDs'],
    serviceHref: '/services/custom-lighting-installation',
  },
  {
    id: 'chapter-240v',
    index: '04',
    eyebrow: 'DEDICATED 240V CIRCUITS • EV • GENERATORS • NEC 680 POOLS',
    keywordTitle: 'Level 2 EV Circuits, Standby Generator Interlocks & Pool Automation',
    description:
      'Dedicated 240V high-amperage feeders, mechanical generator interlocks & transfer switches, leveled 4-jaw utility meter bases with anti-oxidant compound, and NEC Article 680 Hayward pool automation subpanels with Schedule 40 PVC and liquidtight whips.',
    primaryPhoto: getPhotoByBase('img_4370'),
    detailTop: getPhotoByBase('img_4251'),
    detailBottom: getPhotoByBase('img_0283'),
    extraStrip: getPhotosByBases(['img_3691', 'img_5869', 'img_5884']),
    specs: ['40A–60A Level 2 EV Circuits', 'Standby Generator Interlocks & ATS', 'NEC 680 Pool & Spa Subpanels'],
    serviceHref: '/services/ev-charger-installation',
  },
  {
    id: 'chapter-roughin',
    index: '05',
    eyebrow: 'BEHIND THE WALLS • CRAWLSPACE & SLAB RACEWAYS',
    keywordTitle: 'Code-Compliant Crawlspace Wiring, Slab Trenching & Solid Copper Splices',
    description:
      'What stays hidden behind sheetrock and under floors matters most: mechanically pre-twisted solid copper conductors, stapled 12-AWG NM-B joist runs in encapsulated crawlspaces, and saw-cut slab PVC conduit feeds.',
    primaryPhoto: getPhotoByBase('img_4992'),
    detailTop: getPhotoByBase('img_0174'),
    detailBottom: getPhotoByBase('img_3150'),
    videoSrc: '/assets/videos/crawlspace_raceway.mp4',
    videoPoster: '/assets/images/real/under_house_raceway_stapled_wire_neat_and_organized/img_0348.webp',
    videoSpec: 'LIVE JOBSITE CLIP // ENCAPSULATED CRAWLSPACE NM-B RACEWAY',
    extraStrip: getPhotosByBases(['img_8405', 'img_2651', 'img_4539']),
    specs: ['NEC 334.30 Joist Stapling', 'Pre-Twisted Solid Copper Splices', 'Sub-Slab & Trench PVC Conduit'],
    serviceHref: '/services',
  },
];

export function getImageGallerySchema(siteUrl = 'https://scottselectric.pro') {
  const topPhotos = ALL_VERIFIED_PHOTOS.filter((p) => p.qualityScore >= 8).slice(0, 24);
  return {
    '@type': 'ImageGallery',
    '@id': `${siteUrl}/#verified-jobsite-gallery`,
    name: 'Verified Master Electrician Jobsite Photography in Hampton Roads (757)',
    description:
      'Authentic field photographs of 200A electrical panel upgrades, 3-phase commercial switchgear, meter banks, chandelier rigging, outdoor disconnects, and copper wiring across Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth, and Suffolk.',
    image: topPhotos.map((p) => ({
      '@type': 'ImageObject',
      contentUrl: `${siteUrl}${p.src}`,
      name: p.title,
      description: p.seoAlt,
      width: p.width,
      height: p.height,
    })),
  };
}
