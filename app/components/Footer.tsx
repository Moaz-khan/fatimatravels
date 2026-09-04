"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Hajj & Umrah", href: "#hajj-umrah" },
    { label: "International Tours", href: "#international" },
    { label: "Domestic Packages", href: "#domestic" },
    { label: "Visa Assistance", href: "#visa" },
    { label: "Hotel Bookings", href: "#services" },
  ],
  Destinations: [
    { label: "Saudi Arabia", href: "#international" },
    { label: "Dubai & UAE", href: "#international" },
    { label: "Turkey", href: "#international" },
    { label: "Maldives", href: "#international" },
    { label: "Northern Pakistan", href: "#domestic" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  "Contact Us": [
    { label: "+92 300 123 4567", href: "tel:+923001234567" },
    { label: "info@fatimatravels.pk", href: "mailto:info@fatimatravels.pk" },
    { label: "Send a Message", href: "#contact" },
  ],
  "Social Media": [
    { label: "WhatsApp", href: "https://wa.me/923001234567" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-[#5409DA]/30 backdrop-blur-md text-black">
      {/* Background Logo Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <Image
          src="/logo.png"
          alt="Fatima Travels Background"
          width={800}
          height={800}
          className="object-contain w-[50%] h-auto"
        />
      </div>

      {/* Main Grid */}
      <div className="relative z-10 mx-auto max-w-[1300px] px-6 py-16 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5">
          {/* ── Link Columns ── */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-black transition-colors hover:text-[#5409DA]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-gray-200">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-3 px-6 py-5 text-center md:flex-row md:px-10 lg:px-14">
          <p className="text-xs text-black">
            &copy; {currentYear} Fatima Travels. All rights reserved.
          </p>
          <p className="text-xs text-black">
            Registered Travel Agency &middot; IATA Affiliated &middot; Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
