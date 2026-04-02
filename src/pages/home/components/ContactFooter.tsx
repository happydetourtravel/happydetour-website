import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/ec5185b0-7ac2-4940-8dd3-f46039ff0a69";

const LOGO_URL =
  "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/logo.30fb1e8b14fa58c29568cadc94d36a72b9c0ae687633fcc7be077d2afe4d4a70.png";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Start Planning My Trip", href: FORM_URL },
  { label: "Contact", href: "mailto:eric@happydetour.com" },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1px_0.7fr]">
          {/* Left: Contact */}
          <ScrollReveal direction="right" delay={0} duration={680}>
            <div className="space-y-6">
              {/* Logo + Brand */}
              <div className="flex items-center gap-3">
                <img
                  src={LOGO_URL}
                  alt="Happy Detour Travel logo"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Ready to Go?
                </p>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Let's Plan Your Next Trip Together
                </h2>
                <p className="text-base text-gray-500">
                  Tell me where you want to go, or even just that you want to get away somewhere. I'll take it from there.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm max-w-sm">
                <a
                  href="mailto:eric@happydetour.com"
                  className="group flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <div className="flex w-5 h-5 items-center justify-center transition-transform duration-200 group-hover:scale-125">
                    <i className="ri-mail-line text-gray-400 group-hover:text-amber-500 transition-colors duration-200" />
                  </div>
                  eric@happydetour.com
                </a>
                <a
                  href="https://www.instagram.com/happydetourtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <div className="flex w-5 h-5 items-center justify-center transition-transform duration-200 group-hover:scale-125">
                    <i className="ri-instagram-line text-gray-400 group-hover:text-amber-500 transition-colors duration-200" />
                  </div>
                  @happydetourtravel
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61582209485454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <div className="flex w-5 h-5 items-center justify-center transition-transform duration-200 group-hover:scale-125">
                    <i className="ri-facebook-line text-gray-400 group-hover:text-amber-500 transition-colors duration-200" />
                  </div>
                  @happydetourtravel
                </a>
                <a
                  href="https://www.tiktok.com/@happydetourtravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                >
                  <div className="flex w-5 h-5 items-center justify-center transition-transform duration-200 group-hover:scale-125">
                    <i className="ri-tiktok-line text-gray-400 group-hover:text-amber-500 transition-colors duration-200" />
                  </div>
                  @happydetourtravel
                </a>
              </div>

              {/* CTA */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-plane-fill text-sm leading-none" />
                    </span>
                    Start Planning My Trip
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-500 px-6 py-3 text-sm font-semibold hover:bg-amber-50 transition-colors whitespace-nowrap">
                    <div className="flex w-4 h-4 items-center justify-center text-amber-600">
                      <i className="ri-message-2-line" />
                    </div>
                    <span className="inline-flex items-baseline">
                      <a
                        href="tel:+13124602501"
                        className="text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
                      >
                        312-460-2501
                      </a>
                      <span className="relative group/sup">
                        <a
                          href="https://www.quo.com/policies/ORX9w5Luje"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:text-amber-600 transition-colors cursor-pointer"
                          style={{ fontSize: '0.58em', lineHeight: 0, position: 'relative', top: '-0.65em', verticalAlign: 'baseline', marginLeft: '1px' }}
                        >
                          1
                        </a>
                        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover/sup:opacity-100 transition-opacity duration-150 z-10">
                          SMS Privacy Policy
                          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                        </span>
                      </span>
                    </span>
                  </span>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="hidden lg:block self-stretch w-px bg-gradient-to-b from-transparent via-amber-200 to-transparent" />

          {/* Right: Quick Links */}
          <ScrollReveal direction="left" delay={150} duration={680} className="h-full flex items-center">
            <div className="w-full">
              <div className="rounded-2xl border border-gray-200 border-l-2 border-l-amber-300 bg-white p-6">
                <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-gray-500 hover:text-amber-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500">
                  Not sure where to start? That's fine. Just reach out and we'll figure it out together.
                </p>
                <div className="mt-4">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-100 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-plane-fill text-sm leading-none" />
                    </span>
                    Start Planning My Trip
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* WorldVia note */}
        <ScrollReveal direction="up" delay={100} duration={680}>
          <div className="mt-12 rounded-2xl border border-amber-100 bg-amber-50/50 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-100 shrink-0">
              <i className="ri-award-line text-amber-600 text-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Backed by WorldVia Travel Network
              </p>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                Happy Detour is part of one of the largest independent travel networks in the US. That means better access, better rates, and a little extra peace of mind for you.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-400">
          <p id="privacy-footnote" className="leading-relaxed">
            <sup>1</sup> By providing your phone number and opting in, you agree
            to receive SMS text messages from Happy Detour Travel related to
            travel inquiries, trip planning, booking confirmations, itinerary
            updates, travel alerts, and customer support. Message frequency
            varies. Message and data rates may apply. Reply STOP to opt out or
            HELP for assistance.{" "}
            <a
              href="https://www.quo.com/policies/ORX9w5Luje"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              Privacy Policy
            </a>
          </p>
          <p className="mt-4">© 2026 Happy Detour Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
