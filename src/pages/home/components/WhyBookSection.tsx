import ScrollReveal from '../../../components/base/ScrollReveal';
const FORM_URL = "https://api.leadconnectorhq.com/widget/form/V4qo3lEB8oTtXbuWILfK";
const reasons = [
  {
    icon: "ri-map-pin-user-line",
    title: "Built Around You",
    description:
      "Tired of packages that almost fit but not quite? I build your trip around your budget, your pace, and what you actually care about. Not whatever's left in inventory.",
  },
  {
    icon: "ri-compass-3-line",
    title: "No More Guessing",
    description:
      "You shouldn't have to wonder if the reviews are real or if the 'ocean view' is actually a parking lot. I've been there myself. I'll tell you exactly what's worth it and what to avoid.",
  },
  {
    icon: "ri-leaf-line",
    title: "Close the Tabs",
    description:
      "Stop spending your evenings drowning in comparison sites. Hand me the idea. I'll come back with the right options. No research rabbit holes. No decision fatigue.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "I've got you if something comes up",
    description:
      "Flights change. Plans shift. If anything comes up, I take care of it so you're not stuck dealing with it. You get to enjoy your trip, not manage it.",
  },
];
export default function WhyBookSection() {
  return (
    <section id="why" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
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

        <ScrollReveal direction="up" delay={150} duration={680}>
          <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-amber-100 bg-amber-50/50 px-8 py-8 text-center sm:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-amber-500">17+</p>
              <p className="mt-1 text-sm text-gray-500">Cruises taken personally</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-500">0</p>
              <p className="mt-1 text-sm text-gray-500">Hidden costs or surprises</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-500">3+</p>
              <p className="mt-1 text-sm text-gray-500">Countries visited personally</p>
            </div>
            <div>
               <p className="text-3xl font-bold text-amber-500">100%</p>
              <p className="mt-1 text-sm text-gray-500">Heavy lifting handled by me</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} direction="up" delay={i * 110} duration={680}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-200 h-full">
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

        <ScrollReveal direction="up" delay={480} duration={680}>
          <div className="mt-14 flex flex-col items-center gap-3">
             <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer">
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
