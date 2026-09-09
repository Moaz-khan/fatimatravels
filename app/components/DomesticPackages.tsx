"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface DomesticPackage {
  id: string;
  title: string;
  location: string;
  tag: string;
  duration: string;
  rating: number;
  price: string;
  image: string;
  highlights: string[];
  colSpan: string;
  heightClass: string;
}

const packages: DomesticPackage[] = [
  {
    id: "hunza",
    title: "Hunza Valley & Attabad Lake",
    location: "Gilgit-Baltistan",
    tag: "Most Popular",
    duration: "6D / 5N",
    rating: 4.98,
    price: "PKR 65,000",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Attabad Boating", "Passu Cones", "Baltit Fort", "Khunjerab Pass"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    heightClass: "h-[340px] sm:h-[370px]",
  },
  {
    id: "skardu",
    title: "Skardu & Deosai Plains",
    location: "Baltistan",
    tag: "Land of Giants",
    duration: "7D / 6N",
    rating: 4.95,
    price: "PKR 85,000",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Shangrila Resort", "Cold Desert", "Deosai Plateau"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    heightClass: "h-[340px] sm:h-[370px]",
  },
  {
    id: "swat",
    title: "Swat & Malam Jabba Ski",
    location: "Khyber Pakhtunkhwa",
    tag: "Scenic Valley",
    duration: "4D / 3N",
    rating: 4.89,
    price: "PKR 45,000",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Malam Jabba Ski", "Mahodand Lake", "Ushu Forest"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    heightClass: "h-[320px] sm:h-[350px]",
  },
  {
    id: "neelum",
    title: "Neelum Valley & Arang Kel",
    location: "Azad Kashmir",
    tag: "Paradise",
    duration: "5D / 4N",
    rating: 4.92,
    price: "PKR 52,000",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Arang Kel Cable Car", "Kutton Waterfall", "Keran"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    heightClass: "h-[320px] sm:h-[350px]",
  },
  {
    id: "fairy-meadows",
    title: "Fairy Meadows & Nanga Parbat",
    location: "Diamer, Gilgit",
    tag: "Adventure Trek",
    duration: "5D / 4N",
    rating: 4.97,
    price: "PKR 58,000",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    highlights: ["4x4 Jeep Safari", "Camp Under Stars", "Base Camp View"],
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    heightClass: "h-[320px] sm:h-[350px]",
  },
  {
    id: "gwadar",
    title: "Gwadar & Makran Coastal Highway",
    location: "Balochistan Coast",
    tag: "Golden Beaches",
    duration: "4D / 3N",
    rating: 4.88,
    price: "PKR 48,000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    highlights: ["Kund Malir Beach", "Princess of Hope", "Hammerhead Sunset"],
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    heightClass: "h-[320px] sm:h-[340px]",
  },
];

export default function DomesticPackages() {
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
          
          {/* Bento Destination Cards */}
          {packages.map((pkg, idx) => {
            const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(
              `Hello Fatima Travels! I want to inquire about the Domestic Tour: "${pkg.title}" (${pkg.location}) - ${pkg.duration}.`
            )}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#5409DA]/50 hover:shadow-lg hover:bg-white/70 ${pkg.colSpan} ${pkg.heightClass}`}
              >
                {/* Full-bleed Photo */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                    {pkg.highlights.map((h, i) => (
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
                      href={whatsappUrl}
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
                href="https://wa.me/923001234567?text=Hello%20Fatima%20Travels!%20I%20want%20to%20plan%20a%20customized%20domestic%20tour%20package."
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
