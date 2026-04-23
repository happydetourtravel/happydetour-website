import { useLocation } from "react-router-dom";

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";
const LOGO_URL = "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/logo.30fb1e8b14fa58c29568cadc94d36a72b9c0ae687633fcc7be077d2afe4d4a70.png";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-3" style={{ background: "linear-gradient(to right, #1a0e00, #2c1800)" }}>
        <a href="https://www.happydetour.com">
          <img src={LOGO_URL} alt="Happy Detour Travel" className="h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="https://www.happydetour.com" className="text-sm font-semibold text-white/80 hover:text-amber-400 transition-colors">Home</a>
          <a href="https://www.happydetour.com/about" className="text-sm font-semibold text-white/80 hover:text-amber-400 transition-colors">About</a>
          <a href="https://happydetourtravel.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/80 hover:text-amber-400 transition-colors">Blog</a>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-white px-4 py-2 rounded-full transition-all">Start Planning</a>
        </div>
      </nav>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-lg w-full">

          {/* Big faded 404 */}
          <div className="text-[8rem] md:text-[12rem] font-black leading-none select-none pointer-events-none mb-[-1rem]" style={{ color: "#007298", opacity: 0.1 }} aria-hidden="true">
            404
          </div>

          {/* Icon */}
          <div className="text-5xl mb-4">🧭</div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Looks like this page<br />
            <span style={{ color: "#007298" }}>took a detour.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            Looks like this trail went cold. Don't worry — I'll help you get back on the right path.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a
              href="https://www.happydetour.com"
              className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-6 py-3 text-white transition-all"
              style={{ background: "#F59E0B", boxShadow: "0 4px 14px rgba(245,158,11,0.3)" }}
            >
              🏕️ Back to Base Camp
            </a>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-6 py-3 transition-all border-2"
              style={{ color: "#007298", borderColor: "#007298", background: "#fff" }}
            >
              ✈️ Start Planning My Trip
            </a>
          </div>

          {/* Quick links */}
          <p className="text-xs text-gray-400 mb-3">Or jump to one of these:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="https://www.happydetour.com/about" className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:border-blue-400 hover:text-blue-600 transition-colors">About Eric</a>
            <a href="https://happydetourtravel.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:border-blue-400 hover:text-blue-600 transition-colors">Blog</a>
            <a href="https://www.happydetour.com/links" className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:border-blue-400 hover:text-blue-600 transition-colors">All Links</a>
            <a href="mailto:eric@happydetour.com" className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:border-blue-400 hover:text-blue-600 transition-colors">Contact Eric</a>
          </div>

          {/* Help link */}
          <p className="mt-4 text-xs text-gray-400">
            Still lost? <a href="mailto:eric@happydetour.com" className="text-blue-500 hover:underline font-semibold">Send me a quick email</a> and I'll find what you need.
          </p>

          {/* Tagline */}
          <p className="mt-10 text-sm italic text-gray-400">
            Affordable vacations. Fun experiences. Everyone welcome.
          </p>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-4 px-6 text-center text-xs text-white/40" style={{ background: "#1F2937" }}>
        <p>© 2026 Happy Detour Travel · <strong className="text-white/50">Eric Carney</strong> · <a href="mailto:eric@happydetour.com" className="text-amber-400 hover:underline">eric@happydetour.com</a></p>
      </footer>

    </div>
  );
}
