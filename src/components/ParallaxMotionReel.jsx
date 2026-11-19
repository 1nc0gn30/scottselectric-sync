import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneCall, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { HOME_STACKED_SERVICES, HOME_HORIZONTAL_REEL } from '../config/verifiedMedia.js';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxMotionReel() {
  const stackSectionRef = useRef(null);
  const stackCardRefs = useRef([]);
  const horizSectionRef = useRef(null);
  const horizTrackRef = useRef(null);
  const [reelProgress, setReelProgress] = useState(1);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const mm = gsap.matchMedia();

    // Desktop (>= 1024px): Pinned Stacked-Card Depth Scale + Pinned Horizontal Coastal Film-Track
    mm.add('(min-width: 1024px)', () => {
      // 1. Stacked Service Cards smoothly recede & scale down as next card deals over them
      const cards = stackCardRefs.current.filter(Boolean);
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card, {
            scale: 0.94,
            y: -14,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 78%',
              end: 'top 18%',
              scrub: true,
            },
          });
        }
      });

      // 2. Pinned Horizontal Coastal Film-Reel with internal counter-panning image parallax
      if (horizSectionRef.current && horizTrackRef.current) {
        const track = horizTrackRef.current;
        const getScrollDistance = () => -(track.scrollWidth - window.innerWidth + 64);

        const horizTween = gsap.to(track, {
          x: getScrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: horizSectionRef.current,
            start: 'top top',
            end: () => `+=${Math.max(1400, track.scrollWidth - window.innerWidth)}`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.85,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                HOME_HORIZONTAL_REEL.length,
                Math.max(1, Math.ceil(self.progress * HOME_HORIZONTAL_REEL.length))
              );
              setReelProgress(idx);
            },
          },
        });

        // Counter-pan images inside each horizontal window for multi-plane depth
        const innerImgs = track.querySelectorAll('[data-horiz-img]');
        innerImgs.forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -9, scale: 1.16 },
            {
              xPercent: 9,
              scale: 1.16,
              ease: 'none',
              scrollTrigger: {
                trigger: horizSectionRef.current,
                start: 'top top',
                end: () => `+=${Math.max(1400, track.scrollWidth - window.innerWidth)}`,
                scrub: 0.85,
              },
            }
          );
        });

        return () => {
          horizTween.kill();
        };
      }
      return undefined;
    });

    // Mobile & Tablet (< 1024px): Smooth Vertical Scroll-Assembled Cards (Native Touch Speed)
    mm.add('(max-width: 1023px)', () => {
      const mobileCards = gsap.utils.toArray('[data-mobile-reel-card]');
      mobileCards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 36, opacity: 0.35 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 94%',
              end: 'top 68%',
              scrub: 0.4,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* =====================================================================
          STAGE A: PINNED STACKED-DECK ELECTRICAL SCOPES (SUNLIT COASTAL DUNE)
         ===================================================================== */}
      <section
        id="field-motion-reel"
        ref={stackSectionRef}
        className="coastal-dune-surface py-20 lg:py-28 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div data-reveal-block className="max-w-3xl mb-14 lg:mb-20">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-teal-700 bg-teal-600/10 border border-teal-600/20 px-3.5 py-1.5 rounded-full inline-block">
              Core 757 Electrical Scopes • Scroll-Stacked Deck
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-coastal-navy mt-4 leading-tight">
              Precision Coastal Electrical Work,{' '}
              <span className="font-editorial text-[1.12em] font-normal text-teal-700">
                Laid Out Scope by Scope
              </span>
            </h2>
            <p className="text-sm sm:text-base text-coastal-slate mt-3 leading-relaxed">
              Every service card below pairs real, unretouched Hampton Roads jobsite photography with upfront scope details and direct Master Electrician phone dispatch.
            </p>
            <div data-draw-rule className="h-[1px] bg-coastal-navy/15 mt-7" />
          </div>

          {/* Stacked Deck Cards */}
          <div className="space-y-8 lg:space-y-12">
            {HOME_STACKED_SERVICES.map((scope, idx) => {
              const isNavy = scope.cardTone === 'navy';
              const topOffset = 92 + idx * 14;
              return (
                <article
                  key={scope.id}
                  ref={(el) => {
                    stackCardRefs.current[idx] = el;
                  }}
                  style={{ top: `${topOffset}px` }}
                  className={`lg:sticky rounded-[2rem] overflow-hidden shadow-coastal-elevated transition-shadow will-change-transform ${
                    isNavy
                      ? 'bg-coastal-navy text-white border border-white/15'
                      : 'bg-coastal-shell text-coastal-navy border border-coastal-navy/12'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Left Copy Column */}
                    <div className="lg:col-span-6 p-6 sm:p-9 lg:p-11 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span
                            className={`font-mono text-[11px] font-bold uppercase tracking-wider ${
                              isNavy ? 'text-teal-300' : 'text-teal-700'
                            }`}
                          >
                            {scope.num} // {scope.eyebrow}
                          </span>
                          <span
                            className={`font-mono text-[11px] font-semibold px-3 py-1 rounded-full ${
                              isNavy
                                ? 'bg-white/10 text-amber-300'
                                : 'bg-amber-500/15 text-amber-800'
                            }`}
                          >
                            {scope.priceHint}
                          </span>
                        </div>

                        <h3 className="font-heading text-2xl sm:text-4xl font-extrabold leading-[1.1]">
                          {scope.titlePlain}{' '}
                          <span
                            className={`font-editorial text-[1.12em] font-normal ${
                              isNavy ? 'text-amber-300' : 'text-teal-700'
                            }`}
                          >
                            {scope.titleItalic}
                          </span>
                        </h3>

                        <p
                          className={`text-sm sm:text-base leading-relaxed ${
                            isNavy ? 'text-slate-300' : 'text-coastal-slate'
                          }`}
                        >
                          {scope.summary}
                        </p>

                        <ul className="space-y-2 pt-1">
                          {scope.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isNavy ? 'text-teal-400' : 'text-teal-600'
                                }`}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-current/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href="tel:7575360478"
                          className={`inline-flex items-center justify-center gap-2.5 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-transform hover:scale-[1.02] ${
                            isNavy
                              ? 'bg-amber-400 hover:bg-amber-300 text-coastal-navy shadow-gold-glow'
                              : 'bg-coastal-navy hover:bg-slate-800 text-white shadow-md'
                          }`}
                        >
                          <PhoneCall className="w-4 h-4 shrink-0" />
                          <span>Call (757) 536-0478</span>
                        </a>
                        <a
                          href={scope.href}
                          className={`inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border transition-colors ${
                            isNavy
                              ? 'border-white/20 hover:border-amber-300 text-slate-200 hover:text-amber-300'
                              : 'border-coastal-navy/20 hover:border-teal-700 text-coastal-navy hover:text-teal-700'
                          }`}
                        >
                          <span>Full Scope &amp; FAQs</span>
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </a>
                      </div>
                    </div>

                    {/* Right Dual-Frame Unique Media Column */}
                    <div className="lg:col-span-6 p-4 sm:p-6 lg:p-7 bg-black/5 grid grid-cols-12 gap-3.5 items-stretch">
                      {/* Primary Unique Photo */}
                      <div className="col-span-7 relative rounded-2xl overflow-hidden bg-coastal-navy min-h-[260px] sm:min-h-[340px]">
                        <img
                          data-parallax-img
                          src={scope.mainPhoto.src}
                          alt={scope.mainPhoto.seoAlt}
                          loading="lazy"
                          style={{
                            objectPosition: `${scope.mainPhoto.focalPoint.x}% ${scope.mainPhoto.focalPoint.y}%`,
                          }}
                          className="w-full h-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coastal-navy/85 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-teal-300 block">
                            {scope.mainPhoto.technicalSpec}
                          </span>
                          <span className="text-xs font-bold text-white line-clamp-1">
                            {scope.mainPhoto.title}
                          </span>
                        </div>
                      </div>

                      {/* Secondary Unique Photo OR Live Crawlspace Raceway Video */}
                      <div className="col-span-5 relative rounded-2xl overflow-hidden bg-coastal-navy min-h-[260px] sm:min-h-[340px]">
                        {scope.videoSrc ? (
                          <>
                            <video
                              src={scope.videoSrc}
                              poster={scope.videoPosterPhoto.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coastal-navy/85 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="font-mono text-[9px] uppercase tracking-wider text-amber-300 block">
                                LIVE JOBSITE CLIP
                              </span>
                              <span className="text-xs font-bold text-white line-clamp-2">
                                Encapsulated Crawlspace NM-B Joist Runs
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <img
                              data-parallax-img
                              src={scope.accentPhoto.src}
                              alt={scope.accentPhoto.seoAlt}
                              loading="lazy"
                              style={{
                                objectPosition: `${scope.accentPhoto.focalPoint.x}% ${scope.accentPhoto.focalPoint.y}%`,
                              }}
                              className="w-full h-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coastal-navy/85 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                              <span className="font-mono text-[9px] uppercase tracking-wider text-amber-300 block">
                                {scope.accentPhoto.technicalSpec}
                              </span>
                              <span className="text-xs font-bold text-white line-clamp-2">
                                {scope.accentPhoto.title}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          STAGE B: GSAP PINNED HORIZONTAL COASTAL FILM-TRACK (CHESAPEAKE NAVY)
         ===================================================================== */}
      <section
        ref={horizSectionRef}
        className="coastal-ocean-surface tech-grid-bg relative overflow-hidden py-16 lg:pt-24 lg:pb-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
      >
        {/* Top Bar Inside Pinned Stage */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-teal-300">
              <Compass className="w-3.5 h-3.5" />
              <span>Coastal Field Filmstrip • Continuous Scroll Track</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white mt-2 leading-tight">
              Inside Our 757 Jobsites,{' '}
              <span className="font-editorial text-[1.12em] font-normal text-amber-300">
                Frame by Frame
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:inline-flex items-center gap-2 font-mono text-xs text-slate-300 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full whitespace-nowrap">
              <span className="text-amber-400 font-bold">
                {String(reelProgress).padStart(2, '0')}
              </span>
              <span>/</span>
              <span>{String(HOME_HORIZONTAL_REEL.length).padStart(2, '0')}</span>
              <span className="text-slate-400 ml-1">SCROLL TO GLIDE →</span>
            </div>
            <a
              href="tel:7575360478"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-coastal-navy font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-gold-glow shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>(757) 536-0478</span>
            </a>
          </div>
        </div>

        {/* Horizontal Track on Desktop / Responsive Grid on Mobile */}
        <div
          ref={horizTrackRef}
          className="px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex lg:flex-nowrap lg:gap-8 will-change-transform"
        >
          {HOME_HORIZONTAL_REEL.map((photo, index) => (
            <article
              key={photo.cleanBase}
              data-mobile-reel-card
              className="lg:w-[390px] xl:w-[430px] lg:shrink-0 rounded-3xl overflow-hidden bg-brand-surface/90 border border-white/12 shadow-card flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3.3] overflow-hidden bg-coastal-deep">
                <img
                  data-horiz-img
                  src={photo.src}
                  alt={photo.seoAlt}
                  loading="lazy"
                  style={{
                    objectPosition: `${photo.focalPoint.x}% ${photo.focalPoint.y}%`,
                  }}
                  className="w-full h-full object-cover will-change-transform"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coastal-deep/85 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 font-mono text-[10px] font-bold uppercase bg-coastal-navy/90 text-teal-300 border border-teal-400/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                  FRAME {String(index + 1).padStart(2, '0')}
                </span>
                <span className="absolute bottom-3 left-3.5 right-3.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-300 truncate">
                  {photo.technicalSpec}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] uppercase text-slate-400">
                    {photo.tradeCategory}
                  </span>
                  <a
                    href="tel:7575360478"
                    className="font-bold text-amber-300 hover:text-amber-200"
                  >
                    Book Similar: (757) 536-0478 →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
