"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  category: "all" | "umrah" | "visa" | "domestic" | "booking";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: "booking",
    question: "How do I book a tour package or Umrah journey with Fatima Travels?",
    answer:
      "You can initiate a booking seamlessly by contacting us directly through our 24/7 WhatsApp consultation, requesting a quote online, or visiting our offices. Our dedicated travel specialists will prepare a comprehensive itinerary including flights, vetted luxury hotel options, and transparent pricing tailored to your group.",
  },
  {
    id: 2,
    category: "visa",
    question: "Do you provide complete visa processing and document assistance?",
    answer:
      "Yes, we provide end-to-end visa assistance. This includes Saudi Umrah & Tourist e-visas, UAE/Dubai visas, Schengen Europe guidance, Turkey, Malaysia, Azerbaijan, Singapore, UK, and USA visitor visas. We assist with document verification, cover letters, appointment scheduling, and submission.",
  },
  {
    id: 3,
    category: "umrah",
    question: "What is included in your VIP Executive Umrah packages?",
    answer:
      "Our VIP Umrah packages feature 5-star luxury accommodations directly in front of the Haram in Makkah and Masjid an-Nabawi in Madinah, private GMC / VIP luxury transfers between cities and airports, direct visa processing, breakfast buffets, and 24/7 dedicated on-ground ziyarat coordinators.",
  },
  {
    id: 4,
    category: "booking",
    question: "Can I customize an international or domestic itinerary according to my schedule and budget?",
    answer:
      "Absolutely. Every package on our website can be fully customized for private families, honeymoon couples, or corporate groups. You can choose your preferred departure dates, upgrade hotel categories, add excursions, or adjust duration according to your exact budget.",
  },
  {
    id: 5,
    category: "domestic",
    question: "What transport and safety standards are provided on Northern Pakistan tours?",
    answer:
      "For all domestic tours (Hunza, Skardu, Swat, Neelum Valley, Fairy Meadows), we provide late-model luxury 4x4 Prados and high-roof Grand Cabin coasters. Our mountain drivers are certified, vetted, and deeply experienced. All stays are pre-arranged at top-tier scenic resorts with emergency backup.",
  },
  {
    id: 6,
    category: "booking",
    question: "What payment methods and installment options do you offer?",
    answer:
      "We accept direct bank transfers (PKR and foreign currencies), online credit/debit card payments, pay orders, and in-person payments at our office. For advance bookings (such as Hajj, Umrah, and international holiday packages), flexible milestone installment plans are available.",
  },
  {
    id: 7,
    category: "visa",
    question: "What happens if a visa or flight gets delayed or cancelled?",
    answer:
      "We adhere to transparent and customer-first cancellation and rescheduling policies. In the event of unforeseen flight schedule alterations or visa processing delays, our team works directly with airlines and hotels to minimize cancellation charges and facilitate date amendments.",
  },
  {
    id: 8,
    category: "booking",
    question: "Do you handle standalone flight tickets and luxury hotel bookings?",
    answer:
      "Yes! In addition to complete tour packages, we offer standalone international and domestic airline ticketing at competitive corporate fares across all major airlines (Emirates, Qatar Airways, PIA, Saudia, Turkish Airlines, Flydubai), along with worldwide hotel reservations.",
  },
];

const categories = [
  { label: "All Questions", value: "all" },
  { label: "Hajj & Umrah", value: "umrah" },
  { label: "Visas & Passports", value: "visa" },
  { label: "Domestic Tours", value: "domestic" },
  { label: "Booking & Payment", value: "booking" },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIds, setOpenIds] = useState<number[]>([1]); // First item open by default
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white md:py-32"
    >
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/[0.03] blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-[1300px] px-6 md:px-10 lg:px-14">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-amber-400/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-300/90">
              Clear & Transparent Answers
            </span>
            <span className="h-px w-8 bg-amber-400/40" />
          </div>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            Everything you need to know about our luxury holiday packages, sacred pilgrimages, visa assistance, and private booking process.
          </p>
        </div>

        {/* =========================================
            SEARCH & CATEGORY TABS
        ========================================= */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 md:mt-14">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Visa, Umrah, Payment)..."
              className="w-full rounded-full border border-white/15 bg-zinc-900/70 px-5 py-3 pl-11 text-xs text-white placeholder-white/40 backdrop-blur-md transition-all focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/30 sm:text-sm"
            />
            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`rounded-full px-4 py-2 text-xs font-medium tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400 font-semibold text-black shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                      : "border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            INTERACTIVE ACCORDION LIST
        ========================================= */}
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          <AnimatePresence>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isOpen = openIds.includes(faq.id);

                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden rounded-[22px] border transition-all duration-400 ${
                      isOpen
                        ? "border-amber-400/40 bg-zinc-900/90 shadow-[0_15px_35px_rgba(0,0,0,0.7)] ring-1 ring-amber-400/15"
                        : "border-white/10 bg-zinc-900/40 hover:border-white/25 hover:bg-zinc-900/60"
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors sm:p-7"
                    >
                      <span className={`font-serif text-lg font-medium transition-colors sm:text-xl ${
                        isOpen ? "text-amber-300" : "text-white group-hover:text-white"
                      }`}>
                        {faq.question}
                      </span>

                      {/* Animated Plus / Close Icon */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-amber-400/50 bg-amber-400 text-black shadow-[0_0_15px_rgba(251,191,36,0.4)] rotate-45"
                            : "border-white/15 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <svg
                          className="h-4 w-4 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Accordion Expandable Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-relaxed text-white/75 sm:px-7 sm:pb-7 sm:text-base sm:leading-8">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-10 text-center">
                <p className="text-sm text-white/60">No matching questions found for &ldquo;{searchQuery}&rdquo;.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-300 hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================================
            STILL HAVE QUESTIONS? BOTTOM CARD
        ========================================= */}
        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[26px] border border-amber-500/25 bg-gradient-to-r from-amber-950/30 via-zinc-900/80 to-zinc-900/50 p-8 backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-300">
                24/7 Traveler Helpdesk
              </span>
              <h4 className="mt-1 font-serif text-2xl font-medium text-white md:text-3xl">
                Have a Specific Question or Custom Request?
              </h4>
              <p className="mt-2 text-xs text-white/70 sm:text-sm">
                Speak directly with our senior travel specialists for immediate flight, visa, or Umrah guidance.
              </p>
            </div>

            <a
              href="https://wa.me/923001234567?text=Hello%20Fatima%20Travels!%20I%20have%20a%20question%20regarding%20travel%20packages%20and%20visas."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all hover:bg-amber-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] active:scale-95"
            >
              <span>Chat with an Expert</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
