import ScrollReveal from '../../../components/base/ScrollReveal';
const STEPS = [
  {
    number: "01",
    title: "Tell me your idea",
    description:
      "Share whatever you have in mind, even if it's not fully planned.",
  },
  {
    number: "02",
    title: "I build your options",
    description:
      "I find trips that match your budget, style, and timing.",
  },
  {
    number: "03",
    title: "You choose what feels right",
    description:
      "No pressure. You decide what works best for you.",
  },
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-stone-50 py-20 sm:py-28 border-t border-stone-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal direction="up" delay={0} duration={680}>
          <div className="mx-auto max-w-xl text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              The Process
            </p>
            <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-7">
              Simple from start to finish.
            </p>
          </div>
        </ScrollReveal>
        <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6" aria-label="Planning process steps">
          <div
            className="hidden lg:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-amber-200"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <li key={step.number} className="relative flex flex-col items-center text-center lg:px-4">
              <ScrollReveal direction="up" delay={i * 140} duration={680}>
                <div className="relative z-10 flex w-20 h-20 items-center justify-center rounded-full border-2 border-amber-300 bg-white mb-6" aria-hidden="true">
                  <span className="text-2xl font-bold text-amber-500 leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-6 max-w-xs mx-auto">
                  {step.description}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
