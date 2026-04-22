import ScrollReveal from '../../../components/base/ScrollReveal';

import React, { useState } from 'react';

const HERO_IMAGE =
  "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/hero-beach.f9ce355462534da0976010b7595a03f9.d01dce0c00e575dd.a6948e40.png";

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";

export default function HeroSection() {
const [showModal, setShowModal] = React.useState(false);
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-screen flex flex-col"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 pt-32 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center w-full">

          {/* Small label above header */}
          <ScrollReveal direction="up" delay={0} duration={650} threshold={0.05}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/45 mb-4">
              Happy Detour Travel
            </p>
          </ScrollReveal>

          {/* 1. Main header */}
          <ScrollReveal direction="up" delay={80} duration={700} threshold={0.05}>
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl leading-tight tracking-tight">
              Happy Detour Travel
            </h1>
          </ScrollReveal>

          {/* 2. Tagline */}
          <ScrollReveal direction="up" delay={200} duration={700} threshold={0.05}>
            <p className="mt-5 text-xl font-semibold text-amber-400 sm:text-2xl leading-snug">
              Affordable vacations.{" "}
              Fun experiences.{" "}
              Everyone welcome.
            </p>
          </ScrollReveal>

          {/* 3. Supporting line */}
          <ScrollReveal direction="up" delay={310} duration={700} threshold={0.05}>
            <p className="mt-4 text-sm text-white/65 leading-relaxed mx-auto text-center whitespace-nowrap">
              Forget the 'work' of planning. Just tell me you're ready for a break, and I'll do the heavy lifting.
            </p>
          </ScrollReveal>

          {/* 4. CTA button */}
          <ScrollReveal direction="up" delay={420} duration={700} threshold={0.05}>
            <div className="mt-9 flex justify-center">
              
                <a href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-plane-fill text-base leading-none" />
                </span>
                Start Planning My Trip
              </a>
            </div>
          </ScrollReveal>

          {/* Browse row */}
          <div className="mt-4 mb-4 text-center">
            <p className="text-sm text-white/90 mb-3">
              Want to explore a little first?
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap">
              
            <a  href="https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK&priceType=cabinPerNight"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-400 hover:border-amber-300 hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300"
>
  <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white w-4">✈️</span>
  Virgin Voyages
</a>

 <a  href="https://www.sandals.com/?referral=101731&agentid=ERCA7707"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-400 hover:border-amber-300 hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300"
>
  <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white w-4">✈️</span>
  Sandals (Couples)
</a>

 <a  href="https://www.beaches.com/?referral=101731&agentid=ERCA7707"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-400 hover:border-amber-300 hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300"
>
  <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white w-4">✈️</span>
  Beaches (Families)
</a>

             <button onClick={() => setShowModal(true)}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-400 hover:border-amber-300 hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:scale-105 transition-all duration-300"
>
  <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white w-4">✈️</span>
  Royal Caribbean & More
</button>
            </div>
          </div>

        </div>
      </div>

      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60" onClick={() => setShowModal(false)}>
    <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl" onClick={e => e.stopPropagation()}>
      <div className="text-4xl mb-4">🚢</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">Royal Caribbean, Celebrity & Carnival</h3>
      <p className="text-gray-500 text-sm mb-6">I have access to exclusive rates on all major cruise lines. Tell me what you are looking for and I will send you a custom quote personally!</p>
      <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-all">
        Get My Custom Quote
      </a>
      <button onClick={() => setShowModal(false)} className="block mx-auto mt-4 text-sm text-gray-400 hover:text-gray-600">
        Maybe later
      </button>
    </div>
  </div>
)}
    </section>
  );
}
