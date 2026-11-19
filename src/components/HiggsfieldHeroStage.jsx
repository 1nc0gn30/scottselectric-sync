import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall, ShieldCheck, Zap, Calculator, Play, Pause, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { HERO_REEL_CUTS } from '../config/verifiedMedia.js';

export default function HiggsfieldHeroStage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [flashKey, setFlashKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, sx: 0, sy: 0 });
  const stageRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_REEL_CUTS.length);
      setFlashKey((k) => k + 1);
    }, 4800);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const selectCut = (idx) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setFlashKey((k) => k + 1);
  };

  const handlePointerMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Number((-ny * 8).toFixed(2)),
      ry: Number((nx * 10).toFixed(2)),
      sx: Number((nx * 18).toFixed(1)),
      sy: Number((ny * 18).toFixed(1)),
    });
  };

  const resetPointer = () => setTilt({ rx: 0, ry: 0, sx: 0, sy: 0 });

  const currentCut = HERO_REEL_CUTS[activeIdx] || HERO_REEL_CUTS[0];
  const camClass = `hf-cam-${currentCut.cameraMove || 'push-in'}`;

  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden tech-grid-bg border-b border-slate-800/80">
      {/* Ambient Depth Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[480px] h-[480px] rounded-full bg-amber-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Keyword-First Authority & Phone-First Dispatch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Dispatch Telemetry Pill (Keywords First) */}
            <div className="inline-flex flex-wrap items-center gap-2.5 bg-slate-900/90 border border-amber-500/35 px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                24/7 Master Electrician Dispatch • All 7 Cities of 757
              </span>
            </div>

            {/* Keyword-First H1 */}
            <h1 className="font-heading text-3xl sm:text-5xl xl:text-[3.55rem] font-extrabold text-white leading-[1.06] tracking-tight">
              24/7 Emergency Electrician,{' '}
              <span className="gold-gradient-text">200A Panel Upgrades</span> &amp; EV Chargers in{' '}
              <span className="text-slate-100">Hampton Roads (757)</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl speakable">
              Immediate troubleshooting, 200A/400A breaker panel replacements, Level 2 EV charging circuits, whole-home standby generators, and 3-phase commercial wiring across{' '}
              <strong className="text-white font-semibold">
                Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Portsmouth &amp; Suffolk
              </strong>
              . Executed by licensed &amp; insured Virginia Master Electricians.
            </p>

            {/* Primary Phone CTA + NEC Calculator Secondary */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:7575360478"
                className="cta-phone-beam inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold px-7 py-4 rounded-2xl shadow-gold-intense transition-transform duration-200 hover:scale-[1.02] text-base sm:text-lg"
              >
                <PhoneCall className="w-5 h-5 shrink-0 stroke-[2.5]" />
                <span>Call Now: (757) 536-0478</span>
              </a>

              <a
                href="#instant-calculator"
                className="inline-flex items-center justify-center gap-2.5 border border-slate-700 hover:border-amber-400/60 bg-slate-900/90 hover:bg-slate-800/90 text-slate-100 font-bold px-6 py-4 rounded-2xl transition-colors text-sm sm:text-base"
              >
                <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
                <span>NEC Load &amp; Price Estimator</span>
              </a>
            </div>

            {/* Verified Credentials Strip (Zero Fluff, Zero Fake Numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/90">
              <div className="bg-slate-900/75 border border-slate-800 rounded-xl p-3">
                <div className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>VA CLASS A</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">Licensed &amp; Insured Master</div>
              </div>
              <div className="bg-slate-900/75 border border-slate-800 rounded-xl p-3">
                <div className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>&lt; 45 MIN AVG</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">24/7 Emergency Response</div>
              </div>
              <div className="bg-slate-900/75 border border-slate-800 rounded-xl p-3">
                <div className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>DOMINION SYNC</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">Same-Day Disconnects</div>
              </div>
              <div className="bg-slate-900/75 border border-slate-800 rounded-xl p-3">
                <div className="font-mono text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>NEC &amp; USBC</span>
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">All 7 City Permits Handled</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Higgsfield Speed-Ramp Motion-Edit Cinema Stage */}
          <div className="lg:col-span-5">
            <div
              ref={stageRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={resetPointer}
              style={{ perspective: '1200px' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div
                style={{
                  transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  transition: 'transform 180ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transformStyle: 'preserve-3d',
                }}
                className="relative rounded-3xl overflow-hidden border border-amber-500/35 bg-slate-950 shadow-card vf-corners"
              >
                {/* Top Viewfinder Telemetry Bar */}
                <div className="relative z-20 flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/90 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-[10px] font-bold tracking-widest text-slate-200 uppercase">
                      {currentCut.cutCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-amber-400">
                      0{activeIdx + 1}/0{HERO_REEL_CUTS.length} • REAL FIELD WORK
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsPlaying((p) => !p)}
                      aria-label={isPlaying ? 'Pause motion reel' : 'Play motion reel'}
                      className="p-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                {/* Main Motion-Edit Image Viewport */}
                <div className="relative aspect-[4/5] sm:aspect-[4/4.4] overflow-hidden bg-slate-950">
                  <img
                    key={`${currentCut.cleanBase}-${flashKey}`}
                    src={currentCut.src}
                    alt={currentCut.seoAlt}
                    width={currentCut.width}
                    height={currentCut.height}
                    style={{
                      objectPosition: `${currentCut.focalPoint.x}% ${currentCut.focalPoint.y}%`,
                      transformOrigin: `${currentCut.focalPoint.x}% ${currentCut.focalPoint.y}%`,
                    }}
                    className={`w-full h-full object-cover ${camClass}`}
                  />

                  {/* Tungsten Shutter-Flash Cut Overlay */}
                  <div
                    key={`flash-${flashKey}`}
                    className="pointer-events-none absolute inset-0 bg-amber-200/35 mix-blend-screen hf-shutter-flash"
                  />

                  {/* Vignette + Grain */}
                  <div className="pointer-events-none absolute inset-0 cinema-grain bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

                  {/* Floating Parallax Technical Spec Pill */}
                  <div
                    style={{
                      transform: `translate3d(${tilt.sx * 0.55}px, ${tilt.sy * 0.55}px, 24px)`,
                    }}
                    className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none"
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-slate-950/90 text-amber-400 border border-amber-500/40 px-2.5 py-1 rounded-lg backdrop-blur-md">
                      {currentCut.technicalSpec}
                    </span>
                  </div>

                  {/* Bottom Verified Frame Caption Plate (Guaranteed Contrast Over Any Photo) */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 sm:p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md space-y-1.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                          {currentCut.headlineTag}
                        </div>
                        <h2 className="font-heading text-base sm:text-lg font-bold text-white leading-snug mt-0.5">
                          {currentCut.title}
                        </h2>
                      </div>
                      <a
                        href={currentCut.serviceLink}
                        aria-label={`Explore ${currentCut.title}`}
                        className="shrink-0 p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-400 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {currentCut.caption}
                    </p>
                  </div>
                </div>

                {/* Filmstrip Cut Scrubber */}
                <div className="grid grid-cols-7 gap-1.5 p-2.5 bg-slate-950 border-t border-slate-800/90">
                  {HERO_REEL_CUTS.map((cut, i) => {
                    const active = i === activeIdx;
                    return (
                      <button
                        key={cut.cleanBase}
                        type="button"
                        onClick={() => selectCut(i)}
                        aria-label={`View jobsite cut ${i + 1}: ${cut.title}`}
                        className={`relative aspect-square rounded-lg overflow-hidden border transition-all ${
                          active
                            ? 'border-amber-400 ring-2 ring-amber-400/40 scale-[1.03]'
                            : 'border-slate-800 opacity-55 hover:opacity-90'
                        }`}
                      >
                        <img
                          src={cut.src}
                          alt={cut.title}
                          loading="lazy"
                          style={{
                            objectPosition: `${cut.focalPoint.x}% ${cut.focalPoint.y}%`,
                          }}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
