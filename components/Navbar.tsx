"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Reservaciones", href: "#reservaciones" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo */}
          <Link href="#" className="flex-shrink-0">
            <div
              className={`relative transition-all duration-500 ${
                scrolled ? "bg-transparent" : "bg-white/90 rounded-lg px-2 py-1"
              }`}
            >
              <Image
                src="/images/logo.jpg"
                alt="Club Deportivo Cumbres"
                width={140}
                height={52}
                className="object-contain h-11 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  scrolled
                    ? "text-charcoal hover:text-green-dark"
                    : "text-white hover:text-lime"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden flex flex-col pt-20 px-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 text-charcoal"
              >
                <X size={22} />
              </button>

              <div className="mb-8">
                <Image
                  src="/images/logo.jpg"
                  alt="Club Deportivo Cumbres"
                  width={120}
                  height={44}
                  className="object-contain h-10 w-auto"
                />
              </div>

              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    onClick={() => setOpen(false)}
                    className="py-4 text-lg font-medium text-charcoal border-b border-border hover:text-green-dark transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
