# Coastal 757 Motion-Edit & Scroll Choreography Spec — Scott's Electric LLC

## Design & Motion System
- **Palette**: Sunlit Shore Drive Sand (`#F6F3EC` / `#EFEAE0`) + Deep Chesapeake Atlantic Navy (`#0A1929`) + Seafoam Surf Teal (`#0D9488`) + Cape Henry Lighthouse Amber (`#F59E0B`).
- **Typography**: `Plus Jakarta Sans` (700/800) + `Instrument Serif` (400 Italic single-phrase accent) + `JetBrains Mono` (`0.18em` uppercase specs).
- **Motion Engine**: **Lenis** (`lerp: 0.095`) synchronized frame-for-frame with **GSAP + ScrollTrigger** (`gsap.ticker`, `lagSmoothing(0)`).
- **Zero-Duplicate Photo Invariant**: Every rendered jobsite `<img>` on `/` is 100% unique (`38/38` distinct field photographs across 5 sections + 1 live crawlspace raceway video).

---

## Continuous Scroll Choreography Timeline

1. **01 — Sunlit Shore Drive Coastal Portal (`HiggsfieldHeroStage.jsx`)**
   - Pointer-reactive 3D portal on `#F6F3EC` sand with scroll-scrubbed expansion (`scale: 1 -> 1.03, y: 0 -> -28`), 5-segment timed progress scrubber, animated horizon wave divider, and immediate **`(757) 536-0478`** phone dispatch.
2. **02 — Pinned Stacked-Deck Electrical Scopes (`ParallaxMotionReel.jsx` Stage A)**
   - 6 alternating Sand/Navy full-bleed scope cards (`sticky` + GSAP scale-down `1 -> 0.94` as each incoming card deals over the previous one), internal window vertical parallax (`yPercent: -6 -> +6`), and live encapsulated crawlspace raceway video (`crawlspace_raceway.mp4`).
3. **03 — GSAP Pinned Horizontal Coastal Film-Track (`ParallaxMotionReel.jsx` Stage B)**
   - Pinned Deep Chesapeake Navy viewport (`pin: true, scrub: 0.85, anticipatePin: 1`) gliding 10 distinct field photographs horizontally while counter-panning each image (`xPercent: -9 -> +9`) inside its rounded window.
4. **04 — Scroll-Dealt 7-City Tidewater Dispatch Grid (`index.astro` + `CityServiceCard.astro`)**
   - Continuous scroll-linked hairline draw (`scaleX: 0 -> 1`) + staggered card deal (`y: 56 -> 0, scale: 0.95 -> 1`), pairing each of the 7 Hampton Roads cities with its own unique jobsite photograph.
5. **05 — Remaining Field Craftsmanship Detail Archive (`MotionVaultGallery.jsx`)**
   - Strictly disjoint pool of unseen jobsite photographs with category filter pills and fullscreen frame inspector modal.
