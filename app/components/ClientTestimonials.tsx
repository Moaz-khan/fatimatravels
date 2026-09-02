"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  id: number;
  name: string;
  roleOrLocation: string;
  service: string;
  avatar: string;
  rating: number;
  date: string;
  quote: string;
  tripHighlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Haji Muhammad Tariq",
    roleOrLocation: "Karachi, Pakistan",
    service: "Executive VIP Umrah",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Travelled Jan 2026",
    tripHighlight: "Clock Tower View & Private Transfers",
    quote:
      "From the visa issuance to our 5-star hotel right in front of the Haram in Makkah, everything was exceptionally managed. Our family felt truly blessed and peaceful throughout our Umrah journey. The Fatima Travels team was available 24/7 on WhatsApp.",
  },
  {
    id: 2,
    name: "Dr. Farooq & Begum",
    roleOrLocation: "Lahore, Pakistan",
    service: "Luxury Hajj Expedition",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Hajj Season",
    tripHighlight: "VIP Mina Camp & Guidance",
    quote:
      "Performing Hajj with Fatima Travels was a life-changing spiritual experience. The dedicated air-conditioned camps in Mina, private luxury transport between rituals, and deeply knowledgeable scholar guidance made an immense difference for our elderly parents.",
  },
  {
    id: 3,
    name: "Zubair & Family",
    roleOrLocation: "Islamabad, Pakistan",
    service: "Dubai Luxury Experience",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Travelled Dec 2025",
    tripHighlight: "Burj Khalifa Lounge & Desert Safari",
    quote:
      "Our 5-day holiday in Dubai was completely effortless. The private red dune desert safari, priority lounge access at Burj Khalifa, and timely chauffeured transfers were immaculate. Truly five-star service from initial booking to returning home.",
  },
  {
    id: 4,
    name: "Hamza & Ayesha",
    roleOrLocation: "Rawalpindi, Pakistan",
    service: "Maldives Honeymoon Retreat",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Travelled Feb 2026",
    tripHighlight: "Private Overwater Villa & Seaplane",
    quote:
      "Our honeymoon in the Maldives was pure magic. The private overwater villa recommendation and seamless seaplane arrangements exceeded all our expectations. Fatima Travels handled every small detail with sheer perfection.",
  },
  {
    id: 5,
    name: "Bilal Siddiqui",
    roleOrLocation: "Peshawar, Pakistan",
    service: "Hunza & Skardu Expedition",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Travelled Autumn 2025",
    tripHighlight: "Karakoram Highway & Attabad Lake",
    quote:
      "Exploring Hunza Valley and Attabad Lake with their private Prado tour was unmatched. The chauffeur was extremely professional and courteous, the resort views were breathtaking, and there was zero hassle throughout our journey.",
  },
  {
    id: 6,
    name: "Mrs. Sadia Rehman",
    roleOrLocation: "Lahore, Pakistan",
    service: "Grand Swiss Alps Tour",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Travelled Sep 2025",
    tripHighlight: "Mount Titlis & Scenic Rail Pass",
    quote:
      "Getting our Schengen visa guided smoothly without a single objection, and then experiencing Mount Titlis, Interlaken, and Lake Lucerne was a dream come true for our family. Exceptional professionalism and honesty.",
  },
  {
    id: 7,
    name: "Kamran Hashmi",
    roleOrLocation: "Faisalabad, Pakistan",
    service: "Malaysia Family Vacation",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
    rating: 5,
    date: "Travelled Nov 2025",
    tripHighlight: "Langkawi Island & Sunway Lagoon",
    quote:
      "Travelling with three young children can be daunting, but Fatima Travels took care of every single itinerary detail—from theme park VIP passes to airport meet-and-greet in Kuala Lumpur. We wouldn't travel with anyone else!",
  },
];

