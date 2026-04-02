import ScrollReveal from '../../../components/base/ScrollReveal';

const HERO_IMAGE =
  "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/hero-beach.f9ce355462534da0976010b7595a03f9.d01dce0c00e575dd.a6948e40.png";

const FORM_URL = "https://happydetour.app.n8n.cloud/form/ec5185b0-7ac2-4940-8dd3-f46039ff0a69";

export default function HeroSection() {
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
            <p className="mt-4 text-base text-white/65 leading-relaxed max-w-sm mx-auto">
              Start with an idea. I'll help from there.
            </p>
          </ScrollReveal>

          {/* 4. CTA button */}
          <ScrollReveal direction="up" delay={420} duration={700} threshold={0.05}>
            <div className="mt-9 flex justify-center">
              <a
                href={FORM_URL}
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

          {/* Category bubbles */}
          <ScrollReveal direction="up" delay={530} duration={700} threshold={0.05}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["Cruises", "All-Inclusive Resorts", "Custom Getaways"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
