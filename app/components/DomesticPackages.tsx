"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

export interface DomesticPackage {
  _id: string;
  title: string;
  location: string;
  tag: string;
  duration: string;
  rating: number;
  price: string;
  image: any;
  includes: string[];
}

export default function DomesticPackages({ packages }: { packages: DomesticPackage[] }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="domestic"
      className="relative bg-transparent py-20 text-white md:py-28"
    >
      {/* Subtle Glow Lighting */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        
        {/* =========================================
            HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3.5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gray-400" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#5409DA]">
              Domestic Expeditions
            </span>
            <span className="h-px w-8 bg-gray-400" />
          </div>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[1.15]">
            Discover the Majestic Beauty of Pakistan
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
            From the snow-crowned peaks of Hunza and Skardu to the serene waters of Gwadar — immerse yourself in breathtaking domestic getaways.
          </p>
        </motion.div>

        {/* =========================================
            CLEAN COMPACT BENTO GRID
        ========================================= */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          
          {packages.map((pkg, index) => {
              // Re-assign colSpan and heightClass based on index since it's dynamic now
              const colSpan = index === 0 ? "md:col-span-2 md:row-span-2" : (index === 4 ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1");
              const heightClass = index === 0 ? "h-[400px] md:h-full" : "h-[300px]";
              
              return (
              <motion.div
                key={pkg._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(pkg._id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative overflow-hidden rounded-2xl bg-gray-900 ${colSpan} ${heightClass}`}
              >
                {/* Background Image */}
                <Image
                  src={pkg.image?.asset ? urlForImage(pkg.image).url() : (typeof pkg.image === 'string' ? pkg.image : "/destinations/dubai1.jpg")}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Top Floating Badges */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2 sm:left-5 sm:top-5">
                  <span className="rounded-full border border-[#5409DA]/30 bg-blue-100/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#5409DA] backdrop-blur-md">
                    {pkg.tag}
                  </span>

                  <span className="rounded-full border border-gray-300 bg-white/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-black backdrop-blur-md">
                    {pkg.duration}
                  </span>
                </div>

                {/* Bottom Content Floating Over Card */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  {/* Location kicker */}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
                    {pkg.location}
                  </p>

                  {/* Title */}
                  <h3 className="mt-1 font-serif text-xl font-medium text-black transition-colors group-hover:text-[#5409DA] sm:text-2xl">
                    {pkg.title}
                  </h3>

                  {/* Highlights Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {pkg.includes?.map((h, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-[#5409DA]/20 bg-blue-50/50 px-2 py-0.5 text-[10px] text-black backdrop-blur-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-black">From </span>
                      <span className="text-base font-bold text-black tracking-tight sm:text-lg">
                        {pkg.price}
                      </span>
                      <span className="text-[10px] text-black"> /person</span>
                    </div>

                    <a
                      href={`https://wa.me/923082731644?text=${encodeURIComponent(`Hello Fatima Travels! I want to inquire about the Domestic Tour: "${pkg.title}" (${pkg.location}) - ${pkg.duration}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#5409DA] px-4 py-2.5 min-h-11 text-xs font-semibold uppercase tracking-wider text-black shadow-sm transition-all duration-300 hover:bg-gray-50 active:scale-95"
                    >
                      <span>Book</span>
                      <span className="text-xs">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Bento Box 7: Custom Tour CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: packages.length * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-blue-200 bg-blue-50/30 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#5409DA]/50 hover:shadow-lg col-span-1 md:col-span-1 lg:col-span-1 h-[320px] sm:h-[340px]"
          >
            <div>
              <span className="inline-flex rounded-full border border-[#5409DA]/30 bg-blue-100/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5409DA]">
                Tailored Trips
              </span>

              <h4 className="mt-3 font-serif text-2xl font-medium text-black sm:text-2xl group-hover:text-[#5409DA] transition-colors">
                Custom Family or Group Tour?
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-black">
                Need a private Prado, Hiace, luxury resort booking, or custom dates from Islamabad, Lahore, or Karachi?
              </p>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <a
                href="https://wa.me/923082731644?text=Hello%20Fatima%20Travels!%20I%20want%20to%20plan%20a%20customized%20domestic%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-white border border-[#5409DA] py-3 text-xs font-semibold uppercase tracking-wider text-black backdrop-blur-md transition-all duration-300 hover:bg-blue-50 hover:text-[#5409DA] active:scale-95"
              >
                <span>Plan Custom Tour</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
