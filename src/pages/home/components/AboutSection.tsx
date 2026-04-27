import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";

const ADVISOR_IMAGE =
  "https://static.websitebuilder-cdn.com/ff4558209215a440/media/img/advisor-consultation.d8568320beb24d17b1f85afa43cb9205.159c1c0c29690be857e712bce1febba19b6fdb5a060f1ac926c93ee5b116b38a.png";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Bio */}
          <ScrollReveal direction="right" delay={0} duration={700}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
                Your Travel Advisor
              </p>
              <p className="text-xs text-gray-400 mb-2">
                Happy Detour Travel is a personalized, free vacation planning service led by independent travel advisor Eric Carney, specializing in cruises and all-inclusive resorts.
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-snug">
                I'm Eric. I help people plan trips without making it complicated or overwhelming.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  Most people know they want to travel. They just don't know where to start — and honestly, the research can feel like a second job. That's where I come in.
                </p>
                <p>
                  You share a rough idea. I take it from there. I find the options, sort through the details, and help you pick something that actually fits — your budget, your timeline, your vibe.
                </p>
                <p>
                  And the best part? <strong className="text-gray-800">It's completely free to you.</strong> Cruise lines and resorts pay my commission. You get a real travel advisor without the extra cost.
                </p>
              </div>

              {/* Quote */}
              <figure role="note" className="mt-8 rounded-2xl border border-amber-100 bg-amber-50/60 px-6 py-5">
                <blockquote className="text-base font-medium leading-7 text-gray-800">
                  "Sometimes the best journeys begin with a Happy Detour."
                </blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-gray-500">
                  Eric Carney, Happy Detour Travel
                </figcaption>
              </figure>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-3">
                <div className="flex flex-wrap gap-4">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Start planning my trip with Happy Detour Travel"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-plane-fill text-sm leading-none" aria-hidden="true" />
                    </span>
                    Start Planning My Trip
                  </a>
                  <a
                    href="mailto:eric@happydetour.com"
                    aria-label="Email Eric Carney directly at eric@happydetour.com"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-400 px-7 py-3 text-sm font-semibold text-amber-600 hover:bg-amber-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-mail-line" aria-hidden="true" />
                    Email Eric Directly
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal direction="left" delay={150} duration={700}>
            <div>
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 w-full h-80 sm:h-96 lg:h-[420px]">
                <img
                  src={ADVISOR_IMAGE}
                  alt="Eric Carney, Happy Detour Travel advisor, helping a couple plan their vacation"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Proudly affiliated with the WorldVia Travel Network.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
