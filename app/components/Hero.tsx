"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Dubai",
    country: "United Arab Emirates",
    description:
      "Discover a world of luxury, adventure and unforgettable experiences in the heart of the UAE.",
    image: "/destinations/dubai1.jpg",
  },
  {
    id: 2,
    name: "Maldives",
    country: "Indian Ocean",
    description:
      "Escape to crystal-clear waters, white sandy beaches and breathtaking tropical landscapes.",
    image: "/destinations/maldives1.jpg",
  },
  {
    id: 3,
    name: "Switzerland",
    country: "Europe",
    description:
      "Experience majestic mountains, peaceful lakes and charming cities in the heart of Europe.",
    image: "/destinations/switzerland1.jpg",
  },
  {
    id: 4,
    name: "Turkey",
    country: "Türkiye",
    description:
      "Explore centuries of history, rich culture, beautiful landscapes and unforgettable destinations.",
    image: "/destinations/turkey1.jpg",
  },
  {
    id: 5,
    name: "Malaysia",
    country: "Southeast Asia",
    description:
      "Discover vibrant cities, tropical islands and a perfect blend of culture and nature.",
    image: "/destinations/malaysia1.jpg",
  },
  {
    id: 6,
    name: "Paris",
    country: "France",
    description:
      "Experience the city of love, iconic landmarks, and world-class cuisine in the heart of Europe.",
    image: "/destinations/paris1.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDestination = destinations[activeIndex];

  const goToDestination = (index: number) => {
    setActiveIndex(index);
  };

  const nextDestination = () => {
    setActiveIndex((current) => (current + 1) % destinations.length);
  };

  useEffect(() => {
    const interval = setInterval(nextDestination, 6000);

    return () => clearInterval(interval);
  }, []);

  const renderCard = (destination: any, index: number, customClass: string = "") => {
    const isActive = index === activeIndex;
    return (
      <button
        key={destination.id}
        type="button"
        onClick={() => goToDestination(index)}
        className={`group relative h-[120px] w-[120px] shrink-0 text-center transition-all duration-300 sm:h-[140px] sm:w-[140px] ${customClass}`}
      >
        <div
          className={`relative h-full w-full overflow-hidden rounded-full border-2 transition-colors duration-300 flex items-center justify-center ${
            isActive
              ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              : "border-white/30 group-hover:border-white/70"
          }`}
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            sizes="140px"
            className={`object-cover transition-transform duration-700 ${
              isActive ? "scale-110" : "scale-100 group-hover:scale-105"
            }`}
          />
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isActive ? "opacity-20" : "opacity-50 group-hover:opacity-30"
            }`}
          />
          <div className="relative z-10 px-2">
            <p className="text-[12px] font-semibold tracking-widest text-white drop-shadow-md sm:text-[14px]">
              {destination.name}
            </p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-end lg:justify-center overflow-hidden bg-transparent pt-20">
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeDestination.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-[-1]"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 7,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeDestination.image}
              alt={activeDestination.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* =========================================
          MAIN LAYOUT (LEFT CARDS - CIRCLE - RIGHT CARDS)
      ========================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col items-center justify-end lg:justify-center gap-10 px-0 sm:px-6 lg:flex-row lg:gap-16 xl:gap-24 h-full flex-1">
        
        {/* Left Cards (Hidden on mobile) */}
        <div className="hidden flex-col justify-center gap-6 lg:flex">
          {destinations.slice(0, 3).map((dest, i) => {
            // Push top and bottom cards to the right to form a '(' curve
            const curveClass = i === 1 ? "" : "translate-x-12 xl:translate-x-16";
            return renderCard(dest, i, curveClass);
          })}
        </div>

        {/* Center Content (Half circle on mobile, Full circle on desktop) */}
        <div className="flex w-full flex-col items-center justify-end rounded-t-[200px] sm:rounded-t-full sm:aspect-square sm:w-[450px] lg:w-[500px] shrink-0 sm:items-center sm:justify-center sm:rounded-full border border-white/20 border-b-0 sm:border-b bg-[#FBFBFB] shadow-2xl backdrop-blur-md pb-10 pt-16 sm:p-0 mt-auto">
          {/* Center Content */}
          <div className="relative z-20 flex flex-col items-center p-6 text-center sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDestination.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Small Heading */}
                <div className="mb-3 flex items-center gap-3 sm:mb-4">
                  <span className="h-px w-6 bg-black/30 sm:w-8" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/70 sm:text-[11px]">
                    Explore The World
                  </span>
                  <span className="h-px w-6 bg-black/30 sm:w-8" />
                </div>

                {/* Destination Name */}
                <h1 className="font-serif text-5xl font-medium leading-[1] tracking-[-0.02em] text-black sm:text-6xl md:text-7xl">
                  {activeDestination.name}
                </h1>

                {/* Country */}
                <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#5409DA] font-semibold sm:mt-4 sm:text-xs">
                  {activeDestination.country}
                </p>

                {/* Description */}
                <p className="mt-4 max-w-[280px] text-xs leading-6 text-black/70 sm:mt-6 sm:max-w-[340px] sm:text-sm">
                  {activeDestination.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="relative z-30 mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="#destinations"
                className="group inline-flex items-center gap-2 rounded-full bg-[#5409DA] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#4307b2] sm:px-7 sm:py-3.5 sm:text-xs shadow-lg min-h-[44px]"
              >
                Get Details
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-transparent px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-black backdrop-blur-sm transition hover:border-[#5409DA] hover:text-[#5409DA] hover:bg-black/5 sm:px-7 sm:py-3.5 sm:text-xs min-h-[44px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Right Cards (Hidden on mobile) */}
        <div className="hidden flex-col justify-center gap-6 lg:flex">
          {destinations.slice(3, 6).map((dest, i) => {
            // Push top and bottom cards to the left to form a ')' curve
            const curveClass = i === 1 ? "" : "-translate-x-12 xl:-translate-x-16";
            return renderCard(dest, i + 3, curveClass);
          })}
        </div>
      </div>
    </section>
  );
}
