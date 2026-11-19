import React, { useState, useEffect } from 'react';
import { PhoneCall, X, CheckCircle2 } from 'lucide-react';

const CITIES = [
  'Virginia Beach',
  'Norfolk',
  'Chesapeake',
  'Newport News',
  'Hampton',
  'Portsmouth',
  'Suffolk',
];

const SERVICES = [
  '24/7 Emergency Electrical Repair',
  '200A / 400A Electrical Panel Upgrade',
  'Level 2 EV Charging Station',
  'Whole-Home Standby Generator',
  'Chandeliers, Recessed & Exterior Lighting',
  'Pool / Hot Tub Electrical Subpanel',
  '3-Phase Commercial Electrical',
  'Electrical Code & Safety Inspection',
];

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Virginia Beach',
    service: '24/7 Emergency Electrical Repair',
  });

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener('open-callback-modal', openHandler);
    return () => window.removeEventListener('open-callback-modal', openHandler);
  }, []);

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'popup',
        ...formData,
      }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request 24/7 Electrician Callback"
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bento-card rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close callback modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900 border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="font-heading text-2xl font-extrabold text-white">
              Priority Callback Dispatched
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our Master Electrician serving{' '}
              <strong>{formData.city}</strong> will call <strong className="text-amber-400">{formData.phone}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-amber-500 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400">
                24/7 HAMPTON ROADS DISPATCH
              </span>
              <h2 className="font-heading text-2xl font-extrabold text-white mt-1">
                Call Directly or Request Callback
              </h2>
            </div>

            {/* Primary Phone CTA Inside Modal */}
            <a
              href="tel:7575360478"
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-sm py-3.5 rounded-xl shadow-gold-glow"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Immediate Call: (757) 536-0478</span>
            </a>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-800" />
              <span className="shrink mx-3 font-mono text-[10px] uppercase text-slate-500">
                Or Request Fast Callback
              </span>
              <div className="flex-grow border-t border-slate-800" />
            </div>

            <form
              name="popup"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              <input type="hidden" name="form-name" value="popup" />
              <p className="hidden">
                <label>
                  Don’t fill this out if human: <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="name"
                required
                aria-label="Full Name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  name="phone"
                  required
                  aria-label="Phone Number"
                  placeholder="Phone Number (757) *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  aria-label="Email Address (Optional)"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  name="city"
                  aria-label="757 City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}, VA
                    </option>
                  ))}
                </select>
                <select
                  name="service"
                  aria-label="Electrical Service Needed"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl p-3 text-xs focus:border-amber-400 focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full border border-amber-500/60 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors"
              >
                Submit Callback Request →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
