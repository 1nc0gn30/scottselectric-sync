# Scott's Electric — 757 Master Electrician Motion-Edit Web App (`scottselectric.pro`)

High-converting, keyword-first local SEO & motion-edit web application for **Scott's Electric LLC** — Licensed & Insured Virginia Master Electrician (VA Class A Contractor) serving all 7 cities of Hampton Roads (`757`).

## What It Does
- **Phone-First 24/7 Dispatch Architecture**: Routes urgent residential and commercial electrical inquiries directly to **`(757) 536-0478`** (`tel:7575360478`) alongside a streamlined Netlify-backed online quote intake (`quote-request` and `popup`).
- **Higgsfield Motion-Edit & Parallax Scrollytelling**:
  - **3D Speed-Ramp Viewfinder Hero (`HiggsfieldHeroStage.jsx`)**: Pointer-reactive 3D camera stage with tungsten shutter-flash cuts, focal-point Ken Burns trajectories, and real jobsite telemetry.
  - **5-Chapter Depth Parallax Reel (`ParallaxMotionReel.jsx`)**: Scroll-velocity reactive marquee, multi-layer `translate3d` depth cards, live encapsulated crawlspace raceway video (`crawlspace_raceway.mp4`), and interactive Before/After & Rough-In-to-Interlock panel scrubbers.
  - **61-Photo Vision-Verified Field Archive (`MotionVaultGallery.jsx`)**: Every jobsite photograph inspected and cataloged with zero-fluff Master Electrician equipment, busbar, conduit, and splice descriptions (`src/config/realPhotos.json`).
- **Real Client-Side NEC Article 220.82 Load Calculator (`InteractiveQuoteCalculator.jsx`)**: Computes dwelling demand in Amps @ 240V and kVA from heated square footage and 240V appliances (`48A EV Charger`, `Heat Pump`, `Range`, `Dryer`, `Pool/Spa`) to determine whether an existing `100A` panel requires a `200A` upgrade.
- **Keyword-First Local SEO, AEO & AX**:
  - 7 dedicated municipal landing pages (`Virginia Beach`, `Norfolk`, `Chesapeake`, `Newport News`, `Hampton`, `Portsmouth`, `Suffolk`) + 6 technical service pages.
  - Connected Schema.org `@graph` (`Electrician`, `WebSite`, `WebPage`, `WebApplication`, `Service`, `FAQPage`, `BreadcrumbList`, `HowTo`, `ImageGallery`), `/llms.txt`, `/llms-full.txt`, `/ax`, `robots.txt`, and `sitemap.xml`.

## Tech Stack & Commands
- **Framework**: Astro 5 + React 18 + Tailwind CSS + Lenis + Lucide Icons
- **Install**: `npm install`
- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Preview Build**: `npm run preview`

---
&copy; Scott's Electric LLC — Licensed & Insured Virginia Master Electrician (`https://scottselectric.pro`).
