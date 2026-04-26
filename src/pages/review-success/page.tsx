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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.074-3.031.44-4.171 1.581C1.74 2.793 1.374 4.215 1.3 5.824 1.242 7.104 1.228 7.512 1.228 12c0 4.488.014 4.896.072 6.176.074 1.609.44 3.031 1.581 4.171 1.14 1.141 2.562 1.507 4.171 1.581 1.28.058 1.688.072 4.948.072s3.667-.014 4.947-.072c1.609-.074 3.031-.44 4.171-1.581 1.141-1.14 1.507-2.562 1.581-4.171.058-1.28.072-1.688.072-4.948s-.014-3.667-.072-4.947c-.074-1.609-.44-3.031-1.581-4.171C19.178 1.74 17.756 1.374 16.147 1.3 14.867 1.242 14.459 1.228 12 1.228zm0 5.838a4.934 4.934 0 100 9.868 4.934 4.934 0 000-9.868zm0 8.134a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.406-8.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"/></svg>
    Instagram
  </a>
  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-colors whitespace-nowrap hover:bg-blue-50" style={{ borderColor: '#007298', color: '#007298' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
    Facebook
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
