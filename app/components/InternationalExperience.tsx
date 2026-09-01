"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PackageItem {
  id: number;
  title: string;
  country: string;
  category: "all" | "family" | "couples" | "luxury" | "popular";
  duration: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  tag?: string;
  inclusions: string[];
  description: string;
}

const packages: PackageItem[] = [
  {
    id: 1,
    title: "Dubai Luxury & Desert Safari",
    country: "United Arab Emirates",
    category: "popular",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 142,
    price: "PKR 185,000",
    image: "/destinations/dubai.jpg",
    tag: "Best Seller",
    description:
      "Experience the pinnacle of modernity with Burj Khalifa access, luxury Marina dhow cruise, and premium red dune desert safari.",
    inclusions: ["4-Star Hotel", "Daily Breakfast", "Desert Safari", "Marina Cruise", "Visa Assistance"],
  },
  {
    id: 2,
    title: "Enchanting Turkey & Cappadocia",
    country: "Türkiye",
    category: "couples",
    duration: "7 Days / 6 Nights",
    rating: 4.95,
    reviews: 98,
    price: "PKR 295,000",
    image: "/destinations/turkey.jpg",
    tag: "Trending",
    description:
      "Explore historic Istanbul mosques, Bosphorus yacht tours, and the magical fairy chimneys of Cappadocia with sunrise hot air ballooning.",
    inclusions: ["4-Star / Boutique Hotel", "Domestic Flights", "Bosphorus Cruise", "Cappadocia Tour", "Airport Transfers"],
  },
  {
    id: 3,
    title: "Maldives Private Island Retreat",
    country: "Indian Ocean",
    category: "luxury",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    reviews: 76,
    price: "PKR 430,000",
    image: "/destinations/maldives.jpg",
    tag: "Honeymoon Special",
    description:
      "Pure romantic bliss in an overwater villa, surrounded by turquoise lagoons, coral reefs, private dining, and luxury speedboat transfers.",
    inclusions: ["Overwater Villa", "All Inclusive Meals", "Speedboat Transfer", "Snorkeling Tour", "Free Visa on Arrival"],
  },
  {
    id: 4,
    title: "Malaysia & Langkawi Island Hopping",
    country: "Southeast Asia",
    category: "family",
    duration: "6 Days / 5 Nights",
    rating: 4.85,
    reviews: 110,
    price: "PKR 225,000",
    image: "/destinations/malaysia.jpg",
    tag: "Family Favorite",
    description:
      "A vibrant family vacation featuring Kuala Lumpur's iconic towers, Sunway Lagoon theme park, and the serene beaches of Langkawi.",
    inclusions: ["4-Star Hotels", "Daily Breakfast", "City Tour & Cable Car", "Island Hopping", "E-Visa Processing"],
  },
  {
    id: 5,
    title: "Majestic Switzerland & Alpine Peaks",
    country: "Europe",
    category: "luxury",
    duration: "8 Days / 7 Nights",
    rating: 4.98,
    reviews: 64,
    price: "PKR 650,000",
    image: "/destinations/switzerland.jpg",
    tag: "Premium Grand Tour",
    description:
      "Snow-capped Alpine panoramas, Mount Titlis revolving cable cars, scenic Swiss rail journeys, and sparkling Lake Lucerne.",
    inclusions: ["Luxury Alpine Hotels", "Swiss Travel Pass", "Mount Titlis Excursion", "Breakfast Included", "Schengen Visa Guidance"],
  },
];

const filterCategories = [
  { label: "All Packages", value: "all" },
  { label: "Popular", value: "popular" },
  { label: "Family Friendly", value: "family" },
  { label: "Couples & Honeymoon", value: "couples" },
  { label: "Luxury Escapes", value: "luxury" },
];

export default function InternationalExperience() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages =
    activeFilter === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === activeFilter);

  return (
    <section
      id="international"
      className="relative bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white md:py-32"
    >
      {/* Background Decorative Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-emerald-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-[350px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        
        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline */}
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-white/40" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/75">
              International Packages
            </span>
            <span className="h-px w-8 bg-white/40" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15]">
            Unforgettable international travel experiences
          </h2>

          {/* Subheading */}
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
            Browse our list of holiday packages that is perfect for family, friends and couples that are looking for affordable holiday packages from Pakistan.
          </p>
        </div>

        {/* =========================================
            CATEGORY FILTERS
        ========================================= */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:mt-12 md:gap-3">
          {filterCategories.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-medium tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg shadow-white/10 font-semibold"
                    : "border border-white/15 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =========================================
            PACKAGE CARDS GRID (INCLUDING TAILORED VACATIONS CARD)
        ========================================= */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {/* Standard Packages */}
            {filteredPackages.map((pkg) => {
              const whatsappInquiryUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
                `Hello Fatima Travels! I am interested in booking the "${pkg.title}" (${pkg.country}) package for ${pkg.duration}. Please share complete details.`
              )}`;

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                      {pkg.tag ? (
                        <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-md">
                          {pkg.tag}
                        </span>
                      ) : <span />}

                      {/* Duration Badge */}
                      <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      <span className="text-amber-400">★</span>
                      <span>{pkg.rating}</span>
                      <span className="text-[10px] text-white/60">({pkg.reviews})</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Country */}
                    <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
                      {pkg.country}
                    </p>

                    {/* Package Title */}
                    <h3 className="mt-1.5 font-serif text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {pkg.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-white/70">
                      {pkg.description}
                    </p>

                    {/* Inclusions / Highlights */}
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                      {pkg.inclusions.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/80"
                        >
                          <span className="text-emerald-400">✓</span> {item}
                        </span>
                      ))}
                      {pkg.inclusions.length > 3 && (
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/50">
                          +{pkg.inclusions.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-auto pt-6 flex items-center justify-between gap-3 border-t border-white/10">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-white/50">
                          Starting From
                        </span>
                        <span className="text-lg font-bold text-white tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-[10px] text-white/50"> /person</span>
                      </div>

                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                      >
                        Inquire Now
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Custom Tour / Tailored Vacations Package Card */}
            {(activeFilter === "all" || activeFilter === "luxury") && (
              <motion.div
                key="tailored-custom-card"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-zinc-900/70 to-zinc-950 backdrop-blur-md p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Tailored Vacations
                    </span>

                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/80">
                      Worldwide
                    </span>
                  </div>

                  {/* Destination Kicker */}
                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-400">
                    Customized Itinerary
                  </p>

                  {/* Title */}
                  <h3 className="mt-1.5 font-serif text-2xl font-medium text-white transition-colors group-hover:text-emerald-300">
                    Need a Custom International Tour Plan?
                  </h3>

                  {/* Subheading / Description */}
                  <p className="mt-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                    Get a customized itinerary tailored specifically for your group size, budget, travel dates, and preferred destinations from Pakistan.
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                    {[
                      "Any Destination Worldwide",
                      "Custom Dates & Duration",
                      "Budget Flexibility",
                      "Dedicated Visa Expert",
                    ].map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200"
                      >
                        <span className="text-emerald-400">✓</span> {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Action */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-white/50">
                      Pricing Model
                    </span>
                    <span className="text-base font-bold text-emerald-300">
                      Tailor-Made
                    </span>
                  </div>

                  <a
                    href="https://wa.me/923001234567?text=Hello%20Fatima%20Travels!%20I%20want%20to%20design%20a%20customized%20international%20tour%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-emerald-400 hover:text-black hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
                  >
                    Request Quote
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* =========================================
            VIEW ALL PACKAGES BUTTON
        ========================================= */}
        <div className="mt-12 flex justify-center md:mt-14">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
          >
            <span>View All Packages</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
