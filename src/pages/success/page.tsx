export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-950 to-black flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-7xl mb-6 animate-bounce">✈️</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Your detour starts now!
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          I've received your details and I'm already digging for deals.
          Expect to hear from me within 24–48 hours.
        </p>
        
         <a href="/"
          className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white hover:bg-amber-600 transition-all"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
