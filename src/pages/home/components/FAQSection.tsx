import { useState } from 'react';
import ScrollReveal from '../../../components/base/ScrollReveal';

const FORM_URL = "https://happydetour.app.n8n.cloud/form/ec5185b0-7ac2-4940-8dd3-f46039ff0a69";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is this actually free? What's the catch?",
    answer: "No catch. My services cost you nothing. Travel suppliers like cruise lines and resorts pay me a commission when you book. Same idea as a mortgage broker. You get someone actually looking out for you, and it doesn't cost you a cent more than if you'd booked it yourself."
  },
  {
    question: "Why work with you instead of just booking online?",
    answer: "When you book online, you're on your own. You're sorting through hundreds of options, hoping the reviews are real, and figuring out the fine print alone. With me, you skip all of that. I know which ships and resorts are actually worth it, I handle every detail, and if something goes wrong before or during your trip, you call me, not some 1-800 number."
  },
  {
    question: "What happens after I fill out the form?",
    answer: "You'll be guided through a simple, easy process right from the start. You may get an initial reply to help get things set up, and from there we'll connect over email or a quick call, whatever's easier for you. I'll ask a few questions about what you're thinking, share some ideas, and go from there. No commitment, no pressure. Just a conversation."
  },
  {
    question: "How does the planning process work?",
    answer: "Simple. You share your rough idea: dates, budget, who's coming, what kind of trip. I come back with a few solid options that actually fit. You pick what feels right, I handle the booking and all the details, and you focus on looking forward to the trip."
  },
  {
    question: "What if I have no idea what I want yet?",
    answer: "That's honestly the best time to reach out. A lot of my clients start with \"we want a vacation, we're just not sure what kind.\" I'll ask the right questions and help you figure out what'll actually make you happy, not just what's popular."
  },
  {
    question: "What if something goes wrong before or during my trip?",
    answer: "You call me. I'm not a faceless booking platform. I know your trip and I'll help you sort it out. I also walk you through what you need to know before you go. No surprises."
  },
  {
    question: "How far ahead should I reach out?",
    answer: "6–12 months out gets you the best selection and pricing, especially for peak seasons or popular cruise itineraries. That said, don't let timing stop you. Reach out and I'll tell you honestly what's available."
  },
  {
    question: "Can you help with groups or special occasions?",
    answer: "Definitely. Destination weddings, family reunions, anniversary trips, milestone birthdays. Groups are some of my favorite trips to plan. They also tend to get better pricing and extras that solo bookings just don't."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal direction="up" delay={100} duration={700}>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Still on the fence? Let's clear that up.
            </h2>
            <p className="mt-4 text-base text-gray-500">
              These are the questions most people have before reaching out. Answered honestly, no fluff.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={150 + index * 50}
              duration={600}
            >
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex-1 text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <i className="ri-arrow-down-s-line text-xl text-amber-500" />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0px',
                    opacity: openIndex === index ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600} duration={600}>
          <div className="mt-14 flex flex-col items-center gap-3">
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
            <p className="text-sm text-gray-400">Start with an idea. I'll help from there.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
