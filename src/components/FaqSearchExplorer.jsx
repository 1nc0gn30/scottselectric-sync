import React, { useState, useMemo } from 'react';

export default function FaqSearchExplorer({ items = [], categories = [] }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const catMatch = activeCategory === 'All' || item.category === activeCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [items, query, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Search + Category Filter Console */}
      <div className="sand-card p-5 sm:p-7 rounded-3xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow">
            <label htmlFor="faq-search-input" className="sr-only">
              Search 50 Master Electrician FAQs
            </label>
            <input
              id="faq-search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search NEC codes, 200A panels, EV chargers, permits, FPE, pools, Dominion..."
              className="w-full rounded-2xl border border-coastal-navy/20 bg-white px-4 py-3.5 text-sm font-medium text-coastal-navy placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
            />
          </div>
          <div className="font-mono text-xs font-bold text-teal-700 shrink-0">
            Showing {filtered.length} of {items.length} Verified Answers
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className={`px-3.5 py-2 rounded-full text-xs font-bold transition-colors min-h-[38px] ${
              activeCategory === 'All'
                ? 'bg-coastal-navy text-white shadow-sm'
                : 'bg-white border border-coastal-navy/15 text-coastal-navy hover:border-teal-600'
            }`}
          >
            All Categories ({items.length})
          </button>
          {categories.map((cat) => {
            const count = items.filter((i) => i.category === cat).length;
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-full text-xs font-bold transition-colors min-h-[38px] ${
                  active
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-white border border-coastal-navy/15 text-coastal-navy hover:border-teal-600'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Rendered FAQ Cards */}
      {filtered.length === 0 ? (
        <div className="sand-card p-8 rounded-3xl text-center space-y-4">
          <p className="font-heading text-lg font-bold text-coastal-navy">
            No matching FAQ found for &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm text-coastal-slate">
            Speak directly with a licensed Virginia Master Electrician 24/7 for immediate code or pricing answers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveCategory('All');
              }}
              className="px-4 py-2.5 rounded-xl border border-coastal-navy/20 bg-white text-xs font-bold text-coastal-navy"
            >
              Reset Filters
            </button>
            <a
              href="tel:7575360478"
              className="px-5 py-2.5 rounded-xl bg-coastal-navy text-white text-xs font-extrabold"
            >
              Call 24/7: (757) 536-0478
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx || query.trim().length > 1;
            return (
              <article
                key={item.question}
                className="sand-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-7 py-5 flex items-start justify-between gap-4 hover:bg-coastal-sand/40 transition-colors"
                >
                  <div className="space-y-1.5">
                    <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-teal-700 bg-teal-600/10 px-2.5 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <h2 className="font-heading text-base sm:text-lg font-extrabold text-coastal-navy leading-snug speakable">
                      {item.question}
                    </h2>
                  </div>
                  <span
                    className={`mt-1 shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-mono text-sm font-bold border transition-transform ${
                      isOpen
                        ? 'bg-coastal-navy text-amber-400 border-coastal-navy rotate-45'
                        : 'bg-white text-coastal-navy border-coastal-navy/20'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div className={isOpen ? 'px-5 sm:px-7 pb-6 pt-1 border-t border-coastal-navy/10' : 'hidden'}>
                  <p className="text-xs sm:text-sm text-coastal-slate leading-relaxed speakable">
                    {item.answer}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-coastal-navy/10 text-xs">
                    {item.link && (
                      <a
                        href={item.link}
                        className="font-bold text-teal-700 hover:text-coastal-navy underline"
                      >
                        {item.linkLabel || 'Explore Related Scope & Pricing'} →
                      </a>
                    )}
                    <a
                      href="tel:7575360478"
                      className="font-mono font-extrabold text-coastal-navy hover:text-teal-700"
                    >
                      24/7 Master Electrician: (757) 536-0478
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