const AUTO_ROTATE_MS = 6000;

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = testimonials.length;

  const handleNext = useCallback(() => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx: number) => {
    setDirection(idx > activeIndex ? "right" : "left");
    setActiveIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Autoplay rotation
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-transparent py-24 text-black md:py-32"
    >
      {/* Ambient Luxury Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[750px] rounded-full bg-amber-500/[0.035] blur-[150px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-emerald-500/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        
        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Tagline */}
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-black" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#5409DA]">
              Trusted by 10,000+ Travelers
            </span>
            <span className="h-px w-8 bg-black" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]">
            Stories of Unforgettable Journeys
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-sm leading-relaxed text-black sm:text-base md:text-lg">
            Hear from our esteemed travelers who entrusted their sacred pilgrimages, family holidays, and luxury escapes to Fatima Travels.
          </p>
        </motion.div>

        {/* =========================================
            STAGGERED STACKED TESTIMONIAL CARDS
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-16 flex min-h-[460px] w-full max-w-[800px] items-center justify-center sm:min-h-[440px] md:min-h-[420px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((item, index) => {
            // Calculate distance relative to activeIndex (-2, -1, 0, 1, 2)
            const rawDiff = (index - activeIndex + total) % total;
            const diff = rawDiff > total / 2 ? rawDiff - total : rawDiff;
            const isActive = diff === 0;

            // Only render cards within near viewing range (-2 to +2) to keep DOM clean and performant
            const isVisible = Math.abs(diff) <= 2;
            if (!isVisible) return null;

            // Staggered transformation variables
            const zIndex = 30 - Math.abs(diff) * 10;
            const scale = isActive ? 1 : Math.abs(diff) === 1 ? 0.94 : 0.88;
            const rotate = diff === 0 ? 0 : diff === 1 ? 3.5 : diff === -1 ? -3.5 : diff === 2 ? 6.5 : -6.5;
            const xOffset = diff * 45; // Horizontal peek
            const yOffset = Math.abs(diff) * 16; // Vertical stagger depth
            const opacity = isActive ? 1 : Math.abs(diff) === 1 ? 0.45 : 0.2;

            return (
              <motion.div
                key={item.id}
                onClick={() => handleSelect(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  scale: scale,
                  rotate: rotate,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26,
                  mass: 0.8,
                }}
                style={{ zIndex }}
                className={`absolute w-full max-w-[92vw] cursor-pointer rounded-[28px] border transition-all duration-500 sm:max-w-[560px] md:max-w-[640px] lg:max-w-[700px] ${
                  isActive
                    ? "border-[#5409DA]/40 bg-[#FBFBFB] p-7 shadow-lg ring-1 ring-[#5409DA]/20 sm:p-9 md:p-10"
                    : "border-gray-200 bg-[#FBFBFB] p-7 hover:border-[#5409DA]/30 sm:p-9 md:p-10"
                }`}
              >
                {/* Top Card Bar: Rating & Service Pill */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Star Rating & Quote Symbol */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[#5409DA]">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-sm sm:text-base">
                          ★
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] font-medium text-black">
                      5.0
                    </span>
                  </div>

                  {/* Service Badge */}
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-[#5409DA] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
                      {item.service}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="relative mt-6">
                  {/* Large Decorative Watermark Quote Mark */}
                  <span className="pointer-events-none absolute -left-2 -top-5 select-none font-serif text-6xl font-black text-black/10 sm:-left-3 sm:-top-7 sm:text-7xl">
                    “
                  </span>

                  <p className="relative z-10 text-sm font-normal leading-relaxed text-black sm:text-base sm:leading-8 md:text-[17px]">
                    {item.quote}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#5409DA]/20 bg-blue-50/50 px-3 py-1.5 text-xs text-black backdrop-blur-md">
                  <span className="text-[#5409DA]">✦</span>
                  <span className="text-[11px] text-black">Highlight: {item.tripHighlight}</span>
                </div>

                {/* Client Profile Footer */}
                <div className="mt-7 flex items-center justify-between pt-5">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar with Glow Border */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#5409DA]/40 ring-2 ring-white shadow-sm">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="50px"
                        className="object-cover"
                      />
                    </div>

                    {/* Name & Origin */}
                    <div>
                      <h4 className="font-serif text-base font-medium text-black sm:text-lg">
                        {item.name}
                      </h4>
                      <p className="text-[11px] uppercase tracking-wider text-black sm:text-xs">
                        {item.roleOrLocation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================
            NAVIGATION CONTROLS & COUNTER
        ========================================= */}
        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          {/* Previous / Next Arrow Buttons */}
          <div className="flex items-center gap-3">
            {/* Prev Button */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5409DA]/30 bg-white/50 text-black backdrop-blur-md transition-all duration-300 hover:border-[#5409DA] hover:bg-white hover:text-[#5409DA] active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Index Indicator */}
            <div className="flex items-center gap-2 px-3 text-xs font-medium tracking-widest text-black">
              <span className="text-sm font-semibold text-black">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>

            {/* Next Button */}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5409DA]/30 bg-white/50 text-black backdrop-blur-md transition-all duration-300 hover:border-[#5409DA] hover:bg-white hover:text-[#5409DA] active:scale-95"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => handleSelect(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex
                    ? "w-7 bg-[#5409DA]"
                    : "w-2 bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
