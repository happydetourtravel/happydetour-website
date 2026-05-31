import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://api.leadconnectorhq.com/widget/form/V4qo3lEB8oTtXbuWILfK";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-amber-50 border-t border-amber-100 py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-100/50" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-100/35" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal direction="up" delay={0} duration={700}>
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            You don't need to have it all figured out.
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100} duration={700}>
          <p className="mt-3 text-2xl font-semibold text-amber-500 sm:text-3xl">
            Just reach out.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200} duration={700}>
          <p className="mt-6 text-lg font-semibold text-gray-700 sm:text-xl leading-relaxed">
            Real trips.{" "}
            <span className="text-amber-500">Real value.</span>{" "}
            Someone actually in your corner.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={700}>
          <div className="mt-10 flex flex-col items-center gap-3">
            
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start planning my trip with Happy Detour Travel"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-500 px-12 py-4 text-base font-semibold text-white hover:bg-amber-600 active:scale-95 transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-plane-fill text-base leading-none" aria-hidden="true" />
              </span>
              Start Planning My Trip
            </a>
            <p className="text-sm text-gray-500">
              Start with an idea. I'll help from there.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://api.leadconnectorhq.com/widget/form/V4qo3lEB8oTtXbuWILfK";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-amber-50 border-t border-amber-100 py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-100/50" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-100/35" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal direction="up" delay={0} duration={700}>
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            You don't need to have it all figured out.
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100} duration={700}>
          <p className="mt-3 text-2xl font-semibold text-amber-500 sm:text-3xl">
            Just reach out.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200} duration={700}>
          <p className="mt-6 text-lg font-semibold text-gray-700 sm:text-xl leading-relaxed">
            Real trips.{" "}
            <span className="text-amber-500">Real value.</span>{" "}
            Someone actually in your corner.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300} duration={700}>
          <div className="mt-10 flex flex-col items-center gap-3">
            
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start planning my trip with Happy Detour Travel"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-500 px-12 py-4 text-base font-semibold text-white hover:bg-amber-600 active:scale-95 transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-plane-fill text-base leading-none" aria-hidden="true" />
              </span>
              Start Planning My Trip
            </a>
            <p className="text-sm text-gray-500">
              Start with an idea. I'll help from there.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
