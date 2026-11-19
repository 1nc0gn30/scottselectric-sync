import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneCall, Calculator, ShieldCheck, Zap, Compass, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { HOME_HERO_SLIDES } from '../config/verifiedMedia.js';

gsap.registerPlugin(ScrollTrigger);

export default function HiggsfieldHeroStage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const sectionRef = useRef(null);
  const portalRef = useRef(null);
  const copyRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HOME_HERO_SLIDES.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !sectionRef.current) return undefined;

    const ctx = gsap.context(() => {
      if (portalRef.current) {
        gsap.fromTo(
          portalRef.current,
          { y: 0, scale: 1 },
          {
            y: -28,
            scale: 1.03,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          }
        );
      }
      if (copyRef.current) {
        gsap.fromTo(
          copyRef.current,
          { y: 0 },
          {
            y: -16,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (e) => {
    if (!portalRef.current) return;
    const rect = portalRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Number((-ny * 6).toFixed(2)),
      ry: Number((nx * 7).toFixed(2)),
    });
  };

  const resetPointer = () => setTilt({ rx: 0, ry: 0 });

  const currentSlide = HOME_HERO_SLIDES[activeIdx] || HOME_HERO_SLIDES[0];

  return (
    <section
      ref={sectionRef}
      className="relative coastal-sand-surface pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden"
    >
      {/* Ambient Sunlit Coastal Glows */}
      <div className="pointer-events-none absolute -top-28 right-0 w-[560px] h-[560px] rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-24 -left-24 w-[460px] h-[460px] rounded-full bg-amber-500/12 blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Sunlit Coastal Editorial Copy & Immediate Phone Conversion */}
          <div ref={copyRef} className="lg:col-span-7 space-y-6 text-left">
            {/* Coastal Shore Drive Location & Live Dispatch Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 bg-white/90 border border-coastal-navy/15 px-4 py-1.5 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-coastal-navy">
                24/7 Coastal 757 Dispatch • Shore Dr, Virginia Beach HQ
              </span>
            </div>

            {/* Keyword-First H1 With Instrument Serif Italic Coastal Accent */}
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-[3.85rem] font-extrabold text-coastal-navy leading-[1.06] tracking-tight">
              24/7 Emergency Electrician,{' '}
              <span className="font-editorial text-[1.12em] font-normal text-teal-700">
                200A Panel Upgrades
              </span>{' '}
              &amp; EV Chargers Across{' '}
              <span className="font-editorial text-[1.1em] font-normal text-amber-600">
                Hampton Roads
              </span>
            </h1>

            <p className="text-base sm:text-lg text-coastal-slate leading-relaxed max-w-2xl speakable">
              Built for Coastal Virginia homes, waterfront estates, and commercial properties. Licensed Master Electricians delivering same-day 200A/400A breaker panels, Level 2 EV circuits, hurricane standby generators, and salt-air exterior lighting across{' '}
              <strong className="text-coastal-navy font-bold">
                Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth &amp; Suffolk
              </strong>
              .
            </p>

            {/* Primary Phone CTA + NEC Calculator Secondary */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:7575360478"
                className="cta-phone-beam inline-flex items-center justify-center gap-3 bg-coastal-navy hover:bg-slate-800 text-white font-extrabold px-7 py-4 rounded-2xl shadow-coastal-elevated transition-transform duration-200 hover:scale-[1.02] text-base sm:text-lg"
              >
                <span className="p-1.5 rounded-lg bg-amber-400 text-coastal-navy">
                  <PhoneCall className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span>Call Now: (757) 536-0478</span>
              </a>

              <a
                href="#instant-calculator"
                className="inline-flex items-center justify-center gap-2.5 border border-coastal-navy/20 hover:border-teal-600 bg-white/90 hover:bg-white text-coastal-navy font-bold px-6 py-4 rounded-2xl shadow-sm transition-colors text-sm sm:text-base"
              >
                <Calculator className="w-4 h-4 text-teal-700 shrink-0" />
                <span>NEC Load &amp; Price Estimator</span>
              </a>
            </div>

            {/* Clean Coastal Trust Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-coastal-navy/10">
              <div className="bg-white/80 border border-coastal-navy/10 rounded-2xl p-3.5">
                <div className="font-mono text-[11px] font-bold text-teal-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>VA CLASS A</span>
                </div>
                <div className="text-xs text-coastal-navy font-semibold mt-1">Master Electricians</div>
              </div>
              <div className="bg-white/80 border border-coastal-navy/10 rounded-2xl p-3.5">
                <div className="font-mono text-[11px] font-bold text-amber-600 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>&lt; 45 MIN AVG</span>
                </div>
                <div className="text-xs text-coastal-navy font-semibold mt-1">24/7 Emergency ETA</div>
              </div>
              <div className="bg-white/80 border border-coastal-navy/10 rounded-2xl p-3.5">
                <div className="font-mono text-[11px] font-bold text-teal-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>DOMINION SYNC</span>
                </div>
                <div className="text-xs text-coastal-navy font-semibold mt-1">Same-Day Reconnects</div>
              </div>
              <div className="bg-white/80 border border-coastal-navy/10 rounded-2xl p-3.5">
                <div className="font-mono text-[11px] font-bold text-amber-600 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 shrink-0" />
                  <span>ALL 7 CITIES</span>
                </div>
                <div className="text-xs text-coastal-navy font-semibold mt-1">Southside &amp; Peninsula</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Sunlit Coastal Cinema Portal (5 Unique Verified Jobsite Frames) */}
          <div className="lg:col-span-5">
            <div
              ref={portalRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={resetPointer}
              style={{ perspective: '1200px' }}
              className="relative mx-auto max-w-md lg:max-w-none will-change-transform"
            >
              <div
                style={{
                  transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative rounded-[2rem] overflow-hidden bg-coastal-navy border-4 border-white shadow-coastal-elevated"
              >
                {/* Main Cinema Frame */}
                <div className="relative aspect-[4/4.6] overflow-hidden bg-coastal-navy">
                  <img
                    key={currentSlide.cleanBase}
                    src={currentSlide.src}
                    alt={currentSlide.seoAlt}
                    width={currentSlide.width}
                    height={currentSlide.height}
                    style={{
                      objectPosition: `${currentSlide.focalPoint.x}% ${currentSlide.focalPoint.y}%`,
                      transformOrigin: `${currentSlide.focalPoint.x}% ${currentSlide.focalPoint.y}%`,
                    }}
                    className="w-full h-full object-cover hf-cam-push-in"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coastal-navy/95 via-coastal-navy/20 to-transparent" />

                  {/* Top Coastal Coordinate Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-coastal-navy px-3 py-1.5 rounded-full shadow">
                      {currentSlide.tag}
                    </span>
                    <span className="font-mono text-[10px] font-semibold bg-coastal-navy/85 text-teal-300 border border-teal-400/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                      0{activeIdx + 1} / 0{HOME_HERO_SLIDES.length}
                    </span>
                  </div>

                  {/* Bottom Frosted Coastal Card */}
                  <div className="absolute bottom-3.5 inset-x-3.5 p-4 rounded-2xl bg-coastal-navy/90 border border-white/15 backdrop-blur-md text-left space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-teal-300">
                          {currentSlide.locationVibe}
                        </div>
                        <h2 className="font-heading text-base sm:text-lg font-bold text-white leading-snug mt-0.5">
                          {currentSlide.title}
                        </h2>
                      </div>
                      <a
                        href={currentSlide.serviceLink}
                        aria-label={`Explore ${currentSlide.title}`}
                        className="shrink-0 p-2 rounded-xl bg-amber-400 text-coastal-navy hover:bg-amber-300 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">
                      {currentSlide.caption}
                    </p>
                  </div>
                </div>

                {/* 5-Segment Timed Progress Scrubber Bar */}
                <div className="grid grid-cols-5 gap-1.5 p-3 bg-coastal-navy border-t border-white/10">
                  {HOME_HERO_SLIDES.map((slide, idx) => {
                    const active = idx === activeIdx;
                    const shortLabels = ['Coastal LED', '200A Panel', 'Pavilion', 'Meters', 'Pool Pad'];
                    return (
                      <button
                        key={slide.cleanBase}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        aria-label={`Show coastal project ${idx + 1}: ${slide.title}`}
                        className={`group text-left px-2.5 py-2 rounded-xl transition-colors ${
                          active ? 'bg-white/12' : 'bg-white/[0.03] hover:bg-white/[0.08]'
                        }`}
                      >
                        <div className="h-1 w-full rounded-full bg-white/15 overflow-hidden mb-1.5">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              active ? 'w-full bg-amber-400' : 'w-0 bg-teal-400'
                            }`}
                          />
                        </div>
                        <span
                          className={`block font-mono text-[9px] font-semibold truncate ${
                            active ? 'text-amber-300' : 'text-slate-400 group-hover:text-slate-200'
                          }`}
                        >
                          0{idx + 1} {shortLabels[idx]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Coastal Horizon Wave Transition Divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[103%] h-8 sm:h-12 animate-tide"
          preserveAspectRatio="none"
        >
          <path
            d="M0 28C240 54 480 2 720 24C960 46 1200 6 1440 26V56H0V28Z"
            fill="#EFEAE0"
          />
        </svg>
      </div>
    </section>
  );
}
