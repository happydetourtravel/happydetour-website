const LOGO_URL = "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/logo.30fb1e8b14fa58c29568cadc94d36a72b9c0ae687633fcc7be077d2afe4d4a70.png";

export default function SuccessPage() {
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
        </div>
      </nav>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 text-center">
        <div className="max-w-lg w-full">

          {/* Plane */}
          <div className="text-6xl mb-6 animate-bounce">✈️</div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-snug" style={{ color: "#007298" }}>
            Your Detour<br />Starts Now!
          </h1>

          {/* Message Card */}
          <div className="rounded-2xl p-6 mb-8 text-left" style={{ background: "#e6f4f8", border: "1px solid #cce9f1" }}>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#1e4d5e" }}>
              Thanks for reaching out! I've received your details and I'm already starting to look at the possibilities.
            </p>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#1e4d5e" }}>
              I'm a real person, not a robot, so give me a little time to dive into the research. I'll be in touch within <strong>24–48 hours</strong> to start our conversation.
            </p>
            <p className="text-base font-semibold" style={{ color: "#007298" }}>
              You just made travel planning a whole lot easier. 🙌
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            
             <a href="https://www.instagram.com/happydetourtravel/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-6 py-3 text-white transition-all"
  style={{ background: "#F59E0B", boxShadow: "0 4px 14px rgba(245,158,11,0.3)" }}
>
  📸 Join the Detour on Instagram
</a>
            
             <a href="https://www.happydetour.com"
              className="inline-flex items-center gap-2 rounded-full font-bold text-sm px-6 py-3 transition-all border-2"
              style={{ color: "#007298", borderColor: "#007298", background: "#fff" }}
            >
              🏠 Back to Home
            </a>
          </div>

          {/* While You Wait */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-8 text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#F59E0B" }}>☕ While You Wait</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="text-lg flex-shrink-0">📖</span>
                <span>Check out <a href="https://happydetourtravel.wordpress.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#007298" }}>the blog</a> while you wait. Travel tips, behind the scenes, and more.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="text-lg flex-shrink-0">☕</span>
                <span>I'm currently on my second Dunkin' of the day and already deep in research mode for you.</span>
              </li>
            </ul>
          </div>

          {/* Social Row */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.instagram.com/happydetourtravel/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center text-lg bg-white border border-gray-200 hover:border-blue-300 transition-all" aria-label="Instagram">📸</a>
            <a href="https://www.facebook.com/profile.php?id=61582209485454" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:border-blue-300 transition-all" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@happydetourtravel" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full flex items-center justify-center text-lg bg-white border border-gray-200 hover:border-blue-300 transition-all" aria-label="TikTok">🎵</a>
          </div>

          {/* Tagline */}
          <p className="text-sm italic text-gray-400">
            Affordable vacations. Fun experiences. Everyone welcome.
          </p>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-4 px-6 text-center text-xs" style={{ background: "#1F2937", color: "rgba(255,255,255,0.35)" }}>
        <p>© 2026 Happy Detour Travel · <strong style={{ color: "rgba(255,255,255,0.5)" }}>Eric Carney</strong> · Affiliated with WorldVia Travel Network · <a href="mailto:eric@happydetour.com" style={{ color: "#F59E0B" }}>eric@happydetour.com</a></p>
      </footer>

    </div>
  );
}
