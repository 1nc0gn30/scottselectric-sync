import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTriggerPkg from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const ScrollTrigger = ScrollTriggerPkg?.ScrollTrigger || ScrollTriggerPkg;

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoastalScrollEngine() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    // 1. Sync Lenis inertial smooth wheel scroll directly onto GSAP's ticker
    const lenis = new Lenis({
      lerp: 0.095,
      wheelMultiplier: 1.0,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // 2. Continuous Scroll-Driven Layout Choreography across all sections
    const ctx = gsap.context(() => {
      // Top hairline coastal progress bar
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.15,
            },
          }
        );
      }

      // Architectural hairline rules draw themselves continuously on scroll
      gsap.utils.toArray('[data-draw-rule]').forEach((rule) => {
        gsap.fromTo(
          rule,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rule,
              start: 'top 92%',
              end: 'top 58%',
              scrub: 0.5,
            },
          }
        );
      });

      // Section headers smoothly assemble upward as user scrolls into them
      gsap.utils.toArray('[data-reveal-block]').forEach((block) => {
        gsap.fromTo(
          block,
          { y: 40, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 92%',
              end: 'top 62%',
              scrub: 0.45,
            },
          }
        );
      });

      // Grid cards deal progressively into place tied continuously to scroll
      gsap.utils.toArray('[data-deal-grid]').forEach((grid) => {
        const items = grid.querySelectorAll('[data-deal-item]');
        items.forEach((item, idx) => {
          const colOffset = (idx % 3) * 18;
          gsap.fromTo(
            item,
            {
              y: 56 + colOffset,
              scale: 0.95,
              opacity: 0.25,
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 96%',
                end: 'top 66%',
                scrub: 0.55,
              },
            }
          );
        });
      });

      // Internal image window vertical parallax on any [data-parallax-img]
      gsap.utils.toArray('[data-parallax-img]').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement || img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-20 left-0 right-0 h-[3px] z-40 pointer-events-none bg-transparent overflow-hidden"
    >
      <div
        ref={progressBarRef}
        style={{ transform: 'scaleX(0)', transformOrigin: '0% 50%' }}
        className="h-full w-full bg-gradient-to-r from-teal-400 via-amber-400 to-amber-500"
      />
    </div>
  );
}
