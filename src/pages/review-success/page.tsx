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

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            That's a wrap on a great detour!
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            Thank you for sharing the magic. Your story means everything to this brand.
          </p>
          <p className="text-base text-gray-500 leading-relaxed mb-10">
            I'm already back in the lab in Ohio, fueled by Dunkin' iced coffee,
            working on the next big adventure. The work never stops so yours can.
          </p>

          <p className="text-base font-semibold text-amber-600 mb-10">
            Affordable vacations. Fun experiences. Everyone welcome.
          </p>

          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-10 py-4 text-base font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap mb-12">
            ✈️ Plan Your Next Detour
          </a>

          <div className="bg-white border-2 border-dashed border-amber-200 rounded-2xl p-8 mb-10 shadow-sm">
            <p className="text-2xl mb-3">📸</p>
            <p className="text-base font-semibold text-gray-900 mb-2">
              Got vacation photos?
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Tag me in your best shots. I love seeing these trips out in the wild.
              It reminds me why I do this every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors whitespace-nowrap">
                📷 @happydetourtravel on Instagram
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 hover:border-amber-300 hover:text-amber-600 transition-colors whitespace-nowrap">
                👍 Happy Detour on Facebook
              </a>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
            <p className="text-sm font-semibold text-amber-700 mb-2">
              ⭐ Extra credit if you have 30 seconds
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              A quick star rating on my Facebook page goes a long way.
              It helps real people find Happy Detour when they need it most.
            </p>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-400 px-6 py-3 text-sm font-semibold text-amber-600 hover:bg-amber-100 transition-colors whitespace-nowrap mt-4">
              ⭐ Leave a Quick Star Rating
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-3">
              Curious how all this comes together?
            </p>
            <a href={BLOG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-8 py-3 text-sm font-semibold text-gray-600 hover:border-amber-300 hover:text-amber-600 transition-colors whitespace-nowrap">
              🔬 See How the Magic Happens
            </a>
          </div>

        </ScrollReveal>
      </div>
    </main>
  );
}
