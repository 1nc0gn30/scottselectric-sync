import React, { useState, useEffect, useMemo } from 'react';
import { PhoneCall, Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_VAULT_REMAINING } from '../config/verifiedMedia.js';

export default function MotionVaultGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllRemaining, setShowAllRemaining] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const categories = useMemo(() => {
    const counts = new Map();
    HOME_VAULT_REMAINING.forEach((p) => {
      counts.set(p.tradeCategory, (counts.get(p.tradeCategory) || 0) + 1);
    });
    return [
      { id: 'all', label: `More Field Work (${HOME_VAULT_REMAINING.length})` },
      ...Array.from(counts.entries()).map(([cat, count]) => ({
        id: cat,
        label: `${cat} (${count})`,
      })),
    ];
  }, []);

  const filteredPhotos = useMemo(() => {
    const pool =
      activeCategory === 'all'
        ? HOME_VAULT_REMAINING
        : HOME_VAULT_REMAINING.filter((p) => p.tradeCategory === activeCategory);
    if (activeCategory === 'all' && !showAllRemaining) {
      return pool.slice(0, 9);
    }
    return pool;
  }, [activeCategory, showAllRemaining]);

  useEffect(() => {
    if (lightboxIdx === null) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') {
        setLightboxIdx((i) => (i + 1) % filteredPhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIdx((i) => (i - 1 + filteredPhotos.length) % filteredPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, filteredPhotos.length]);

  const activePhoto = lightboxIdx !== null ? filteredPhotos[lightboxIdx] : null;

  return (
    <section id="verified-photo-vault" className="py-20 lg:py-28 coastal-dune-surface border-t border-coastal-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-reveal-block className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-teal-700 bg-teal-600/10 border border-teal-600/20 px-3.5 py-1.5 rounded-full inline-block">
              Additional Jobsite Proof • 100% Distinct Photographs
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-coastal-navy mt-4 leading-tight">
              Rough-In, Fixture &amp; Panel{' '}
              <span className="font-editorial text-[1.12em] font-normal text-amber-600">
                Detail Archive
              </span>
            </h2>
            <p className="text-sm sm:text-base text-coastal-slate mt-2.5 leading-relaxed">
              Every frame in this archive is a separate jobsite photograph not shown in the sections above—documenting behind-the-drywall copper splices, slab conduit trenching, chandeliers, and outdoor weatherproofing.
            </p>
          </div>

          <a
            href="tel:7575360478"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-coastal-navy hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Call 24/7: (757) 536-0478</span>
          </a>
        </div>

        {/* Category Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((tab) => {
            const selected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id);
                  setLightboxIdx(null);
                }}
                className={`shrink-0 px-4 py-2.5 rounded-full font-sans text-xs font-bold transition-all border ${
                  selected
                    ? 'bg-coastal-navy text-white border-coastal-navy shadow-md'
                    : 'bg-white/85 text-coastal-navy border-coastal-navy/15 hover:border-teal-600'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Scroll-Dealt Mosaic Cards */}
        <div data-deal-grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPhotos.map((photo, idx) => (
            <article
              key={photo.cleanBase}
              data-deal-item
              className="group sand-card rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  aria-label={`Inspect full frame: ${photo.title}`}
                  className="relative block w-full aspect-[4/3.4] overflow-hidden bg-coastal-navy text-left focus:outline-none"
                >
                  <img
                    src={photo.src}
                    alt={photo.seoAlt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: `${photo.focalPoint.x}% ${photo.focalPoint.y}%`,
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coastal-navy/80 via-transparent to-transparent" />

                  <span className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 text-coastal-navy shadow group-hover:bg-amber-400 transition-colors">
                    <Expand className="w-3.5 h-3.5" />
                  </span>

                  <span className="absolute bottom-3 left-3.5 right-3.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-300 truncate">
                    {photo.technicalSpec}
                  </span>
                </button>

                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-lg font-extrabold text-coastal-navy group-hover:text-teal-700 transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-coastal-slate mt-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-0">
                <div className="pt-3 border-t border-coastal-navy/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] uppercase text-coastal-slate font-semibold">
                    {photo.tradeCategory}
                  </span>
                  <a
                    href="tel:7575360478"
                    className="inline-flex items-center gap-1.5 font-extrabold text-teal-700 hover:text-amber-600"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>(757) 536-0478</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expand Remaining Unseen Shots Button */}
        {activeCategory === 'all' && HOME_VAULT_REMAINING.length > 9 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllRemaining((v) => !v)}
              className="inline-flex items-center gap-2 bg-white hover:bg-coastal-navy text-coastal-navy hover:text-white border border-coastal-navy/20 font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-sm transition-colors"
            >
              <span>
                {showAllRemaining
                  ? 'Show Compact 9-Photo View'
                  : `View All ${HOME_VAULT_REMAINING.length} Remaining Jobsite Photos ↓`}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Cinema Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setLightboxIdx(null)}
          className="fixed inset-0 z-50 bg-coastal-deep/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-coastal-navy text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
          >
            <div className="lg:col-span-7 relative bg-black flex items-center justify-center max-h-[52vh] lg:max-h-[85vh] overflow-hidden">
              <img
                src={activePhoto.src}
                alt={activePhoto.seoAlt}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() =>
                  setLightboxIdx((lightboxIdx - 1 + filteredPhotos.length) % filteredPhotos.length)
                }
                aria-label="Previous jobsite photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-coastal-navy/90 border border-white/20 text-white hover:border-amber-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx((lightboxIdx + 1) % filteredPhotos.length)}
                aria-label="Next jobsite photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-coastal-navy/90 border border-white/20 text-white hover:border-amber-400"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-teal-300 bg-teal-500/15 border border-teal-400/30 px-2.5 py-1 rounded-md">
                    {activePhoto.technicalSpec}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(null)}
                    aria-label="Close frame inspector"
                    className="p-2 rounded-full bg-white/10 text-slate-200 hover:text-white"
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
              </div>

              <div className="pt-6 mt-6 border-t border-white/15 space-y-3">
                <a
                  href="tel:7575360478"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-coastal-navy font-extrabold text-sm py-4 rounded-xl shadow-gold-glow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call (757) 536-0478 For Similar Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
