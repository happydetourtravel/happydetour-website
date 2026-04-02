import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/ec5185b0-7ac2-4940-8dd3-f46039ff0a69";

const reasons = [
  {
    icon: "ri-map-pin-user-line",
    title: "Built Around You",
    description:
      "Tired of packages that almost fit but not quite? I build your trip around your budget, your pace, and what you actually care about. Not whatever\u2019s left in inventory.",
  },
  {
    icon: "ri-compass-3-line",
    title: "No More Guessing",
    description:
      "You shouldn\u2019t have to wonder if the reviews are real or if the \u201cocean view\u201d is actually a parking lot. I\u2019ve been there myself. I\u2019ll tell you exactly what\u2019s worth it and what to avoid.",
  },
  {
    icon: "ri-leaf-line",
    title: "Close the Tabs",
    description:
      "Stop spending your evenings drowning in comparison sites. Hand me the idea. I\u2019ll come back with the right options. No research rabbit holes. No decision fatigue.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "I\u2019ve got you if something comes up",
    description:
      "Flights change. Plans shift. If anything comes up, I take care of it so you\u2019re not stuck dealing with it. You get to enjoy your trip, not manage it.",
  },
];

export default function WhyBookSection() {
  return (
    <section id="why" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal direction="up" delay={0} duration={680}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              Why Work With Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You Should Be Excited, Not Overwhelmed
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-7">
              Planning a trip shouldn't feel like a second job. Here's how I take that weight off your plate, from the first idea to the day you leave.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} direction="up" delay={i * 110} duration={680}>
              <div
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200 h-full"
              >
                <div className="flex w-10 h-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-amber-600">
                  <i className={`${reason.icon} text-lg`} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-6">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={480} duration={680}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-plane-fill text-base leading-none" />
              </span>
              Start Planning My Trip
            </a>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
