import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";

const services = [
  {
    icon: "ri-ship-line",
    title: "Cruise Vacations",
    description:
      "I work with all major cruise lines and know each one personally. Virgin Voyages is adults-only with no buffets and included dining, perfect for couples who want something different. Royal Caribbean is ideal for families and first-timers with massive ships and endless activities. Norwegian offers freestyle dining with no set times. MSC brings European elegance with stunning Mediterranean-style ships. Carnival is fun and affordable for groups. Cruises start as low as $299 per person and I sort through hundreds of options to find the right fit for you.",
    accent: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    icon: "ri-hotel-line",
    title: "All-Inclusive Resorts",
    description:
      "I specialize in Sandals and Beaches Resorts, two of the highest-rated all-inclusive brands in the Caribbean. Sandals is adults-only and couples-focused, with locations in Jamaica, Barbados, Saint Lucia, and more, known for overwater bungalows, gourmet dining, and unlimited premium drinks. Beaches welcomes families with kids clubs, waterparks, and family suites in Turks and Caicos and Jamaica. Both brands bundle meals, drinks, and activities into one price starting around $200 per person per night.",
    accent: "text-teal-600 bg-teal-50 border-teal-200",
  },
  {
    icon: "ri-map-2-line",
    title: "Custom Travel Experiences",
    description:
      "From a long weekend getaway to a two-week international trip, I build itineraries around your budget, timeline, and travel style. Honeymoons, family reunions, destination weddings, solo adventures, group sailings, I handle every booking and coordinate every detail. My planning service is always 100% free to you. Cruise lines and resorts pay my commission, so you get a dedicated travel advisor at no extra cost.",
    accent: "text-rose-500 bg-rose-50 border-rose-200",
  },
];

export default function TravelServices() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-14">
        <ScrollReveal direction="up" delay={0} duration={680}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              What I Help With
            </p>
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You Pick the Destination. I'll Figure Out the Rest.
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-7">
              No more hours spent comparing prices, reading reviews, or wondering if you're making the right call. Just tell me what you're hoping for. I'll take it from there.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} direction="up" delay={i * 130} duration={680}>
              <article
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 hover:border-gray-200 hover:shadow-md transition-all duration-200 h-full"
                aria-label={service.title}
              >
                <div
                  className={`flex w-12 h-12 items-center justify-center rounded-full border ${service.accent}`}
                  aria-hidden="true"
                >
                  <i className={`${service.icon} text-xl`} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-gray-500 leading-7 flex-1">
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={420} duration={680}>
          <div className="flex flex-col items-center gap-3 pt-4">
            
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start planning my trip with Happy Detour Travel"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-plane-fill text-base leading-none" aria-hidden="true" />
              </span>
              Start Planning My Trip
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
