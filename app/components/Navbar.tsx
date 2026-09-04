"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Hajj & Umrah", href: "/packages?type=hajj-umrah" },
  { name: "Visa", href: "/packages?type=visa" },
  { name: "International", href: "/packages?type=international" },
  { name: "Domestic", href: "/packages?type=domestic" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav when scrolled past hero section (approx 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* =========================================
          1. PRIMARY NAVBAR (Stays at the very top of the page)
      ========================================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">
          
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/logo.png"
              alt="Travel Agency"
              width={160}
              height={55}
              priority
              className="h-auto w-[125px] object-contain md:w-[150px] brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-[13px] font-medium tracking-wide text-white transition-colors duration-300 hover:text-[#5409DA]"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#5409DA] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-colors hover:bg-white/30 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="absolute left-4 right-4 top-[95px] rounded-3xl border border-gray-200 bg-white/95 p-5 backdrop-blur-xl lg:hidden shadow-2xl"
            >
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-4 text-sm text-black transition hover:text-[#5409DA] ${
                      index !== navLinks.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


      {/* =========================================
          2. SECONDARY FLOATING NAVBAR (Shows on scroll)
      ========================================= */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.div
            initial={{ opacity: 0, y: -30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -30, x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-6 z-[100] hidden lg:block"
          >
            <nav className="flex h-11 w-[850px] items-center justify-center gap-10 rounded-full border-[1.5px] border-[#5409DA] bg-white/95 px-12 backdrop-blur-lg shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-[12px] font-bold uppercase tracking-wider text-black transition-colors duration-300 hover:text-[#5409DA]"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#5409DA] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mobile Nav toggle (optional, for mobile scroll) */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setMenuOpen(true)}
            className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#5409DA] text-white shadow-2xl lg:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

    </>
  );
}
