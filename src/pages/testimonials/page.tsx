import ScrollReveal from '../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";
const GOOGLE_REVIEW_URL = "#";

const testimonials: { name: string; location: string; trip: string; quote: string }[] = [];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">

      <section className="bg-white border-b border-gray-100 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up" delay={0} duration={680}>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              Real People. Real Trips.
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Happy Detours Worth Talking About
            </h1>
            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Nothing makes me happier than hearing about a trip that went exactly right.
              Here's what some of my clients have had to say.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {testimonials.length === 0 ? (
            <ScrollReveal direction="up" delay={100} duration={680}>
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🌴</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  The reviews are coming — the trips are already planned.
                </h2>
                <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                  Happy Detour Travel is just getting started. The first wave of happy travelers
                  is on their way. Check back soon — this page is about to get busy.
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

      <section className="bg-white border-t border-gray-100 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal direction="up" delay={100} duration={680}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Been on a trip with me?
            </h2>
            <p className="text-gray-500 text-base mb-10 leading-relaxed">
              I'd love to hear about it. Your story might be exactly what someone else
              needs to finally take that trip they've been putting off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
               <a href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-500 px-8 py-4 text-base font-semibold text-amber-600 hover:bg-amber-50 transition-colors whitespace-nowrap"
              >
                ⭐ Leave a Google Review
              </a>
              
               <a href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap"
              >
                ✈️ Tell Everyone About Your Happy Detour
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
