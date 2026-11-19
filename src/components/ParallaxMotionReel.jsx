import React, { useEffect, useRef, useState } from 'react';
import { PhoneCall, ArrowRight, MoveHorizontal, CheckCircle2, Film } from 'lucide-react';
import { PARALLAX_CHAPTERS, BEFORE_AFTER_PAIRS } from '../config/verifiedMedia.js';

function BeforeAfterCard({ pair }) {
  const [split, setSplit] = useState(52);
  const containerRef = useRef(null);

  const updateFromClientX = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setSplit(Math.round(pct));
  };

  return (
    <div className="bento-card rounded-3xl overflow-hidden flex flex-col justify-between">
      <div className="p-5 sm:p-6 border-b border-slate-800/90">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-md">
          {pair.badge}
        </span>
        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white mt-3 leading-snug">
          {pair.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          {pair.summary}
        </p>
      </div>

      {/* Interactive Split Comparison Viewport */}
      <div
        ref={containerRef}
        onPointerMove={(e) => {
          if (e.buttons === 1) updateFromClientX(e.clientX);
        }}
        onClick={(e) => updateFromClientX(e.clientX)}
        className="relative aspect-[4/4.3] select-none overflow-hidden bg-slate-950 cursor-ew-resize"
      >
        {/* Base Layer: AFTER (Completed) */}
        <img
          src={pair.after.src}
          alt={pair.after.seoAlt}
          loading="lazy"
          style={{
            objectPosition: `${pair.after.focalPoint.x}% ${pair.after.focalPoint.y}%`,
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Clipped Layer: BEFORE / STAGE 1 */}
        <div
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          className="absolute inset-0"
        >
          <img
            src={pair.before.src}
            alt={pair.before.seoAlt}
            loading="lazy"
            style={{
              objectPosition: `${pair.before.focalPoint.x}% ${pair.before.focalPoint.y}%`,
            }}
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>

        {/* Corner Telemetry Labels */}
        <span className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] font-bold uppercase bg-slate-950/90 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-md backdrop-blur-md">
          {pair.beforeLabel}
        </span>
        <span className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] font-bold uppercase bg-slate-950/90 text-amber-400 border border-amber-500/40 px-2.5 py-1 rounded-md backdrop-blur-md">
          {pair.afterLabel}
        </span>

        {/* Divider Line & Handle */}
        <div
          style={{ left: `${split}%` }}
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.9)]"
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg border-2 border-slate-950">
            <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Accessible Range Control */}
        <input
          type="range"
          min="8"
          max="92"
          value={split}
          aria-label={`Compare before and after for ${pair.title}`}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="absolute inset-x-4 bottom-3 z-20 opacity-0 h-10 cursor-ew-resize"
        />
      </div>

      <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-slate-400">
          Drag slider to inspect busbar &amp; conductor dressing
        </span>
        <a
          href="tel:7575360478"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Book Panel Inspection: (757) 536-0478</span>
        </a>
      </div>
    </div>
  );
}

