import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/ec5185b0-7ac2-4940-8dd3-f46039ff0a69";

const services = [
  {
    icon: "ri-ship-line",
    title: "Cruise Vacations",
    description:
      "Cruises are a lot to sort through on your own. Hundreds of ships, itineraries, and prices. I do that work for you and come back with a few options that actually match what you're looking for. We talk through them, you pick the one you like, and I handle everything from there.",
    accent: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    icon: "ri-hotel-line",
    title: "All-Inclusive Resorts",
    description:
      "Not all all-inclusives are created equal, and I've seen the difference firsthand. I'll point you toward the ones that are genuinely worth it and steer you away from the ones that look good in photos but disappoint in person. You get the right resort the first time.",
    accent: "text-teal-600 bg-teal-50 border-teal-200",
  },
  {
    icon: "ri-map-2-line",
    title: "Custom Travel Experiences",
    description:
      "Maybe you have a specific trip in mind. Maybe you just know you need to get away. Either way, I'll ask the right questions, put together something that actually fits your life, and handle every booking so you don't have to coordinate a single thing.",
    accent: "text-rose-500 bg-rose-50 border-rose-200",
  },
];

export default function TravelServices() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-14">
        {/* Header */}
        <ScrollReveal direction="up" delay={0} duration={680}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              What I Help With
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              You Pick the Destination. I'll Figure Out the Rest.
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-7">
              No more hours spent comparing prices, reading reviews, or wondering if you're making the right call. Just tell me what you're hoping for. I'll take it from there.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} direction="up" delay={i * 130} duration={680}>
              <article
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 hover:border-gray-200 hover:shadow-md transition-all duration-200 h-full"
              >
                <div
                  className={`flex w-12 h-12 items-center justify-center rounded-full border ${service.accent}`}
                >
                  <i className={`${service.icon} text-xl`} />
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

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={420} duration={680}>
          <div className="flex flex-col items-center gap-3 pt-4">
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
