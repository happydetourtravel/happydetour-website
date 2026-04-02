import { useState, useEffect } from "react";

const LOGO_URL =
  "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/logo.30fb1e8b14fa58c29568cadc94d36a72b9c0ae687633fcc7be077d2afe4d4a70.png";

// If you have an icon-only / simplified logo for mobile, paste its URL here.
// It will automatically be used on small screens instead of the full logo.
const LOGO_MOBILE_URL = LOGO_URL;

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Start Planning My Trip", href: "https://happydetour.app.n8n.cloud/form/ec5185b0-7ac2-4940-8dd3-f46039ff0a69" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-transparent backdrop-blur-[3px]"
        }`}
      >
        {/* Full-width gradient scrim — darkens the header band over the hero for full contrast */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0) 100%)",
          }}
        />

        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2.5 lg:px-10 lg:py-3">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center shrink-0 transition-all duration-300"
          >
            {/* Mobile logo */}
            <img
              src={LOGO_MOBILE_URL}
              alt="Happy Detour Travel"
              className={`block lg:hidden h-16 w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "brightness-100"
                  : "brightness-115 drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]"
              }`}
            />
            {/* Desktop logo — full size, clearly readable */}
            <img
              src={LOGO_URL}
              alt="Happy Detour Travel logo"
              className={`hidden lg:block w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "h-[62px] brightness-100"
                  : "h-[72px] brightness-115 drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
              }`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                  scrolled
                    ? "text-gray-700 hover:text-amber-600"
                    : "text-white hover:text-amber-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`flex items-center justify-center w-8 h-8 lg:hidden transition-colors ${
              scrolled
                ? "text-gray-700"
                : "text-white [filter:drop-shadow(0_1px_6px_rgba(0,0,0,0.5))]"
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <i className="ri-menu-line text-2xl" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src={LOGO_MOBILE_URL} alt="Happy Detour Travel" className="h-14 w-auto object-contain" />
              <button
                className="flex items-center justify-center w-8 h-8 text-gray-500"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <i className="ri-close-line text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
