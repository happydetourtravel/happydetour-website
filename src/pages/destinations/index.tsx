import ScrollReveal from '../../components/base/ScrollReveal';

const FORM_URL = "https://forgehq.app/f/?s=yozjm6l0";
const VIRGIN_URL = "https://www.virginvoyages.com/book/voyage-planner/find-a-voyage?cabins=1&currencyCode=USD&agentId=278796&agencyId=589&bookingChannel=FMLINK&priceType=cabinPerNight";
const SANDALS_URL = "https://www.sandals.com/?referral=101731&agentid=ERCA7707";
const BEACHES_URL = "https://www.beaches.com/?referral=101731&agentid=ERCA7707";
const BLOG_URL = "https://happydetourtravel.wordpress.com";

const deals = [
  {
    emoji: "🚢",
    tag: "Adults Only",
    brand: "Virgin Voyages",
    headline: "No Kids. No Buffets. No Boring.",
    description: "Virgin Voyages flips the script on cruising with included dining, incredible entertainment, and a vibe that feels more like a boutique hotel at sea. Perfect for couples and solo travelers who want something completely different.",
    bestFor: "Couples & Solo Travelers",
    href: VIRGIN_URL,
    buttonText: "Browse Virgin Voyages",
    color: "border-red-100 hover:border-red-200",
    tagColor: "bg-red-50 text-red-600",
  },
  {
    emoji: "🌴",
    tag: "Couples Only",
    brand: "Sandals Resorts",
    headline: "The Ultimate Couples Escape",
    description: "Everything included. Nothing to worry about. Sandals delivers world class all-inclusive luxury for couples across Jamaica, Barbados, Saint Lucia and more. Stunning overwater bungalows, gourmet dining, unlimited premium drinks, and white sand beaches. This is what a real vacation feels like.",
    bestFor: "Couples & Honeymoons",
    href: SANDALS_URL,
    buttonText: "Explore Sandals",
    color: "border-amber-100 hover:border-amber-200",
    tagColor: "bg-amber-50 text-amber-600",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    tag: "Families",
    brand: "Beaches Resorts",
    headline: "Finally, a Vacation for the Parents Too.",
    description: "Beaches is Sandals built for families. Kids clubs, waterparks, family suites, and everything included so parents can actually breathe. Located in Turks and Caicos and Jamaica, Beaches gives every age group something to love while keeping the whole trip stress free.",
    bestFor: "Families with Kids",
    href: BEACHES_URL,
    buttonText: "Explore Beaches",
    color: "border-blue-100 hover:border-blue-200",
    tagColor: "bg-blue-50 text-blue-600",
  },
];

const otherLines = [
  { name: "Royal Caribbean", emoji: "👑", description: "Perfect for families and first time cruisers. Massive ships, endless activities, and itineraries all over the world." },
  { name: "Norwegian Cruise Line", emoji: "🌊", description: "Freestyle cruising with no set dining times, incredible entertainment, and routes across Alaska, Europe, and the Caribbean." },
  { name: "MSC Cruises", emoji: "⚓", description: "European elegance at sea. MSC offers stunning ships, Mediterranean routes, and some of the best value in cruising." },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up" delay={0} duration={680}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#007298' }}>
              Handpicked by Eric
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4" style={{ color: '#1F2937' }}>
              Travel Deals You Can't Miss
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              I've been on 17 cruises and explored the best Caribbean resorts so you don't have to.
              These are the trips I actually recommend to my friends.
              No fluff. No filler. Just the good stuff.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal direction="up" delay={0} duration={680}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-10 text-center" style={{ color: '#007298' }}>
              Featured Picks
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {deals.map((deal, i) => (
              <ScrollReveal key={deal.brand} direction="up" delay={i * 100} duration={680}>
                <div className={`bg-white rounded-2xl border-2 p-8 shadow-sm transition-all duration-200 h-full flex flex-col ${deal.color}`}>
                  <div className="text-4xl mb-4">{deal.emoji}</div>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit ${deal.tagColor}`}>
                    {deal.tag}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">{deal.brand}</p>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">{deal.headline}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{deal.description}</p>
                  <p className="text-xs text-gray-400 mb-6">Best for: {deal.bestFor}</p>
                  <a href={deal.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap">
                    {deal.buttonText} ✈️
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cruise Lines */}
      <section className="bg-white border-t border-gray-100 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal direction="up" delay={0} duration={680}>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#007298' }}>
                More Options
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Not Finding the Vibe?
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
                I also work with Royal Caribbean, Norwegian, and MSC. No direct booking link needed.
                Just tell me what you're looking for and I'll get to work in the lab.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
            {otherLines.map((line, i) => (
              <ScrollReveal key={line.name} direction="up" delay={i * 100} duration={680}>
                <div className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-6 text-center">
                  <div className="text-3xl mb-3">{line.emoji}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{line.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{line.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={300} duration={680}>
            <div className="text-center">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap">
                ✈️ Get a Custom Quote from Eric
              </a>
              <p className="text-sm text-gray-400 mt-3">
                My service is always free for you. The vendors pay me, so you can just focus on the packing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 text-center px-6">
        <p className="text-sm font-semibold mb-2" style={{ color: '#F59E0B' }}>
          Real trips. Real value. Someone actually in your corner.
        </p>
        <p className="text-xs mb-1" style={{ color: '#6B7280' }}>
          © 2026 Happy Detour Travel. All rights reserved. Happy Detour is a proud independent affiliate of WorldVia.
        </p>
        <p className="text-xs mb-2" style={{ color: '#9CA3AF' }}>
          Deals last refreshed: April 2026.
        </p>
        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: '#007298' }}>
          Check out the Lab Blog to see how I'm building this site.
        </a>
      </section>

    </main>
  );
}
