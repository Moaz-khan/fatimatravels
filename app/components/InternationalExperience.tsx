"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

export interface IntlPackageItem {
  _id: string;
  title: string;
  country: string;
  subCategory: string[];
  duration: string;
  rating: number;
  reviews: number;
  price: string;
  image: any;
  tag?: string;
  includes: string[];
  description: any;
}

const filterCategories = [
  { label: "All Packages", value: "all" },
  { label: "Popular", value: "popular" },
  { label: "Family Friendly", value: "family" },
  { label: "Couples & Honeymoon", value: "couples" },
  { label: "Luxury Escapes", value: "luxury" },
];

export default function InternationalExperience({ packages }: { packages: IntlPackageItem[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPackages =
    activeFilter === "all"
      ? packages
      : packages.filter((pkg) => pkg.subCategory?.includes(activeFilter));

  return (
    <section
      id="international"
      className="relative bg-transparent py-24 text-white md:py-32"
    >
      {/* Background Decorative Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[700px] rounded-full bg-emerald-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-[350px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

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
            <span className="h-px w-8 bg-gray-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-black">
              International Packages
            </span>
            <span className="h-px w-8 bg-gray-400" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15]">
            Unforgettable international travel experiences
          </h2>

          {/* Subheading */}
          <p className="mt-5 text-sm leading-relaxed text-black sm:text-base md:text-lg">
            Browse our list of holiday packages that is perfect for family, friends and couples that are looking for affordable holiday packages from Pakistan.
          </p>
        </motion.div>

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
                    ? "bg-[#5409DA] text-white shadow-lg font-semibold"
                    : "border border-gray-300 bg-white/50 text-black hover:border-[#5409DA] hover:bg-blue-50/50 hover:text-[#5409DA]"
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
            {filteredPackages.map((pkg, idx) => {
              const whatsappInquiryUrl = `https://wa.me/923082731644?text=${encodeURIComponent(
                `Hello Fatima Travels! I am interested in booking the "${pkg.title}" (${pkg.country}) package for ${pkg.duration}. Please share complete details.`
              )}`;

              return (
                <motion.div
                  key={pkg._id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#5409DA]/50 hover:bg-white/70 hover:shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={pkg.image?.asset ? urlForImage(pkg.image).url() : (typeof pkg.image === 'string' ? pkg.image : "/destinations/dubai1.jpg")}
                      alt={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Top Badges */}
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
                      {pkg.tag ? (
                        <span className="rounded-full bg-blue-100/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5409DA] border border-[#5409DA]/30 backdrop-blur-md">
                          {pkg.tag}
                        </span>
                      ) : <span />}

                      {/* Duration Badge */}
                      <span className="rounded-full border border-gray-300 bg-white/70 px-3 py-1 text-[11px] font-medium text-black backdrop-blur-md">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 rounded-md bg-white/80 px-2.5 py-1 text-xs font-semibold text-black border border-gray-200 backdrop-blur-md">
                      <span className="text-[#5409DA]">★</span>
                      <span>{pkg.rating}</span>
                      <span className="text-[10px] text-black">({pkg.reviews})</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Country */}
                    <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black">
                      {pkg.country}
                    </p>

                    {/* Package Title */}
                    <h3 className="mt-1.5 font-serif text-xl font-medium text-black group-hover:text-[#5409DA] transition-colors">
                      {pkg.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-black">
                      {typeof pkg.description === 'string' ? pkg.description : pkg.description?.[0]?.children?.[0]?.text || ''}
                    </p>

                    {/* Inclusions / Highlights */}
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-gray-200 pt-4">
                      {pkg.includes?.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-md border border-[#5409DA]/20 bg-blue-50/50 px-2 py-0.5 text-[10px] text-black"
                        >
                          <span className="text-[#5409DA]">✓</span> {item}
                        </span>
                      ))}
                      {(pkg.includes?.length || 0) > 3 && (
                        <span className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] text-black">
                          +{(pkg.includes?.length || 0) - 3} more
                        </span>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-auto pt-6 flex items-center justify-between gap-3 border-t border-gray-200">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-black">
                          Starting From
                        </span>
                        <span className="text-lg font-bold text-black tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-[10px] text-black"> /person</span>
                      </div>

                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white border border-[#5409DA] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-blue-50"
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-200 bg-white/70 backdrop-blur-md p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#5409DA]/50 hover:shadow-lg"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[#5409DA]/30 bg-blue-100/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5409DA]">
                      Tailored Vacations
                    </span>

                    <span className="rounded-full border border-gray-300 bg-white/50 px-3 py-1 text-[10px] uppercase tracking-wider text-black">
                      Worldwide
                    </span>
                  </div>

                  {/* Destination Kicker */}
                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#5409DA]">
                    Customized Itinerary
                  </p>

                  {/* Title */}
                  <h3 className="mt-1.5 font-serif text-2xl font-medium text-black transition-colors group-hover:text-[#5409DA]">
                    Need a Custom International Tour Plan?
                  </h3>

                  {/* Subheading / Description */}
                  <p className="mt-3 text-xs leading-relaxed text-black sm:text-sm">
                    Get a customized itinerary tailored specifically for your group size, budget, travel dates, and preferred destinations from Pakistan.
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-gray-200 pt-4">
                    {[
                      "Any Destination Worldwide",
                      "Custom Dates & Duration",
                      "Budget Flexibility",
                      "Dedicated Visa Expert",
                    ].map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md border border-[#5409DA]/20 bg-blue-50/50 px-2 py-0.5 text-[10px] text-black"
                      >
                        <span className="text-[#5409DA]">✓</span> {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Action */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-5">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-black">
                      Pricing Model
                    </span>
                    <span className="text-base font-bold text-[#5409DA]">
                      Tailor-Made
                    </span>
                  </div>

                  <a
                    href="https://wa.me/923082731644?text=Hello%20Fatima%20Travels!%20I%20want%20to%20design%20a%20customized%20international%20tour%20package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#5409DA] bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-blue-50 hover:text-[#5409DA] active:scale-95"
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
            className="group inline-flex items-center gap-3 rounded-full border border-[#5409DA] bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black backdrop-blur-md transition-all duration-300 hover:bg-gray-50 hover:shadow-lg active:scale-95"
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
