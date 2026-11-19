import React, { useState, useEffect, useMemo } from 'react';
import { PhoneCall, Expand, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { ALL_VERIFIED_PHOTOS } from '../config/verifiedMedia.js';

const FILTER_TABS = [
  { id: 'featured', label: 'Featured Cuts (12)' },
  { id: '200A Panels', label: '200A Panels' },
  { id: '3-Phase Commercial', label: '3-Phase Commercial' },
  { id: 'Chandeliers & Lighting', label: 'Chandeliers & Lighting' },
  { id: 'Meters & 240V Power', label: 'Meters & 240V Power' },
  { id: 'Rough-In & Splices', label: 'Rough-In & Splices' },
  { id: 'Fans & Switches', label: 'Fans & Switches' },
  { id: 'Field Fleet', label: 'Service Fleet' },
  { id: 'all', label: `All ${ALL_VERIFIED_PHOTOS.length} Verified Shots` },
];

const STAGE_LABELS = {
  completed: { text: 'COMPLETED', cls: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/75' },
  'in-progress': { text: 'ROUGH-IN / TRIM', cls: 'text-amber-400 border-amber-500/40 bg-slate-950/85' },
  'before-remediation': { text: 'PRE-UPGRADE AUDIT', cls: 'text-rose-400 border-rose-500/40 bg-rose-950/75' },
  equipment: { text: 'FIELD FLEET', cls: 'text-cyan-400 border-cyan-500/40 bg-slate-950/85' },
};

export default function MotionVaultGallery() {
  const [activeTab, setActiveTab] = useState('featured');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const visiblePhotos = useMemo(() => {
    if (activeTab === 'featured') {
      return [...ALL_VERIFIED_PHOTOS]
        .sort((a, b) => b.qualityScore - a.qualityScore)
        .slice(0, 12);
    }
    if (activeTab === 'all') {
      return ALL_VERIFIED_PHOTOS;
    }
    return ALL_VERIFIED_PHOTOS.filter((p) => p.tradeCategory === activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (lightboxIdx === null) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') {
        setLightboxIdx((i) => (i + 1) % visiblePhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, visiblePhotos.length]);

  const activePhoto = lightboxIdx !== null ? visiblePhotos[lightboxIdx] : null;

  return (
    <section id="verified-photo-vault" className="py-20 bg-brand-surface border-t border-slate-800/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-full">
              <Layers className="w-3.5 h-3.5" />
              <span>61 Vision-Cataloged Jobsite Photographs • Zero Stock Imagery</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
              Complete 757 Electrical <span className="gold-gradient-text">Field Archive</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
              Every photograph below is documented directly on residential and commercial jobsites—each labeled with exact equipment, busbar, conduit, and conductor specifications.
            </p>
          </div>

          <a
            href="tel:7575360478"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-gold-glow transition-colors"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>24/7 Dispatch: (757) 536-0478</span>
          </a>
        </div>

        {/* Scrollable Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {FILTER_TABS.map((tab) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setLightboxIdx(null);
                }}
                className={`shrink-0 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all border ${
                  selected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-gold-glow'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-amber-500/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Motion Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, idx) => {
            const stageBadge = STAGE_LABELS[photo.workStage] || STAGE_LABELS.completed;
            return (
              <article
                key={photo.cleanBase}
                className="group bento-card rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(idx)}
                    aria-label={`Inspect full frame: ${photo.title}`}
                    className="relative block w-full aspect-[4/3.6] overflow-hidden bg-slate-950 text-left focus:outline-none"
                  >
                    <img
                      src={photo.src}
                      alt={photo.seoAlt}
                      loading="lazy"
                      decoding="async"
                      style={{
                        objectPosition: `${photo.focalPoint.x}% ${photo.focalPoint.y}%`,
                        transformOrigin: `${photo.focalPoint.x}% ${photo.focalPoint.y}%`,
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />

                    {/* Top Telemetry Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className={`font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-md border backdrop-blur-md ${stageBadge.cls}`}>
                        {stageBadge.text}
                      </span>
                      <span className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 group-hover:text-amber-400 group-hover:border-amber-400/60 transition-colors">
                        <Expand className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Bottom Technical Tag */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/85 border border-amber-500/30 px-2.5 py-1 rounded-md backdrop-blur-md max-w-full truncate">
                        {photo.technicalSpec}
                      </span>
                    </div>
                  </button>

                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] uppercase text-slate-400">
                      {photo.tradeCategory}
                    </span>
                    <a
                      href="tel:7575360478"
                      className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call (757) 536-0478</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Cinema Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setLightboxIdx(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
          >
            {/* Image Column */}
            <div className="lg:col-span-7 relative bg-black flex items-center justify-center max-h-[52vh] lg:max-h-[85vh] overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.seoAlt}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setLightboxIdx((lightboxIdx - 1 + visiblePhotos.length) % visiblePhotos.length)}
                aria-label="Previous jobsite photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/85 border border-slate-700 text-white hover:border-amber-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx((lightboxIdx + 1) % visiblePhotos.length)}
                aria-label="Next jobsite photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/85 border border-slate-700 text-white hover:border-amber-400"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Technical Breakdown & Phone Dispatch Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    {activePhoto.technicalSpec}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(null)}
                    aria-label="Close frame inspector"
                    className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-white leading-snug">
                  {activePhoto.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activePhoto.caption}
                </p>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CATEGORY:</span>
                    <span className="text-slate-200">{activePhoto.tradeCategory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">STAGE:</span>
                    <span className="text-amber-400 uppercase">{activePhoto.workStage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">FRAME:</span>
                    <span className="text-cyan-400">
                      {lightboxIdx + 1} OF {visiblePhotos.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
                <a
                  href="tel:7575360478"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-sm py-4 rounded-xl shadow-gold-glow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call (757) 536-0478 For Similar Work</span>
                </a>
                <a
                  href="#instant-calculator"
                  onClick={() => setLightboxIdx(null)}
                  className="w-full inline-flex items-center justify-center border border-slate-700 hover:border-amber-400/50 text-slate-200 font-bold text-xs py-3 rounded-xl"
                >
                  Or Calculate Project Estimate Online →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
