import ScrollReveal from '../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/b122b50f-8f98-43c6-a180-bf3f1afc90c5";
const GOOGLE_REVIEW_URL = "#";

const currentDetours = [
  "Finalizing an MSC cruise getaway with hotels for embarkation day",
  "Planning a Virgin Voyages adults-only sailing for February",
  "Preparing for a Virgin Voyages transatlantic crossing departing from Barcelona in October",
  "Researching Sandals resort options for couples looking for an all-inclusive escape",
  "Scouting Royal Caribbean itineraries for first time cruisers",
];

const testimonials: { name: string; location: string; trip: string; quote: string }[] = [];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up" delay={0} duration={680}>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              Real People. Real Trips.
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The Departure Lounge Is Getting Busy
            </h1>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              People are packing their bags. Passports are coming out of drawers.
              The first wave of Happy Detour travelers is heading out the door.
              Their stories are coming. Watch this space.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials or Active State */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {testimonials.length === 0 ? (
            <ScrollReveal direction="up" delay={100} duration={680}>

              {/* Human Metric Bar */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-16">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-amber-500">100%</p>
                  <p className="mt-1 text-sm text-gray-500">Focused on the next departure</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-amber-500">3+</p>
                  <p className="mt-1 text-sm text-gray-500">Dunkin' coffees deep into trip research today</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-amber-500">$0</p>
                  <p className="mt-1 text-sm text-gray-500">Cost to you. Always.</p>
                </div>
              </div>

              {/* Active Detours Ticker */}
              <div className="bg-white rounded-2xl border border-amber-100 p-8 shadow-sm mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-6 text-center">
                  Current Detours in the Works
                </p>
                <ul className="space-y-4">
                  {currentDetours.map((detour, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-amber-400 mt-0.5">✈️</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{detour}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Human Note */}
              <div className="text-center py-8">
                <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                  That's me. Eric. In my lab in Ohio, fueled by Dunkin' iced coffee and Coke Zero,
                  running high-tech automation so I can spend more time on the details that actually matter.
                  I'm not a booking engine. I'm a real person who genuinely loves planning great trips.
                  Reviews are on the way. The trips are already happening.
                </p>
              </div>

            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 100} duration={680}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-200">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-amber-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.location} · {t.trip}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal direction="up" delay={100} duration={680}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Had a great trip with me?
            </h2>
            <p className="text-gray-500 text-base mb-10 leading-relaxed">
              I want to hear about it. Not just because it helps the business but because
              I genuinely love knowing the trip went well. Tell me everything.
              Your story might be exactly what someone else needs to finally book that trip
              they have been putting off. Affordable vacations. Fun experiences. Everyone welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-500 px-8 py-4 text-base font-semibold text-amber-600 hover:bg-amber-50 transition-colors whitespace-nowrap">
                ⭐ Leave a Google Review
              </a>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap">
                ✈️ Tell Everyone About Your Happy Detour
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
