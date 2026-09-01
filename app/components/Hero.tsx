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
    image: "/destinations/dubai.jpg",
  },
  {
    id: 2,
    name: "Maldives",
    country: "Indian Ocean",
    description:
      "Escape to crystal-clear waters, white sandy beaches and breathtaking tropical landscapes.",
    image: "/destinations/maldives.jpg",
  },
  {
    id: 3,
    name: "Switzerland",
    country: "Europe",
    description:
      "Experience majestic mountains, peaceful lakes and charming cities in the heart of Europe.",
    image: "/destinations/switzerland.jpg",
  },
  {
    id: 4,
    name: "Turkey",
    country: "Türkiye",
    description:
      "Explore centuries of history, rich culture, beautiful landscapes and unforgettable destinations.",
    image: "/destinations/turkey.jpg",
  },
  {
    id: 5,
    name: "Malaysia",
    country: "Southeast Asia",
    description:
      "Discover vibrant cities, tropical islands and a perfect blend of culture and nature.",
    image: "/destinations/malaysia.jpg",
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

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

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
          className="absolute inset-0"
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
          OVERLAYS
      ========================================= */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/90 to-transparent" />

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-56 pt-32 md:px-10 lg:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDestination.id}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-white/70" />

              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
                Explore The World
              </span>
            </div>

            {/* Destination Name */}
            <h1 className="font-serif text-6xl font-medium leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[105px]">
              {activeDestination.name}
            </h1>

            {/* Country */}
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/70 md:text-sm">
              {activeDestination.country}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 md:text-base">
              {activeDestination.description}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#destinations"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-white/90"
              >
                Get Details

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================
          DESTINATION CARDS
      ========================================= */}

      <div className="absolute bottom-7 right-0 z-20 w-full md:bottom-10">
        <div className="mx-auto flex max-w-[1500px] justify-end px-6 md:px-10 lg:px-14">
          <div className="w-full md:w-auto">

            {/* Carousel Header */}
            <div className="mb-3 flex items-center justify-between md:justify-end md:gap-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                  Destinations
                </span>

                <span className="h-px w-8 bg-white/30" />
              </div>

              <div className="text-xs text-white/60">
                <span className="text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                {" / "}

                {String(destinations.length).padStart(2, "0")}
              </div>
            </div>

            {/* Cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide md:max-w-[760px]">
              {destinations.map((destination, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={destination.id}
                    type="button"
                    onClick={() => goToDestination(index)}
                    className="group shrink-0 text-left"
                  >
                    <motion.div
                      animate={{
                        width: isActive ? 205 : 155,
                        height: isActive ? 135 : 110,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        sizes="220px"
                        className={`object-cover transition duration-700 ${
                          isActive
                            ? "scale-105"
                            : "scale-100 group-hover:scale-105"
                        }`}
                      />

                      {/* Card Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                      {/* Border */}
                      <div
                        className={`absolute inset-0 rounded-xl border transition ${
                          isActive
                            ? "border-white/80"
                            : "border-white/10 group-hover:border-white/40"
                        }`}
                      />

                      {/* Card Content */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-sm font-medium text-white">
                          {destination.name}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/50">
                          {destination.country}
                        </p>
                      </div>
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

