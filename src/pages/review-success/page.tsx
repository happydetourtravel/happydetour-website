import ScrollReveal from '../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";
const BLOG_URL = "https://happydetourtravel.wordpress.com/";
const INSTAGRAM_URL = "https://www.instagram.com/happydetourtravel";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61582209485454";

export default function ReviewSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal direction="up" delay={0} duration={680}>

          <div className="text-5xl mb-6 flex justify-center gap-3">
            <span>🌴</span>
            <span>✈️</span>
            <span>🎉</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4" style={{ color: '#007298' }}>
            That's a wrap on a great detour!
          </h1>

          <p className="text-lg leading-relaxed mb-4" style={{ color: '#6B7280' }}>
            Thank you for sharing the magic. Your story means everything to this brand.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: '#6B7280' }}>
            I'm already back in the lab in Ohio, fueled by Dunkin' iced coffee,
            working on the next big adventure. The work never stops so yours can.
          </p>

          <p className="text-base font-semibold text-amber-600 mb-10">
            Affordable vacations. Fun experiences. Everyone welcome.
          </p>

          <div className="mb-12">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap">
              ✈️ Plan Your Next Detour
            </a>
          </div>

          <div className="bg-white border-2 border-dashed border-amber-200 rounded-2xl p-8 mb-10 shadow-sm">
            <p className="text-2xl mb-3">📸</p>
            <p className="text-base font-semibold mb-2" style={{ color: '#1F2937' }}>
              Got vacation photos?
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
              Tag me in your best shots. I love seeing these trips out in the wild.
              It reminds me why I do this every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors whitespace-nowrap hover:bg-blue-50" style={{ borderColor: '#007298', color: '#007298' }}>
                📷 @happydetourtravel on Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors whitespace-nowrap hover:bg-blue-50" style={{ borderColor: '#007298', color: '#007298' }}>
                👍 Happy Detour on Facebook
              </a>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
            <p className="text-sm font-semibold text-amber-700 mb-2">
              ⭐ Extra credit if you have 30 seconds
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              A quick star rating on my Facebook page goes a long way.
              It helps real people find Happy Detour when they need it most.
            </p>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors whitespace-nowrap hover:bg-blue-50" style={{ borderColor: '#007298', color: '#007298' }}>
              ⭐ Leave a Quick Star Rating
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm mb-3" style={{ color: '#6B7280' }}>
              Curious how all this comes together?
            </p>
            <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-3 text-sm font-semibold transition-colors whitespace-nowrap hover:bg-blue-50" style={{ borderColor: '#007298', color: '#007298' }}>
              🔬 See How the Magic Happens
            </a>
          </div>

        </ScrollReveal>
      </div>
    </main>
  );
}
