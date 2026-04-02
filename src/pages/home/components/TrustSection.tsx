import ScrollReveal from '../../../components/base/ScrollReveal';

const PARTNERS = [
  { icon: "ri-ship-line", name: "Royal Caribbean" },
  { icon: "ri-ship-2-line", name: "Norwegian Cruise Line" },
  { icon: "ri-anchor-line", name: "Carnival Cruise Line" },
  { icon: "ri-ship-line", name: "MSC Cruises" },
  { icon: "ri-sun-line", name: "Sandals Resorts" },
  { icon: "ri-building-4-line", name: "Apple Leisure Group" },
];

const TRUST_POINTS = [
  {
    icon: "ri-umbrella-line",
    title: "I've got you if something comes up",
    body: "Flights change. Plans shift. If anything comes up, I take care of it so you're not stuck dealing with it. You get to enjoy your trip, not manage it.",
  },
  {
    icon: "ri-user-heart-line",
    title: "One advisor. One point of contact.",
    body: "Throughout your trip planning, you're working with me. I'll know your trip inside and out, you'll have clear ways to reach me, and I stay involved from our first conversation all the way to when you leave.",
  },
  {
    icon: "ri-hand-coin-line",
    title: "Free to you. Always.",
    body: "The cruise lines and resorts pay me, not you. So you get my full help for free. And honestly, I usually track down better deals than most people find on their own.",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="bg-stone-50 py-20 sm:py-28 border-t border-stone-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <ScrollReveal direction="up" delay={0} duration={680}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              In Good Hands
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              There's a real person behind every trip I plan.
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-7">
              Happy Detour isn't a big agency. It's me, Eric, working with you directly. I keep things simple, I'm easy to reach, and I actually care how your trip turns out.
            </p>
          </div>
        </ScrollReveal>

        {/* Main content: Photo + Trust Points */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">

          {/* Left: Photo placeholder */}
          <ScrollReveal direction="right" delay={80} duration={700} className="lg:col-span-2">
            <div className="flex flex-col gap-5">
              {/* Photo card */}
              <div className="relative overflow-hidden rounded-3xl border border-amber-100 aspect-[3/4] w-full max-w-xs mx-auto lg:mx-0">
                <img
                  src="https://storage.readdy-site.link/project_files/7166d022-4789-42e8-9d93-723259d98cde/9d5efe65-6dfd-4b96-a2f8-0fbb8e11abe7_Eric-and-Marianne.jpg?v=62bed44b3608b59e752b4de2139b4585"
                  alt="Eric Carney, Happy Detour Travel Advisor"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name card */}
              <div className="rounded-2xl bg-white border border-gray-100 px-5 py-4 flex items-center gap-4 max-w-xs mx-auto lg:mx-0 w-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 shrink-0">
                  <i className="ri-user-smile-line text-amber-600 text-base" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Eric Carney</p>
                  <p className="text-xs text-gray-500 mt-0.5">Independent Travel Advisor</p>
                  <p className="text-xs text-amber-600 font-medium mt-0.5">Happy Detour Travel</p>
                </div>
              </div>

              {/* WorldVia badge */}
              <div className="rounded-2xl bg-white border border-gray-100 px-5 py-4 flex items-center gap-3 max-w-xs mx-auto lg:mx-0 w-full">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-stone-100">
                  <i className="ri-award-line text-stone-500 text-base" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700 leading-tight">Affiliated with</p>
                  <p className="text-sm font-bold text-gray-900">WorldVia Travel Network</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Trust points */}
          <ScrollReveal direction="left" delay={160} duration={700} className="lg:col-span-3">
            <div className="flex flex-col gap-6">
              {TRUST_POINTS.map((point, i) => (
                <ScrollReveal key={point.title} direction="left" delay={160 + i * 100} duration={680}>
                  <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 hover:border-amber-200 transition-colors duration-200">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-50 border border-amber-100 text-amber-600 shrink-0 mt-0.5">
                      <i className={`${point.icon} text-lg`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug">{point.title}</h3>
                      <p className="mt-1.5 text-sm text-gray-500 leading-6">{point.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Partner strip */}
        <ScrollReveal direction="up" delay={300} duration={680}>
          <div className="mt-16 pt-10 border-t border-stone-200">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
              Brands I work with
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.name}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white py-4 px-3 hover:border-amber-200 hover:bg-amber-50/20 transition-all duration-200"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-amber-500">
                    <i className={`${partner.icon} text-xl`} />
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-gray-400">
              Because I work directly with these brands, I can usually get you better pricing and extras you just can't get booking on your own.
            </p>
          </div>
        </ScrollReveal>

        {/* Brand statement */}
        <ScrollReveal direction="up" delay={350} duration={680}>
          <div className="mt-14 text-center">
            <p className="text-xl font-semibold text-gray-800 tracking-wide sm:text-2xl">
              Affordable vacations.&nbsp; Fun experiences.&nbsp; Everyone welcome.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
