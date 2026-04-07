import { useEffect, useState } from 'react';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/91799171-4079-4ab7-9d13-9417ae57dfba";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`
        fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out
        ${visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'}
      `}
      aria-hidden={!visible}
    >
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-2.5 rounded-full
          bg-amber-500 hover:bg-amber-600 active:scale-95
          px-6 py-3.5
          text-white text-sm font-semibold whitespace-nowrap
          transition-all duration-200 cursor-pointer
        "
      >
        <span className="w-4 h-4 flex items-center justify-center">
          <i className="ri-plane-fill text-base leading-none" />
        </span>
        Start Planning My Trip
      </a>
    </div>
  );
}
