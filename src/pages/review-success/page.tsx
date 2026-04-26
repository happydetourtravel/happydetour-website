import ScrollReveal from '../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";

export default function ReviewSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center py-20">
        <ScrollReveal direction="up" delay={0} duration={680}>
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Your story just landed in the lab.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            I cannot wait to read about your adventures. Thank you for letting me be a part of your journey.
            Now go unpack and start dreaming about the next one.
          </p>
          <p className="text-base font-semibold text-amber-600 mb-10">
            Affordable vacations. Fun experiences. Everyone welcome.
          </p>
          
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap"
          >
            ✈️ Plan Your Next Detour
          </a>
        </ScrollReveal>
      </div>
    </main>
  );
}
