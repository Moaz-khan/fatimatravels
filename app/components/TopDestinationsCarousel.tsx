"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationCard {
  id: number;
  name: string;
  country: string;
  category: string;
  tagline: string;
  bestSeason: string;
  image: string;
  description: string;
  highlights: string[];
}

const destinations: DestinationCard[] = [
  {
    id: 1,
    name: "Dubai",
    country: "United Arab Emirates",
    category: "Futuristic Wonder",
    tagline: "Sky-high wonders, golden dunes and royal luxury",
    bestSeason: "Nov – Apr",
    image: "/destinations/dubai1.jpg",
    description: "From the world's tallest skyscraper to thrilling desert safaris and Arabian Gulf cruises.",
    highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah", "Dubai Mall"],
  },
  {
    id: 2,
    name: "Santorini",
    country: "Greece",
    category: "Aegean Paradise",
    tagline: "Whitewashed cliffs, cobalt blue domes and sunset vistas",
    bestSeason: "May – Oct",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    description: "The crown jewel of the Cyclades, famous for iconic cliffside villages and volcanic beaches.",
    highlights: ["Oia Sunsets", "Caldera Cruise", "Fira Town", "Red Beach"],
  },
  {
    id: 3,
    name: "Maldives",
    country: "Indian Ocean",
    category: "Tropical Sanctuary",
    tagline: "Crystal lagoons, coral atolls and private overwater villas",
    bestSeason: "Dec – Apr",
    image: "/destinations/maldives1.jpg",
    description: "An idyllic archipelago offering unrivaled serenity, vibrant marine life, and pure ocean luxury.",
    highlights: ["Overwater Villas", "Manta Ray Safari", "Underwater Dining", "Sunset Fishing"],
  },
  {
    id: 4,
    name: "Kyoto & Tokyo",
    country: "Japan",
    category: "Timeless Heritage",
    tagline: "Ancient shrines, cherry blossoms and neon-lit avenues",
    bestSeason: "Mar – May / Oct – Nov",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    description: "A breathtaking harmony between thousand-year-old temples and futuristic cityscapes.",
    highlights: ["Fushimi Inari", "Arashiyama Grove", "Mount Fuji", "Shibuya Crossing"],
  },
  {
    id: 5,
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Alpine Majesty",
    tagline: "Snowcapped peaks, glacial lakes and panoramic train rides",
    bestSeason: "All Year Round",
    image: "/destinations/switzerland1.jpg",
    description: "Pure alpine magic with snow-draped chalets, scenic glacier express railways, and sparkling lakes.",
    highlights: ["Mount Titlis", "Jungfraujoch", "Lake Lucerne", "Interlaken"],
  },
  {
    id: 6,
    name: "Cappadocia",
    country: "Türkiye",
    category: "Fairy Chimney Wonderland",
    tagline: "Sunrise hot air balloons soaring over ancient cave valleys",
    bestSeason: "Apr – Oct",
    image: "/destinations/turkey1.jpg",
    description: "A surreal landscape of carved rock churches, subterranean cities, and hot air balloon skies.",
    highlights: ["Hot Air Balloon", "Goreme Open Air", "Cave Suites", "Ihlara Valley"],
  },
  {
    id: 7,
    name: "Bali",
    country: "Indonesia",
    category: "Island of the Gods",
    tagline: "Lush emerald terraces, sacred temples and surf beaches",
    bestSeason: "Apr – Oct",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    description: "A spiritual sanctuary blending tropical rainforests, cliffside temples, and vibrant coastal culture.",
    highlights: ["Ubud Terraces", "Tanah Lot", "Nusa Penida", "Seminyak Sunsets"],
  },
  {
    id: 8,
    name: "Kuala Lumpur",
    country: "Malaysia",
    category: "Tropical Metropolis",
    tagline: "Petronas twin towers, vibrant culture and rainforest getaways",
    bestSeason: "Nov – Aug",
    image: "/destinations/malaysia1.jpg",
    description: "Dynamic city life surrounded by lush tropical nature, iconic towers, and world-class street food.",
    highlights: ["Petronas Towers", "Batu Caves", "Langkawi Island", "Genting Highlands"],
  },
];

const AUTO_PLAY_DURATION = 5000; // 5 seconds per slide