export default function ParallaxMotionReel() {
  const chapterRefs = useRef([]);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let rafId = null;
    let lastScrollY = window.scrollY;
    let smoothSkew = 0;

    const updateParallax = () => {
      const vh = window.innerHeight || 800;
      const scrollY = window.scrollY;
      const velocity = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Velocity-reactive marquee skew
      const targetSkew = Math.max(-8, Math.min(8, velocity * 0.22));
      smoothSkew += (targetSkew - smoothSkew) * 0.18;
      if (marqueeRef.current) {
        const shift = (scrollY * 0.18) % 420;
        marqueeRef.current.style.transform = `translate3d(${-shift}px, 0, 0) skewX(${smoothSkew.toFixed(2)}deg)`;
      }

      // Per-chapter depth parallax transforms
      chapterRefs.current.forEach((node) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const centerOffset = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;
        const clamped = Math.max(-1, Math.min(1, centerOffset));
        const focusGain = 1 + (1 - Math.min(1, Math.abs(clamped))) * 0.085;

        const mainMedia = node.querySelector('[data-parallax-main]');
        const satTop = node.querySelector('[data-parallax-top]');
        const satBottom = node.querySelector('[data-parallax-bottom]');

        if (mainMedia) {
          mainMedia.style.transform = `translate3d(0, ${(clamped * -26).toFixed(1)}px, 0) scale(${focusGain.toFixed(3)})`;
        }
        if (satTop) {
          satTop.style.transform = `translate3d(0, ${(clamped * -44).toFixed(1)}px, 0)`;
        }
        if (satBottom) {
          satBottom.style.transform = `translate3d(0, ${(clamped * 36).toFixed(1)}px, 0)`;
        }
      });

      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Optional Lenis desktop wheel interpolation
    let lenisInstance = null;
    let lenisRaf = null;
    if (window.innerWidth >= 1024) {
      import('lenis')
        .then(({ default: Lenis }) => {
          lenisInstance = new Lenis({
            lerp: 0.09,
            smoothWheel: true,
          });
          const loop = (time) => {
            lenisInstance.raf(time);
            lenisRaf = window.requestAnimationFrame(loop);
          };
          lenisRaf = window.requestAnimationFrame(loop);
        })
        .catch(() => {});
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
      if (lenisRaf) window.cancelAnimationFrame(lenisRaf);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <section id="field-motion-reel" className="relative py-16 lg:py-24 bg-brand-dark overflow-hidden">
      {/* Velocity-Reactive Kinetic Telemetry Strip */}
      <div className="border-y border-slate-800/90 bg-slate-950/90 py-3 mb-16 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex items-center gap-8 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-widest text-slate-400 will-change-transform"
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <span className="text-amber-400">⚡ 200A &amp; 400A PANEL UPGRADES</span>
              <span>•</span>
              <span className="text-slate-200">24/7 EMERGENCY DISPATCH: (757) 536-0478</span>
              <span>•</span>
              <span className="text-cyan-400">LEVEL 2 TESLA &amp; NACS EV CHARGERS</span>
              <span>•</span>
              <span className="text-slate-200">3-PHASE SQUARE D COMMERCIAL POWER</span>
              <span>•</span>
              <span className="text-amber-400">STANDBY GENERATORS &amp; ATS</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Keyword-First SEO) */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-full">
            <Film className="w-3.5 h-3.5" />
            <span>Parallax Jobsite Inspection • 100% Real 757 Field Work</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
            Master Electrician Workmanship Across{' '}
            <span className="gold-gradient-text">Panels, 3-Phase, EV &amp; Lighting</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Zero stock photography. Scroll through multi-angle field documentation of our residential load centers, commercial three-phase switchgear, high-bay chandeliers, and crawlspace copper raceways across Hampton Roads.
          </p>
        </div>

        {/* 5 Multi-Layer Depth Parallax Chapters */}
        <div className="space-y-20 lg:space-y-28">
          {PARALLAX_CHAPTERS.map((chapter, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={chapter.id}
                ref={(el) => {
                  chapterRefs.current[idx] = el;
                }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Parallax Visual Rig */}
                <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative">
                    {/* Primary Dolly-Zoom Frame */}
                    <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-card aspect-[4/3.4] sm:aspect-[16/11] vf-corners">
                      {chapter.videoSrc ? (
                        <video
                          data-parallax-main
                          src={chapter.videoSrc}
                          poster={chapter.videoPoster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover will-change-transform"
                        />
                      ) : (
                        <img
                          data-parallax-main
                          src={chapter.primaryPhoto.src}
                          alt={chapter.primaryPhoto.seoAlt}
                          loading="lazy"
                          style={{
                            objectPosition: `${chapter.primaryPhoto.focalPoint.x}% ${chapter.primaryPhoto.focalPoint.y}%`,
                          }}
                          className="w-full h-full object-cover will-change-transform"
                        />
                      )}

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-slate-950/85 text-amber-400 border border-amber-500/40 px-2.5 py-1 rounded-lg backdrop-blur-md">
                          {chapter.videoSpec || chapter.primaryPhoto.technicalSpec}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-slate-300 bg-slate-950/85 border border-slate-700 px-2.5 py-1 rounded-lg">
                          REEL {chapter.index}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-4 right-4 md:right-48 pointer-events-none">
                        <div className="text-sm sm:text-base font-bold text-white drop-shadow">
                          {chapter.primaryPhoto.title}
                        </div>
                        <p className="text-xs text-slate-200 line-clamp-2 mt-0.5">
                          {chapter.primaryPhoto.caption}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Floating Depth Satellite Cards + Mobile Clean 2-Up */}
                    <div className="mt-3 grid grid-cols-2 gap-3 md:mt-0">
                      {/* Satellite 1 */}
                      <div
                        data-parallax-top
                        className="md:absolute md:-top-6 md:-right-4 md:w-48 rounded-2xl overflow-hidden border border-amber-500/40 bg-slate-950 shadow-card z-20 will-change-transform"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={chapter.detailTop.src}
                            alt={chapter.detailTop.seoAlt}
                            loading="lazy"
                            style={{
                              objectPosition: `${chapter.detailTop.focalPoint.x}% ${chapter.detailTop.focalPoint.y}%`,
                            }}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2.5 bg-slate-950/95 border-t border-slate-800">
                          <div className="font-mono text-[9px] text-amber-400 uppercase truncate">
                            {chapter.detailTop.technicalSpec}
                          </div>
                          <div className="text-[11px] font-bold text-white truncate mt-0.5">
                            {chapter.detailTop.title}
                          </div>
                        </div>
                      </div>

                      {/* Satellite 2 */}
                      <div
                        data-parallax-bottom
                        className="md:absolute md:-bottom-6 md:right-4 md:w-52 rounded-2xl overflow-hidden border border-cyan-500/35 bg-slate-950 shadow-card z-20 will-change-transform"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={chapter.detailBottom.src}
                            alt={chapter.detailBottom.seoAlt}
                            loading="lazy"
                            style={{
                              objectPosition: `${chapter.detailBottom.focalPoint.x}% ${chapter.detailBottom.focalPoint.y}%`,
                            }}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-2.5 bg-slate-950/95 border-t border-slate-800">
                          <div className="font-mono text-[9px] text-cyan-400 uppercase truncate">
                            {chapter.detailBottom.technicalSpec}
                          </div>
                          <div className="text-[11px] font-bold text-white truncate mt-0.5">
                            {chapter.detailBottom.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chapter Copy, Micro-Reel & Direct Phone Conversion */}
                <div className={`lg:col-span-5 space-y-5 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    {chapter.index} // {chapter.eyebrow}
                  </div>

                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {chapter.keywordTitle}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {chapter.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {chapter.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Extra 3-Shot Detail Strip */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    {chapter.extraStrip.map((shot) => (
                      <div
                        key={shot.cleanBase}
                        className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]"
                      >
                        <img
                          src={shot.src}
                          alt={shot.seoAlt}
                          loading="lazy"
                          style={{
                            objectPosition: `${shot.focalPoint.x}% ${shot.focalPoint.y}%`,
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-1.5">
                          <span className="block font-mono text-[9px] text-slate-200 truncate">
                            {shot.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Direct Phone Action First */}
                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href="tel:7575360478"
                      className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-gold-glow transition-transform hover:scale-[1.02]"
                    >
                      <PhoneCall className="w-4 h-4 shrink-0" />
                      <span>Call (757) 536-0478</span>
                    </a>
                    <a
                      href={chapter.serviceHref}
                      className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-amber-400/60 bg-slate-900/80 text-slate-200 hover:text-amber-300 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-colors"
                    >
                      <span>View Technical Scope</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Before / After & Rough-In Progression Scrubbers */}
        <div className="mt-24 pt-16 border-t border-slate-800/90">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-cyan-400">
              INTERACTIVE PANEL SCRUBBERS // BEFORE &amp; AFTER
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Inspect Real 200A Panel Upgrades &amp; Interlock Builds Side-by-Side
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <BeforeAfterCard key={pair.id} pair={pair} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