export default function TopDestinationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(500);
  const [containerWidth, setContainerWidth] = useState(1200);

  const containerRef = useRef<HTMLDivElement>(null);
  const total = destinations.length;
  const cardGap = 24; // Gap between cards in px

  // Measure container and card size responsively
  const updateDimensions = useCallback(() => {
    if (typeof window === "undefined") return;
    const screenW = window.innerWidth;
    if (screenW < 640) {
      setCardWidth(Math.min(screenW * 0.8, 300)); // Make mobile cards smaller
    } else if (screenW < 1024) {
      setCardWidth(380);
    } else {
      setCardWidth(480);
    }

    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    } else {
      setContainerWidth(screenW);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  // Navigation functions - purely increment/decrement 1 card at a time
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Autoplay timer - pauses when hovered or paused manually
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, total]);

  // Center active card in track
  const centerOffset = (containerWidth - cardWidth) / 2;
  const translateX = centerOffset - activeIndex * (cardWidth + cardGap);

  return (
    <section className="relative overflow-hidden bg-transparent py-24 text-white md:py-32">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[550px] w-[550px] rounded-full bg-amber-500/[0.04] blur-[150px]" />

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        
        {/* =========================================
            HEADER
        ========================================= */}
        {/* =========================================
            HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gray-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-black">
              Worldwide Explorations
            </span>
            <span className="h-px w-8 bg-gray-400" />
          </div>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12]">
            Top destinations in the world
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-black sm:text-base md:text-lg">
            Unveiling extraordinary destinations and unforgettable adventures
          </p>
        </motion.div>
      </div>

      {/* =========================================
          APPLE CAROUSEL VIEWPORT & TRACK
      ========================================= */}
      <div
        ref={containerRef}
        className="relative mt-12 w-full overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ x: translateX }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            mass: 0.8,
          }}
          className="flex"
          style={{
            gap: `${cardGap}px`,
          }}
        >
          {destinations.map((destination, index) => {
            const isActive = index === activeIndex;
            const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
              `Hello Fatima Travels! I am interested in exploring holiday packages for "${destination.name}, ${destination.country}". Please share itinerary and prices.`
            )}`;

            return (
              <motion.div
                key={destination.id}
                onClick={() => goToSlide(index)}
                animate={{
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.55,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  width: `${cardWidth}px`,
                  flexShrink: 0,
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-[28px] border transition-shadow duration-500 sm:rounded-[36px] bg-blue-50/40 backdrop-blur-md ${
                  isActive
                    ? "border-[#5409DA] ring-1 ring-[#5409DA]/20"
                    : "border-gray-200 hover:border-[#5409DA]/50 hover:opacity-80"
                }`}
              >
                {/* Card Container */}
                <div className="relative h-[400px] w-full sm:h-[480px] md:h-[540px]">
                  {/* Background Photo */}
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 480px"
                    priority={index === 0 || index === 1}
                    className={`object-cover transition-transform duration-1000 ease-out ${
                      isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                    }`}
                  />

                  {/* Top Badges */}
                  <div className="absolute left-4 right-4 top-4 flex flex-col items-start gap-2 sm:left-6 sm:top-6 sm:flex-row sm:items-center sm:justify-between">
                    <span className="inline-flex items-center rounded-full border border-[#5409DA]/30 bg-blue-100/50 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider text-black backdrop-blur-md">
                      {destination.category}
                    </span>

                    <span className="inline-flex items-center rounded-full border border-gray-300 bg-white/50 px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-widest text-black backdrop-blur-md">
                      Best: {destination.bestSeason}
                    </span>
                  </div>

                  {/* Bottom Content (Half Circle) */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center p-4 sm:p-6 pt-8 sm:pt-10 bg-white/95 backdrop-blur-lg rounded-t-[100px] sm:rounded-t-[140px] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-all duration-500">
                    {/* Country */}
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5409DA]">
                      {destination.country}
                    </p>

                    {/* Destination Title */}
                    <h3 className="mt-1 font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl">
                      {destination.name}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-2 text-xs font-medium text-gray-800 sm:text-sm">
                      {destination.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 max-w-sm text-xs leading-relaxed text-gray-600">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-xs">
                      {destination.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[10px] text-gray-700"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 flex w-full max-w-xs items-center justify-between pt-2">
                      <span className="text-xs font-medium tracking-widest text-gray-400">
                        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </span>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2.5 rounded-full bg-[#5409DA] border border-[#5409DA] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#4307b2] active:scale-95 shadow-md hover:shadow-lg"
                      >
                        <span>Explore</span>
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* =========================================
          PAGINATION BAR WITH LEFT/RIGHT & PLAY/PAUSE CONTROLS
      ========================================= */}
      <div className="mx-auto mt-8 flex max-w-[1500px] flex-wrap items-center justify-center gap-3.5 px-6 md:mt-10 md:gap-5">
        {/* Prev Slide Button */}
        <button
          type="button"
          aria-label="Previous destination"
          onClick={prevSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5409DA]/30 bg-white/50 text-black backdrop-blur-md transition-all duration-300 hover:border-[#5409DA] hover:bg-white hover:text-[#5409DA] active:scale-95"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Apple-style Segmented Pagination Indicators */}
        <div className="flex items-center gap-2">
          {destinations.map((dest, i) => {
            const isActive = i === activeIndex;

            return (
              <button
                key={dest.id}
                type="button"
                aria-label={`Go to slide ${i + 1} - ${dest.name}`}
                onClick={() => goToSlide(i)}
                className="group relative h-2 overflow-hidden rounded-full transition-all duration-500"
                style={{
                  width: isActive ? "56px" : "14px",
                  backgroundColor: "rgba(84, 9, 218, 0.2)",
                }}
              >
                {/* Apple-style animated progress fill */}
                {isActive && (
                  <motion.div
                    key={`${activeIndex}-${isPlaying && !isHovered}`}
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying && !isHovered ? "100%" : "0%" }}
                    transition={{
                      duration: isPlaying && !isHovered ? AUTO_PLAY_DURATION / 1000 : 0,
                      ease: "linear",
                    }}
                    className="h-full rounded-full bg-[#5409DA]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Next Slide Button */}
        <button
          type="button"
          aria-label="Next destination"
          onClick={nextSlide}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5409DA]/30 bg-white/50 text-black backdrop-blur-md transition-all duration-300 hover:border-[#5409DA] hover:bg-white hover:text-[#5409DA] active:scale-95"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Play / Pause Toggle Button */}
        <button
          type="button"
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          onClick={() => setIsPlaying((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5409DA]/30 bg-white/50 text-black backdrop-blur-md transition-all duration-300 hover:border-[#5409DA] hover:bg-white hover:text-[#5409DA] active:scale-95"
        >
          {isPlaying && !isHovered ? (
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
